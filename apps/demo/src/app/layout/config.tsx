import React from "react";


const LayerPage = React.lazy(() => import("../pages/Layer"));
const SurfacePage = React.lazy(() => import("../pages/Surface"));
const ButtonPage = React.lazy(() => import("../pages/Button"));
const Button2Page = React.lazy(() => import("../pages/Button2"));
const ColorPickerPage = React.lazy(() => import("../pages/ColorPicker"));


export const menu = {
  "Layer": () => <LayerPage />,
  "Surface": () => <SurfacePage />,
  "Button": () => <ButtonPage />,
  "Button2": () => <Button2Page />,
  "Color Picker": () => <ColorPickerPage />,
}
