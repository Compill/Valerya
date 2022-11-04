
import { SoperioComponent } from "@soperio/react"
import { Avatar, Button } from "@valerya/ui"
import copy from "copy-to-clipboard"
import { useState, useCallback, useEffect } from "react"

export interface UseClipboardOptions {
  /**
   * timeout delay (in ms) to switch back to initial state once copied.
   */
  timeout?: number
  /**
   * Set the desired MIME type
   */
  format?: string
}


/**
 * React hook to copy content to clipboard
 *
 * @param text the text or value to copy
 * @param {Number} [optionsOrTimeout=1500] optionsOrTimeout - delay (in ms) to switch back to initial state once copied.
 * @param {Object} optionsOrTimeout
 * @param {string} optionsOrTimeout.format - set the desired MIME type
 * @param {number} optionsOrTimeout.timeout - delay (in ms) to switch back to initial state once copied.
 */
 export function useClipboard(
  text: string,
  optionsOrTimeout: number | UseClipboardOptions = {},
) {
  const [hasCopied, setHasCopied] = useState(false)

  const { timeout = 1500, ...copyOptions } =
    typeof optionsOrTimeout === "number"
      ? { timeout: optionsOrTimeout }
      : optionsOrTimeout

  const onCopy = useCallback(() => {
    const didCopy = copy(text, copyOptions)
    setHasCopied(didCopy)
  }, [text, copyOptions])

  useEffect(() => {
    let timeoutId: number | null = null

    if (hasCopied) {
      timeoutId = window.setTimeout(() => {
        setHasCopied(false)
      }, timeout)
    }

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [timeout, hasCopied])

  return { value: text, onCopy, hasCopied }
}

function CopyButton({ code, ...props }: {code: string } & SoperioComponent) {
  const { hasCopied, onCopy } = useClipboard(code)

  return (
    <Button
      size="md"
      textTransform="uppercase"
      color="blue"
      textSize="xs"
      lineHeight="none"
      // style={{lineHeight: "normal"}}
      {...props}
      onClick={onCopy}
    >
      {hasCopied
        ? "Copied"
        : "Copy"}
    </Button>
  )
}

export default CopyButton
