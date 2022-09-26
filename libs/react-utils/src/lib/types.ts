import { EventKeys, Merge } from "@valerya/utils"
import { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType, HTMLAttributes, KeyboardEventHandler, ReactNode, Ref, RefAttributes, RefObject } from "react"

export type MaybeRenderProp<P> =
    | ReactNode
    | ((props: P) => ReactNode)

type WithoutStyleAttr<T> = Omit<T, "color" | "width" | "height">

export type HTMLProps<T = any> = WithoutStyleAttr<HTMLAttributes<T>> &
    RefAttributes<T>

export type PropGetter<T extends HTMLElement = any, P = {}> = (
    props?: Merge<HTMLProps<T>, P>,
    ref?: Ref<any> | RefObject<any>,
) => Merge<HTMLProps<T>, P>

export type PropGetterV2<T extends ElementType, P = {}> = (
    props?: WithoutStyleAttr<ComponentPropsWithoutRef<T>> & P,
    ref?: Ref<any> | RefObject<any>,
) => WithoutStyleAttr<ComponentPropsWithRef<T>>

export type EventKeyMap = Partial<Record<EventKeys, KeyboardEventHandler>>
