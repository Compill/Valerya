// Attention, this file will be overwritten by the CLI
import { ValeryaThemeTypings } from "../ValeryaThemeTypings";

// TODO Remove extras primary, secondary, tertiary, accent
export type ThemeSurfaceScheme = ValeryaThemeTypings["surfaces"] | "primary" | "secondary" | "tertiary" | "accent"
