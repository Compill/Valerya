import { ComponentManager, useFirstRender, useMultiPartComponentConfig, useMultiPartSurfaceComponentConfig } from "@valerya/core";
import { forwardRef, HTMLInputProps, ParentComponent, splitComponentProps } from "@soperio/react";
import React from "react";
import { Surface } from "../surface";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Valerya.Switch";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface SwitchProps extends ComponentProps, ParentComponent, Omit<HTMLInputProps, "size">
{
  config?: ExtendConfig
}

/**
 *
 *
 */
export const Switch = forwardRef<"input", SwitchProps>(({
  variant,
  corners,
  size,
  scheme,
  config,
  children,
  onMouseDown,
  onClick,
  ...props
}: SwitchProps, ref) =>
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

  const { scheme: _scheme, styles } = useMultiPartSurfaceComponentConfig(COMPONENT_ID, scheme, config, { variant, corners, size }, props);

  const [soperioProps, inputProps] = splitComponentProps(props)

  return (
    <label
      {...styles["switch"]}
      {...soperioProps}> {/* Container */}

      <input type="checkbox" name="switch" id="switch"
        w="0"
        h="0"
        hidden
        checked={props.checked}
        onMouseDown={preventFocus}
        onClick={looseFocus}
        ref={ref}
        {...inputProps} />

      {/* Track */}
      <Surface
        scheme={_scheme}
        as="span"
        transition={firstRender ? "none" : "all"}
        {...styles["track"]}
        disabled={inputProps["disabled"]}
      >
        {/* Thumb */}
        <Surface
          scheme={_scheme}
          as="span"
          transition={firstRender ? "none" : "all"}
          disabled={inputProps["disabled"]}
          {...styles["thumb"]}
        />
      </Surface>

      {children && (
        <span {...styles["label"]}>
          {children}
        </span>
      )}
    </label>
  );
});
