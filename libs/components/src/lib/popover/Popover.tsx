import { FloatingFocusManager, Placement } from "@floating-ui/react";
import { HTMLDivProps, SoperioComponent } from "@soperio/react";
import React from "react";
import { usePopover } from "./usePopover";

export interface PopoverProps extends SoperioComponent, HTMLDivProps
{
    side?: Placement;
    modal?: boolean
    children: React.ReactElement<any>[]
}

export function Popover({ side = "bottom", modal, children, ...props }: PopoverProps)
{
    const { refs, getReferenceProps, floatingStyles, getFloatingProps, labelId, context, open } = usePopover({ modal, placement: side });

    if (children.length !== 2)
        throw new Error("Popover component must have exactly two children")

    return (
        <div {...props}>
            {React.cloneElement(children[0], { ref: refs.setReference, ...getReferenceProps() })}

            {
                open &&
                (
                    <FloatingFocusManager context={context} modal={false}>
                        <div
                            ref={refs.setFloating}
                            style={floatingStyles}
                            aria-labelledby={labelId}
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
