import { Theme } from "@soperio/react";
import { SurfaceScheme } from "@valerya/surface";

export interface ValeryaTheme extends Theme
{
    extras:
    {
        "valerya.surfaces": 
        {
            "default": SurfaceScheme,
            "light": SurfaceScheme,
            "dark": SurfaceScheme,
            "neutral": SurfaceScheme,
            [x:string]: SurfaceScheme
        }
        "valerya.surfaces.dark": 
        {
            "default": SurfaceScheme,
            "light": SurfaceScheme,
            "dark": SurfaceScheme,
            "neutral": SurfaceScheme,
            [x: string]: SurfaceScheme
        }
    }
}