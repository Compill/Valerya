import { useFirstRender, useMultiPartStyles } from "@valerya/core";
import { forwardRef, OrString, ParentComponent, SoperioComponent } from "@soperio/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Button } from "../button";
import { Divider } from "../divider";
import { Surface, SurfaceBasedComponent } from "../surface";
import { useAccordionContext } from "./AccordionContext";

export interface AccordionItemProps extends SurfaceBasedComponent, ParentComponent
{
  showDivider?: boolean;
  dividerWidth?: OrString<"full" | "padded">;
  label: React.ReactNode,
  isOpen?: boolean
};

// TODO Rename showDivider & dividerWidth
export const AccordionItem = forwardRef<typeof Surface, AccordionItemProps>(({
  showDivider,
  dividerWidth,
  label,
  isOpen,
  children,
  ...props }, ref) =>
{
  const firstRender = useFirstRender()
  const styles = useMultiPartStyles()
  const {
    setExpanded,
    expanded,
    accordionAnimation,
    collapseIcon,
    expandIcon,
    allowMultiple,
    expandIconRotationOnOpen,
    itemStyle,
    itemHeaderStyle,
    itemHeaderLabelStyle,
    itemHeaderCollapseButtonStyle,
    itemContentStyle,
    itemDividerStyle
  } = useAccordionContext()
  const [ _isOpen, setIsOpen ] = React.useState(isOpen ?? false)
  const id = React.useId()

  const handleClick = React.useCallback(() =>
  {
    if (allowMultiple)
      setIsOpen(!_isOpen)
    else
      setExpanded(expanded === id ? false : id)
  }, [ id, _isOpen, allowMultiple, expanded, setExpanded ])

  const show = _isOpen || expanded === id

  const dividerStyles: SoperioComponent = {}

  if (dividerWidth === "padded")
  {
    dividerStyles.mx = styles["itemHeaderLabel"]?.["mx"]
    dividerStyles.ms = styles["itemHeaderLabel"]?.["ps"]
    dividerStyles.me = styles["itemHeaderLabel"]?.["pe"]
  }
  else if (dividerWidth !== "full")
  {
    dividerStyles.w = dividerWidth
  }

  return (
    <Surface
      {...styles["item"]}
      {...itemStyle}
      {...props}
    >
      <div
        onClick={handleClick}
        dflex
        justifyContent="between"
        w="full"
        alignItems="center"
        cursor="pointer"
        title="header"
        ref={ref}
        {...styles["itemHeader"]}
        {...itemHeaderStyle}
        {...props}
      >
        <div
          {...styles["itemHeaderLabel"]}
          {...itemHeaderLabelStyle}
        >
          {label}
        </div>

        {children && (
          <Button
            onClick={handleClick}
            scheme={props["scheme"] ?? styles["item"]?.["scheme"]}
            {...styles["itemHeaderCollapseButton"]}
            {...itemHeaderCollapseButtonStyle}
          >
            {expandIcon && collapseIcon && (show ? collapseIcon : expandIcon)}

            {!collapseIcon && expandIconRotationOnOpen !== undefined && (
              <>
                {firstRender && (show ? <div transform rotateZ={expandIconRotationOnOpen}>{expandIcon}</div> : expandIcon)}

                {!firstRender && (
                  <motion.div
                    animate={show ? "open" : "close"}
                    variants={accordionAnimation}
                  >
                    {expandIcon}
                  </motion.div>
                )}
              </>
            )}

            {!collapseIcon && expandIconRotationOnOpen === undefined && expandIcon}
          </Button>
        )}
      </div >

      {_isOpen && showDivider && <Divider m="auto" clear="both" scheme={props["scheme"] ?? styles["item"]?.["scheme"]} {...styles["divider"]} {...dividerStyles} {...itemDividerStyle} />}

      {children && (
        <AccordionContent show={show} accordionAnimation={accordionAnimation} {...itemContentStyle}>
          {children}
        </AccordionContent>
      )}
    </Surface>
  );
});

export interface AccordionContentProps extends SoperioComponent, ParentComponent
{
  show: boolean,
  accordionAnimation?: any,
};


const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(({ show, children, accordionAnimation, ...props }, ref) =>
{
  const styles = useMultiPartStyles();

  return (
    <AnimatePresence initial={false}>
      {show && (
        <motion.div
          key="content"
          initial="collapsed"
          animate="expanded"
          exit="collapsed"
          variants={accordionAnimation}
          style={{ overflow: "hidden" }}
        >
          <div overflow="hidden" {...styles["itemContent"]} {...props} ref={ref}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});
