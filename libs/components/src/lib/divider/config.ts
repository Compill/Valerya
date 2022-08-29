import { Config } from "./types";

export const config: Config =
{
  defaultScheme: "neutral",
  defaultTraits:
  {
    variant: "default",
    thickness: "xs"

  },
  traits:
  {
    variant:
    {
      default:
      {
        layer: "main"
      },
      light:
      {
        layer: "alt"
      }
    },
    thickness:
    {
      xs: 
      {
        w: "px",
        h: "px"
      },
      sm:
      {
        w: "0.5",
        h: "0.5"
      },
      md:
      {
        w: "1",
        h: "1"
      },
      lg:
      {
        w: "1.5",
        h: "1.5"
      },
      xl:
      {
        w: "2",
        h: "2"
      }
    }
  }
}

export default config
