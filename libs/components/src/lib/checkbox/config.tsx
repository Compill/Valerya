import { SurfaceScheme } from "@valerya/surface";
import { Config } from "./types";

const config: Config =
{
  defaultScheme: "default",
  defaultTraits:
  {
    variant: "default",
    corners: "default",
    size: "lg",
  },
  subComponents: ["root", "checkboxSurface", "checkboxIcon", "label"],
  defaultProps:
  {
    root:
    {
      display: "flex",
      flexRow: true,
      alignItems: "center",
      lineHeight: "none",
      cursor: "pointer",
      stateDisabled:
      {
        cursor: "not-allowed"
      }
    },
    checkboxSurface:
    {
      hoverable: true,
      display: "inline-block",
      transition: "colors",
      duration: "300"
    },
    checkboxIcon:
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2px",
      transition: "opacity",
      duration: "300",
      children: <polyline points="20 6 9 17 4 12"> </polyline>,
      opacity: "0",
      easing: "linear",
      stateChecked:
      {
        opacity: "100",
        easing: "out"
      },
    },
    label:
    {
      ms: "3",
      stateDisabled:
      {
        opacity: "30"
      }
    }
  },
  traits:
  {
    size:
    {
      "sm":
      {
        label:
        {
          textSize: "sm"
        },
        checkboxSurface:
        {
          w: "3",
          h: "3"
        }
      },
      "md":
      {

        label:
        {
          textSize: "md"
        },
        checkboxSurface:
        {
          w: "4",
          h: "4"
        }
      },
      "lg":
      {

        label:
        {
          textSize: "lg"
        },
        checkboxSurface:
        {
          w: "5",
          h: "5",
        }
      },
      "xl":
      {

        label:
        {
          textSize: "xl"
        },
        checkboxSurface:
        {
          w: "6",
          h: "6",
        }
      },
      "x2":
      {
        label:
        {
          textSize: "x2"
        },
        checkboxSurface:
        {
          textSize: "x2",
          w: "7",
          h: "7",
        }
      }
    },
    variant:
    {
      default:
      {
        checkboxSurface: (surface: SurfaceScheme, darkMode: boolean) =>
        (
          {
            layer: "alt",
            textColor: surface.layers.main.onColor,
            border: "none",
            stateChecked:
            {
              layer: "main"
            },
            stateDisabled:
            {
              textColor: surface.layers.main.disabled.onColor
            },
            stateCheckedDisabled:
            {
              textColor: surface.layers.main.disabled.onColor
            }
          }
        )
      },
      outline:
      {
        checkboxSurface: (surface: SurfaceScheme, darkMode: boolean) =>
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
              borderColor: surface.layers.main.disabled.color,
              textColor: surface.layers.main.disabled.color
            }
          }
        ),
      },
    },
    corners:
    {
      square: { checkboxSurface: { rounded: "none" } },
      default: { checkboxSurface: { rounded: true } },
      circle: { checkboxSurface: { rounded: "full" } }
    }
  }
}

export default config
