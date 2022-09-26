import { ComponentTypings, DisabledState, DisabledThemeProps, ExtendMultiPartSurfaceComponentConfig, MultiPartSurfaceComponentConfig, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps } from "@valerya/core";
import { SoperioComponent } from "@soperio/react";
import { ButtonProps } from "../button";
import { SurfaceBasedComponent } from "../surface";

type TraitProps = ComponentTypings<"Valerya.Modal">;

export type ComponentProps = SurfaceBasedComponent<TraitProps & SelectedState & DisabledState>;

interface ConfigStateProps extends SelectedThemeProps, DisabledThemeProps, SelectedDisabledThemeProps { }

type ModalComponentProps = {
  backdrop: SoperioComponent,
  modalWrapper: SoperioComponent,
  modal: SoperioComponent,
  modalContent: SoperioComponent,
  header: SoperioComponent, // ModalHeaderThemeProps
  headerTitle: SoperioComponent,
  headerCloseButton: ButtonProps,
  body: SoperioComponent, // ModalContentThemeProps
  footer: SoperioComponent, // ModalFooterThemeProps
  divider: SoperioComponent, // ModalFooterThemeProps
}

export type Config = MultiPartSurfaceComponentConfig<TraitProps, ModalComponentProps, ConfigStateProps>
export type ExtendConfig = ExtendMultiPartSurfaceComponentConfig<Config>
