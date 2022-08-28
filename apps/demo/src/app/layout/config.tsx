import React from "react";


const LayerPage = React.lazy(() => import("../pages/Layer"));
const SurfacePage = React.lazy(() => import("../pages/Surface"));
const ButtonPage = React.lazy(() => import("../pages/Button"));
const BadgePage = React.lazy(() => import("../pages/Badge"));
const ColorPickerPage = React.lazy(() => import("../pages/ColorPicker"));
const SliderPickerPage = React.lazy(() => import("../pages/Slider"));


export const menu = {
  "Layer": () => <LayerPage />,
  "Surface": () => <SurfacePage />,
  "Button": () => <ButtonPage />,
  "Badge": () => <BadgePage />,
  "Color Picker": () => <ColorPickerPage />,
  "Slider Picker": () => <SliderPickerPage />,
}
