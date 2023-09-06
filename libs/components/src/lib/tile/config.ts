import { Config } from "./types";

export const config: Config =
{
  defaultScheme: "default",
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
      },
      glass:
      {
        layer: "mainGlass",
      }
    }
  }
}

export default config
