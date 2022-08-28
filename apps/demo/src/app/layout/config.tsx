import React from "react";


const BadgePage = React.lazy(() => import("../pages/Badge"));
const ButtonPage = React.lazy(() => import("../pages/Button"));
const CardPage = React.lazy(() => import("../pages/Card"));
const CheckboxPage = React.lazy(() => import("../pages/Checkbox"));
const SurfacePage = React.lazy(() => import("../pages/Surface"));
const ColorPickerPage = React.lazy(() => import("../pages/ColorPicker"));
const SliderPickerPage = React.lazy(() => import("../pages/Slider"));


export const menu = {
  "Card": () => <CardPage />,
  "Checkbox": () => <CheckboxPage />,
  "Badge": () => <BadgePage />,
  "Button": () => <ButtonPage />,
  "Surface": () => <SurfacePage />,
  "Color Picker": () => <ColorPickerPage />,
  "Slider Picker": () => <SliderPickerPage />,
}
