import { SurfaceScheme } from "@katia/surface";
import { ColorTheme } from "@soperio/react";
import { Config } from "./types";

const config: Config =
{
  defaultScheme: "default",
  defaultTraits:
  {
    variant: "default",
    shape: "default",
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

        fontSize: "sm",
        w: "3",
        h: "3"
      },
      "md":
      {

        fontSize: "md",
        w: "4",
        h: "4"
      },
      "lg":
      {

        fontSize: "lg",
        w: "5",
        h: "5",
      },
      "xl":
      {

        fontSize: "xl",
        w: "6",
        h: "6",
      },
      "x2":
      {

        fontSize: "x2",
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
          // TODO Check once Surface has fix its disabled colors
          // stateDisabled:
          // {
          //   bgOpacity: "40",
          //   textOpacity: "70",
          //   cursor: "default"
          // }
        }
      ),
      outline: (surface: SurfaceScheme, darkMode: boolean) =>
      (
        {
          layer: "mainLayer",
          border: "sm",
          borderColor: surface.layers.main.color,
          // stateChecked:
          // {
          //   borderColor: theme.default,
          //   textColor: theme.default,
          // },
          // stateDisabled:
          // {
          //   borderOpacity: "40",
          //   textOpacity: "40",
          //   cursor: "default"
          // }
        }
      ),
    },
    shape:
    {
      square: { rounded: "none" },
      default: { rounded: true },
      circle: { rounded: "full" }
    }
  }
}

export default config
