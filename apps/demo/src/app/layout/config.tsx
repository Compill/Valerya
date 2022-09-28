import React from "react";


const AccordionPage = React.lazy(() => import("../pages/Accordion"));
const AvatarPage = React.lazy(() => import("../pages/Avatar"));
const BadgePage = React.lazy(() => import("../pages/Badge"));
const ButtonPage = React.lazy(() => import("../pages/Button"));
const DividerPage = React.lazy(() => import("../pages/Divider"));
const CardPage = React.lazy(() => import("../pages/Card"));
const CheckboxPage = React.lazy(() => import("../pages/Checkbox"));
const InputPage = React.lazy(() => import("../pages/Input"));
const ListPage = React.lazy(() => import("../pages/List"));
const ModalPage = React.lazy(() => import("../pages/Modal"));
const RadioPage = React.lazy(() => import("../pages/Radio"));
const SelectPage = React.lazy(() => import("../pages/Select"));
const SurfacePage = React.lazy(() => import("../pages/Surface"));
const SidebarPage = React.lazy(() => import("../pages/Sidebar"));
const SpinnerPage = React.lazy(() => import("../pages/Spinner"));
const SwitchPage = React.lazy(() => import("../pages/Switch"));
const TextAreaPage = React.lazy(() => import("../pages/TextArea"));
const ColorPickerPage = React.lazy(() => import("../pages/ColorPicker"));
const SliderPickerPage = React.lazy(() => import("../pages/Slider"));


export const menu = {
  "Accordion": () => <AccordionPage />,
  "Avatar": () => <AvatarPage />,
  "Badge": () => <BadgePage />,
  "Button": () => <ButtonPage />,
  "Card": () => <CardPage />,
  "Checkbox": () => <CheckboxPage />,
  "Divider": () => <DividerPage />,
  "Input": () => <InputPage />,
  "List": () => <ListPage />,
  "Modal": () => <ModalPage />,
  "Radio": () => <RadioPage />,
  "Select": () => <SelectPage />,
  "Sidebar": () => <SidebarPage />,
  "Spinner": () => <SpinnerPage />,
  "Surface": () => <SurfacePage />,
  "Switch": () => <SwitchPage />,
  "TextArea": () => <TextAreaPage />,
  "Color Picker": () => <ColorPickerPage />,
  "Slider Picker": () => <SliderPickerPage />,
}
