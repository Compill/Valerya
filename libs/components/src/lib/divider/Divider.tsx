import { ComponentManager, useComponentConfig, useFirstRender } from "@katia/core";
import { ComponentTheme } from "@soperio/react";
import React from "react";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Soperio.Divider";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface DividerProps extends ComponentProps {
  theme?: ComponentTheme,
  config?: ExtendConfig;
}

/**
 *
 *
 */
export const Divider = React.forwardRef<HTMLHRElement,DividerProps>(({
  variant = "default",
  theme = "default",
  orientation,
  config,
  ...props
}: DividerProps, ref) => {
  const firstRender = useFirstRender();

  const styles = useComponentConfig(COMPONENT_ID, theme, config, { variant,orientation }, props);
  return (
    <hr

    transition={firstRender ? "none" : "all"}
      {...styles}
      {...props}
      ref={ref} />

  );
});
