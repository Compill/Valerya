import { ComponentManager, MultiPartStyleProvider, useFirstRender, useMultiPartStyles, useMultiPartSurfaceComponentConfig } from "@katia/core";
import { HTMLDivProps, OrString, ParentComponent, SoperioComponent, SpacingPositive } from "@soperio/react";
import { IS_DEV } from "@soperio/utils";
import React from "react";
import { Surface } from "../surface";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Katia.Card";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface CardProps extends ComponentProps, ParentComponent, HTMLDivProps
{
  config?: ExtendConfig
}

/**
 *
 *
 */
const CardContainer = React.forwardRef<HTMLDivElement, CardProps>(({
  variant,
  corners,
  scheme,
  config,
  children,
  ...props
}: CardProps, ref) =>
{
  const firstRender = useFirstRender();

  const styles = useMultiPartSurfaceComponentConfig(COMPONENT_ID, scheme, config, { variant, corners }, props);

  return (
    <Surface
    scheme={scheme}
      transition={firstRender ? "none" : "all"}
      {...styles["card"]}
      {...props}
      ref={ref}
    >
      <MultiPartStyleProvider value={styles}>
        {children}
      </MultiPartStyleProvider>
    </Surface>
  );
});

export interface CardHeaderProps extends SoperioComponent, ParentComponent
{
  showBorder?: boolean;
  borderWidth?: OrString<"full" | "padded">;
};

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(({
  showBorder,
  borderWidth,
  children,
  ...props }, ref) =>
{
  const styles = useMultiPartStyles();

  const dividerStyles: SoperioComponent = {}

  if (borderWidth === "padded")
  {
    dividerStyles.mx = styles["header"]["px"]
    dividerStyles.ms = styles["header"]["ps"]
    dividerStyles.me = styles["header"]["pe"]
  }
  else if (borderWidth !== "full")
  {
    dividerStyles.w = borderWidth
  }

  return (
    // Style should be flex with space between children
    // So that we get title + fill space + toolbar/more button
    <>
      <div
        ref={ref}
        {...styles["header"]}
        {...props}
      >
        {children}
      </div>
      {showBorder && <Divider {...dividerStyles} />}
    </>
  );
});

export interface CardBodyProps extends SoperioComponent, ParentComponent
{
  scrollable?: boolean, // If fixed height
};

export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(({ children, ...props }, ref) =>
{
  const styles = useMultiPartStyles();

  return (
    <div
      {...styles["body"]}
      {...props}
      ref={ref}
    >
      {children}
    </div>
  );
});

export interface CardFooterProps extends SoperioComponent, ParentComponent
{
  showBorder?: boolean;
  borderWidth?: OrString<"full" | "padded">;
  align?: "right" | "left" | "center";
};

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(({
  showBorder,
  borderWidth,
  children,
  ...props }, ref) =>
{
  const styles = useMultiPartStyles();

  const dividerStyles:SoperioComponent = {}

  if (borderWidth === "padded")
  {
    dividerStyles.mx = styles["footer"]["px"]
    dividerStyles.ms = styles["footer"]["ps"]
    dividerStyles.me = styles["footer"]["pe"]
  }
  else if (borderWidth !== "full")
  {
    dividerStyles.w = borderWidth
  }

  return (
    // Style should be flex with space between children
    // So that we get title + fill space + toolbar/more button
    <>
      {showBorder && <Divider {...dividerStyles} />}
      <div
        ref={ref}
        {...styles["footer"]}
        {...props}
      >
        {children}
      </div>
    </>
  );
});

function Divider(props: SoperioComponent)
{
  const styles = useMultiPartStyles();

  return <div {...styles["divider"]} {...props}/>
}

export const Card = Object.assign(CardContainer, { Header: CardHeader, Body: CardBody, Footer: CardFooter });

if (IS_DEV)
  Card.displayName = "Soperio Card"
else
  Card.displayName = "Card"

// CardTitle : icon + title + subtitle, stack = vertical or horizontal
// Card Toolbar
// Card More menu

// CardTabMenu => nav menu
// CardTabbedContent => content from nav menu, with animation transition

// Toggle cardbody/ Default collapsed

// Loading state

// Sticky card header (no idea how to do this)


// Tile component : just a simple rounded white bg card with default padding
