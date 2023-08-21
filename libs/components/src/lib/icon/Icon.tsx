import { ParentComponent } from "@soperio/react";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";
import { ComponentManager, useComponentConfig } from "@valerya/core";

const COMPONENT_ID = "Valerya.SVGIcon";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig);

export interface IconProps extends ComponentProps, ParentComponent
{
  path: string,
  title?: string,
  config?: ExtendConfig;
}

/**
 * A component to display an svg icon
 */
export function Icon({ path, title, size, config, children, ...props }: IconProps)
{
  const styles = useComponentConfig(COMPONENT_ID, config, { size }, props)

  return (
    <span display="block" {...styles} {...props}>
      <svg viewBox="0 0 24 24">
        {title != null && <title>{title}</title>}
        <path d={path} fill="currentColor" />
      </svg>
    </span>
  );
}
