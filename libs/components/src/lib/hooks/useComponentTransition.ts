import React from "react"

export function useComponentTransition(transition?: "all" | "colors" | "opacity" | "shadow" | "transform")
{
  const [firstRender, setFirstRender] = React.useState(true)

  React.useEffect(() => setFirstRender(false), [setFirstRender])

  return firstRender ? "none" : transition ?? "all"
}
