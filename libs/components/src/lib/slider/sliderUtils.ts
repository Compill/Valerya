import { SoperioComponent } from "@soperio/react"

export function getIds(id: string | number)
{
    return {
        root: `slider-root-${id}`,
        getThumb: (i: number) => `slider-thumb-${id}-${i}`,
        getInput: (i: number) => `slider-input-${id}-${i}`,
        track: `slider-track-${id}`,
        innerTrack: `slider-filled-track-${id}`,
        getMarker: (i: number) => `slider-marker-${id}-${i}`,
        output: `slider-output-${id}`,
    }
}

type Orientation = "vertical" | "horizontal"

export function orient(options: {
    orientation: Orientation
    vertical: SoperioComponent
    horizontal: SoperioComponent
})
{
    const { orientation, vertical, horizontal } = options
    return orientation === "vertical" ? vertical : horizontal
}

type Size = { height: number; width: number }

const zeroRect: Size = { width: 0, height: 0 }

export function getStyles(options: {
    orientation: Orientation
    thumbPercents: number[]
    thumbRects: Size[]
    isReversed?: boolean
})
{
    const { orientation, thumbPercents, thumbRects, isReversed } = options
    
    const getThumbStyle = (i: number): SoperioComponent => ({
        position: "absolute",
        userSelect: "none",
        // TODO Add prop to Soperio
        // touchAction: "none",
        ...orient({
            orientation,
            vertical: {
                // bottom: `calc(${thumbPercents[i]}% - ${thumbRects[i].height / 2}px)`,
                // No need to remove half height since thumb has already translateY -50% applied
                bottom: `calc(${thumbPercents[i]}%)`,
            },
            horizontal: {
                // start: `calc(${thumbPercents[i]}% - ${thumbRects[i].width / 2}px)`,
                // No need to remove half width since thumb has already translateX -50% applied
                start: `calc(${thumbPercents[i]}%)`,
            },
        }),
    })

    const size =
        orientation === "vertical"
            ? thumbRects.reduce((a, b) => (a.height > b.height ? a : b), zeroRect)
            : thumbRects.reduce((a, b) => (a.width > b.width ? a : b), zeroRect)

    const rootStyle: SoperioComponent = {
        position: "relative",
        // TODO Add to Soperio props
        // touchAction: "none", 
        // WebkitTapHighlightColor: "rgba(0,0,0,0)",
        userSelect: "none",
        outline: "none",
        ...orient({
            orientation,
            vertical: {
                ps: `${size.width / 2}px`,
                pe: `${size.width / 2}px`,
            },
            horizontal: {
                pt: `${size.height / 2}px`,
                pb: `${size.height / 2}px`,
            },
        }),
    }

    const trackStyle: SoperioComponent = {
        position: "absolute",
        ...orient({
            orientation,
            vertical: {
                start: "50%",
                transform: true,
                translateX: "-50%",
                h: "100%",
            },
            horizontal: {
                top: "50%",
                transform: true,
                translateY: "-50%",
                w: "100%",
            },
        }),
    }

    const isSingleThumb = thumbPercents.length === 1
    const fallback = [0, isReversed ? 100 - thumbPercents[0] : thumbPercents[0]]
    const range = isSingleThumb ? fallback : thumbPercents

    let start = range[0]
    if (!isSingleThumb && isReversed)
    {
        start = 100 - start
    }
    const percent = Math.abs(range[range.length - 1] - range[0])

    const innerTrackStyle: SoperioComponent = {
        ...trackStyle,
        ...orient({
            orientation,
            vertical: isReversed
                ? { h: `${percent}%`, top: `${start}%` }
                : { h: `${percent}%`, bottom: `${start}%` },
            horizontal: isReversed
                ? { w: `${percent}%`, end: `${start}%` }
                : { w: `${percent}%`, start: `${start}%` },
        }),
    }

    return { trackStyle, innerTrackStyle, rootStyle, getThumbStyle }
}

export function getIsReversed(options: {
    isReversed?: boolean
    direction: "ltr" | "rtl"
    orientation?: "horizontal" | "vertical"
})
{
    const { isReversed, direction, orientation } = options

    if (direction === "ltr" || orientation === "vertical")
    {
        return isReversed
    }
    // only flip for horizontal RTL
    // if isReserved 🔜  otherwise  🔚
    return !isReversed
}
