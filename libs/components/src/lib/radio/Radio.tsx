import { forwardRef, HTMLInputProps, splitComponentProps } from "@soperio/react";
import React from "react";
import { ComponentProps, ExtendConfig } from "./types";

import defaultConfig from "./config";
import { ComponentManager, useComponentConfig, useFirstRender, useMultiPartSurfaceComponentConfig, useSurfaceComponentConfig } from "@valerya/core";
import { Surface } from "../surface";

const COMPONENT_ID = "Valerya.Radio";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface RadioProps extends ComponentProps, Omit<HTMLInputProps, "size">
{
  label?: string,
  config?: ExtendConfig;
}

// TODO Transform in multipart component

/**
 * A simple checkbox to be used with or without a surrounding form.
 * For using with Formik, please use formik/Radio instead
 */
export const Radio = forwardRef<"input", RadioProps>((
  {
    scheme,
    label = "",
    size,
    variant,
    dotSize,
    corners,
    config,
    ...props
  }, ref) =>
{
  const firstRender = useFirstRender();

  const { scheme: _scheme, styles } = useMultiPartSurfaceComponentConfig(COMPONENT_ID, scheme, config, { variant, size, corners, dotSize }, props)


  const [soperioProps, inputProps] = splitComponentProps(props);
  
  console.log("styles for svg icon of radio ", props["name"], styles["radioIcon"])


  return (
    <label {...soperioProps} {...styles["root"]}>
      <input
        border="none"
        h="px"
        w="px"
        m="-px"
        overflow="hidden"
        p="0"
        position="absolute"
        whiteSpace="nowrap"
        // TODO CSS prop
        style={{
          clip: "rect(0 0 0 0)",
          clipPath: "inset(50%)"
        }}
        type="radio"
        {...inputProps}
        ref={ref}
      />

      <Surface
        scheme={_scheme}
        disabled={inputProps["disabled"]}
        // transition={firstRender ? "none" : "all"}
        easing={props.checked ? "out" : "linear"}
        {...styles["radioSurface"]}
      >
        {/*
          If I don't cast as Record<string, any>, typescript will
          complain about incompatibility for the svg type
          which differs from a regular html tag type 
        */}
        <svg 
          {...styles["radioIcon"] as Record<string, any>} />
      </Surface>

      {label && <span {...styles["label"]}>{label}</span>}
    </label>
  );
});
