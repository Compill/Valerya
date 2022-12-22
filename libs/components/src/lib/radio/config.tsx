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
    dotSize: "lg"
  },
  subComponents: ["root", "radioSurface", "radioIcon", "label"],
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
    radioSurface:
    {
      hoverable: true,
      display: "inline-block",
      transition: "colors",
      duration: "300",
      rounded: "full"
    },
    radioIcon:
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2px",
      transition: "opacity",
      duration: "300",
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
        radioSurface:
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
        radioSurface:
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
        radioSurface:
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
        radioSurface:
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
        radioSurface:
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
        radioSurface: (surface: SurfaceScheme, darkMode: boolean) =>
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
        radioSurface: (surface: SurfaceScheme, darkMode: boolean) =>
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
      }
    },
    corners:
    {
      square: { radioSurface: { rounded: "none" } },
      default: { radioSurface: { rounded: true } },
      circle: { radioSurface: { rounded: "full" } }
    },
    dotSize:
    {
      sm:
      {
        radioIcon:
        {
          children: <path fill="currentColor" stroke="currentColor" d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" />
        }
      },
      md:
      {
        radioIcon:
        {
          children: <path fill="currentColor" stroke="currentColor" d="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" />
        }
      },
      lg:
      {
        radioIcon:
        {
          children: <path fill="currentColor" stroke="currentColor" d="M12 6A6 6 0 1 1 6 12A6 6 0 0 1 12 6M6 12A6 6 0 0 0 15Z" />
        }
      }
    }
  }
}

export default config
