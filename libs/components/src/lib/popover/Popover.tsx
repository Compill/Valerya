import
{
    FloatingFocusManager,
    Placement,
    autoUpdate,
    flip,
    offset,
    shift,
    useClick,
    useDismiss,
    useFloating,
    useId,
    useInteractions,
    useRole
} from "@floating-ui/react";
import React from "react";
import { usePopover } from "./usePopover";

export interface PopoverProps
{
    position?: Placement;
    modal?: boolean
    children: React.ReactElement<any>[]
}

export function Popover({ position = "bottom", modal, children }: PopoverProps)
{
    const { refs, getReferenceProps, floatingStyles, getFloatingProps, labelId, context, open } = usePopover({ modal, placement: position });

    if (children.length != 2)
        throw new Error("Popover component must have exactly two children")

    // Let's figure out positioning later
    console.log("props", getReferenceProps())

    return (
        <>
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
        </>
    )
}