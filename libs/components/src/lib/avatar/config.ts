import { SurfaceScheme } from "@valerya/surface";
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
      transform: true
    }
  },
  defaultTraits:
  {
    size: "lg",
    corners: "pill",
    variant: "default"
  },
  subComponents: ["avatar", "image", "initials", "badge"],
  traits:
  {
    size:
    {
      xs:
      {
        avatar:
        {
          w: "6",
          h: "6",
        },
        initials:
        {
          fontSize: "xs"
        },
        badge:
        {
          w: "2.5",
          h: "2.5",
          fontSize: "xs",
          border: "xs",
        }
      },
      sm:
      {
        avatar:
        {
          w: "8",
          h: "8",
        },
        initials:
        {
          fontSize: "sm"
        },
        badge:
        {
          w: "3",
          h: "3",
          fontSize: "xs",
          border: "sm",
        }
      },
      md:
      {
        avatar:
        {
          w: "10",
          h: "10",
        },
        initials:
        {
          fontSize: "md"
        },
        badge:
        {
          w: "3.5",
          h: "3.5",
          fontSize: "xs",
          border: "sm",
        }
      },
      lg:
      {
        avatar:
        {
          w: "12",
          h: "12",
        },
        initials:
        {
          fontSize: "lg"
        },
        badge:
        {
          w: "4",
          h: "4",
          fontSize: "xs",
          border: "sm",
        }
      },
      xl:
      {
        avatar:
        {
          w: "14",
          h: "14",
        },
        initials:
        {
          fontSize: "xl"
        },
        badge:
        {
          w: "5",
          h: "5",
          fontSize: "xs",
          border: "sm",
        }
      },
      x2:
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
          w: "6",
          h: "6",
          fontSize: "sm",
          border: "sm",
        }
      },
      x3:
      {
        avatar:
        {
          w: "20",
          h: "20",
        },
        initials:
        {
          fontSize: "x3"
        },
        badge:
        {
          w: "7",
          h: "7",
          fontSize: "md",
          border: "sm",
        }
      },
      x4:
      {
        avatar:
        {
          w: "24",
          h: "24",
        },
        initials:
        {
          fontSize: "x4"
        },
        badge:
        {
          w: "8",
          h: "8",
          fontSize: "md",
          border: "md",
        }
      },
      x5:
      {
        avatar:
        {
          w: "28",
          h: "28",
        },
        initials:
        {
          fontSize: "x5"
        },
        badge:
        {
          w: "9",
          h: "9",
          fontSize: "lg",
          border: "md",
        }
      },
      x6:
      {
        avatar:
        {
          w: "32",
          h: "32",
        },
        initials:
        {
          fontSize: "x6"
        },
        badge:
        {
          w: "10",
          h: "10",
          fontSize: "lg",
          border: "md",
        }
      },
      x7:
      {
        avatar:
        {
          w: "36",
          h: "36",
        },
        initials:
        {
          fontSize: "x7"
        },
        badge:
        {
          w: "11",
          h: "11",
          fontSize: "xl",
          border: "lg",
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
            borderColor: surface.layers.main.onColor,
          }
        )
      }
    },
    corners:
    {
      square: {},
      rounded:
      {
        avatar:
        {
          rounded: true
        },
        image:
        {
          rounded: true
        },
      },
      pill:
      {
        avatar:
        {
          rounded: "full"
        },
        image:
        {
          rounded: "full"
        },
      }
    }
  }
};

export default config
