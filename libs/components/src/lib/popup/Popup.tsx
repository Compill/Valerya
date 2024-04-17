import { HTMLDivProps, SoperioComponent, useThemeProperty } from "@soperio/react";
import { FloatingFocusManager, FloatingPortal, Placement, autoUpdate, flip, useDismiss, useFloating, useInteractions, useRole, useTransitionStatus, useTransitionStyles } from "@floating-ui/react";
import React from "react";

export interface PopupProps extends SoperioComponent, HTMLDivProps
{
  show?: boolean
  side?: Placement
  modal?: boolean
  onHide?: () => void
  children: React.ReactElement<any>[]
}

export function Popup({ show, side = "bottom-start", modal, onHide, children, ...props }: PopupProps)
{
  const easing = useThemeProperty("transition.ease", "in-out")

  const onOpenChange = React.useCallback((open: boolean, event?: Event | undefined) =>
  {
    if (!open)
      onHide?.()
  }, [onHide])

  const { refs, floatingStyles, context } = useFloating({
    placement: side,
    open: show,
    onOpenChange,
    whileElementsMounted: autoUpdate,
    middleware: [
      flip({
        crossAxis: side.includes("-"),
        fallbackAxisSideDirection: "end",
        padding: 5
      })
    ],
  });

  const { isMounted, styles } = useTransitionStyles(context, {
    // Configure both open and close durations:
    duration: 500,
    initial: { opacity: 0 },
    open: { opacity: 1 },
    close: { opacity: 0},
    common: { transitionTimingFunction: easing }
  });

  // const { isMounted, status } = useTransitionStatus(context);

  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "menu" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    dismiss,
    role
  ]);

  //const { refs, getReferenceProps, floatingStyles, getFloatingProps, labelId, context, open } = usePopover({ modal, placement: side });

  if (children.length !== 2)
    throw new Error("Popup component must have exactly two children")

  return (
    <div {...props}>
      {React.cloneElement(children[0], { ref: refs.setReference, ...getReferenceProps() })}

      {
        isMounted &&
        (
          <FloatingPortal>
            <div
              ref={refs.setFloating}
              // style={floatingStyles}
              // aria-labelledby={labelId}
              {...getFloatingProps()}
              z="9999"
              // opacity={status == "open" ? "100" : "0"}
              // transition="opacity"
              // duration="500"
              // delay="75"
              // easing={status == "open" ? "in-out" : "linear" }
              style={{...floatingStyles, ...styles}}
            >
              {children[1]}
            </div>
          </FloatingPortal>
        )
      }

    </div>
  )
}
