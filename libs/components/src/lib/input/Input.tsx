import { forwardRef, HTMLInputProps } from "@soperio/react";
import { ComponentManager, useSurfaceComponentConfig } from "@valerya/core";
import { useComponentTransition } from "../hooks/useComponentTransition";
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
  const transition = useComponentTransition();

    const { scheme: _scheme, styles } = useSurfaceComponentConfig(COMPONENT_ID, scheme, config, { size, corners, variant }, props);

    return (
        <Surface
            scheme={_scheme}
            as="input"
            transition={transition}
            {...(length ? { size: length } : null)}
            {...styles}
            {...props}
            ref={ref}
        />
    );
});
