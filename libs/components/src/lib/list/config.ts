import { SurfaceScheme } from "@valerya/surface";
import { Config } from "./types";

const config: Config =
{
  defaultScheme: "light",
  defaultTraits:
  {
    variant: "default",
    corners: "default",
    size: "md",
    dividerSize: "xs"
  },
  defaultProps:
  {
    list:
    {
      listStyle: 'none',
      m: "0",
      p: "0",
      position: 'relative',
    },
    listItem:
    {
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
      position: 'relative',
      mx: "auto",
      textDecoration: false,
      w: '100%',
      boxSizing: 'border-box',
      textAlign: 'start',
      hoverable: true
    },
    listItemIcon:
    {
      display: 'flex',
      justifyContent: 'start',
      me: "10px",
      w: '100%',
    },
    divider:
    {
      layer: "mainInv",
      bgOpacity: "15",
    }
  },
  subComponents: ["list", "listItem", "listItemIcon", "divider"],
  traits:
  {
    size:
    {
      xs:
      {
        listItem:
        {
          textSize: "xs",
          px: "2",
          py: "1",
        },
        listItemIcon:
        {
          w: "4",
          h: "4",
        }
      },
      sm:
      {
        listItem:
        {
          textSize: "sm",
          px: "3",
          py: "2",
        },
        listItemIcon:
        {
          w: "5",
          h: "5",
        }
      },
      md:
      {
        listItem:
        {
          textSize: "md",
          px: "4",
          py: "3",
        },
        listItemIcon:
        {
          w: "6",
          h: "6",
        }
      },
      lg:
      {
        listItem:
        {
          textSize: "lg",
          px: "5",
          py: "4",
        },
        listItemIcon:
        {
          w: "7",
          h: "7",
        }
      },
      xl:
      {
        listItem:
        {
          textSize: "xl",
          px: "6",
          py: "5",
        },
        listItemIcon:
        {
          w: "8",
          h: "8",
        }
      },
    },
    variant:
    {
      default:
      {
        listItem: (surface: SurfaceScheme, darkMode: boolean) =>
        (
          {
            scheme: surface,
            layer: "main",
          }
        ),
      },
      light:
      {
        listItem: (surface: SurfaceScheme, darkMode: boolean) =>
        (
          {
            scheme: surface,
            layer: "altHovMain",
          }
        ),
      },
      menu:
      {
        listItem: (surface: SurfaceScheme, darkMode: boolean) =>
        (
          {
            scheme: surface,
            layer: "mainLayerHovMain",
          }
        ),
      }
    },
    corners:
    {
      default: {},
      rounded:
      {
        list:
        {
          rounded: true
        }
      },
    },
    dividerSize:
    {
      xs:
      {
        divider:
        {
          thickness: "xs"
        }
      },
      sm:
      {
        divider:
        {
          thickness: "sm"
        }
      },
      md:
      {
        divider:
        {
          thickness: "md"
        }
      },
      lg:
      {
        divider:
        {
          thickness: "lg"
        }
      },
      xl:
      {
        divider:
        {
          thickness: "xl"
        }
      }
    }
  }
};

export default config
