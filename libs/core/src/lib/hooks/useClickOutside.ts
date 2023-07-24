import React from "react";

export function useClickOutside(ref: React.RefObject<any>, callback: () => void)
{
    const handleClick = (event: MouseEvent) =>
    {
        if (ref.current && !ref.current.contains(event.target))
        {
            callback();
        }
    };

    React.useEffect(() =>
    {
        document.addEventListener('click', handleClick);

        return () => document.removeEventListener('click', handleClick);
    });
};