import { HTMLDivProps, HTMLSelectProps, ParentComponent, RightJoinProps, forwardRef } from "@soperio/react";
import { ComponentManager, useSurfaceComponentConfig } from "@valerya/core";
import { useComponentTransition } from "../hooks/useComponentTransition";
import { Surface } from "../surface";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";


const COMPONENT_ID = "Valerya.Select";

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
  const transition = useComponentTransition();

  const { scheme: _scheme, styles } = useSurfaceComponentConfig(COMPONENT_ID, scheme, config, { size, corners, variant }, props)

  return (
    <Surface
      scheme={_scheme}
      as="select"
      transition={transition}
      {...(length ? { size: length } : null)}
      {...styles}
      {...props}
      ref={ref}
    >
      {children}
    </Surface>
  );
});
