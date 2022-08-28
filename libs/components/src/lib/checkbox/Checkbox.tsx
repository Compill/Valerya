import { ComponentManager, useFirstRender, useSurfaceComponentConfig } from "@katia/core";
import { ComponentTheme, forwardRef, HTMLInputProps, splitComponentProps } from "@soperio/react";
import { Surface } from "../surface";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Katia.Checkbox";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface CheckboxProps extends ComponentProps, Omit<HTMLInputProps, "size">
{
  label?: string,
  theme?: ComponentTheme;
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
  const firstRender = useFirstRender();

  const styles = useSurfaceComponentConfig(COMPONENT_ID, scheme, config, { variant, size, shape }, props)

  const [soperioProps, inputProps] = splitComponentProps(props)

  return (
    <div display="flex" flexRow  alignItems="center" {...soperioProps}>
      <label userSelect="none" cursor={props.disabled ? "default" : "pointer"} lineHeight="none">
        <input
          border="0"
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
          scheme={scheme}
          disabled={soperioProps["disabled"]}
          display="inline-block"
          transition={firstRender ? "none" : "all"}
          easing={props.checked ? "out" : "linear"}
          duration="300"
          {...styles}
        >
          {props.checked && (
            // TODO Dynamic icon
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2px" 
              transition={firstRender ? "none" : "opacity"}
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          )}
        </Surface>
      </label>
      {label && <span fontSize={styles.fontSize} ms="3">{label}</span>}
    </div>
  );
});
