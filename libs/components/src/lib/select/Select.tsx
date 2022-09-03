import { ComponentManager, useFirstRender, useSurfaceComponentConfig } from "@katia/core";
import { forwardRef, HTMLSelectProps, ParentComponent, HTMLDivProps, RightJoinProps } from "@soperio/react";
import React from "react";
import { Surface } from "../surface";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";


const COMPONENT_ID = "Katia.Select";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface SelectProps extends ComponentProps, ParentComponent, RightJoinProps<Omit<HTMLSelectProps, "size">, HTMLDivProps>
{
  config?: ExtendConfig,
  length?: number;
}

/**
 *
 *
 */
export const Select = forwardRef<"select", SelectProps>((
  {
    size,
    variant,
    corners,
    scheme,
    config,
    length,
    children,
    ...props
  }, ref) =>
{
  const firstRender = useFirstRender();

  const { scheme: _scheme, styles } = useSurfaceComponentConfig(COMPONENT_ID, scheme, config, { variant, size, corners }, props)

  return (
    <Surface
      scheme={_scheme}
      as="select"
      transition={firstRender ? "none" : "all"}
      {...(length ? { size: length } : null)}
      {...styles}
      {...props}
      ref={ref}
    >
      {children}
    </Surface>
  );
});
