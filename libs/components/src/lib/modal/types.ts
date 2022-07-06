import { ComponentTypings, DisabledState, DisabledThemeProps, ExtendMultiPartComponentConfig, MultiPartComponentConfig, SelectedDisabledThemeProps, SelectedState, SelectedThemeProps } from "@katia/core";
import { SoperioComponent } from "@soperio/react";
import { ButtonProps } from "../button";

type TraitProps = ComponentTypings<"Soperio.Modal">;

export type ComponentProps = SoperioComponent & TraitProps & SelectedState & DisabledState;

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
}

export type Config = MultiPartComponentConfig<TraitProps, ModalComponentProps, ConfigStateProps>
export type ExtendConfig = ExtendMultiPartComponentConfig<Config>
