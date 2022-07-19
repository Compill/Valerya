import { SurfaceSchemeSet } from "@katia/core";
import { Config } from "./types";

const config: Config =
{
  defaultProps: {
    hover_transition: "all",
    easing: "linear",
    duration: "300",
    hover_duration: "300",
    fontWeight: "500",
    stateDisabled:
    {
      cursor: "default"
    },
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
          textColor: surface.main.color
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
          hoverable: false,
          stateSelected:
          {
            bgColor: "transparent",
            hover_bgColor: "transparent",
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
          hover_borderColor: surface.main.color,
          stateSelected:
          {
            bgColor: surface.main.color,
            textColor: surface.main.onColor,
            hover_borderColor: surface.main.selected.color
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
