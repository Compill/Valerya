import { SurfaceScheme } from "@valerya/surface";
import { Config } from "./types";

export const config: Config =
{
  defaultScheme: "default",
  traits:
  {
    size:
    {
      "xs":
      {
        px: "2.5",
        py: "0.5",
        fontSize: "xs"
      },
      "sm":
      {
        px: "3",
        py: "0.5",
        fontSize: "sm"
      },
      "md":
      {
        px: "3.5",
        py: "0.5",
        fontSize: "md"
      },
      "lg":
      {
        px: "4",
        py: "0.5",
        fontSize: "lg"
      },
      "xl":
      {
        px: "5",
        py: "1",
        fontSize: "xl"
      },
      "x2":
      {
        px: "6",
        py: "1",
        fontSize: "x2"
      }
    },
    variant:
    {
      default:
      {
        layer: "main",
        border: "none",
        fontWeight: "500"
      },
      light:
      {
        layer: "alt",
        border: "none",
        fontWeight: "500"
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
    shape: 
    {
      square: { rounded: "none" },
      default: { rounded: true },
      rounded: { rounded: true },
      pill: { rounded: "full" }
    }
  }
}

export default config
