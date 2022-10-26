import { ComponentManager, useFirstRender, useMultiPartSurfaceComponentConfig } from "@valerya/core";
import { forwardRef, SoperioComponent } from "@soperio/react";
import React from "react";
import { Surface } from "../surface";
import defaultConfig from "./config";
import { ComponentProps, ExtendConfig } from "./types";

const COMPONENT_ID = "Valerya.Avatar";

ComponentManager.registerComponent(COMPONENT_ID, defaultConfig)

const DefaultIcon = () => (
  <svg
    viewBox="0 0 128 128"
    color="#fff"
    width="100%"
    height="100%"
  >
    <path
      fill="currentColor"
      d="M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"
    />
    <path
      fill="currentColor"
      d="M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"
    />
  </svg>
)

type BadgePosition = "bottomEnd" | "bottomStart" | "topEnd" | "topStart" | "centerEnd" | "centerStart"

function initials(name: string)
{
  const [firstName, lastName] = name.split(" ")

  return firstName && lastName ? `${firstName.charAt(0)}${lastName.charAt(0)}` : firstName.charAt(0)
}

function randomColor(str: string)
{
  let hash = 0

  if (str.length === 0)
    return hash.toString()

  for (let i = 0; i < str.length; i += 1)
  {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
    hash = hash & hash
  }

  let color = "#"
  for (let j = 0; j < 3; j += 1)
  {
    const value = (hash >> (j * 8)) & 255
    color += `00${value.toString(16)}`.substring(-2)
  }

  return color
}

export interface AvatarProps extends ComponentProps
{
  config?: ExtendConfig;
  src?: string;
  name?: string
  getInitials?: (name: string) => string
  icon?: React.ReactElement
  badge?: boolean,
  badgeColor?: string,
  badgePosition?: BadgePosition,
  badgeText?: string | number
}

const badgePositionStylesMap: Record<BadgePosition, SoperioComponent> = {
  "topStart":
  {
    top: "0",
    start: "0",
    translateX: "-25%",
    translateY: "-25%",
    css: {
      insetEnd: "0"
    }
  },
  "topEnd":
  {
    top: "0",
    end: "0",
    translateX: "25%",
    translateY: "-25%",
  },
  "centerStart":
  {
    start: "0",
    translateX: "-50%",
    verticalAlign: "middle"
  },
  "centerEnd":
  {
    end: "0",
    translateX: "50%",
    verticalAlign: "middle"
  },
  "bottomStart":
  {
    bottom: "0",
    start: "0",
    translateX: "-25%",
    translateY: "25%",
  },
  "bottomEnd":
  {
    bottom: "0",
    end: "0",
    translateX: "25%",
    translateY: "25%",
  }
}


export const Avatar = forwardRef<typeof Surface, AvatarProps>((
  {
    corners,
    size,
    variant,
    scheme,
    config,
    src,
    name,
    icon = <DefaultIcon />,
    getInitials = initials,
    badge,
    badgeColor = "green",
    badgePosition = "topEnd",
    badgeText,
    ...props
  }: AvatarProps, ref) =>
{
  const firstRender = useFirstRender();
  const [activeSrc, setActiveSrc] = React.useState(src);
  const { scheme: _scheme, styles } = useMultiPartSurfaceComponentConfig(COMPONENT_ID, scheme, config, { corners, size, variant }, props);

  const bg = name ? randomColor(name) : _scheme.layers.main.color

  return (
    <Surface
      scheme={_scheme}
      transition={firstRender ? "none" : "all"}
      ref={ref}
      bgColor={bg}
      {...styles["avatar"]}
      {...props}
    >
      {activeSrc ?
        <img
          transition={firstRender ? "none" : "all"}
          alt={name}
          src={activeSrc}
          onError={() => setActiveSrc("")}
          {...styles["image"]}
        />
        : name ? (
          <span
            transition={firstRender ? "none" : "all"}
            {...styles["initials"]}
          >
            {getInitials?.(name)}
          </span>
        )
          : (
            <span
              {...styles["image"]}
            >
              {React.cloneElement(icon, {
                role: "img",
                "aria-label": name,
              })}
            </span>
          )
      }

      {badge &&
        <div
          rounded="full"
          bgColor={badgeColor}
          {...styles["badge"]}
          {...badgePositionStylesMap[badgePosition]}
        >
          {badgeText}
        </div>}

    </Surface >
  );
});
