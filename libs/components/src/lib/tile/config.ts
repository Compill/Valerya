import { Config } from "./types";

export const config: Config =
{
  defaultSurface: "light",
  defaultProps:
  {
    p: "3",
    rounded: true
  },
  traits:
  {
    variant:
    {
      default:
      {
        layer: "main",
      },
      light:
      {
        layer: "alt",
      }
    }
  }
}

export default config
