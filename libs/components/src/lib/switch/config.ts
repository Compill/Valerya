import { SurfaceScheme } from "@valerya/surface";
import { Config } from "./types";

const config: Config =
{
  defaultScheme: "default",
  defaultProps:
  {
    switch:
    {
      dflex: true,
      placeItems: "center",
      cursor: "pointer",
      stateDisabled:
      {
        cursor: "not-allowed"
      }
    },
    track:
    {
      
    },
    thumb:
    {
      
    },
    label: 
    {
      flexGrow: "1"
    }

  },
  defaultTraits:
  {
    size: "lg",
    corners: "default",
    variant: "default"
  },
  subComponents: ["switch", "track", "thumb", "label"],
  traits:
  {
    size:
    {
      // Track height & thumb height should be the same
      sm:
      {
        track:
        {
          w: "7",
          h: "3.5",
          p: "0.5",
        },
        thumb:
        {
          w: "3.5",
          h: "3.5",
        },
        label:
        {
          textSize: "sm",
          pe: "2"
        },
      },
      md:
      {
        track:
        {
          w: "8",
          h: "4",
          p: "0.5",
        },
        thumb:
        {
          w: "4",
          h: "4",
        },
        label:
        {
          textSize: "md",
          pe: "2.5"
        },

      },
      lg:
      {
        track:
        {
          w: "10",
          h: "5",
          p: "1",
        },
        thumb:
        {
          w: "5",
          h: "5",
        },
        label:
        {
          textSize: "lg",
          pe: "3"
        },

      },
      xl:
      {
        track:
        {
          w: "12",
          h: "6",
          p: "1",
        },
        thumb:
        {
          w: "6",
          h: "6",
        },
        label:
        {
          textSize: "xl",
          pe: "3.5"
        },
      },
      x2:
      {
        track:
        {
          w: "14",
          h: "7",
          p: "1",
        },
        thumb:
        {
          w: "7",
          h: "7",
        },
        label:
        {
          textSize: "x2",
          pe: "4"
        },
      },
    },
    variant:
    {
      default:
      {
        track: (surface: SurfaceScheme, darkMode: boolean) =>
        (
          {
            layer: "alt",
            display: "inline-flex",
            justifyContent: "start",
            flexShrink: "0",
            cursor: "pointer",
            duration: "150",
            boxSizing: "content-box",
            stateChecked:
            {
              layer: "main"
            }
          }
        ),
        thumb: (surface: SurfaceScheme, darkMode: boolean) =>
        (
          {
            bgColor: darkMode ? surface.layers.alt.onColor : surface.layers.main.onColor,
            easing: "linear",
            duration: "300",
            position: "relative",
            start: "0%",
            stateChecked:
            {
              start: "50%",
              easing: "out",
              bgColor: surface.layers.main.onColor,
            },
            stateDisabled:
            {
              bgColor: darkMode ? surface.layers.alt.disabled.onColor : surface.layers.main.disabled.onColor,
            },
            stateCheckedDisabled:
            {
              bgColor: surface.layers.main.disabled.onColor,
            }
          }
        ),
        label: {
          textSize: "lg",
          textAlign: "center"
        }
      },
      inverse:
      {
        track: (surface: SurfaceScheme, darkMode: boolean) =>
        (
          {
            layer: "altInv",
            display: "inline-flex",
            justifyContent: "start",
            flexShrink: "0",
            cursor: "pointer",
            duration: "150",
            boxSizing: "content-box",
            stateChecked:
            {
              layer: darkMode ? "mainInv" : "main"
            }
          }
        ),
        thumb: (surface: SurfaceScheme, darkMode: boolean) =>
        (
          {
            bgColor: surface.layers.altInv.onColor,
            easing: "linear",
            duration: "300",
            position: "relative",
            start: "0%",
            stateChecked:
            {
              start: "50%",
              easing: "out",
              bgColor: darkMode ? surface.layers.mainInv.onColor : surface.layers.main.onColor,
            },
            stateDisabled:
            {
              bgColor: surface.layers.altInv.disabled.onColor,
            },
            stateCheckedDisabled:
            {
              bgColor: darkMode ? surface.layers.mainInv.disabled.onColor : surface.layers.main.disabled.onColor,
            }
          }
        ),
        label: {
          textSize: "lg",
          textAlign: "center"
        }
      },
    },
    corners:
    {
      square: {},
      default:
      {
        switch:
        {

        },
        track:
        {
          rounded: "full"
        },
        thumb:
        {
          rounded: "full"
        },
      },
      rounded:
      {
        switch:
        {

        },
        track:
        {
          rounded: true
        },
        thumb:
        {
          rounded: true
        },
      }
    }
  }
}

export default config
