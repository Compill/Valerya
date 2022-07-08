import React from "react";


const LayerPage = React.lazy(() => import("../pages/Layer"));
const SurfacePage = React.lazy(() => import("../pages/Surface"));
const ButtonPage = React.lazy(() => import("../pages/Button"));


export const menu = {
  "Layer": () => <LayerPage />,
  "Surface": () => <SurfacePage />,
  "Button": () => <ButtonPage />,
}
