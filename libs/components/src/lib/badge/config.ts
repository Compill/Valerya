import { ColorTheme } from "@soperio/react";
import { Config } from "./types";

export const config: Config =
{
  traits:
  {
    size:
    {
      "xs":
      {
        px: "2.5",
        py: "0.5",
        fontSize: "xs"
      },
      "sm":
      {
        px: "3",
        py: "0.5",
        fontSize: "sm"
      },
      "md":
      {
        px: "3.5",
        py: "0.5",
        fontSize: "md"
      },
      "lg":
      {
        px: "4",
        py: "0.5",
        fontSize: "lg"
      },
      "xl":
      {
        px: "5",
        py: "1",
        fontSize: "xl"
      },
      "x2":
      {
        px: "6",
        py: "1",
        fontSize: "x2"
      }
    },
    variant: {
      default: (theme: ColorTheme, darkMode: boolean) =>
      (
        {
          bgColor: theme.default,

          border: "0",
          textColor: theme.textLight1,
          fontWeight: "500"
        }
      ),
      light: (theme: ColorTheme, darkMode: boolean) =>
      (
        {
          bgColor: theme.light,

          border: "0",
          textColor: theme.default,
          fontWeight: "500"
        }
      ),
      outline: (theme: ColorTheme, darkMode: boolean) =>
      (
        {
          bgColor: "transparent",
          border: "2",
          borderColor: theme.default,
          textColor: theme.default,
          fontWeight: "500"
        }
      ),
      "light-outline": (theme: ColorTheme, darkMode: boolean) =>
      (
        {
          bgColor: theme.light,
          border: "2",
          borderColor: theme.default,
          textColor: theme.default,
          fontWeight: "500"
        }
      ),
    },
    shape: {
      square: { rounded: "none" },
      default: { rounded: true },
      rounded: { rounded: true },
      pill: { rounded: "full" }
    }
  }
}

export default config
