import React from "react";


const LayerPage = React.lazy(() => import("../pages/Layer"));
const SurfacePage = React.lazy(() => import("../pages/Surface"));


export const menu = {
  "Layer": () => <LayerPage />,
  "Surface": () => <SurfacePage />,
}
