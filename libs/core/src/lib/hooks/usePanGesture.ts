import { AnyPointerEvent, noop, PanEventHandler, PanSession, PanSessionHandlers } from "@katia/utils"
import React from "react"
import { usePointerEvent } from "./usePointerEvent"
import { useUnmountEffect } from "./useUnmountEffect"

export interface UsePanGestureProps
{
    onPan?: PanEventHandler
    onPanStart?: PanEventHandler
    onPanEnd?: PanEventHandler
    onPanSessionStart?: PanEventHandler
    onPanSessionEnd?: PanEventHandler
    threshold?: number
}

export function usePanGesture(
    ref: React.RefObject<HTMLElement>,
    props: UsePanGestureProps,
)
{
    const {
        onPan,
        onPanStart,
        onPanEnd,
        onPanSessionStart,
        onPanSessionEnd,
        threshold,
    } = props

    const hasPanEvents = Boolean(onPan || onPanStart || onPanEnd || onPanSessionStart || onPanSessionEnd,)

    const panSession = React.useRef<PanSession | null>(null)

    const handlers: Partial<PanSessionHandlers> = {
        onSessionStart: onPanSessionStart,
        onSessionEnd: onPanSessionEnd,
        onStart: onPanStart,
        onMove: onPan,
        onEnd(event, info)
        {
            panSession.current = null
            onPanEnd?.(event, info)
        },
    }

    React.useEffect(() =>
    {
        panSession.current?.updateHandlers(handlers)
    })

    function onPointerDown(event: AnyPointerEvent)
    {
        panSession.current = new PanSession(event, handlers, threshold)
    }

    usePointerEvent(() => ref.current, "pointerdown", hasPanEvents ? onPointerDown : noop)

    useUnmountEffect(() =>
    {
        panSession.current?.end()
        panSession.current = null
    })
}
