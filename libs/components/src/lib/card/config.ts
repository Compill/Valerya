import { SurfaceScheme } from "@katia/surface";
import { Config } from "./types";

const config: Config =
{
  defaultScheme: "light",
  defaultTraits:
  {
    variant: "default",
    corners: "default",

  },
  defaultProps:
  {
    card: {
      mx: "2",
    },
    header:
    {
      px: "7",
      py: "3"
    },
    body:
    {
      px: "7",
      py: "5",
      fontSize: "sm"
    },
    footer:
    {
      px: "7",
      py: "3"
    },
    divider:
    {
      h: "px",
      // bgOpacity: "15", // Remove traits redefinition when soperio's parseProps don't have issue with prop overwriting anymore
    }
  },
  subComponents: ["card", "header", "body", "footer", "divider"],
  traits:
  {
    variant:
    {
      default:
      {
        card:
        {
          layer: "main",
          border: "0",
        },
        divider: (surface: SurfaceScheme, darkMode: boolean) =>
        (
          {
            bgColor: surface.layers.main.onColor,
            bgOpacity: "15",

          }
        )
      },
      bordered:
      {
        card: (surface: SurfaceScheme, darkMode: boolean) =>
        (
          {
            layer: "main",
            border: "2",
            borderColor: surface.layers.main.onColor,
            borderOpacity: "25"
          }
        ),
        divider: (surface: SurfaceScheme, darkMode: boolean) =>
        (
          {
            bgColor: surface.layers.main.onColor,
            bgOpacity: "15",

          }
        )
      },
      light:
      {
        card:
        {
          layer: "alt",
          border: "0",
        },
        divider: (surface: SurfaceScheme, darkMode: boolean) =>
        (
          {
            bgColor: surface.layers.alt.onColor,
            bgOpacity: "15",
          }
        )
      },
    },
    corners:
    {
      square: {},
      default:
      {
        card:
        {
          rounded: true
        }
      },
      pill:
      {
        card:
        {
          rounded: "full"
        }
      }
    }
  }
};

export default config
