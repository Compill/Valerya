import { useResponsiveProp } from "@soperio/react";
import React from 'react';
import { HStackProps, StackProps, VStackProps } from "./types";

/**
 *
 *
 */
export const Stack = React.forwardRef<HTMLDivElement, StackProps>(({ direction = "column", className, children, ...props }: StackProps, ref) =>
{
    const _props = { ...props, direction }
    const responsiveDirection = useResponsiveProp("direction", _props)

    return (
        <div
            display="flex"
            flexDirection={responsiveDirection}
            {..._props}
            ref={ref}>
            {children}
        </div>
    );
});

export const VStack = React.forwardRef<HTMLDivElement, VStackProps>(({ className, children, ...props }: StackProps, ref) =>
{
    return (
        <div
            display="flex"
            flexDirection="column"
            {...props}
            ref={ref}>
            {children}
        </div>
    );
});

export const HStack = React.forwardRef<HTMLDivElement, HStackProps>(({ className, children, ...props }: StackProps, ref) =>
{
    return (
        <div
            display="flex"
            flexDirection="row"
            {...props}
            ref={ref}>
            {children}
        </div>
    );
});
