import { ComponentManager, MultiPartStyleProvider, useMultiPartStyles, useMultiPartSurfaceComponentConfig } from "@valerya/core";
import { createContext, forwardRef, SoperioComponent, splitComponentProps } from "@soperio/react";
import { Surface } from "../surface";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";
import { useSlider, UseSliderProps } from "./useSlider";

const COMPONENT_ID = "Valerya.Slider"

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

interface SliderContext extends Omit<ReturnType<typeof useSlider>, "getInputProps" | "getRootProps"> { }

const [SliderProvider, useSliderContext] = createContext<SliderContext>()

export interface SliderProps extends UseSliderProps, Omit<ComponentProps, keyof UseSliderProps>
{
    config?: ExtendConfig;
}

export const Slider = forwardRef <"input", SliderProps>(({
    size,
    variant,
    corners,
    orientation = "horizontal",
    scheme,
    config,
    isReversed = false,
    onMouseDown,
    onClick,
    onChange,
    onChangeStart,
    onChangeEnd,
    ...props
}: SliderProps, ref) =>
{
    const { styles } = useMultiPartSurfaceComponentConfig(COMPONENT_ID, scheme, config, { variant, corners, size, orientation }, props);

    const { min, max, step, value, defaultValue, id, name, disabled, readOnly } = props

    const { getInputProps, getRootProps, ...context } = useSlider({
        min: typeof min === "string" ? parseFloat(min) : min,
        max: typeof max === "string" ? parseFloat(max) : max,
        step: typeof step === "string" ? parseFloat(step) : step,
        value: value,
        defaultValue: typeof defaultValue === "string" ? parseFloat(defaultValue) : defaultValue,
        id,
        name,
        isReversed,
        isDisabled: disabled,
        isReadOnly: readOnly,
        orientation,
        onChange,
        onChangeStart,
        onChangeEnd,
    })

    const [ divProps, rootProps ] = splitComponentProps(props)

    const padding: SoperioComponent = {}

    if (orientation == "horizontal")
    {
        padding.px = "0"
        padding.h = "inherit"
    }
    else
    {
        padding.py = "0"
        padding.w = "inherit"
    }

    return (
        <div {...styles["slider"]} {...divProps} {...getRootProps(rootProps)} {...padding}>
            <SliderProvider value={context}>
                <MultiPartStyleProvider value={styles}>
                    <Rail orientation={orientation} disabled={disabled} />
                    <Track orientation={orientation} disabled={disabled} />
                    <Thumb disabled={disabled} />
                    <input hidden {...getInputProps({}, ref)} />
                </MultiPartStyleProvider>
            </SliderProvider>
        </div>
    )
})

interface RailProps
{
    orientation: "horizontal" | "vertical",
    disabled?: boolean
}

const Rail = forwardRef < "span", RailProps>(({ orientation, ...props }: RailProps, ref) => 
{
    const styles = useMultiPartStyles();

    const { getTrackProps } = useSliderContext();

    return <Surface
        as="span"
        {...styles["rail"]}
        w={orientation === "horizontal" ? "full" : styles["rail"]?.["w"]}
        h={orientation === "vertical" ? "full" : styles["rail"]?.["h"]}
        {...getTrackProps({}, ref)} 
        {...props} />
})

interface TrackProps
{
    orientation: "horizontal" | "vertical",
    disabled?: boolean
}

const Track = forwardRef <"span", RailProps>(({ orientation, ...props }: TrackProps, ref) =>
{
    const styles = useMultiPartStyles();

    const { getInnerTrackProps } = useSliderContext();

    return <Surface
        as="span"
        {...styles["track"]}
        w={orientation === "horizontal" ? "full" : styles["track"]?.["w"]}
        h={orientation === "vertical" ? "full" : styles["track"]?.["h"]}
        {...getInnerTrackProps({}, ref)}
        {...props} />
})

type ThumbProps = {
    disabled?: boolean
}

const Thumb = forwardRef <"span", ThumbProps>(({ ...props }, ref) =>
{
    const styles = useMultiPartStyles();

    const { getThumbProps, state } = useSliderContext();

    return <Surface {...styles["thumb"]} {...(state.isDragging ? styles["thumbDragging"] : {})} {...getThumbProps({}, ref)} hoverable {...props} />
})