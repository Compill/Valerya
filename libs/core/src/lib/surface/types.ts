// Attention, this file will be overwritten by the CLI
import { KatiaThemeTypings } from "../KatiaThemeTypings";

// TODO Remove extras primary, secondary, tertiary, accent
export type ThemeSurfaceScheme = KatiaThemeTypings["surfaces"] | "primary" | "secondary" | "tertiary" | "accent"
