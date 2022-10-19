import { SurfaceScheme } from "@valerya/surface";
import { Config } from "./types";

const config: Config =
{
  defaultScheme: "default",
  defaultProps: {
    hover_transition: "all",
    easing: "linear",
    duration: "300",
    hover_duration: "300",
    fontWeight: "500",
    stateDisabled:
    {
      cursor: "default"
    },
    hoverable: true
  },
  defaultTraits:
  {
    variant: "default",
    corners: "default",
    size: "md"
  },
  traits:
  {
    size:
    {
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
          layer: "main",
          border: "none",
        }
      ),
      light: (surface: SurfaceScheme, darkMode: boolean) =>
      (
        {
          layer: "altHovMain",
        }
      ),
      link: (surface: SurfaceScheme, darkMode: boolean) =>
      (
        {
          layer: "mainLayer",
          px: "0",
          py: "0",
          p: "0",
          appearanceNone: true,
          hover_textDecoration: "underline",
          hoverable: false,
          stateSelected:
          {
            bgColor: "transparent",
            hover_bgColor: "transparent",
            textDecoration: "underline",
          },
          stateDisabled:
          {
            hover_textDecoration: "no-underline",
            cursor: "default"
          }
        }
      ),
      outline: (surface: SurfaceScheme, darkMode: boolean) =>
      (
        {
          layer: "mainLayerHovMain",
          border: "sm",
          borderColor: surface.layers.main.color,
          hover_borderColor: surface.layers.main.color,
          stateSelected:
          {
            bgColor: surface.layers.main.color,
            textColor: surface.layers.main.onColor,
            hover_borderColor: surface.layers.main.selected.color
          },
          stateDisabled:
          {
            borderColor: surface.layers.main.disabled.color,
            hover_borderColor: surface.layers.main.disabled.color,
            cursor: "default"
          },
          stateSelectedDisabled:
          {
            textOpacity: "85",
            borderColor: "transparent",
            hover_borderColor: "transparent"
          }
        }
      ),
      borderless: (surface: SurfaceScheme, darkMode: boolean) =>
      (
        {
          layer: "mainLayer",
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
