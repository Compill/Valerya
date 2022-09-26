import { ComponentManager, useFirstRender, useSurfaceComponentConfig } from "@valerya/core";
import { forwardRef, HTMLInputProps } from "@soperio/react";
import React from "react";
import { Surface } from "../surface";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Valerya.Input";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface InputProps extends ComponentProps, Omit<HTMLInputProps, "size">
{
    length?: number;
    config?: ExtendConfig;
}

/**
 *
 *
 */
export const Input = forwardRef<"input", InputProps>((
    {
        scheme,
        size ,
        variant,
        corners,
        length,
        config,
        ...props
    }, ref) =>
{
    const firstRender = useFirstRender();

    const { scheme: _scheme, styles } = useSurfaceComponentConfig(COMPONENT_ID, scheme, config, { variant, size, corners }, props);

    return (
        <Surface
            scheme={_scheme}
            as="input"
            transition={firstRender ? "none" : "all"}
            {...(length ? { size: length } : null)}
            {...styles}
            {...props}
            ref={ref}
        />
        // <input
        //     transition={firstRender ? "none" : "all"}
        //     {...(length ? { size: length } : null)}
        //     {...styles}
        //     {...props}
        //     ref={ref}
        // />
    );
});
