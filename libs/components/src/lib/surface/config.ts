import { SurfaceScheme } from "@katia/surface"
import { Config } from "./types"

const config:Config =
{
  defaultSurface: "light",
  defaultProps:
  {
    stateDisabled:
    {
      cursor: "default"
    }
  },
  defaultTraits:
  {
    layer: "main",
  },
  traits:
  {
    layer:
    {
      none: {

      },
      main: (surface: SurfaceScheme, darkMode: boolean) =>
      (
        {
          bgColor: surface.layers.main.color,
          hover_bgColor: surface.layers.main.hover.color,
          textColor: surface.layers.main.onColor,
          hover_textColor: surface.layers.main.hover.onColor,
          stateSelected:
          {
            bgColor: surface.layers.main.selected.color,
            hover_bgColor: surface.layers.main.hover.selected.color,
            textColor: surface.layers.main.selected.onColor,
            hover_textColor: surface.layers.main.hover.selected.onColor,
          },
          stateActive:
          {
            bgColor: surface.layers.main.active.color,
            hover_bgColor: surface.layers.main.hover.active.color,
            textColor: surface.layers.main.active.onColor,
            hover_textColor: surface.layers.main.hover.active.onColor,
          },
          stateDisabled:
          {
            bgColor: surface.layers.main.disabled.color,
            hover_bgColor: surface.layers.main.disabled.color,
            textColor: surface.layers.main.disabled.onColor,
            hover_textColor: surface.layers.main.disabled.onColor,
          }
        }
      ),
      mainInv: (surface: SurfaceScheme, darkMode: boolean) =>
      (
        {
          bgColor: surface.layers.mainInv.color,
          hover_bgColor: surface.layers.mainInv.hover.color,
          textColor: surface.layers.mainInv.onColor,
          hover_textColor: surface.layers.mainInv.hover.onColor,
          stateSelected:
          {
            bgColor: surface.layers.mainInv.selected.color,
            hover_bgColor: surface.layers.mainInv.hover.selected.color,
            textColor: surface.layers.mainInv.selected.onColor,
            hover_textColor: surface.layers.mainInv.hover.selected.onColor,
          },
          stateActive:
          {
            bgColor: surface.layers.mainInv.active.color,
            hover_bgColor: surface.layers.mainInv.hover.active.color,
            textColor: surface.layers.mainInv.active.onColor,
            hover_textColor: surface.layers.mainInv.hover.active.onColor,
          },
          stateDisabled:
          {
            bgColor: surface.layers.mainInv.disabled.color,
            hover_bgColor: surface.layers.mainInv.disabled.color,
            textColor: surface.layers.mainInv.disabled.onColor,
            hover_textColor: surface.layers.mainInv.disabled.onColor,
          }
        }
      ),
      mainInvHovMain: (surface: SurfaceScheme, darkMode: boolean) =>
      (
        {
          bgColor: surface.layers.mainInv.color,
          hover_bgColor: surface.layers.main.color,
          textColor: surface.layers.mainInv.onColor,
          hover_textColor: surface.layers.main.onColor,
          stateSelected:
          {
            bgColor: surface.layers.mainInv.selected.color,
            hover_bgColor: surface.layers.main.hover.selected.color,
            textColor: surface.layers.mainInv.selected.onColor,
            hover_textColor: surface.layers.main.hover.selected.onColor,
          },
          stateActive:
          {
            bgColor: surface.layers.mainInv.active.color,
            hover_bgColor: surface.layers.main.hover.active.color,
            textColor: surface.layers.mainInv.active.onColor,
            hover_textColor: surface.layers.main.hover.active.onColor,
          },
          stateDisabled:
          {
            bgColor: surface.layers.mainInv.disabled.color,
            hover_bgColor: surface.layers.main.disabled.color,
            textColor: surface.layers.mainInv.disabled.onColor,
            hover_textColor: surface.layers.main.disabled.onColor,
          }
        }
      ),
      mainLayer: (surface: SurfaceScheme, darkMode: boolean) =>
      (
        {
          bgColor: surface.layers.mainLayer.color,
          hover_bgColor: surface.layers.mainLayer.hover.color,
          textColor: surface.layers.mainLayer.onColor,
          hover_textColor: surface.layers.mainLayer.hover.onColor,
          stateSelected:
          {
            bgColor: surface.layers.mainLayer.selected.color,
            hover_bgColor: surface.layers.mainLayer.hover.selected.color,
            textColor: surface.layers.mainLayer.selected.onColor,
            hover_textColor: surface.layers.mainLayer.hover.selected.onColor,
          },
          stateActive:
          {
            bgColor: surface.layers.mainLayer.active.color,
            hover_bgColor: surface.layers.mainLayer.hover.active.color,
            textColor: surface.layers.mainLayer.active.onColor,
            hover_textColor: surface.layers.mainLayer.hover.active.onColor,
          },
          stateDisabled:
          {
            bgColor: surface.layers.mainLayer.disabled.color,
            hover_bgColor: surface.layers.mainLayer.disabled.color,
            textColor: surface.layers.mainLayer.disabled.onColor,
            hover_textColor: surface.layers.mainLayer.disabled.onColor,
          }
        }
      ),
      mainLayerHovMain: (surface: SurfaceScheme, darkMode: boolean) =>
      (
        {
          bgColor: surface.layers.mainLayer.color,
          hover_bgColor: surface.layers.main.color,
          textColor: surface.layers.mainLayer.onColor,
          hover_textColor: surface.layers.main.onColor,
          stateSelected:
          {
            bgColor: surface.layers.mainLayer.selected.color,
            hover_bgColor: surface.layers.main.selected.color,
            textColor: surface.layers.mainLayer.selected.onColor,
            hover_textColor: surface.layers.main.selected.onColor,
          },
          stateActive:
          {
            bgColor: surface.layers.mainLayer.active.color,
            hover_bgColor: surface.layers.main.active.color,
            textColor: surface.layers.mainLayer.active.onColor,
            hover_textColor: surface.layers.main.active.onColor,
          },
          stateDisabled:
          {
            bgColor: surface.layers.mainLayer.disabled.color,
            hover_bgColor: surface.layers.main.disabled.color,
            textColor: surface.layers.mainLayer.disabled.onColor,
            hover_textColor: surface.layers.main.disabled.onColor,
          }
        }
      ),
      alt: (surface: SurfaceScheme, darkMode: boolean) =>
      (
        {
          bgColor: surface.layers.alt.color,
          hover_bgColor: surface.layers.alt.hover.color,
          textColor: surface.layers.alt.onColor,
          hover_textColor: surface.layers.alt.hover.onColor,
          stateSelected:
          {
            bgColor: surface.layers.alt.selected.color,
            hover_bgColor: surface.layers.alt.hover.selected.color,
            textColor: surface.layers.alt.selected.onColor,
            hover_textColor: surface.layers.alt.hover.selected.onColor,
          },
          stateActive:
          {
            bgColor: surface.layers.alt.active.color,
            hover_bgColor: surface.layers.alt.hover.active.color,
            textColor: surface.layers.alt.active.onColor,
            hover_textColor: surface.layers.alt.hover.active.onColor,
          },
          stateDisabled:
          {
            bgColor: surface.layers.alt.disabled.color,
            hover_bgColor: surface.layers.alt.disabled.color,
            textColor: surface.layers.alt.disabled.onColor,
            hover_textColor: surface.layers.alt.disabled.onColor,
          }
        }
      ),
      altInv: (surface: SurfaceScheme, darkMode: boolean) =>
      (
        {
          bgColor: surface.layers.altInv.color,
          hover_bgColor: surface.layers.altInv.hover.color,
          textColor: surface.layers.altInv.onColor,
          hover_textColor: surface.layers.altInv.hover.onColor,
          stateSelected:
          {
            bgColor: surface.layers.altInv.selected.color,
            hover_bgColor: surface.layers.altInv.hover.selected.color,
            textColor: surface.layers.altInv.selected.onColor,
            hover_textColor: surface.layers.altInv.hover.selected.onColor,
          },
          stateActive:
          {
            bgColor: surface.layers.altInv.active.color,
            hover_bgColor: surface.layers.altInv.hover.active.color,
            textColor: surface.layers.altInv.active.onColor,
            hover_textColor: surface.layers.altInv.hover.active.onColor,
          },
          stateDisabled:
          {
            bgColor: surface.layers.altInv.disabled.color,
            hover_bgColor: surface.layers.altInv.disabled.color,
            textColor: surface.layers.altInv.disabled.onColor,
            hover_textColor: surface.layers.altInv.disabled.onColor,
          }
        }
      ),
      altHovMain: (surface: SurfaceScheme, darkMode: boolean) =>
      (
        {
          bgColor: surface.layers.alt.color,
          hover_bgColor: surface.layers.main.color,
          textColor: surface.layers.alt.onColor,
          hover_textColor: surface.layers.main.onColor,
          stateSelected:
          {
            bgColor: surface.layers.alt.selected.color,
            hover_bgColor: surface.layers.main.selected.color,
            textColor: surface.layers.alt.selected.onColor,
            hover_textColor: surface.layers.main.selected.onColor,
          },
          stateActive:
          {
            bgColor: surface.layers.alt.active.color,
            hover_bgColor: surface.layers.main.active.color,
            textColor: surface.layers.alt.active.onColor,
            hover_textColor: surface.layers.main.active.onColor,
          },
          stateDisabled:
          {
            bgColor: surface.layers.alt.disabled.color,
            hover_bgColor: surface.layers.main.disabled.color,
            textColor: surface.layers.alt.disabled.onColor,
            hover_textColor: surface.layers.main.disabled.onColor,
          }
        }
      ),
    }
  }
}

export default config
