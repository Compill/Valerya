import { ComponentManager, useFirstRender, useSurfaceComponentConfig } from "@katia/core";
import { ComponentTheme, forwardRef, ParentComponent } from "@soperio/react";
import React from "react";
import { Surface } from "../surface";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Soperio.Badge";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface BadgeProps extends ComponentProps, ParentComponent
{
  theme?: ComponentTheme,
  config?: ExtendConfig;
}

/**
 *
 *
 */
export const Badge = forwardRef<typeof Surface, BadgeProps>(({
  variant = "default",
  size = "md",
  shape = "rounded",
  scheme,
  config,
  children,
  ...props
}: BadgeProps, ref) =>
{
  const firstRender = useFirstRender();

  const { scheme: _scheme, styles } = useSurfaceComponentConfig(COMPONENT_ID, scheme, config, { variant, size, shape }, props);

  return (
    <Surface
      as="span"
      scheme={_scheme}
      transition={firstRender ? "none" : "all"}
      w="auto"
      verticalAlign="middle"
      {...styles}
      {...props}
      ref={ref}
    >
      {children}
    </Surface>
  );
});
