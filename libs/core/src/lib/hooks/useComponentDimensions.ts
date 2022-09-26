import { getBox, BoxModel } from "@valerya/utils"
import { useRef, useState } from "react"
import { useSafeLayoutEffect } from "./useSafeLayoutEffect"

/**
 * React hook to measure a component's dimensions
 *
 * @param ref ref of the component to measure
 * @param observe if `true`, resize and scroll observers will be turned on
 *
 * ```jsx
 * import { useSize } from "@chakra-ui/react-use-size"
 * ```
 */
export function useComponentDimensions(
    ref: React.RefObject<HTMLElement>,
    observe?: boolean,
)
{
    const [dimensions, setDimensions] = useState<BoxModel | null>(null)
    const rafId = useRef<number>()

    useSafeLayoutEffect(() =>
    {
        if (!ref.current) return undefined

        const node = ref.current

        function measure()
        {
            rafId.current = requestAnimationFrame(() =>
            {
                const boxModel = getBox(node)
                setDimensions(boxModel)
            })
        }

        measure()

        if (observe)
        {
            window.addEventListener("resize", measure)
            window.addEventListener("scroll", measure)
        }

        return () =>
        {
            if (observe)
            {
                window.removeEventListener("resize", measure)
                window.removeEventListener("scroll", measure)
            }

            if (rafId.current)
            {
                cancelAnimationFrame(rafId.current)
            }
        }
    }, [observe])

    return dimensions
}
