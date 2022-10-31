import { HTMLDivProps, ParentComponent, ResponsiveProps, SoperioComponent } from "@soperio/react";

type Responsive = ResponsiveProps<{
  direction: "row" | "column" | "row-reverse" | "col-reverse"
}>

export interface StackProps extends SoperioComponent, Responsive, ParentComponent, HTMLDivProps
{

}

export interface VStackProps extends SoperioComponent, ParentComponent, HTMLDivProps
{

}

export interface HStackProps extends SoperioComponent, ParentComponent, HTMLDivProps
{

}
