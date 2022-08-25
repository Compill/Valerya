import { LayerScheme } from "./Layer";
import { PaletteScheme } from "./PaletteScheme";

export interface SurfaceScheme
{
    color: string,
    altColor: string,
    palette: PaletteScheme,
    layers: LayerScheme
}