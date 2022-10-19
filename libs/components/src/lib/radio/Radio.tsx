import { forwardRef, HTMLInputProps, splitComponentProps } from "@soperio/react";
import React from "react";
import { ComponentProps, ExtendConfig } from "./types";

import defaultConfig from "./config";
import { ComponentManager, useComponentConfig, useFirstRender, useSurfaceComponentConfig } from "@valerya/core";
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
    dotSize = "lg",
    shape,
    config,
    ...props
  }, ref) =>
{
  const firstRender = useFirstRender();

  const { scheme: _scheme, styles } = useSurfaceComponentConfig(COMPONENT_ID, scheme, config, { variant, size }, props)

  const [soperioProps, inputProps] = splitComponentProps(props);
  // TODO Fix tick
  return (
    <div display="flex" flexRow alignItems="center" {...soperioProps}>
      <label userSelect="none" cursor={props.disabled ? "default" : "pointer"} lineHeight="none">
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
          display="inline-block"
          transition={firstRender ? "none" : "all"}
          easing={props.checked ? "out" : "linear"}
          duration="300"
          rounded="full"
          {...styles}
        >

          {/* TODO Use multipart component properties to set width & height on svg */}
          {/* Use circle svg if shape is circle, square svg if shape is square */}
          {dotSize === "sm" && (
            <svg
              viewBox="0 0 24 24"
              opacity={props.checked ? "100" : "0"}
              transition="opacity"
              easing={props.checked ? "out" : "linear"}
              duration="300">
              <path fill="currentColor" stroke="currentColor" d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" />
            </svg>
          )}

          {dotSize === "md" && (
            <svg
              viewBox="0 0 24 24"
              opacity={props.checked ? "100" : "0"}
              transition="opacity"
              easing={props.checked ? "out" : "linear"}
              duration="300">
              <path fill="currentColor" stroke="currentColor" d="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" />
            </svg>
          )}
          {dotSize === "lg" && (
            <svg
              viewBox="0 0 24 24"
              opacity={props.checked ? "100" : "0"}
              transition="opacity"
              easing={props.checked ? "out" : "linear"}
              duration="300">
              <path fill="currentColor" stroke="currentColor" d="M12 6A6 6 0 1 1 6 12A6 6 0 0 1 12 6M6 12A6 6 0 0 0 15Z" />
            </svg>
          )}
        </Surface>
      </label>
      {label && <span textSize={styles.textSize} ms="3">{label}</span>}
    </div >
  );
});
