import { SurfaceScheme } from "@valerya/surface";
import { Config } from "./types";

const config: Config =
{
  defaultScheme: "light",
  defaultTraits:
  {
    variant: "default",
    corners: "default",
  },
  defaultProps:
  {
    item: (surface: SurfaceScheme, darkMode: boolean) =>
    (
      {
        scheme: surface
      }
    ),
    itemHeader:
    {
      py: "2",
    }
    ,
    itemHeaderLabel:
    {
      mx: "4",
    },
    itemHeaderCollapseButton:
    {
      mx: "4",
      p: '0',
      h: "6",
      corners: "pill"
    },
    itemContent:
    {
      px: "4",
      py: "4",
      textSize: "sm"
    },
    divider:
    {
      layer: "mainInv",
      bgOpacity: "15"
    }
  },
  subComponents: ["accordion", "item", "itemHeader", "itemHeaderLabel", "itemHeaderCollapseButton", "itemContent", "divider"],
  traits:
  {
    variant:
    {
      default:
      {
        accordion:
        {
          border: "none",
        },
      },
      menu:
      {
        item:
        {
          layer: "mainLayer"
        },
        itemHeaderCollapseButton:
        {
          variant: "borderless"
        }
      },
      bordered:
      {
        item: (surface: SurfaceScheme, darkMode: boolean) => (
          {
            border: "xs",
            borderColor: surface.layers.mainInv.color,
            borderOpacity: "15"
          }
        )
      }
    },
    corners:
    {
      square: {},
      default:
      {
        item:
        {
          rounded: true
        },
        itemHeader:
        {
          rounded: true
        }
      }
    }
  }
};

export default config