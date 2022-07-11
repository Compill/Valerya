import { ComponentManager, useComponentConfig2, useFirstRender } from "@katia/core";
import { ComponentTheme, forwardRef } from "@soperio/react";
import { IS_DEV } from "@soperio/utils";
import React from 'react';
import { Surface } from "../surface";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Soperio.Button2"

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface Button2Props extends ComponentProps
{
  config?: ExtendConfig;
}

/**
 *
 *
 */
export const Button2 = forwardRef<typeof Surface, Button2Props>(({
  size,
  variant,
  corners,
  scheme,
  config,
  type = "button",
  onMouseDown,
  onClick,
  ...props
}: Button2Props, ref) =>
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

  const styles = useComponentConfig2(COMPONENT_ID, scheme, config, { variant, size, corners }, props)

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
  Button2.displayName = "Soperio Button"
}
