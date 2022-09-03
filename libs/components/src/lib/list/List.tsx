import { ComponentManager, MultiPartStyleProvider, useFirstRender, useMultiPartStyles, useMultiPartSurfaceComponentConfig } from "@katia/core";
import { forwardRef, ParentComponent, HTMLDivProps, HTMLListItemProps, HTMLUListProps, RightJoinProps } from "@soperio/react";
import React from "react";
import { Divider } from "../divider";
import { HoverableSurfaceBasedComponent, Surface } from "../surface";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Katia.List";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

export interface ListProps extends ComponentProps, HTMLUListProps
{
  dividerStyle?: "default" | "transparent",
  config?: ExtendConfig
}

/**
 *
 *
 */
const List = forwardRef<"ul", ListProps>(({
  variant,
  corners,
  size,
  dividerSize,
  dividerStyle = "default",
  scheme,
  config,
  children,
  ...props
}: ListProps, ref) =>
{
  const firstRender = useFirstRender();
  const { scheme: _scheme, styles } = useMultiPartSurfaceComponentConfig(COMPONENT_ID, scheme, config, { variant, corners, size, dividerSize }, props);

  const showDividers = dividerSize !== "none"

  const _children = React.useMemo(() => React.Children.toArray(children), [children])

  return (
    <ul
      transition={firstRender ? "none" : "all"}
      {...styles["list"]}
      {...props}
      ref={ref}
    >
      <MultiPartStyleProvider value={styles}>
        {_children?.map((item, index) => (
          <>
            {item}
            {showDividers && index < _children.length - 1 && <Divider scheme={_scheme} {...styles["divider"]} {...(dividerStyle === "transparent" ? { bgColor: "transparent" } : null)} />}
          </>
        ))}
      </MultiPartStyleProvider>
    </ul>
  );
});

export type ListItemProps = HoverableSurfaceBasedComponent<RightJoinProps<HTMLListItemProps, HTMLDivProps>>


export const ListItem = forwardRef<typeof Surface, ListItemProps>(({
  children,
  ...props }, ref) =>
{
  const styles = useMultiPartStyles();

  return (
    <Surface
      as="li"
      ref={ref}
      {...styles["listItem"]}
      {...props}
    >{children}
    </Surface>
  );
});

export interface ListItemIconProps extends ComponentProps, ParentComponent
{

}

export const ListItemIcon = forwardRef<"span", ListItemIconProps>((
  {
    children,
    ...props
  }, ref) =>
{
  const styles = useMultiPartStyles();

  return (
    <span
      ref={ref}
      {...styles["listItemIcon"]}
      {...props}
    >
      {children}
    </span>
  );
});

const ListNamespace = Object.assign(List, { ListItem: ListItem, ListItemIcon: ListItemIcon });

export { ListNamespace as List };
