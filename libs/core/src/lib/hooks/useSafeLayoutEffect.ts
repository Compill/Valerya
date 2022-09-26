import { isBrowser } from "@valerya/utils"
import { useEffect, useLayoutEffect } from "react"

export const useSafeLayoutEffect = isBrowser ? useLayoutEffect : useEffect