import { Theme } from "@soperio/react";
import { SurfaceSchemeSet } from "./surface/SurfaceScheme";

export interface KatiaTheme extends Theme
{
    extras:
    {
        "katia.surfaces": 
        {
            "light": SurfaceSchemeSet,
            "dark": SurfaceSchemeSet,
            "neutral": SurfaceSchemeSet,
            [x:string]: SurfaceSchemeSet
        }
        "katia.surfaces.dark": 
        {
            "light": SurfaceSchemeSet,
            "dark": SurfaceSchemeSet,
            "neutral": SurfaceSchemeSet,
            [x: string]: SurfaceSchemeSet
        }
    }
}