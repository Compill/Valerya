import React from "react"

function useHover()
{
    const [value, setValue] = React.useState(false);
    const ref = React.useRef(null);

    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);

    React.useEffect(() =>
    {
        const node = ref.current;

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

    }, [ref.current]);

    return [ref, value];
}