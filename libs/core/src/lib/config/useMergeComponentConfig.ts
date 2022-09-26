import { useThemeExtra } from "@soperio/react"
import { ComponentManager } from "./ComponentManager"
import deepmerge from "deepmerge";

export function useMergedComponentConfig<T>(component: string)
{
    const themeComponents = useThemeExtra("valerya.components")

    const themeConfig = themeComponents?.[component]
    const defaultConfig = ComponentManager.getComponentConfig(component) as T

    return themeConfig ? deepmerge(defaultConfig, themeConfig as any) : defaultConfig
}