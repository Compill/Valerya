import { SurfaceScheme } from "@katia/surface";
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
      fontSize: "sm"
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
      },
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