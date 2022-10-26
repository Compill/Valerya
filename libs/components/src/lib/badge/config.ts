import { SurfaceScheme } from "@valerya/surface";
import { Config } from "./types";

export const config: Config =
{
  defaultScheme: "default",
  defaultProps:
  {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  },
  defaultTraits:
  {
    size: "md",
    corners: "default",
    variant: "default"
  },
  traits:
  {
    size:
    {
      "xs":
      {
        px: "2",
        minH: "5",
        textSize: "xs"
      },
      "sm":
      {
        px: "2",
        minH: "6",
        textSize: "sm"
      },
      "md":
      {
        px: "2.5",
        minH: "7",
        textSize: "md"
      },
      "lg":
      {
        px: "3",
        minH: "8",
        textSize: "lg"
      },
      "xl":
      {
        px: "3.5",
        minH: "9",
        textSize: "xl"
      },
      "x2":
      {
        px: "4",
        minH: "10",
        textSize: "x2"
      }
    },
    variant:
    {
      default:
      {
        layer: "main",
        border: "none",
      },
      light:
      {
        layer: "alt",
        border: "none",
      },
      outline: (surface: SurfaceScheme, darkMode: boolean) =>
      (
        {
          layer: "mainLayer",
          border: "sm",
          borderColor: surface.layers.mainLayer.onColor,
          fontWeight: "500"
        }
      ),
      "light-outline": (surface: SurfaceScheme, darkMode: boolean) =>
      (
        {
          layer: "alt",
          border: "sm",
          borderColor: surface.layers.alt.onColor,
          fontWeight: "500"
        }
      ),
    },
    corners: 
    {
      square: { rounded: "none" },
      default: { rounded: true },
      rounded: { rounded: true },
      pill: { rounded: "full" }
    }
  }
}

export default config
