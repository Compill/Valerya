import { Config } from "./types";

export const config: Config =
{
  defaultScheme: "light",
  defaultProps:
  {
    p: "3",
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
