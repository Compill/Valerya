import { forwardRef, HTMLInputProps, splitComponentProps } from "@soperio/react";
import { ComponentProps, ExtendConfig } from "./types";

import { ComponentManager, useMultiPartSurfaceComponentConfig } from "@valerya/core";
import { Surface } from "../surface";
import defaultConfig from "./config";
import { useComponentTransition } from "../hooks/useComponentTransition";

const COMPONENT_ID = "Valerya.Radio";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface RadioProps extends ComponentProps, Omit<HTMLInputProps, "size">
{
  label?: string | React.ReactNode,
  config?: ExtendConfig;
  labelPosition?: "start" | "end"
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
    labelPosition = "end",
    size,
    variant,
    dotSize,
    corners,
    config,
    ...props
  }, ref) =>
{
  const transition = useComponentTransition();

  const { scheme: _scheme, styles } = useMultiPartSurfaceComponentConfig(COMPONENT_ID, scheme, config, { variant, size, corners, dotSize }, props)


  const [soperioProps, inputProps] = splitComponentProps(props);

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

      {
        label && labelPosition === "start" &&
        (
          <>
            {typeof label === "string" && <span {...styles["label"]}>{label}</span>}
            {typeof label !== "string" && label}
          </>
        )
      }

      <Surface
        scheme={_scheme}
        disabled={inputProps["disabled"]}
        transition={transition}
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

      {
        label && labelPosition === "end" &&
        (
          <>
            {typeof label === "string" && <span {...styles["label"]}>{label}</span>}
            {typeof label !== "string" && label}
          </>
        )
      }
    </label>
  );
});
