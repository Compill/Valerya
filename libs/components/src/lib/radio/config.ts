import { SurfaceScheme } from "@valerya/surface";
import { Config } from "./types";

const config: Config =
{
  defaultScheme: "default",
  defaultTraits:
  {
    variant: "default",
    corners: "circle",
    size: "lg",
  },
  defaultProps:
  {
    hoverable: true
  },
  traits:
  {
    size:
    {
      "sm":
      {

        textSize: "sm",
        w: "3",
        h: "3"
      },
      "md":
      {

        textSize: "md",
        w: "4",
        h: "4"
      },
      "lg":
      {

        textSize: "lg",
        w: "5",
        h: "5",
      },
      "xl":
      {

        textSize: "xl",
        w: "6",
        h: "6",
      },
      "x2":
      {

        textSize: "x2",
        w: "7",
        h: "7",
      }
    },
    variant:
    {
      default: (surface: SurfaceScheme, darkMode: boolean) =>
      (
        {
          layer: "alt",
          border: "none",
          stateChecked:
          {
            layer: "main"
          },
        }
      ),
      outline: (surface: SurfaceScheme, darkMode: boolean) =>
      (
        {
          layer: "mainLayer",
          border: "sm",
          borderColor: surface.layers.main.color,
          stateDisabled:
          {
            borderColor: surface.layers.main.disabled.color
          },
          stateCheckedDisabled:
          {
            borderColor: surface.layers.main.disabled.color
          }
        }
      ),
    },
    corners:
    {
      square: { rounded: "none" },
      default: { rounded: true },
      circle: { rounded: "full" }
    }
  }
}

export default config
