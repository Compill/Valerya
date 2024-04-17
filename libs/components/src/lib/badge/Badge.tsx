import { ParentComponent, forwardRef } from "@soperio/react";
import { ComponentManager, useSurfaceComponentConfig } from "@valerya/core";
import { useComponentTransition } from "../hooks/useComponentTransition";
import { Surface } from "../surface";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Valerya.Badge";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface BadgeProps extends ComponentProps, ParentComponent
{
  config?: ExtendConfig;
}

/**
 *
 *
 */
export const Badge = forwardRef<typeof Surface, BadgeProps>(({
  variant,
  size,
  corners,
  scheme,
  config,
  children,
  ...props
}: BadgeProps, ref) =>
{
  const transition = useComponentTransition();


  const { scheme: _scheme, styles } = useSurfaceComponentConfig(COMPONENT_ID, scheme, config, { variant, size, corners }, props);

  return (
    <Surface
      as="span"
      scheme={_scheme}
      transition={transition}
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
