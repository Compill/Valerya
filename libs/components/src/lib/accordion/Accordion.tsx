import { ComponentManager, MultiPartStyleProvider, useMultiPartSurfaceComponentConfig } from "@valerya/core";
import { forwardRef, HTMLDivProps, ParentComponent, Rotate, SoperioComponent, SpacingPositive } from "@soperio/react";
import { IS_DEV } from "@soperio/utils";
import React from "react";
import { AccordionContextProvider } from "./AccordionContext";
import { AccordionItem } from "./AccordionItem";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Valerya.Accordion";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface AccordionProps extends ComponentProps, ParentComponent, HTMLDivProps
{
  config?: ExtendConfig,
  expandIcon?: React.ReactNode,
  expandIconRotationOnOpen?: Rotate,
  collapseIcon?: React.ReactNode,
  allowMultiple?: boolean,
  gap?: false | SpacingPositive,
  itemStyle?: SoperioComponent,
  itemHeaderStyle?: SoperioComponent,
  itemHeaderLabelStyle?: SoperioComponent,
  itemHeaderCollapseButtonStyle?: SoperioComponent,
  itemContentStyle?: SoperioComponent,
  itemDividerStyle?: SoperioComponent,
}

function ExpandAddSvg()
{
  return <svg w="24px" h="24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
  </svg>
}

function CollapseMinusSvg()
{
  return <svg w="24px" h="24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M19,13H5V11H19V13Z" />
  </svg>
}

function ExpandArrowDownSvg()
{
  return <svg w="24px" h="24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
  </svg>
}


const AccordionContainer = forwardRef<"div", AccordionProps>(({
  variant,
  corners,
  expandIcon = <ExpandArrowDownSvg />,
  expandIconRotationOnOpen = "180",
  collapseIcon = false,
  allowMultiple = false,
  itemStyle,
  itemHeaderStyle,
  itemHeaderLabelStyle,
  itemHeaderCollapseButtonStyle,
  itemContentStyle,
  itemDividerStyle,
  gap,
  scheme,
  config,
  children,
  ...props
}: AccordionProps, ref) =>
{
  const { styles } = useMultiPartSurfaceComponentConfig(COMPONENT_ID, scheme, config, { variant, corners }, props)
  const [ expanded, setExpanded ] = React.useState<false | number | string>(0);

  const accordionAnimation = {
    expanded: {
      opacity: 1, height: "auto",
      transition: {
        duration: 0.5,
        ease: [ 0.24, 0.62, 0.23, 0.98 ]
      }
    },
    collapsed: {
      opacity: 0, height: 0,
      transition: {
        duration: 0.5,
        ease: [ 0.24, 0.62, 0.23, 0.98 ]
      }
    },
    open: {
      rotate: [0, parseInt(expandIconRotationOnOpen)],
      transition: {
        duration: 0.5,
        ease: [ 0.24, 0.62, 0.23, 0.98 ]
      }
    },
    close: {
      rotate: [parseInt(expandIconRotationOnOpen), 0],
      transition: {
        duration: 0.5,
        ease: [ 0.24, 0.62, 0.23, 0.98 ]
      }
    },
  }

  const context = {
    expanded,
    setExpanded,
    accordionAnimation,
    expandIconRotationOnOpen,
    expandIcon,
    collapseIcon,
    allowMultiple,
    itemStyle,
    itemHeaderStyle,
    itemHeaderLabelStyle,
    itemHeaderCollapseButtonStyle,
    itemContentStyle,
    itemDividerStyle,
  }

  return (
    <div
      ref={ref}
      {...styles["accordion"]}
      spaceY={gap}
      {...props}
    >
      <AccordionContextProvider value={context}>
        <MultiPartStyleProvider value={styles}  >
          {children}
        </MultiPartStyleProvider>
      </AccordionContextProvider>
    </div>
  );
});

export const Accordion = Object.assign(AccordionContainer, { AccordionItem: AccordionItem });

if (IS_DEV)
  Accordion.displayName = "Valerya Accordion"
else
  Accordion.displayName = "Accordion"
