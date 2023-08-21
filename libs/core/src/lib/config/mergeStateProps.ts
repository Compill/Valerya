import { SoperioComponent } from "@soperio/react";
import { ComponentState, ComponentThemeState } from "./ComponentStates";

export type OmitStates<T> = Omit<T, "active" | "checked" | "disabled" | "invalid" | "selected" | "valid" | "activeDisabled" | "checkedDisabled" | "selectedDisabled">

// Final step : merge the props with the state props
// checked, selected, disabled, ...
export function mergeStateProps<T extends SoperioComponent>(configProps: any, props: any): OmitStates<T>
{
    let finalProps = { ...configProps };

    // Remove theme states from final props
    // Soperio props don't have stateActive, stateDisabled, etc
    // only their html counterparts like disabled, selected, checked, ...
    //
    // Theme props :
    // stateDisabled: {
    //  // bunch of soperio props
    // }
    //
    // Soperio props
    // disabled: true
    delete finalProps[ComponentThemeState.VALID]
    delete finalProps[ComponentThemeState.INVALID]
    delete finalProps[ComponentThemeState.ACTIVE]
    delete finalProps[ComponentThemeState.ACTIVE_DISABLED]
    delete finalProps[ComponentThemeState.CHECKED]
    delete finalProps[ComponentThemeState.CHECKED_DISABLED]
    delete finalProps[ComponentThemeState.SELECTED]
    delete finalProps[ComponentThemeState.SELECTED_DISABLED]
    delete finalProps[ComponentThemeState.DISABLED]

    if (props)
    {
        if (props[ComponentState.VALID])
            finalProps = { ...finalProps, ...configProps[ComponentThemeState.VALID] };

        if (props[ComponentState.INVALID])
            finalProps = { ...finalProps, ...configProps[ComponentThemeState.INVALID] };

        if (props[ComponentState.DISABLED])
        {
            if (props[ComponentState.ACTIVE] || props[ComponentState.CHECKED] || props[ComponentState.SELECTED])
            {
                if (props[ComponentState.ACTIVE])
                    finalProps = { ...finalProps, ...(configProps[ComponentThemeState.ACTIVE_DISABLED] ?? configProps[ComponentThemeState.ACTIVE]) };

                if (props[ComponentState.CHECKED])
                    finalProps = { ...finalProps, ...(configProps[ComponentThemeState.CHECKED_DISABLED] ?? configProps[ComponentThemeState.CHECKED]) };

                if (props[ComponentState.SELECTED])
                    finalProps = { ...finalProps, ...(configProps[ComponentThemeState.SELECTED_DISABLED] ?? configProps[ComponentThemeState.SELECTED]) };
            }
            else
            {
                finalProps = { ...finalProps, ...configProps[ComponentThemeState.DISABLED] };
            }
        }
        else
        {
            if (props[ComponentState.ACTIVE])
                finalProps = { ...finalProps, ...configProps[ComponentThemeState.ACTIVE] };

            if (props[ComponentState.CHECKED])
                finalProps = { ...finalProps, ...configProps[ComponentThemeState.CHECKED] };

            if (props[ComponentState.SELECTED])
                finalProps = { ...finalProps, ...configProps[ComponentThemeState.SELECTED] };
        }
    }

    return finalProps as OmitStates<T>;
}
