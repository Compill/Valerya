import { buildDarkSurface, buildSurface, buildWhiteSurface, SurfaceScheme } from "@valerya/surface"

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

export function withDefaultSurfaces()
{
    return {
        "extras": {
            "valerya.surfaces":
            {
                light: buildWhiteSurface("#FFFFFF", "#181818"),
                neutral: buildSurface("#94a3b8")
            }
        },
        "darkModeOverride":
        {
            "extras": {
                "valerya.surfaces":
                {
                    light: buildDarkSurface("#181818", "#ffffff"),
                    neutral: buildSurface("#94a3b8", { darkMode: true })
                }
            }
        }
    }
}