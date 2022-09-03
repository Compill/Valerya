import { SoperioComponent } from "@soperio/react";

export const ComponentState = {
  ACTIVE: "active",
  CHECKED: "checked",
  DISABLED: "disabled",
  INVALID: "invalid",
  SELECTED: "selected",
  VALID: "valid",
}

export const ComponentThemeState = {
  ACTIVE: "stateActive",
  CHECKED: "stateChecked",
  DISABLED: "stateDisabled",
  INVALID: "stateInvalid",
  SELECTED: "stateSelected",
  VALID: "stateValid",
  ACTIVE_DISABLED: "stateActiveDisabled",
  CHECKED_DISABLED: "stateCheckedDisabled",
  SELECTED_DISABLED: "stateSelectedDisabled",
}

export interface ActiveState { active?: boolean; }
export interface CheckedState { checked?: boolean; }
export interface DisabledState { disabled?: boolean; }
export interface InvalidState { invalid?: boolean; }
export interface SelectedState { selected?: boolean; }
export interface ValidState { valid?: boolean; }

export interface ActiveThemeProps<T = {}> { stateActive?: SoperioComponent & T; };
export interface CheckedThemeProps<T = {}> { stateChecked?: SoperioComponent & T; };
export interface DisabledThemeProps<T = {}> { stateDisabled?: SoperioComponent & T; };
export interface InvalidThemeProps<T = {}> { stateInvalid?: SoperioComponent & T; };
export interface SelectedThemeProps<T = {}> { stateSelected?: SoperioComponent & T; };
export interface ValidThemeProps<T = {}> { stateValid?: SoperioComponent & T; };
export interface ActiveDisabledThemeProps<T = {}> { stateActiveDisabled?: SoperioComponent & T; };
export interface CheckedDisabledThemeProps<T = {}> { stateCheckedDisabled?: SoperioComponent & T; };
export interface SelectedDisabledThemeProps<T = {}> { stateSelectedDisabled?: SoperioComponent & T; };

export type ComponentStateProps<T = SoperioComponent> = Partial<ActiveThemeProps<T>
          & CheckedThemeProps<T>
          & DisabledThemeProps<T>
          & InvalidThemeProps<T>
          & SelectedThemeProps<T>
          & ValidThemeProps<T>
          & ActiveDisabledThemeProps<T>
          & CheckedDisabledThemeProps<T>
          & SelectedDisabledThemeProps<T>>

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NoStateProps {}
