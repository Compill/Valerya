import { Config } from "./types";

const config: Config =
{
  defaultProps: {
    p: "0",
    dflex: true,
    placeContent: "center",
    alignItems: "center"
  },
  defaultTraits:
  {
    size: "md"
  },
  traits:
  {
    size:
    {
      "sm":
      {
        w: "6",
        h: "6",
        p: "1.5"
      },
      "md":
      {
        w: "8",
        h: "8",
        p: "2"
      },
      "lg":
      {
        w: "10",
        h: "10",
        p: "2.5"
      },
      "xl":
      {
        w: "12",
        h: "12",
        p: "2.5"
      },
      "x2":
      {
        w: "14",
        h: "14",
        p: "3"
      },
      // "x3":
      // {
      //   w: "2",
      //   h: "2"
      // },
      // "x4":
      // {
      //   w: "2",
      //   h: "2"
      // },
      // "x5":
      // {
      //   w: "2",
      //   h: "2"
      // },
      // "x6":
      // {
      //   w: "2",
      //   h: "2"
      // },
      // "x7":
      // {
      //   w: "2",
      //   h: "2"
      // },

    },
  }
}

export default config
