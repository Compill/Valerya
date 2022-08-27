import { getThemeStyle, useTheme } from "@soperio/react";
import React from 'react';
import { ContainerProps } from "./types";

/**
 *
 *
 */
export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(({ size, center, className, children, ...props }: ContainerProps, ref) =>
{
    const theme = useTheme()

    return (
        <div
            w={!size && "full"}
            maxW={size && getThemeStyle(theme, "breakpoints", size)}
            mx={center && "auto"}
            {...props}
            ref={ref}>
            {children}
        </div>
    );
});
