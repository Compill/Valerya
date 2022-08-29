import React from "react";


const AvatarPage = React.lazy(() => import("../pages/Avatar"));
const BadgePage = React.lazy(() => import("../pages/Badge"));
const ButtonPage = React.lazy(() => import("../pages/Button"));
const InputPage = React.lazy(() => import("../pages/Input"));
const CardPage = React.lazy(() => import("../pages/Card"));
const CheckboxPage = React.lazy(() => import("../pages/Checkbox"));
const SurfacePage = React.lazy(() => import("../pages/Surface"));
const RadioPage = React.lazy(() => import("../pages/Radio"));
const ColorPickerPage = React.lazy(() => import("../pages/ColorPicker"));
const SliderPickerPage = React.lazy(() => import("../pages/Slider"));


export const menu = {
  "Avatar": () => <AvatarPage />,
  "Card": () => <CardPage />,
  "Checkbox": () => <CheckboxPage />,
  "Badge": () => <BadgePage />,
  "Button": () => <ButtonPage />,
  "Input": () => <InputPage />,
  "Radio": () => <RadioPage />,
  "Surface": () => <SurfacePage />,
  "Color Picker": () => <ColorPickerPage />,
  "Slider Picker": () => <SliderPickerPage />,
}
