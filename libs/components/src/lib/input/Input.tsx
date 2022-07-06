import { ComponentManager, useComponentConfig, useFirstRender } from "@katia/core";
import { ComponentTheme, HTMLInputProps } from "@soperio/react";
import React from "react";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Soperio.Input";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface InputProps extends ComponentProps, Omit<HTMLInputProps, "size">
{
    theme?: ComponentTheme,
    length?: number;
    config?: ExtendConfig;
}

/**
 *
 *
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>((
    {
        size = "md",
        variant = "default",
        corners = "default",
        theme = "default",
        length,
        config,
        ...props
    }, ref) =>
{
    const firstRender = useFirstRender();

    const styles = useComponentConfig(COMPONENT_ID, theme, config, { variant, size, corners }, props);

    return (
        <input
            transition={firstRender ? "none" : "all"}
            {...(length ? { size: length } : null)}
            {...styles}
            {...props}
            ref={ref}
        />
    );
});
