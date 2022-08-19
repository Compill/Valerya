import React from "react";

export function useUnmountEffect(fn: () => void, deps: any[] = [])
{
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return React.useEffect(() => () => fn(), deps)
}
