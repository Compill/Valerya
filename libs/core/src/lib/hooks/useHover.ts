import React, { RefObject } from "react"

export function useHover<T extends HTMLElement = HTMLElement>(elementRef: RefObject<T>): boolean
{
    const [hover, setHover] = React.useState<boolean>(false);

    const handleMouseOver = () => setHover(true);
    const handleMouseOut = () => setHover(false);

    React.useEffect(() =>
    {
        const node = elementRef.current;

        if (node)
        {
            (node as HTMLElement).addEventListener("mouseover", handleMouseOver);
            (node as HTMLElement).addEventListener("mouseout", handleMouseOut);

            return () =>
            {
                (node as HTMLElement).removeEventListener("mouseover", handleMouseOver);
                (node as HTMLElement).removeEventListener("mouseout", handleMouseOut);
            };
        }

        return () => { }

    }, [elementRef.current]);

    return hover;
}