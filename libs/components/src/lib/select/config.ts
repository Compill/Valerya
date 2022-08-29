import { SurfaceScheme } from "@katia/surface";
import { ColorTheme } from "@soperio/react";
import { Config } from "./types";

const config: Config =
{
  defaultScheme: "neutral",
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
      "sm":
      {
        px: "2",
        py: "1.5",
        fontSize: "sm"
      },
      "md":
      {
        px: "2.5",
        py: "1.5",
        fontSize: "md"
      },
      "lg":
      {
        px: "3",
        py: "2",
        fontSize: "lg"
      },
      "xl":
      {
        px: "3.5",
        py: "2.5",
        fontSize: "xl"
      },
      "x2":
      {
        px: "4",
        py: "2.5",
        fontSize: "x2"
      }
    },
    variant:
    {
      default: (surface: SurfaceScheme, darkMode: boolean) =>
      (
        {
          layer: "mainLayer",
          border: "2",
          fontWeight: "500",
          borderColor: surface.layers.mainLayer.onColor,
          placeholderColor: surface.layers.mainLayer.onColor,
          placeholderOpacity: "50"
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
          borderB: "2",
          fontWeight: "500",
          bgColor: "transparent",
          textColor: surface.layers.main.color,
          borderColor: surface.layers.main.color,
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
