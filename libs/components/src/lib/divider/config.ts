import { Config } from "./types";

export const config: Config =

{
  defaultTraits:
  {
    variant: "default",
    orientation: "horizontal",

  },
  traits:
  {
    orientation:
    {
      vertical:
      {
        borderS: "2",
        border: "none",
        w: "1px",
        h: "100%",
      },
      horizontal:
      {
        borderB: "1px",
        w: "100%",
      },
    },
    variant:
    {
      default:
      {
        borderStyle: "solid",
        opacity: "30",
        borderColor: "black"
      },
      dashed:
      {
        borderStyle: "dashed",
        opacity: "30",
        borderColor: "black"
      }
    }
  }
}

export default config
