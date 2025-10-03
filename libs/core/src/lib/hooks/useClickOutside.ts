import { useEffect } from "react";

/**
 * Custom hook to detect clicks outside a referenced element.
 *
 * @param ref - React ref of the element
 * @param handler - Function to call when clicking outside
 */
export function useClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void
)
{
  useEffect(() =>
  {
    const listener = (event: MouseEvent | TouchEvent) =>
    {
      const el = ref?.current;
      if (!el || el.contains(event.target as Node))
      {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () =>
    {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
