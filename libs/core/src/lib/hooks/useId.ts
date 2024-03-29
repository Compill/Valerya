import React from "react"

export function useId(idProp?: string, prefix?: string): string
{
    const id = React.useId()

    return React.useMemo(
        () => idProp || [prefix, id].filter(Boolean).join("-"),
        [idProp, prefix, id],
    )
}

/**
 * React hook to generate ids for use in compound components
 *
 * @param idProp the external id passed from the user
 * @param prefixes array of prefixes to use
 *
 * @example
 *
 * ```js
 * const [buttonId, menuId] = useIds("52", "button", "menu")
 *
 * // buttonId will be `button-52`
 * // menuId will be `menu-52`
 * ```
 */
export function useIds(idProp?: string, ...prefixes: string[])
{
    const id = useId(idProp)
    return React.useMemo(() =>
    {
        return prefixes.map((prefix) => `${prefix}-${id}`)
    }, [id, prefixes])
}