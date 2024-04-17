import { forwardRef, IS_DEV } from "@soperio/react";
import { ComponentManager, useSurfaceComponentConfig } from "@valerya/core";
import React from "react";
import { Button } from "../button";
import { useComponentTransition } from "../hooks/useComponentTransition";
import { Icon } from "../icon/Icon";
import { Surface } from "../surface";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Valerya.IconButton"

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface IconButtonProps extends ComponentProps
{
  icon: string
  config?: ExtendConfig;
}

/**
 *
 *
 */
export const IconButton = forwardRef<typeof Surface, IconButtonProps>(({
  size,
  variant,
  corners,
  scheme,
  icon,
  config,
  onMouseDown,
  onClick,
  ...props
}: IconButtonProps, ref) =>
{
  const transition = useComponentTransition();
  const preventFocus = React.useCallback((event: any) =>
  {
    event.preventDefault();
    onMouseDown && onMouseDown(event);
  }, [onMouseDown]);

  const looseFocus = React.useCallback((event: any) =>
  {
    (document.activeElement as HTMLElement).blur();
    onClick && onClick(event);
  }, [onClick]);

  const { scheme: _scheme, styles } = useSurfaceComponentConfig(COMPONENT_ID, scheme, config, { variant, size, corners }, props)

  return (
    <Surface
      as="button"
      scheme={_scheme}
      transition={transition}
      // type={type}
      // focus_ringOffset="2"
      // focus_ringOffsetColor="blue-300"
      // focus_ringWidth="2"
      // focus_outline="none"
      {...styles}
      onMouseDown={preventFocus}
      onClick={looseFocus}
      {...props}
      ref={ref}
    >
      <Icon path={icon} w="100%" h="100%" />
    </Surface>
  );
});

if (IS_DEV)
{
  Button.displayName = "Valerya Button"
}
