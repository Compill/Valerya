import { ComponentManager, useSurfaceComponentConfig, useFirstRender } from "@katia/core";
import { forwardRef } from "@soperio/react";
import { IS_DEV } from "@soperio/utils";
import React from 'react';
import { Surface } from "../surface";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Katia.Button"

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface ButtonProps extends ComponentProps
{
  config?: ExtendConfig;
}

/**
 *
 *
 */
export const Button = forwardRef<typeof Surface, ButtonProps>(({
  size,
  variant,
  corners,
  scheme,
  config,
  type = "button",
  onMouseDown,
  onClick,
  ...props
}: ButtonProps, ref) =>
{
  const firstRender = useFirstRender();
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

  const styles = useSurfaceComponentConfig(COMPONENT_ID, scheme, config, { variant, size, corners }, props)

  return (
    <Surface
      as="button"
      scheme={scheme}
      transition={firstRender ? "none" : "all"}
      type={type}
      // focus_ringOffset="2"
      // focus_ringOffsetColor="blue-300"
      // focus_ringWidth="2"
      // focus_outline="none"
      {...styles}
      onMouseDown={preventFocus}
      onClick={looseFocus}
      {...props}
      ref={ref}
    />
  );
});

if (IS_DEV)
{
  Button.displayName = "Katia Button"
}
