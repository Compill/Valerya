import { HTMLDivProps, SoperioComponent } from "@soperio/react";
import { FloatingFocusManager, Placement, flip, useDismiss, useFloating, useInteractions } from "@floating-ui/react";
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
  const [isOpen, setIsOpen] = React.useState(false);

  const onOpenChange = React.useCallback((open: boolean, event?: Event | undefined) =>
  {
    setIsOpen(open)

    if (!open)
      onHide?.()
  },[setIsOpen, onHide])

  React.useEffect(() => {
    if (show)
      setIsOpen(true)
  }, [show])

  const { refs, floatingStyles, context } = useFloating({
    placement: side,
    open: isOpen,
    onOpenChange,
    middleware: [
      flip({
        crossAxis: side.includes("-"),
        fallbackAxisSideDirection: "end",
        padding: 5
      })
    ],
  });

  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    dismiss,
  ]);

  //const { refs, getReferenceProps, floatingStyles, getFloatingProps, labelId, context, open } = usePopover({ modal, placement: side });

  if (children.length !== 2)
    throw new Error("Popup component must have exactly two children")

  return (
    <div {...props}>
      {React.cloneElement(children[0], { ref: refs.setReference, ...getReferenceProps() })}

      {
        show && isOpen &&
        (
          <FloatingFocusManager context={context} modal={false}>
            <div
              ref={refs.setFloating}
              style={floatingStyles}
              // aria-labelledby={labelId}
              {...getFloatingProps()}
            >
              {children[1]}
            </div>
          </FloatingFocusManager>
        )
      }

    </div>
  )
}
