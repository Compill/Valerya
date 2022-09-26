import { SurfaceScheme } from "@valerya/surface"

export function withSurface(name: string, surface: SurfaceScheme)
{
    return {
        "extras": {
            "valerya.surfaces":
            {
                [name]: surface
            }
        }
    }
}

export function withDarkModeSurface(name: string, surface: SurfaceScheme)
{
    return {
        "darkModeOverride":
        {
            "extras": {
                "valerya.surfaces":
                {
                    [name]: surface
                }
            }
        }
    }
}

export function withDefaultSurface(name: string, surface: SurfaceScheme)
{
    return {
        "extras": {
            "valerya.surfaces.default":
            {
                [name]: surface
            }
        }
    }
}