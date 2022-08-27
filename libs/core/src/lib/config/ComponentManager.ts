import { ComponentConfig, MultiPartComponentConfig } from "./ComponentConfig";

export class ComponentManager
{
  static components: Record<string, ComponentConfig | MultiPartComponentConfig<Record<string, string>>> = {};

  static registerComponent<C extends ComponentConfig | MultiPartComponentConfig<Record<string, string>>>(name: string, componentConfig: C)
  {
    this.components[name] = componentConfig;
  }

  static getComponentConfig(name: string): ComponentConfig | MultiPartComponentConfig<Record<string, string>> | undefined
  {
    return this.components[name];
  }
}
