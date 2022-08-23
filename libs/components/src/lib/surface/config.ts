import { SurfaceSchemeSet } from "@katia/core"
import { Config } from "./types"

const config:Config =
{
  defaultProps:
  {
    stateDisabled:
    {
      cursor: "default"
    }
  },
  defaultTraits:
  {
    schemeVariant: "main",
  },
  traits:
  {
    schemeVariant:
    {
      none: {

      },
      main: (surface: SurfaceSchemeSet, darkMode: boolean) =>
      (
        {
          bgColor: surface.main.color,
          hover_bgColor: surface.main.hover.color,
          textColor: surface.main.onColor,
          hover_textColor: surface.main.hover.onColor,
          stateSelected:
          {
            bgColor: surface.main.selected.color,
            hover_bgColor: surface.main.hover.selected.color,
            textColor: surface.main.selected.onColor,
            hover_textColor: surface.main.hover.selected.onColor,
          },
          stateActive:
          {
            bgColor: surface.main.active.color,
            hover_bgColor: surface.main.hover.active.color,
            textColor: surface.main.active.onColor,
            hover_textColor: surface.main.hover.active.onColor,
          },
          stateDisabled:
          {
            bgColor: surface.main.disabled.color,
            hover_bgColor: surface.main.disabled.color,
            textColor: surface.main.disabled.onColor,
            hover_textColor: surface.main.disabled.onColor,
          }
        }
      ),
      mainInv: (surface: SurfaceSchemeSet, darkMode: boolean) =>
      (
        {
          bgColor: surface.mainInv.color,
          hover_bgColor: surface.mainInv.hover.color,
          textColor: surface.mainInv.onColor,
          hover_textColor: surface.mainInv.hover.onColor,
          stateSelected:
          {
            bgColor: surface.mainInv.selected.color,
            hover_bgColor: surface.mainInv.hover.selected.color,
            textColor: surface.mainInv.selected.onColor,
            hover_textColor: surface.mainInv.hover.selected.onColor,
          },
          stateActive:
          {
            bgColor: surface.mainInv.active.color,
            hover_bgColor: surface.mainInv.hover.active.color,
            textColor: surface.mainInv.active.onColor,
            hover_textColor: surface.mainInv.hover.active.onColor,
          },
          stateDisabled:
          {
            bgColor: surface.mainInv.disabled.color,
            hover_bgColor: surface.mainInv.disabled.color,
            textColor: surface.mainInv.disabled.onColor,
            hover_textColor: surface.mainInv.disabled.onColor,
          }
        }
      ),
      mainInvHovMain: (surface: SurfaceSchemeSet, darkMode: boolean) =>
      (
        {
          bgColor: surface.mainInv.color,
          hover_bgColor: surface.main.color,
          textColor: surface.mainInv.onColor,
          hover_textColor: surface.main.onColor,
          stateSelected:
          {
            bgColor: surface.mainInv.selected.color,
            hover_bgColor: surface.main.hover.selected.color,
            textColor: surface.mainInv.selected.onColor,
            hover_textColor: surface.main.hover.selected.onColor,
          },
          stateActive:
          {
            bgColor: surface.mainInv.active.color,
            hover_bgColor: surface.main.hover.active.color,
            textColor: surface.mainInv.active.onColor,
            hover_textColor: surface.main.hover.active.onColor,
          },
          stateDisabled:
          {
            bgColor: surface.mainInv.disabled.color,
            hover_bgColor: surface.main.disabled.color,
            textColor: surface.mainInv.disabled.onColor,
            hover_textColor: surface.main.disabled.onColor,
          }
        }
      ),
      mainLayer: (surface: SurfaceSchemeSet, darkMode: boolean) =>
      (
        {
          bgColor: surface.mainLayer.color,
          hover_bgColor: surface.mainLayer.hover.color,
          textColor: surface.mainLayer.onColor,
          hover_textColor: surface.mainLayer.hover.onColor,
          stateSelected:
          {
            bgColor: surface.mainLayer.selected.color,
            hover_bgColor: surface.mainLayer.hover.selected.color,
            textColor: surface.mainLayer.selected.onColor,
            hover_textColor: surface.mainLayer.hover.selected.onColor,
          },
          stateActive:
          {
            bgColor: surface.mainLayer.active.color,
            hover_bgColor: surface.mainLayer.hover.active.color,
            textColor: surface.mainLayer.active.onColor,
            hover_textColor: surface.mainLayer.hover.active.onColor,
          },
          stateDisabled:
          {
            bgColor: surface.mainLayer.disabled.color,
            hover_bgColor: surface.mainLayer.disabled.color,
            textColor: surface.mainLayer.disabled.onColor,
            hover_textColor: surface.mainLayer.disabled.onColor,
          }
        }
      ),
      mainLayerHovMain: (surface: SurfaceSchemeSet, darkMode: boolean) =>
      (
        {
          bgColor: surface.mainLayer.color,
          hover_bgColor: surface.main.color,
          textColor: surface.mainLayer.onColor,
          hover_textColor: surface.main.onColor,
          stateSelected:
          {
            bgColor: surface.mainLayer.selected.color,
            hover_bgColor: surface.main.selected.color,
            textColor: surface.mainLayer.selected.onColor,
            hover_textColor: surface.main.selected.onColor,
          },
          stateActive:
          {
            bgColor: surface.mainLayer.active.color,
            hover_bgColor: surface.main.active.color,
            textColor: surface.mainLayer.active.onColor,
            hover_textColor: surface.main.active.onColor,
          },
          stateDisabled:
          {
            bgColor: surface.mainLayer.disabled.color,
            hover_bgColor: surface.main.disabled.color,
            textColor: surface.mainLayer.disabled.onColor,
            hover_textColor: surface.main.disabled.onColor,
          }
        }
      ),
      alt: (surface: SurfaceSchemeSet, darkMode: boolean) =>
      (
        {
          bgColor: surface.alt.color,
          hover_bgColor: surface.alt.hover.color,
          textColor: surface.alt.onColor,
          hover_textColor: surface.alt.hover.onColor,
          stateSelected:
          {
            bgColor: surface.alt.selected.color,
            hover_bgColor: surface.alt.hover.selected.color,
            textColor: surface.alt.selected.onColor,
            hover_textColor: surface.alt.hover.selected.onColor,
          },
          stateActive:
          {
            bgColor: surface.alt.active.color,
            hover_bgColor: surface.alt.hover.active.color,
            textColor: surface.alt.active.onColor,
            hover_textColor: surface.alt.hover.active.onColor,
          },
          stateDisabled:
          {
            bgColor: surface.alt.disabled.color,
            hover_bgColor: surface.alt.disabled.color,
            textColor: surface.alt.disabled.onColor,
            hover_textColor: surface.alt.disabled.onColor,
          }
        }
      ),
      altInv: (surface: SurfaceSchemeSet, darkMode: boolean) =>
      (
        {
          bgColor: surface.altInv.color,
          hover_bgColor: surface.altInv.hover.color,
          textColor: surface.altInv.onColor,
          hover_textColor: surface.altInv.hover.onColor,
          stateSelected:
          {
            bgColor: surface.altInv.selected.color,
            hover_bgColor: surface.altInv.hover.selected.color,
            textColor: surface.altInv.selected.onColor,
            hover_textColor: surface.altInv.hover.selected.onColor,
          },
          stateActive:
          {
            bgColor: surface.altInv.active.color,
            hover_bgColor: surface.altInv.hover.active.color,
            textColor: surface.altInv.active.onColor,
            hover_textColor: surface.altInv.hover.active.onColor,
          },
          stateDisabled:
          {
            bgColor: surface.altInv.disabled.color,
            hover_bgColor: surface.altInv.disabled.color,
            textColor: surface.altInv.disabled.onColor,
            hover_textColor: surface.altInv.disabled.onColor,
          }
        }
      ),
      altHovMain: (surface: SurfaceSchemeSet, darkMode: boolean) =>
      (
        {
          bgColor: surface.alt.color,
          hover_bgColor: surface.main.color,
          textColor: surface.alt.onColor,
          hover_textColor: surface.main.onColor,
          stateSelected:
          {
            bgColor: surface.alt.selected.color,
            hover_bgColor: surface.main.selected.color,
            textColor: surface.alt.selected.onColor,
            hover_textColor: surface.main.selected.onColor,
          },
          stateActive:
          {
            bgColor: surface.alt.active.color,
            hover_bgColor: surface.main.active.color,
            textColor: surface.alt.active.onColor,
            hover_textColor: surface.main.active.onColor,
          },
          stateDisabled:
          {
            bgColor: surface.alt.disabled.color,
            hover_bgColor: surface.main.disabled.color,
            textColor: surface.alt.disabled.onColor,
            hover_textColor: surface.main.disabled.onColor,
          }
        }
      ),
    }
  }
}

export default config
