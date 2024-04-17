import { SurfaceScheme } from "@valerya/surface";
import { Config } from "./types";

const config: Config =
{
  defaultScheme: "default",
  defaultProps: {
    p: "0",
    dflex: true,
    placeContent: "center",
    alignItems: "center",
    hover_transition: "all",
    easing: "linear",
    duration: "300",
    hover_duration: "300",
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
      "xs":
      {
        w: "4",
        h: "4",
        p: "0.5"
      },
      "sm":
      {
        w: "6",
        h: "6",
        p: "1.5"
      },
      "md":
      {
        w: "8",
        h: "8",
        p: "2"
      },
      "lg":
      {
        w: "10",
        h: "10",
        p: "2.5"
      },
      "xl":
      {
        w: "12",
        h: "12",
        p: "2.5"
      },
      "x2":
      {
        w: "14",
        h: "14",
        p: "3"
      },
      "x3":
      {
        w: "16",
        h: "16",
        p: "3.5"
      },
      "x4":
      {
        w: "18",
        h: "18",
        p: "4"
      },
      "x5":
      {
        w: "20",
        h: "20",
        p: "4"
      },
      "x6":
      {
        w: "24",
        h: "24",
        p: "5"
      },
      "x7":
      {
        w: "28",
        h: "28",
        p: "6"
      },
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
      ),
      glass: (surface: SurfaceScheme, darkMode: boolean) =>
      (
        {
          layer: "mainGlass",
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
