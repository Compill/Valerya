import { SurfaceScheme } from "@katia/surface"

export function withSurface(name: string, surface: SurfaceScheme)
{
    return {
        "extras": {
            "katia.surfaces":
            {
                [name]: surface
            }
        }
    }
}

export function withDefaultSurface(name: string, surface: SurfaceScheme)
{
    return {
        "extras": {
            "katia.surfaces.default":
            {
                [name]: surface
            }
        }
    }
}