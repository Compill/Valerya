import { ComponentTheme, HTMLButtonProps } from "@soperio/react";
import React from 'react';
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";
import { IS_DEV } from "@soperio/utils"
import { ComponentManager, useComponentConfig, useFirstRender } from "@katia/core";
import { Surface } from "../surface";

const COMPONENT_ID = "Soperio.Button"

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface Button2Props extends ComponentProps
{
  theme?: ComponentTheme,
  config?: ExtendConfig;
}


/**
 *
 *
 */
export const Button2 = React.forwardRef<typeof Surface, Button2Props>(({
    size,
    variant,
    corners,
    theme = "default",
    config,
    onMouseDown,
    onClick,
    ...props
}: Button2Props, ref) =>
{
    const firstRender = useFirstRender();
    const preventFocus = React.useCallback((event:any) =>
    {
        event.preventDefault();
        onMouseDown && onMouseDown(event);
    }, [onMouseDown]);

    const looseFocus = React.useCallback((event:any) =>
    {
        (document.activeElement as HTMLElement).blur();
        onClick && onClick(event);
    }, [onClick]);

    const styles = useComponentConfig(COMPONENT_ID, theme, config, { variant, size, corners }, props)

    return (
        <Surface
            as="button"
            transition={firstRender ? "none" : "all"}
            hover_transition="all"
            easing="linear"
            duration="300"
            hover_duration="300"
            fontWeight="500"
            // type="button" // TODO
            // focus_ringOffset="2"
            // focus_ringOffsetColor="blue-300"
            // focus_ringWidth="2"
            // focus_outline="none"
            {...styles}
            onMouseDown={preventFocus}
            onClick={looseFocus}
            {...props}
            // ref={ref} TODO
        />
    );
});

if (IS_DEV)
{
    Button2.displayName = "Soperio Button"
}
