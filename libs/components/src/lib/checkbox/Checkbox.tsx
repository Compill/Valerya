import { forwardRef, HTMLInputProps, splitComponentProps } from "@soperio/react";
import { ComponentManager, useSurfaceComponentConfig } from "@valerya/core";
import { Surface } from "../surface";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Valerya.Checkbox";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface CheckboxProps extends ComponentProps, Omit<HTMLInputProps, "size">
{
  label?: string,
  config?: ExtendConfig;
}

/**
 * A simple checkbox to be used with or without a surrounding form.
 * For using with Formik, please use formik/Checkbox insteada surrounding form.
 * For using with Formik, please use formik/Checkbox instead
 */
export const Checkbox = forwardRef<"input", CheckboxProps>((
  {
    scheme,
    label = "",
    size,
    variant,
    shape,
    config,
    ...props
  }, ref) =>
{
  const { scheme: _scheme, styles } = useSurfaceComponentConfig(COMPONENT_ID, scheme, config, { variant, size, shape }, props)

  const [soperioProps, inputProps] = splitComponentProps(props)

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
          style={{
            clip: "rect(0 0 0 0)",
            clipPath: "inset(50%)"
          }}
          type="checkbox"
          {...inputProps}
          ref={ref}
        />
        <Surface
          scheme={_scheme}
          disabled={inputProps["disabled"]}
          display="inline-block"
          transition="colors"
          easing={props.checked ? "out" : "linear"}
          duration="300"
          {...styles}
        >

          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2px"
            opacity={props.checked ? "100" : "0"}
            transition="opacity"
            easing={props.checked ? "out" : "linear"}
            duration="300"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </Surface>
      </label>
      {label && <span fontSize={styles.fontSize} ms="3">{label}</span>}
    </div>
  );
});
