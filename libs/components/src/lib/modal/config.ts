import { SurfaceScheme } from "@katia/surface";
import { ColorTheme } from "@soperio/react";
import { Config } from "./types";

const config: Config =
{
  defaultScheme: "light",
  defaultTraits:
  {
    variant: "default",
    corners: "default",
    size: "md"
  },
  defaultProps:
  {
    backdrop:
    {
      bgColor: "black",
      bgOpacity: "50"
    },
    modalWrapper:
    {
      display: "flex",
      justifyContent: "center",
      // bgColor: darkMode ? theme.background2 : theme.background1,
    },
    header:
    {
      ps: "7",
      // px: "7",
      py: "3",
      minH: "16"
    },
    headerCloseButton:
    {
      mx: "4",
      p: '0',
      h: "24px",
      variant: "borderless"
    },
    modalContent:
    {
      position: "relative",
      z: 1200,
    },
    body:
    {
      px: "7",
      py: "5",
      fontSize: "sm"
    },
    footer:
    {
      px: "7",
      py: "3",
      minH: "16"
    },
    divider:
    {
      h: "px",
      // bgOpacity: "15", // Remove traits redefinition when soperio's parseProps don't have issue with prop overwriting anymore
    }
  },
  subComponents: ["backdrop", "modalWrapper", "modalContent", "header", "headerTitle", "headerCloseButton", "body", "footer", "divider"],
  traits:
  {
    variant:
    {
      default:
      {
        modalContent: (surface: SurfaceScheme, darkMode: boolean) =>
        (
          {
            layer: "main",
            border: "none",
          }
        ),
        divider: (surface: SurfaceScheme, darkMode: boolean) =>
        (
          {
            bgColor: surface.layers.main.onColor,
            bgOpacity: "15",
          }
        )
      },
      bordered:
      {
        modalContent: (surface: SurfaceScheme, darkMode: boolean) =>
        (
          {
            layer: "main",
            border: "sm",
            borderColor: surface.layers.main.onColor,
          }
        ),
        divider: (surface: SurfaceScheme, darkMode: boolean) =>
        (
          {
            bgColor: surface.layers.main.onColor,
            bgOpacity: "15",
          }
        )
      },
    },
    corners:
    {
      square: {},
      default:
      {
        modalContent:
        {
          rounded: true
        }
      }
    },
    size:
    {
      xs:
      {
        modalContent:
        {
          maxW: "20rem"
        }
      },
      sm:
      {
        modalContent:
        {
          maxW: "24rem"
        }
      },
      md:
      {
        modalContent:
        {
          maxW: "28rem"
        }
      },
      lg:
      {
        modalContent:
        {
          maxW: "32rem"
        }
      },
      xl:
      {
        modalContent:
        {
          maxW: "36rem"
        }
      },
      x2:
      {
        modalContent:
        {
          maxW: "40rem"
        }
      },
      x3:
      {
        modalContent:
        {
          maxW: "44rem"
        }
      },
      x4:
      {
        modalContent:
        {
          maxW: "48rem"
        }
      },
      x5:
      {
        modalContent:
        {
          maxW: "52rem"
        }
      },
      x6:
      {
        modalContent:
        {
          maxW: "56rem"
        }
      },
    }
  }
};

export default config
