import { SurfaceScheme } from "@katia/surface";
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
          layer: "main",
          border: "0",
        }
      ),
      light: (surface: SurfaceScheme, darkMode: boolean) =>
      (
        {
          layer: "altHovMain",
          // textColor: surface.layers.main.color
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
          border: "2",
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
            textOpacity: "70",
            borderOpacity: "70",
            bgOpacity: "70",
            // hover_textColor: theme.default,
            hover_bgColor: "transparent",
            cursor: "default"
          },
          stateSelectedDisabled:
          {
            textOpacity: "85"
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
