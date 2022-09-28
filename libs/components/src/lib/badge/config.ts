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
  traits:
  {
    size:
    {
      "xs":
      {
        px: "2",
        minH: "5",
        fontSize: "xs"
      },
      "sm":
      {
        px: "2",
        minH: "6",
        fontSize: "sm"
      },
      "md":
      {
        px: "2.5",
        minH: "7",
        fontSize: "md"
      },
      "lg":
      {
        px: "3",
        minH: "8",
        fontSize: "lg"
      },
      "xl":
      {
        px: "3.5",
        minH: "9",
        fontSize: "xl"
      },
      "x2":
      {
        px: "4",
        minH: "10",
        fontSize: "x2"
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
