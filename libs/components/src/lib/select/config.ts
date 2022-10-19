import { SurfaceScheme } from "@valerya/surface";
import { Config } from "./types";

const config: Config =
{
  defaultScheme: "neutral",
  defaultProps:
  {
    focus_outline: "none"
  },
  defaultTraits:
  {
    variant: "default",
    size: "md",
    corners: "default"
  },
  traits:
  {
    size:
    {
      "xs":
      {
        px: "1.5",
        py: "1",
        textSize: "xs"
      },
      "sm":
      {
        px: "2",
        py: "1.5",
        textSize: "sm"
      },
      "md":
      {
        px: "2.5",
        py: "1.5",
        textSize: "md"
      },
      "lg":
      {
        px: "3",
        py: "2",
        textSize: "lg"
      },
      "xl":
      {
        px: "3.5",
        py: "2.5",
        textSize: "xl"
      },
      "x2":
      {
        px: "4",
        py: "2.5",
        textSize: "x2"
      }
    },
    variant:
    {
      default: (surface: SurfaceScheme, darkMode: boolean) =>
      (
        {
          layer: "mainLayer",
          border: "sm",
          fontWeight: "500",
          borderColor: surface.layers.mainLayer.onColor,
          borderOpacity: "50",
          focus_borderOpacity: "100",
          placeholderColor: surface.layers.mainLayer.onColor,
          placeholderOpacity: "50",
          stateDisabled:
          {
            borderOpacity: "25",
          }
        }
      ),
      solid: (surface: SurfaceScheme, darkMode: boolean) =>
      (
        {
          layer: "alt",
          fontWeight: "500",
        }
      ),
      underline: (surface: SurfaceScheme, darkMode: boolean) =>
      (
        {
          borderB: "sm",
          fontWeight: "500",
          bgColor: "transparent",
          placeholderColor: surface.layers.main.color,
          placeholderOpacity: "50",
          textColor: surface.layers.main.color,
          borderColor: surface.layers.main.color,
          borderOpacity: "50",
          focus_borderOpacity: "100",
          rounded: "0",
          px: "0",
          stateDisabled:
          {
            borderOpacity: "25",
          }
        }
      )
    },
    corners:
    {
      square: {},
      default: { rounded: true },
      pill: { rounded: "full" }
    }
  }
}

export default config
