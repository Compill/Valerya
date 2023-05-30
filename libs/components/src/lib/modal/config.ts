import { SurfaceScheme } from "@valerya/surface";
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
      bgColor: "#000000",
      bgOpacity: "75"
    },
    modalWrapper:
    {
      display: "flex",
      justifyContent: "center",
      overflow: "hidden",
    },
    header:
    {
      ps: "7",
      py: "3",
      minH: "16",
      dflex: true,
      alignItems: "center",
      textSize: "lg",
      fontWeight: "600"
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
      overflow: "hidden",
      dflex: true,
      flexCol: true,
      maxH: "calc(100% - 6rem)",
    },
    body:
    {
      px: "7",
      py: "5",
      textSize: "sm",
      overflow: "auto",
      flex: "1"
    },
    footer:
    {
      px: "7",
      py: "3",
      minH: "16",
      dflex: true,
      alignItems: "center",
    },
    divider:
    {
      h: "px",
      bgOpacity: "15", // Remove traits redefinition when soperio's parseProps don't have issue with prop overwriting anymore
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
          w: "20rem"
        }
      },
      sm:
      {
        modalContent:
        {
          w: "24rem"
        }
      },
      md:
      {
        modalContent:
        {
          w: "28rem"
        }
      },
      lg:
      {
        modalContent:
        {
          w: "32rem"
        }
      },
      xl:
      {
        modalContent:
        {
          w: "36rem"
        }
      },
      x2:
      {
        modalContent:
        {
          w: "40rem"
        }
      },
      x3:
      {
        modalContent:
        {
          w: "44rem"
        }
      },
      x4:
      {
        modalContent:
        {
          w: "48rem"
        }
      },
      x5:
      {
        modalContent:
        {
          w: "52rem"
        }
      },
      x6:
      {
        modalContent:
        {
          w: "56rem"
        }
      },
    }
  }
};

export default config
