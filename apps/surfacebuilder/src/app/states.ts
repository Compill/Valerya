import { atom } from "recoil";

export const colorState = atom({ key: 'color', default: "#0099ff" });
export const coefState = atom({ key: 'coef', default: 0 });
export const selectedState = atom({ key: 'selected', default: false });
export const activeState = atom({ key: 'active', default: false });
export const disabledState = atom({ key: 'disabled', default: false });