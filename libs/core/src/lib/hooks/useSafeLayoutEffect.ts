import { isBrowser } from "@katia/utils"
import { useEffect, useLayoutEffect } from "react"

export const useSafeLayoutEffect = isBrowser ? useLayoutEffect : useEffect