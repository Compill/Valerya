import { SurfaceScheme } from "@valerya/surface";
import { Config } from "./types";

const config: Config =
{
  defaultScheme: "default",
  defaultProps:
  {
    thickness: "2px",
    progress: 75
  },
  defaultTraits:
  {
    variant: "default",
    size: "md"
  },
  traits:
  {
    size: {
      "sm":
      {
        w: "4",
        h: "4",
      },
      "md":
      {
        w: "5",
        h: "5",
      },
      "lg":
      {
        w: "6",
        h: "6",
      },
      "xl":
      {
        w: "7",
        h: "7",
      },
      "x2":
      {
        w: "8",
        h: "8",
      }
    },
    variant:
    {
      default: (surface: SurfaceScheme, darkMode: boolean) =>
      (
        {
          textColor: surface.layers.main.color,
          trackColor: "transparent",
          stateDisabled:
          {
            textColor: surface.layers.main.disabled.color
          }
        }
      ),
      track: (surface: SurfaceScheme, darkMode: boolean) =>
      (
        {
          textColor: surface.layers.main.color,
          trackColor: surface.layers.alt.color,
          stateDisabled:
          {
            textColor: surface.layers.main.disabled.color,
            trackColor: surface.layers.alt.disabled.color,
          }
        }
      ),
    },
  }
}

export default config
