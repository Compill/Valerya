import { Theme } from "@soperio/react";
import { SurfaceScheme } from "@katia/surface";

export interface KatiaTheme extends Theme
{
    extras:
    {
        "katia.surfaces": 
        {
            "light": SurfaceScheme,
            "dark": SurfaceScheme,
            "neutral": SurfaceScheme,
            [x:string]: SurfaceScheme
        }
        "katia.surfaces.dark": 
        {
            "light": SurfaceScheme,
            "dark": SurfaceScheme,
            "neutral": SurfaceScheme,
            [x: string]: SurfaceScheme
        }
    }
}