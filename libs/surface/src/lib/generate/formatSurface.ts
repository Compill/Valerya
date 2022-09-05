import { Layer } from "../Layer";
import { SurfaceScheme } from "../SurfaceScheme";

// Make sur we get something like #RRGGBB and not #RRGGBBAA
export function nonAlphaRGB(color: string)
{
    return color.substring(0, 7)
}

export function formatSurface(surface: SurfaceScheme): SurfaceScheme
{
    surface.color = nonAlphaRGB(surface.color)
    surface.altColor = nonAlphaRGB(surface.altColor)
    formatLayer(surface.layers.main)
    formatLayer(surface.layers.mainInv)
    formatLayer(surface.layers.mainLayer)
    formatLayer(surface.layers.alt)
    formatLayer(surface.layers.altInv)

    return surface
}

function formatLayer(layer: Layer)
{
    layer.color = nonAlphaRGB(layer.color)
    layer.onColor = nonAlphaRGB(layer.onColor)
    layer.active.color = nonAlphaRGB(layer.active.color)
    layer.active.onColor = nonAlphaRGB(layer.active.onColor)
    layer.disabled.color = nonAlphaRGB(layer.disabled.color)
    layer.disabled.onColor = nonAlphaRGB(layer.disabled.onColor)
    layer.pressed.color = nonAlphaRGB(layer.pressed.color)
    layer.pressed.onColor = nonAlphaRGB(layer.pressed.onColor)
    layer.selected.color = nonAlphaRGB(layer.selected.color)
    layer.selected.onColor = nonAlphaRGB(layer.selected.onColor)
    layer.hover.color = nonAlphaRGB(layer.hover.color)
    layer.hover.onColor = nonAlphaRGB(layer.hover.onColor)
    layer.hover.selected.color = nonAlphaRGB(layer.hover.selected.color)
    layer.hover.selected.onColor = nonAlphaRGB(layer.hover.selected.onColor)
    layer.hover.active.color = nonAlphaRGB(layer.hover.active.color)
    layer.hover.active.onColor = nonAlphaRGB(layer.hover.active.onColor)
}