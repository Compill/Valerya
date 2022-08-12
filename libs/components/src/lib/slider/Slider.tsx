import { ComponentManager, forwardRef, useMultiPartComponentConfig2, useMultiPartStyles, MultiPartStyleProvider } from "@katia/core"
import { Surface } from "../surface";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Soperio.Slider"

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface SliderProps extends ComponentProps
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
    ...props
}: SliderProps, ref) =>
{
    const styles = useMultiPartComponentConfig2(COMPONENT_ID, scheme, config, { variant, corners, size, orientation }, props);

    return (
        <span {...styles["slider"]} {...props}>
            <MultiPartStyleProvider value={styles}>
                <Rail orientation={orientation} />
                <Track orientation={orientation} />
                <Thumb />
            </MultiPartStyleProvider>
        </span>
    )
})

interface RailProps
{
    orientation: "horizontal" | "vertical"
}

function Rail({ orientation }: RailProps)
{
    const styles = useMultiPartStyles();

    console.log("styles", styles)

    return <Surface
        as="span"
        {...styles["rail"]}
        w={orientation === "horizontal" ? "full" : styles["rail"]["w"]}
        h={orientation === "vertical" ? "full" : styles["rail"]["h"]} />
}

interface TrackProps
{
    orientation: "horizontal" | "vertical"
}

function Track({ orientation }: TrackProps)
{
    const styles = useMultiPartStyles();

    return <Surface
        as="span"
        {...styles["track"]}
        w={orientation === "horizontal" ? "full" : styles["track"]["w"]}
        h={orientation === "vertical" ? "full" : styles["track"]["h"]} />
}

function Thumb()
{
    const styles = useMultiPartStyles();

    return <Surface as="span" {...styles["thumb"]} />
}