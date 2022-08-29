import React from "react";


const AvatarPage = React.lazy(() => import("../pages/Avatar"));
const BadgePage = React.lazy(() => import("../pages/Badge"));
const ButtonPage = React.lazy(() => import("../pages/Button"));
const DividerPage = React.lazy(() => import("../pages/Divider"));
const CardPage = React.lazy(() => import("../pages/Card"));
const CheckboxPage = React.lazy(() => import("../pages/Checkbox"));
const InputPage = React.lazy(() => import("../pages/Input"));
const ModalPage = React.lazy(() => import("../pages/Modal"));
const RadioPage = React.lazy(() => import("../pages/Radio"));
const SelectPage = React.lazy(() => import("../pages/Select"));
const SurfacePage = React.lazy(() => import("../pages/Surface"));
const SwitchPage = React.lazy(() => import("../pages/Switch"));
const TextAreaPage = React.lazy(() => import("../pages/TextArea"));
const ColorPickerPage = React.lazy(() => import("../pages/ColorPicker"));
const SliderPickerPage = React.lazy(() => import("../pages/Slider"));


export const menu = {
  "Avatar": () => <AvatarPage />,
  "Card": () => <CardPage />,
  "Checkbox": () => <CheckboxPage />,
  "Badge": () => <BadgePage />,
  "Button": () => <ButtonPage />,
  "Divider": () => <DividerPage />,
  "Input": () => <InputPage />,
  "Modal": () => <ModalPage />,
  "Radio": () => <RadioPage />,
  "Select": () => <SelectPage />,
  "Surface": () => <SurfacePage />,
  "Switch": () => <SwitchPage />,
  "TextArea": () => <TextAreaPage />,
  "Color Picker": () => <ColorPickerPage />,
  "Slider Picker": () => <SliderPickerPage />,
}
