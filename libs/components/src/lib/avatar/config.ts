import { SurfaceScheme } from "@katia/surface";
import { ColorTheme, isDark } from "@soperio/react";
import { Config } from "./types";

const config: Config =
{
  defaultProps:
  {
    avatar:
    {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      textTransform: "uppercase",
      fontWeight: "500",
      position: "relative",
      flexShrink: 0,
    },
    image:
    {
      w: "100%",
      h: "100%",
      objectFit: "cover",
    },
    badge:
    {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxSizing: 'border-box',
    }
  },
  defaultTraits:
  {
    size: "lg",
    corners: "default",
    variant: "default"
  },
  subComponents: ["avatar", "image", "initials", "badge"],
  traits:
  {
    size:
    {
      // TODO Do better sizing
      sm:
      {
        avatar:
        {
          w: "7",
          h: "7",
        },
        initials:
        {
          fontSize: "sm"
        },
        badge:
        {
          w: "2.5",
          h: "2.5",
          fontSize: "sm"
        }
      },
      md:
      {
        avatar:
        {
          w: "12",
          h: "12",
        },
        initials:
        {
          fontSize: "md"
        },
        badge:
        {
          w: "3",
          h: "3",
          fontSize: "sm"
        }
      },
      lg:
      {
        avatar:
        {
          w: "16",
          h: "16",
        },
        initials:
        {
          fontSize: "x2"
        },
        badge:
        {
          w: "5",
          h: "5",
          fontSize: "xs"
        }
      },
      xl:
      {
        avatar:
        {
          w: "150px",
          h: "150px",
        },
        initials:
        {
          fontSize: "3.5rem"
        },
        badge:
        {
          w: "30px",
          h: "30px",
        }
      },
      x2:
      {
        avatar:
        {
          w: "200px",
          h: "200px",
        },
        initials:
        {
          fontSize: "4rem"
        },
        badge:
        {
          w: "40px",
          h: "40px",
        }
      },
    },
    variant:
    {
      default:
      {
        avatar:
        {
          fontWeight: "500",
          layer: "main"
        },
        initials: (surface: SurfaceScheme, darkMode: boolean) =>
        (
          {
            
          }
        ),
        badge: (surface: SurfaceScheme, darkMode: boolean) =>
        (
          {
            border: "2",
            borderColor: surface.layers.main.onColor,
          }
        )
      }
    },
    corners:
    {
      square: {},
      default:
      {
        avatar:
        {
          rounded: "full"
        },
        image:
        {
          rounded: "full"
        },
        initials:
        {
          rounded: "full"
        }
      },
      pill:
      {
        avatar:
        {
          rounded: "lg"
        },
        image:
        {
          rounded: "lg"
        }
      }
    }
  }
};

export default config
