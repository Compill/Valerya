import { isObject } from "@soperio/utils"

export function isCssVar(value: string): boolean
{
    return /^var\(--.+\)$/.test(value)
}

export const IS_DEV = process.env["NODE_ENV"] !== "production"
export const IS_TEST = process.env["NODE_ENV"] === "test"

export function isRefObject(val: any): val is { current: any }
{
    return "current" in val
}

export function isInputEvent(
    value: any,
): value is { target: HTMLInputElement }
{
    return value && isObject(value) && isObject(value["target"])
}
