import { SoperioComponent, useDarkMode } from "@soperio/react"
import { LayerProps, Surface, SurfaceProps } from "@valerya/components"
import { buildSurface, SurfaceScheme } from "@valerya/surface"
import { useRecoilValue } from "recoil"
import { activeState, coefState, colorState, disabledState, selectedState } from "./states"

export function Content()
{
    const color = useRecoilValue(colorState)
    const coef = useRecoilValue(coefState)
    const selected = useRecoilValue(selectedState)
    const active = useRecoilValue(activeState)
    const disabled = useRecoilValue(disabledState)

    const darkMode = useDarkMode()
    const scheme = buildSurface(color, { coef, darkMode })

    return (
        <div
            flexGrow="1"
            h="100%"
            w="full"
            bgColor="--bg-2"
            textColor="--text-2"
            dflex
            flexCol
            alignItems="center"
            placeContent="center"
            p="10"
            gap="10">
            <div dflex flexRow gap="10" w="full" flexGrow>
                <SurfaceBlock scheme={scheme} selected={selected} active={active} disabled={disabled} layer="main" />
                <SurfaceBlock scheme={scheme} selected={selected} active={active} disabled={disabled} layer="mainInv" />
                <SurfaceBlock scheme={scheme} selected={selected} active={active} disabled={disabled} layer="mainInvHovMain" />
            </div>

            <div dflex flexRow gap="10" w="full" flexGrow>
                <SurfaceBlock scheme={scheme} selected={selected} active={active} disabled={disabled} layer="alt" />
                <SurfaceBlock scheme={scheme} selected={selected} active={active} disabled={disabled} layer="altHovMain" />
                <SurfaceBlock scheme={scheme} selected={selected} active={active} disabled={disabled} layer="altInv" />
            </div>

            <div dflex flexRow gap="10" w="full" flexGrow>
                <SurfaceBlock scheme={scheme} selected={selected} active={active} disabled={disabled} layer="mainLayer" />
                <SurfaceBlock scheme={scheme} selected={selected} active={active} disabled={disabled} layer="mainLayerHovMain" />
                <div flexBasis="1/3" />
            </div>
        </div>
    )
}



interface SurfaceBlockProps extends SoperioComponent, Required<LayerProps>
{
    scheme: SurfaceScheme
    selected?: boolean
    active?: boolean
    disabled?: boolean
}

const sfProps: Omit<SurfaceProps, "ref"> = {
    // transition: "colors",
    // duration: 350,
    // easing: "in",
    rounded: true,
    p: "2",
    hoverable: true,
    flexBasis: "1/3"
}

function colorMapping(scheme: SurfaceScheme)
{
    return {
        "main": {
            color: scheme.layers.main.color,
            onColor: scheme.layers.main.onColor
        },
        "mainInv": {
            color: scheme.layers.mainInv.color,
            onColor: scheme.layers.mainInv.onColor
        },
        "mainInvHovMain": {
            color: scheme.layers.mainInv.color,
            onColor: scheme.layers.main.onColor
        },
        "mainLayer": {
            color: scheme.layers.mainLayer.color,
            onColor: scheme.layers.main.onColor
        },
        "mainLayerHovMain": {
            color: scheme.layers.main.color,
            onColor: scheme.layers.main.onColor
        },
        "alt": {
            color: scheme.layers.alt.color,
            onColor: scheme.layers.alt.onColor
        },
        "altInv": {
            color: scheme.layers.altInv.color,
            onColor: scheme.layers.altInv.onColor
        },
        "altHovMain": {
            color: scheme.layers.alt.color,
            onColor: scheme.layers.main.onColor
        }
    }
}

function SurfaceBlock({ scheme, layer, selected, active, disabled }: SurfaceBlockProps)
{
    const mapping = colorMapping(scheme)
    const color = mapping[layer].color
    const onColor = mapping[layer].onColor

    return (
        <Surface
            scheme={scheme} layer={layer} {...sfProps} h="full" dflex flexCol textAlign="center"
            selected={selected}
            active={active}
            disabled={disabled}
        >
            <div position="absolute" dflex flexRow gap="3">
                <Surface scheme="default" rounded p="2" px="3" dflex flexRow alignItems="center" font="mono" fontWeight="400">
                    <div w="5" h="5" bgColor={color} me="3" rounded />
                    {color.toUpperCase()}
                </Surface>

                <Surface scheme="default" rounded p="2" px="3" dflex flexRow alignItems="center" fontWeight="400" font="mono">
                    <div w="5" h="5" bgColor={onColor} me="3" rounded />
                    {onColor.toUpperCase()}
                </Surface>
            </div>

            <div dflex flexCol h="100%" placeContent="center">
                <div trait="typo.display4">Layer</div>
                <div trait="typo.h4">{layer}</div>
            </div>
        </Surface>
    )
}