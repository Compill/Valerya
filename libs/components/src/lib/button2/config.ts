import { SurfaceSchemeSet } from "@katia/core";
import { Config } from "./types";

const config: Config =
{
  defaultProps: {
    stateDisabled:
    {
      cursor: "default"
    },
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
      default: (surface: SurfaceSchemeSet, darkMode: boolean) =>
      (
        {
          schemeVariant: "main",
          border: "0",
        }
      ),
      light: (surface: SurfaceSchemeSet, darkMode: boolean) =>
      (
        {
          schemeVariant: "altHoverMain",
        }
      ),
      link: (surface: SurfaceSchemeSet, darkMode: boolean) =>
      (
        {
          schemeVariant: "mainLayer",
          px: "0",
          py: "0",
          p: "0",
          appearanceNone: true,
          hover_textDecoration: "underline",

          stateSelected:
          {
            textDecoration: "underline",
          },
          stateDisabled:
          {
            hover_textDecoration: "no-underline",
            cursor: "default"
          }
        }
      ),
      outline: (surface: SurfaceSchemeSet, darkMode: boolean) =>
      (
        {
          schemeVariant: "mainLayerHoverMain",
          border: "2",
          borderColor: surface.main.color,
          stateSelected:
          {
            bgColor: surface.main.color,
            textColor: surface.main.onColor
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
      borderless: (surface: SurfaceSchemeSet, darkMode: boolean) =>
      (
        {
          schemeVariant: "mainLayer",
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
