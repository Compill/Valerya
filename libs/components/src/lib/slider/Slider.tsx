import { ComponentManager, forwardRef, useMultiPartSurfaceComponentConfig, useMultiPartStyles, MultiPartStyleProvider, splitComponentProps, createContext } from "@katia/core"
import { Surface } from "../surface";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";
import { useSlider, UseSliderProps } from "./useSlider";
import { SoperioComponent } from "@soperio/react";

const COMPONENT_ID = "Soperio.Slider"

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

interface SliderContext extends Omit<ReturnType<typeof useSlider>, "getInputProps" | "getRootProps"> { }

const [SliderProvider, useSliderContext] = createContext<SliderContext>()

export interface SliderProps extends UseSliderProps, Omit<ComponentProps, keyof UseSliderProps>
{
    config?: ExtendConfig;
}

export const Slider = forwardRef<SliderProps, "input">(({
    size,
    variant,
    corners,
    orientation = "horizontal",
    scheme,
    config,
    onMouseDown,
    onClick,
    onChange,
    onChangeStart,
    onChangeEnd,
    ...props
}: SliderProps, ref) =>
{
    const styles = useMultiPartSurfaceComponentConfig(COMPONENT_ID, scheme, config, { variant, corners, size, orientation }, props);

    const { min, max, step, value, defaultValue, id, name, disabled, readOnly } = props

    const { getInputProps, getRootProps, ...context } = useSlider({
        min: typeof min === "string" ? parseFloat(min) : min,
        max: typeof max === "string" ? parseFloat(max) : max,
        step: typeof step === "string" ? parseFloat(step) : step,
        value: value,
        defaultValue: typeof defaultValue === "string" ? parseFloat(defaultValue) : defaultValue,
        id,
        name,
        isDisabled: disabled,
        isReadOnly: readOnly,
        orientation,
        onChange,
        onChangeStart,
        onChangeEnd,
    })

    const divProps = splitComponentProps(props)[0]

    const padding: SoperioComponent = {}

    if (orientation == "horizontal")
    {
        padding.px = "0"
        padding.h = "inherit"
    }
    else
        padding.py = "0"
        padding.w = "inherit"

    return (
        <div {...styles["slider"]} {...divProps} {...getRootProps()} {...padding}>
            <SliderProvider value={context}>
                <MultiPartStyleProvider value={styles}>
                    <Rail orientation={orientation} />
                    <Track orientation={orientation} />
                    <Thumb />
                    <input hidden {...getInputProps({}, ref)} />
                </MultiPartStyleProvider>
            </SliderProvider>
        </div>
    )
})

interface RailProps
{
    orientation: "horizontal" | "vertical"
}

const Rail = forwardRef<RailProps, "span">(({ orientation }: RailProps, ref) => 
{
    const styles = useMultiPartStyles();

    const { getTrackProps } = useSliderContext();

    return <Surface
        as="span"
        {...styles["rail"]}
        w={orientation === "horizontal" ? "full" : styles["rail"]["w"]}
        h={orientation === "vertical" ? "full" : styles["rail"]["h"]}
        {...getTrackProps({}, ref)} />
})

interface TrackProps
{
    orientation: "horizontal" | "vertical"
}

const Track = forwardRef<RailProps, "span">(({ orientation }: TrackProps, ref) =>
{
    const styles = useMultiPartStyles();

    const { getInnerTrackProps } = useSliderContext();

    return <Surface
        as="span"
        {...styles["track"]}
        w={orientation === "horizontal" ? "full" : styles["track"]["w"]}
        h={orientation === "vertical" ? "full" : styles["track"]["h"]}
        {...getInnerTrackProps({}, ref)} />
})

type ThumbProps = {}

const Thumb = forwardRef<ThumbProps, "span">(({ }, ref) =>
{
    const styles = useMultiPartStyles();

    const { getThumbProps, state } = useSliderContext();

    return <Surface {...styles["thumb"]} {...(state.isDragging ? styles["thumbDragging"] : {})} {...getThumbProps({}, ref)} hoverable />
})