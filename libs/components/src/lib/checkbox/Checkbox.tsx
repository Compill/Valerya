import { forwardRef, HTMLInputProps, splitComponentProps } from "@soperio/react";
import { ComponentManager, useMultiPartSurfaceComponentConfig } from "@valerya/core";
import { Surface } from "../surface";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Valerya.Checkbox";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface CheckboxProps extends ComponentProps, Omit<HTMLInputProps, "size">
{
  label?: string | React.ReactNode,
  labelPosition?: "start" | "end"
  config?: ExtendConfig;
}

export const Checkbox = forwardRef<"input", CheckboxProps>((
  {
    scheme,
    label = "",
    labelPosition = "end",
    size,
    variant,
    corners,
    config,
    ...props
  }, ref) =>
{
  const { scheme: _scheme, styles } = useMultiPartSurfaceComponentConfig(COMPONENT_ID, scheme, config, { variant, size, corners }, props)

  const [soperioProps, inputProps] = splitComponentProps(props)

  return (
    <label {...soperioProps} {...styles["root"]}>
      <input
        display="none"
        type="checkbox"
        {...inputProps}
        ref={ref}
      />

      {
        label && labelPosition === "start" &&
        (
          <>
            {typeof label === "string" && <span {...styles["label"]}>{label}</span>}
            {typeof label === "string" && label}
          </>
        )
      }

      <Surface
        scheme={_scheme}
        disabled={inputProps["disabled"]}
        easing={props["checked"] ? "out" : "linear"}
        {...styles["checkboxSurface"]}
      >
        {/*
          If I don't cast as Record<string, any>, typescript will
          complain about incompatibility for the svg type
          which differs from a regular html tag type
        */}
        <svg {...styles["checkboxIcon"] as Record<string, any>} />
      </Surface>

      {
        label && labelPosition === "end" &&
        (
          <>
            {typeof label === "string" && <span {...styles["label"]}>{label}</span>}
            {typeof label === "string" && label}
          </>
        )
      }
    </label>
  );
});
