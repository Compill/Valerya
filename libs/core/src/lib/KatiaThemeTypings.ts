import { Theme } from "@soperio/react";

export interface KatiaThemeTypings extends Theme
{
    surfaces: "default" | "light" | "dark" | "neutral"
    darkSurfaces: "default" | "light" | "dark" | "neutral"
}