import { ComponentManager, useFirstRender, useSurfaceComponentConfig } from "@katia/core";
import { forwardRef, HTMLTextAreaProps, HTMLDivProps, RightJoinProps } from "@soperio/react";
import { Surface } from "../surface";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Katia.TextArea";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface TextAreaProps extends ComponentProps, RightJoinProps<HTMLTextAreaProps, HTMLDivProps>
{
  config?: ExtendConfig
}

/**
 *
 *
 */
export const TextArea = forwardRef<"textarea", TextAreaProps>((
  {
    size,
    variant,
    corners,
    scheme,
    config,
    ...props
  }, ref) =>
{
  const firstRender = useFirstRender();

  const { scheme: _scheme, styles } = useSurfaceComponentConfig(COMPONENT_ID, scheme, config, { variant, size, corners }, props)

  return (
    <Surface
      scheme={_scheme}
      as="textarea"
      transition={firstRender ? "none" : "all"}
      {...styles}
      {...props}
      ref={ref}
    />
  );
});
