import { ComponentManager, useFirstRender, useSurfaceComponentConfig } from "@valerya/core";
import { forwardRef } from "@soperio/react";
import { Surface } from "../surface";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Valerya.Divider";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface DividerProps extends ComponentProps
{
  orientation?: "horizontal" | "vertical"
  config?: ExtendConfig;
}

/**
 *
 *
 */
export const Divider = forwardRef<"div", DividerProps>(({
  variant,
  thickness,
  scheme,
  orientation = "horizontal",
  config,
  ...props
}: DividerProps, ref) =>
{
  const firstRender = useFirstRender();

  const {scheme: _scheme, styles } = useSurfaceComponentConfig(COMPONENT_ID, scheme, config, { variant, thickness }, props);

  // Redefine correct values based on orientation
  // width and height can then be overwritten by {...props}
  styles[orientation === "horizontal" ? "w" : "h"] = "100%"

  return (
    <Surface
      scheme={_scheme}
      transition={firstRender ? "none" : "all"}
      {...styles}
      {...props}
      ref={ref} />

  );
});
