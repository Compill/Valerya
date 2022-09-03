import { SurfaceScheme } from "@katia/surface";
import { Config } from "./types";

const config: Config =
{
  defaultScheme: "default",
  defaultProps:
  {
    switch:
    {

    },
    track:
    {
      display: "inline-block",
      position: "relative",
      cursor: "pointer"
    },
    thumb:
    {
      position: "absolute",
      easing: "linear",
      duration: "300",
    },

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
    // TODO Whole design
    // TODO Yohan has set sizes in pixels...
    size:
    {
      sm:
      {
        track:
        {
          w: "8",
          h: "4",
        },
        thumb:
        {
          w: "3.5",
          h: "3.5",
        },
        label:
        {

        },
      },
      md:
      {
        track:
        {
          w: "9",
          h: "5",
        },
        thumb:
        {
          w: "4",
          h: "4",
        },
        label:
        {

        },

      },
      lg:
      {
        track:
        {
          w: "10",
          h: "6",
        },
        thumb:
        {
          w: "5",
          h: "5",
        },
        label:
        {

        },

      },
      xl:
      {
        switch:
        {
          w: "52px",
        },
        track:
        {
          w: "52px",
          h: "28px",
        },
        thumb:
        {
          w: "24px",
          h: "24px",
        },
        label:
        {

        },
      },
      x2:
      {
        switch:
        {
          w: "52px",
        },
        track:
        {
          w: "52px",
          h: "28px",
        },
        thumb:
        {
          w: "24px",
          h: "24px",
        },
        label:
        {

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
            layer: "alt"
            // TODO
            // stateDisabled:
            // {
            //   bgOpacity: "40",
            //   cursor: "default"
            // }
          }
        ),
        thumb: (surface: SurfaceScheme, darkMode: boolean) =>
        (
          {
            layer: "mainInv",
            ms: "2px",
            stateChecked:
            {
              layer: "main",
              transform: true,
              translateX: "-100%",
              ms: "calc(100% - 2px)",
              easing: "out",
            }
          }
        ),
        label: {
          fontSize: "lg",
          textAlign: "center"
        }
      },
      inverse:
      {
        // track: (surface: SurfaceScheme, darkMode: boolean) =>
        // (
        //   {

        //     bgColor: theme.background5,
        //     shadow: " 0 0 5px grey",
        //     easing: "linear",
        //     duration: "300",
        //     stateChecked:
        //     {
        //       bgColor: theme.default,
        //       bgOpacity: "50",
        //     },
        //     stateDisabled:
        //     {
        //       bgOpacity: "40",
        //       cursor: "default"
        //     }
        //   }
        // ),
        // thumb: (surface: SurfaceScheme, darkMode: boolean) =>
        // (
        //   {
        //     bgColor: theme.background1,
        //     ms: "2px",
        //     mt: "2px",
        //     easing: "linear",
        //     duration: "300",

        //     stateChecked:
        //     {
        //       transform: true,
        //       translateX: "-100%",
        //       ms: "calc(100% - 2px)",
        //       easing: "out",
        //       bgColor: theme.default,
        //     }
        //   }
        // ),
        label: {
          fontSize: "lg",
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
