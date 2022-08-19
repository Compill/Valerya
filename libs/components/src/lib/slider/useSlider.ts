import { useBoolean, useCallbackRef, useComponentDimensions, useControllableState, useIds, usePanGesture, useUpdateEffect } from "@katia/core";
import { EventKeyMap, mergeRefs, PropGetter, ReactRef } from "@katia/react-utils";
import { AnyPointerEvent, callAllHandlers, clampValue, getBox, normalizeEventKey, percentToValue, roundValueToStep, valueToPercent } from "@katia/utils";
import { SoperioComponent, useDirection } from "@soperio/react";
import React from "react";
import { getIsReversed, getStyles, orient } from "./sliderUtils";

export interface UseSliderProps
{
    min?: number,
    max?: number,
    step?: number,
    value?: number,
    defaultValue?: number,
    onChange?(value: number): any,
    onChangeStart?(value: number): any,
    onChangeEnd?(value: number): any,
    id?: string,
    name?: string,
    isDisabled?: boolean,
    isReadOnly?: boolean,
    isReversed?: boolean,
    orientation?: "horizontal" | "vertical",
    focusThumbOnChange?: boolean
}

export function useSlider({
    min = 0,
    max = 100,
    step = 1,
    value: valueProp,
    defaultValue,
    onChange: onChangeProp,
    onChangeStart: onChangeStartProp,
    onChangeEnd: onChangeEndProp,
    id,
    name,
    isDisabled,
    isReadOnly,
    isReversed: isReversedProp,
    orientation = "horizontal",
    focusThumbOnChange = true
}: UseSliderProps)
{
    const onChange = useCallbackRef(onChangeProp)
    const onChangeStart = useCallbackRef(onChangeStartProp)
    const onChangeEnd = useCallbackRef(onChangeEndProp)

    const [computedValue, setValue] = useControllableState({
        value: valueProp,
        defaultValue: defaultValue ?? getDefaultValue(min, max),
        onChange,
    })

    const [isDragging, setDragging] = useBoolean()
    const [isFocused, setFocused] = useBoolean()

    const eventSourceRef = React.useRef<"pointer" | "keyboard" | null>(null)

    const direction = useDirection() ? "ltr" : "rtl" // TODO Create useDirectionBoolean()

    const isInteractive = !(isDisabled || isReadOnly)
    const isReversed = getIsReversed({
        isReversed: isReversedProp,
        direction,
        orientation,
    })
    const value = Math.min(Math.max(computedValue, min), max)
    const valueRef = React.useRef(value)

    const prevRef = React.useRef(valueRef.current)

    const reversedValue = max - value + min
    const trackValue = isReversed ? reversedValue : value
    const thumbPercent = valueToPercent(trackValue, min, max)

    const isVertical = orientation === "vertical"

    /**
    * Let's keep a reference to the slider track and thumb
    */
    const trackRef = React.useRef<any>(null)
    const thumbRef = React.useRef<any>(null)
    const rootRef = React.useRef<any>(null)

    /**
    * Generate unique ids for component parts
    */
    const [thumbId, trackId] = useIds(id, `slider-thumb`, `slider-track`)


    /**
     * Get relative value of slider from the event by tracking
     * how far you clicked within the track to determine the value
     *
     * @todo - Refactor this later on to use info from pan session
     */
    const getValueFromPointer = React.useCallback(
        (event: any) =>
        {
            if (!trackRef.current)
                return

            eventSourceRef.current = "pointer"

            const trackRect = getBox(trackRef.current).borderBox
            const { clientX, clientY } = event.touches?.[0] ?? event

            const diff = isVertical
                ? trackRect.bottom - clientY
                : clientX - trackRect.left

                
            const length = isVertical ? trackRect.height : trackRect.width
            let percent = diff / length

            if (isReversed)
                percent = 1 - percent

            let nextValue = percentToValue(percent, min, max)

            if (step)
                nextValue = parseFloat(roundValueToStep(nextValue, min, step))

            nextValue = clampValue(nextValue, min, max)

            return nextValue
        },
        [isVertical, isReversed, max, min, step],
    )

    const tenSteps = (max - min) / 10
    const oneStep = step || (max - min) / 100

    const constrain = React.useCallback(
        (value: number) =>
        {
            if (!isInteractive) return
            value = parseFloat(roundValueToStep(value, min, oneStep))
            value = clampValue(value, min, max)
            setValue(value)
        },
        [oneStep, max, min, setValue, isInteractive],
    )

    const actions = React.useMemo(
        () => ({
            stepUp: (step = oneStep) =>
            {
                const next = isReversed ? value - step : value + step
                constrain(next)
            },
            stepDown: (step = oneStep) =>
            {
                const next = isReversed ? value + step : value - step
                constrain(next)
            },
            reset: () => constrain(defaultValue || 0),
            stepTo: (value: number) => constrain(value),
        }),
        [constrain, isReversed, value, oneStep, defaultValue],
    )

    /**
  * Keyboard interaction to ensure users can operate
  * the slider using only their keyboard.
  */
    const onKeyDown = React.useCallback(
        (event: React.KeyboardEvent) =>
        {
            const eventKey = normalizeEventKey(event)
            const keyMap: EventKeyMap = {
                ArrowRight: () => actions.stepUp(),
                ArrowUp: () => actions.stepUp(),
                ArrowLeft: () => actions.stepDown(),
                ArrowDown: () => actions.stepDown(),
                PageUp: () => actions.stepUp(tenSteps),
                PageDown: () => actions.stepDown(tenSteps),
                Home: () => constrain(min),
                End: () => constrain(max),
            }

            const action = keyMap[eventKey]

            if (action)
            {
                event.preventDefault()
                event.stopPropagation()
                action(event)
                eventSourceRef.current = "keyboard"
            }
        },
        [actions, constrain, max, min, tenSteps],
    )

    /**
     * Measure the dimensions of the thumb, so
     * we can center it within the track properly
     */
    const thumbBoxModel = useComponentDimensions(thumbRef)

    /**
     * Compute styles for all component parts.
     */
    const { getThumbStyle, rootStyle, trackStyle, innerTrackStyle } = React.useMemo(() =>
    {
        const thumbRect = thumbBoxModel?.borderBox ?? { width: 0, height: 0 }
        return getStyles({
            isReversed,
            orientation,
            thumbRects: [thumbRect],
            thumbPercents: [thumbPercent],
        })
    }, [isReversed, orientation, thumbBoxModel?.borderBox, thumbPercent])

    const focusThumb = React.useCallback(() =>
    {
        if (thumbRef.current && focusThumbOnChange)
        {
            // setTimeout(() => focus(thumbRef.current))
            setTimeout(() => thumbRef.current.focus())
        }
    }, [focusThumbOnChange])

    useUpdateEffect(() =>
    {
        focusThumb()

        if (eventSourceRef.current === "keyboard")
            onChangeEnd?.(valueRef.current)
    }, [value, onChangeEnd])

    const setValueFromPointer = (event: AnyPointerEvent) =>
    {
        const nextValue = getValueFromPointer(event)
        if (nextValue != null && nextValue !== valueRef.current)
            setValue(nextValue)
    }

    usePanGesture(rootRef, {
        onPanSessionStart(event)
        {
            console.log(onChangeStart, onChangeStart(66))
            if (!isInteractive) return
            setDragging.on()
            focusThumb()
            setValueFromPointer(event)
            onChangeStart?.(valueRef.current)
        },
        onPanSessionEnd()
        {
            if (!isInteractive) return
            setDragging.off()
            onChangeEnd?.(value)
            prevRef.current = value
        },
        onPan(event)
        {
            if (!isInteractive) return
            setValueFromPointer(event)
        },
    })

    const getRootProps: PropGetter = React.useCallback(
        (props = {}, ref = null) => ({
            ...props,
            ...rootStyle,
            ref: mergeRefs(ref, rootRef),
            tabIndex: -1,
        }),
        [isDisabled, isFocused, rootStyle],
    )

    const getTrackProps: PropGetter = React.useCallback(
        (props = {}, ref = null) => ({
            ...props,
            ...trackStyle,
            ref: mergeRefs(ref, trackRef),
            id: trackId,
        }),
        [isDisabled, trackId, trackStyle],
    )

    const getInnerTrackProps: PropGetter = React.useCallback(
        (props = {}, ref = null) => ({
            ...props,
            ...innerTrackStyle,
            ref,
        }),
        [innerTrackStyle],
    )

    const getThumbProps: PropGetter = React.useCallback(
        (props = {}, ref: ReactRef<any> = null) => ({
            ...props,
            ...getThumbStyle(0),
            ref: mergeRefs(ref, thumbRef),
            role: "slider",
            tabIndex: isInteractive ? 0 : undefined,
            id: thumbId,
            onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown),
            onFocus: callAllHandlers(props.onFocus, setFocused.on),
            onBlur: callAllHandlers(props.onBlur, setFocused.off),
        }),
        [
            isInteractive,
            thumbId,
            isDragging,
            min,
            max,
            value,
            orientation,
            isDisabled,
            isReadOnly,
            getThumbStyle,
            onKeyDown,
            setFocused.on,
            setFocused.off,
        ],
    )

    const getMarkerProps: PropGetter<any, { value?: any }> = React.useCallback(
        (props = {}, ref = null) =>
        {
            const isInRange = !(props.value < min || props.value > max)
            const isHighlighted = value >= props.value
            const markerPercent = valueToPercent(props.value, min, max)

            const markerStyle: SoperioComponent = {
                position: "absolute",
                pointerEvents: "none",
                ...orient({
                    orientation,
                    vertical: {
                        bottom: isReversed
                            ? `${100 - markerPercent}%`
                            : `${markerPercent}%`,
                    },
                    horizontal: {
                        start: isReversed ? `${100 - markerPercent}%` : `${markerPercent}%`,
                    }
                })
            }

            return {
                ...props,
                ...markerStyle,
                ref,
                role: "presentation",
            }
        },
        [isDisabled, isReversed, max, min, orientation, value],
    )

    const getInputProps: PropGetter<HTMLInputElement> = React.useCallback(
        (props = {}, ref = null) => ({
            ...props,
            ref,
            type: "hidden",
            value,
            name,
        }),
        [name, value],
    )

    return {
        state: {
            value,
            isFocused,
            isDragging,
        },
        actions,
        getRootProps,
        getTrackProps,
        getInnerTrackProps,
        getThumbProps,
        getMarkerProps,
        getInputProps,
    }
}

/**
 * The browser <input type="range" /> calculates
 * the default value of a slider by using mid-point
 * between the min and the max.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
 */
function getDefaultValue(min: number, max: number)
{
    return max < min ? min : min + (max - min) / 2
}