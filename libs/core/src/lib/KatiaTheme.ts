import { Theme } from "@soperio/react";
import { SurfaceScheme } from "@katia/surface";

export interface KatiaTheme extends Theme
{
    extras:
    {
        "katia.surfaces": 
        {
            "default": SurfaceScheme,
            "light": SurfaceScheme,
            "dark": SurfaceScheme,
            "neutral": SurfaceScheme,
            [x:string]: SurfaceScheme
        }
        "katia.surfaces.dark": 
        {
            "default": SurfaceScheme,
            "light": SurfaceScheme,
            "dark": SurfaceScheme,
            "neutral": SurfaceScheme,
            [x: string]: SurfaceScheme
        }
    }
}