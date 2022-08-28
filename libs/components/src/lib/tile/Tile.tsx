import { ComponentManager, useFirstRender, useSurfaceComponentConfig } from "@katia/core";
import { forwardRef } from "@soperio/react";
import { Surface } from "../surface";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Katia.Tile"

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface TileProps extends ComponentProps
{
    config?: ExtendConfig;
}

/**
 *
 *
 */
export const Tile = forwardRef<"div", TileProps>(({
    variant = "default",
    scheme,
    config,
    children,
    ...props
}: TileProps, ref) =>
{
    const firstRender = useFirstRender();

    const styles = useSurfaceComponentConfig(COMPONENT_ID, scheme, config, { variant }, props)

    return (
        <Surface
            scheme={scheme}
            transition={firstRender ? "none" : "all"}
            rounded
            p="3"
            {...styles}
            {...props}
            ref={ref}
        >
            {children}
        </Surface>
    );
});
