import { ComponentManager, useFirstRender, useSurfaceComponentConfig } from "@katia/core";
import { ComponentTheme, forwardRef, SoperioComponent, useColor } from "@soperio/react";
import { Surface } from "../surface";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Soperio.Spinner"

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

function getBorders(trackColor: string, progress: number): SoperioComponent
{
  return {
    borderTColor: progress > 0 ? "currentColor" : trackColor,
    borderEColor: progress > 25 ? "currentColor" : trackColor,
    borderBColor: progress > 50 ? "currentColor" : trackColor,
    borderSColor: progress > 75 ? "currentColor" : trackColor
  }
}

export interface SpinnerProps extends ComponentProps//, HTMLDivProps
{
  theme?: ComponentTheme,
  config?: ExtendConfig;
}

export const Spinner = forwardRef<typeof Surface, SpinnerProps>(({
  thickness,
  trackColor,
  scheme,
  size,
  variant,
  progress,
  config,
  ...props
}: SpinnerProps, ref) =>
{
  const firstRender = useFirstRender();

  const { scheme: _scheme, styles } = useSurfaceComponentConfig(COMPONENT_ID, scheme, config, { variant, size }, { trackColor, thickness, progress, ...props} as ComponentProps)

  const parsedTrackColor = useColor(trackColor || styles?.trackColor || "transparent")
  const parsedThickness = thickness || styles?.thickness
  const parsedProgress = progress || styles?.progress || 75

  delete styles.trackColor
  delete styles.thickness
  delete styles.progress

  return (
    <div
      transition={firstRender ? "none" : "all"}
      display="inline-block"
      {...getBorders(parsedTrackColor, parsedProgress)}
      borderStyle="solid"
      rounded="full"
      animate={parsedProgress > 0 && parsedProgress < 100 ? "spin" : "none"}
      {...styles}
      border={parsedThickness}
      {...props}
      ref={ref}
      >
    </div>
  );
});
