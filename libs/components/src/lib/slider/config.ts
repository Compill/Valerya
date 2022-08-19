import { SurfaceSchemeSet } from "@katia/core";
import { Surface } from "../surface";
import { Config } from "./types";

const config: Config =
{
  defaultProps: {
    slider:
    {
      display: "inline-block",
      boxSizing: "content-box",
      position: "relative",
      cursor: "pointer",
    },
    rail:
    {
      block: true,
      position: "absolute",
    },
    track:
    {
      display: "block",
      position: "absolute"
    },
    thumb:
    {
      position: "absolute",
      outline: "none",
      dflex: true,
      alignItems: "center",
      justifyContent: "center",
      rounded: "full",
      boxSizing: "border-box",
      shadow: "sm",
      shadowColor: "#666",
    },
  },
  defaultTraits:
  {
    variant: "default",
    corners: "pill",
    size: "md",
    orientation: "horizontal"
  },
  subComponents: ["slider", "rail", "track", "thumb"],
  traits:
  {
    orientation:
    {
      horizontal:
      {
        slider:
        {
          w: "full",
          h: "full"
        },
        rail:
        {
          top: "50%",
          transform: true,
          translateY: "-50%"
        },
        track:
        {
          top: "50%",
          transform: true,
          translateY: "-50%",
        },
        thumb:
        {
          top: "50%",
          transform: true,
          translateX: "-50%",
          translateY: "-50%"
        }
      },
      vertical:
      {
        slider:
        {
          h: "full"
        },
        rail:
        {
          start: "50%",
          transform: true,
          translateX: "-50%"
        },
        track:
        {
          start: "50%",
          transform: true,
          translateX: "-50%",
        },
        thumb:
        {
          start: "50%",
          transform: true,
          translateX: "-50%",
          translateY: "50%"
        }
      }
    },
    size:
    {
      "sm":
      {
        slider:
        {
          // px or py will be overriden to 0
          // depending on orientation
          px: "3",
          py: "3"
        },
        rail:
        {
          w: "0.5",
          h: "0.5"
        },
        track:
        {
          w: "0.5",
          h: "0.5"
        },
        thumb:
        {
          w: "3",
          h: "3"
        },
      },
      "md":
      {
        slider:
        {
          px: "3.5",
          py: "3.5",
        },
        rail:
        {
          w: "1",
          h: "1"
        },
        track:
        {
          w: "1",
          h: "1"
        },
        thumb:
        {
          w: "3.5",
          h: "3.5"
        }
      },
      "lg":
      {
        slider:
        {
          px: "3",
          py: "2",
          fontSize: "lg"
        },
        rail:
        {
          w: "1.5",
          h: "1.5"
        },
        track:
        {
          w: "1.5",
          h: "1.5"
        },
        thumb:
        {
          w: "4",
          h: "4"
        },
      },
      "xl":
      {
        slider:
        {
          px: "3.5",
          py: "2.5",
          fontSize: "xl"
        },
        rail:
        {
          w: "2",
          h: "2"
        },
        track:
        {
          w: "2",
          h: "2"
        },
        thumb:
        {
          w: "5",
          h: "5"
        },
      },
      "x2":
      {
        slider:
        {
          px: "4",
          py: "2.5",
          fontSize: "x2"
        },
        rail:
        {
          w: "2.5",
          h: "2.5"
        },
        track:
        {
          w: "2.5",
          h: "2.5"
        },
        thumb:
        {
          w: "6",
          h: "6"
        },
      }
    },
    variant:
    {
      default:
      {
        rail: (surface: SurfaceSchemeSet, darkMode: boolean) =>
        (
          {
            scheme: surface,
            schemeVariant: "alt"
          }
        ),
        track: (surface: SurfaceSchemeSet, darkMode: boolean) =>
        (
          {
            scheme: surface,
            schemeVariant: "main"
          }
        ),
        thumb: (surface: SurfaceSchemeSet, darkMode: boolean) =>
        (
          {
            scheme: surface,
            schemeVariant: "main",
            focus_outlineColor: surface.alt.color,
          }
        )
      },
      solid:
      {
        rail: (surface: SurfaceSchemeSet, darkMode: boolean) =>
        (
          {
            scheme: surface,
            schemeVariant: "main"
          }
        ),
        track: (surface: SurfaceSchemeSet, darkMode: boolean) =>
        (
          {
            scheme: surface,
            schemeVariant: "alt"
          }
        ),
        thumb: (surface: SurfaceSchemeSet, darkMode: boolean) =>
        (
          {
            scheme: surface,
            schemeVariant: "mainInv"
          }
        )
      },
      alt:
      {
        rail: (surface: SurfaceSchemeSet, darkMode: boolean) =>
        (
          {
            scheme: surface,
            schemeVariant: "altInv"
          }
        ),
        track: (surface: SurfaceSchemeSet, darkMode: boolean) =>
        (
          {
            scheme: surface,
            schemeVariant: "alt"
          }
        ),
        thumb: (surface: SurfaceSchemeSet, darkMode: boolean) =>
        (
          {
            scheme: surface,
            schemeVariant: "mainInv"
          }
        )
      },
      test:
      {
        rail: (surface: SurfaceSchemeSet, darkMode: boolean) =>
        (
          {
            scheme: surface,
            schemeVariant: "alt"
          }
        ),
        track: (surface: SurfaceSchemeSet, darkMode: boolean) =>
        (
          {
            scheme: surface,
            schemeVariant: "main"
          }
        ),
        thumb: (surface: SurfaceSchemeSet, darkMode: boolean) =>
        (
          {
            scheme: surface,
            schemeVariant: "main",
            shadow: "none",
          }
        ),
      },
      test2:
      {
        rail: (surface: SurfaceSchemeSet, darkMode: boolean) =>
        (
          {
            scheme: surface,
            schemeVariant: "alt"
          }
        ),
        track: (surface: SurfaceSchemeSet, darkMode: boolean) =>
        (
          {
            scheme: surface,
            schemeVariant: "main"
          }
        ),
        thumb: (surface: SurfaceSchemeSet, darkMode: boolean) =>
        (
          {
            scheme: surface,
            schemeVariant: "mainInv",
            shadow: "none",
            border: "2",
            borderColor: surface.main.color
          }
        )
      }
    },
    corners:
    {
      square: {},
      default: {
        rail: { rounded: true },
        track: { rounded: true }
      },
      pill: {
        rail: { rounded: "full" },
        track: { rounded: "full" }
      }
    }
  }
}

export default config
