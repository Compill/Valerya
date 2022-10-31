import { ComponentManager, useFirstRender, usePrevious, useSurfaceComponentConfig } from "@valerya/core";
import { forwardRef, Height, ParentComponent, useDirection, Width } from "@soperio/react";
import React from 'react';
import { Surface } from "../surface";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Valerya.Sidebar"

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

const DEFAULT_DURATION = "500";
const DEFAULT_EASING = "in";

export interface SidebarProps extends ComponentProps, ParentComponent
{
  config?: ExtendConfig,
  side?: "start" | "end" | "top" | "bottom",
  sidebarWidth?: Width,
  sidebarHeight?: Height,
  closeOnMaskClick?: boolean,
  closeOnEsc?: boolean,
  show: boolean,
  size?: string,
  onClose?: () => void;
}

/**
 *
 *
 */
export const Sidebar = forwardRef<"div", SidebarProps>(({ 
  scheme,
  variant,
  side = "start", 
  onClose, 
  show = false, 
  sidebarWidth, 
  sidebarHeight, 
  config,
  children, 
  ...props }: SidebarProps, ref) =>
{
  const [internalShow, setInternalShow] = React.useState(false);
  const previousSide = usePrevious(side);

  const firstRender = useFirstRender();
  const direction = useDirection();
  const previousDirection = usePrevious(direction);

  const isX = side === "start" || side === "end";
  const width = isX ? (sidebarWidth ?? "1/5") : "full";
  const height = isX ? "full" : (sidebarHeight ?? "1/5");

  const startDirection = (side === "start" && direction) || (side === "end" && !direction);

  const translateX = isX ? (show ? "0" : startDirection ? "-full" : "full") : "0";
  const translateY = !isX ? (show ? "0" : (side === "top" ? "-full" : "full")) : "0";
  const initTranslateX = isX ? (startDirection ? "-full" : "full") : "0";
  const initTranslateY = !isX ? (side === "top" ? "-full" : "full") : "0";
  const justify = side === "start" || side === "top" ? "start" : "end";

  const { scheme: _scheme, styles } = useSurfaceComponentConfig(COMPONENT_ID, scheme, config, { variant }, props)

  React.useEffect(() =>
  {
    if (show !== internalShow)
      setInternalShow(show);
  }, [show, internalShow, setInternalShow]);

  // Another side bar implementation
  // See https://github.com/DouyinFE/semi-design/blob/main/packages/semi-animation-react/src/Transition.tsx
  // https://github.com/DouyinFE/semi-design/blob/main/packages/semi-ui/sideSheet/SideSheetTransition.tsx
  // For a Transition component

  return (
    <div
      z="1000"
      w="screen"
      h="screen"
      position="fixed"
      overflow="hidden"
      inset="0"
      bgColor="#000000"
      transition={firstRender ? "none" : "colors"}
      easing={props.easing || DEFAULT_EASING}
      duration={props.duration || DEFAULT_DURATION}
      onClick={onClose}
      bgOpacity={internalShow ? 50 : 0}
      dflex
      flexDirection={isX ? "row" : "column"}
      justifyContent={justify}
      alignContent={justify}
      pointerEvents={show ? "auto" : "none"}
    >
      <Surface
        scheme={scheme}
        w={width}
        h={height}
        transition={firstRender || (side === previousSide && direction === previousDirection) ? "transform" : "none"}
        transform
        easing={props.easing || DEFAULT_EASING}
        duration={props.duration || DEFAULT_DURATION}
        translateX={side === previousSide && previousDirection === direction ? translateX : initTranslateX}
        translateY={side === previousSide && previousDirection === direction ? translateY : initTranslateY}
        {...styles}
        {...props}
      >
        {children}
      </Surface>
    </div>
  );
})
