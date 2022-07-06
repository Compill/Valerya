import { ColorTheme } from "@soperio/react";
import { Config } from "./types";

const config: Config =
{
  defaultProps:
  {
    thickness: "2px",
    progress: 75
  },
  defaultTraits:
  {
    variant: "default",
    size: "md"
  },
  traits:
  {
    size: {
      "sm":
      {
        w: "4",
        h: "4",
      },
      "md":
      {
        w: "5",
        h: "5",
      },
      "lg":
      {
        w: "6",
        h: "6",
      },
      "xl":
      {
        w: "7",
        h: "7",
      },
      "x2":
      {
        w: "8",
        h: "8",
      }
    },
    variant:
    {
      default: (theme: ColorTheme, darkMode: boolean) =>
      (
        {
          textColor: theme.default,
          trackColor: "transparent"
        }
      ),
      track: (theme: ColorTheme, darkMode: boolean) =>
      (
        {
          textColor: theme.default,
          trackColor: theme.light
        }
      ),
    },
  }
}

export default config
