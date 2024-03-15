import { forwardRef, IS_DEV } from "@soperio/react";
import { ComponentManager, useComponentConfig } from "@valerya/core";
import { Button } from "../button";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";
import { Icon } from "../icon/Icon";

const COMPONENT_ID = "Valerya.IconButton"

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface IconButtonProps extends ComponentProps
{
  icon: string
  config?: ExtendConfig;
}

/**
 *
 *
 */
export const IconButton = forwardRef<typeof Button, IconButtonProps>(({
  icon,
  config,
  ...props
}: IconButtonProps, ref) =>
{
  const { size, ...rest } = props
  const styles = useComponentConfig(COMPONENT_ID, config, { size }, props)

  return (
    <Button
      // type={type}
      // focus_ringOffset="2"
      // focus_ringOffsetColor="blue-300"
      // focus_ringWidth="2"
      // focus_outline="none"
      {...styles}
      {...rest}
      ref={ref}
    >
      <Icon path={icon} w="100%" h="100%" />
    </Button>
  );
});

if (IS_DEV)
{
  Button.displayName = "Valerya Button"
}
