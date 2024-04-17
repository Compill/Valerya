import { HTMLDivProps, HTMLTextAreaProps, RightJoinProps, forwardRef } from "@soperio/react";
import { ComponentManager, useSurfaceComponentConfig } from "@valerya/core";
import { useComponentTransition } from "../hooks/useComponentTransition";
import { Surface } from "../surface";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Valerya.TextArea";

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
  const transition = useComponentTransition();

  const { scheme: _scheme, styles } = useSurfaceComponentConfig(COMPONENT_ID, scheme, config, { size, corners, variant }, props)

  return (
    <Surface
      scheme={_scheme}
      as="textarea"
      transition={transition}
      {...styles}
      {...props}
      ref={ref}
    />
  );
});
