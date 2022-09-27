import React from "react";
import { useAppContext } from "./AppContext";
import { menu } from "./config";

export function Content()
{
  const { page } = useAppContext()

  const reactElement = menu[page as keyof typeof menu]()

  return (
    <div minH="calc(100% - 64px)" bgColor="--bg-color-3">
      <React.Suspense>
        {reactElement}
      </React.Suspense>
    </div>
  );
}
