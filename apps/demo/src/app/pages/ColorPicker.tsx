import { buildSurface, Container, Surface, SurfaceProps, SurfaceScheme, LayerProps, Slider } from "@katia/ui";
import { darken, lighten, SoperioComponent, useDarkMode } from "@soperio/react";
import React from "react";
import { SketchPicker } from "react-color";
// TODO Surface system
// In order to use useSurface and to get a default surface in the case
// that none is defined in the theme, define a default surface
// in the code (not the theme, because user may not add Katia config in the theme)
// This way, since we don't know what semantic the user will use, we have at least
// one existing surface to fallback to

// TODO Add a scale from -1 to +1 to alter alpha values of colors in scheme set

// TODO Build the palette


export default function Page({ ...props })
{
  const [color, setColor] = React.useState({ hex: "#0099ff" })
  const [coef, setCoef] = React.useState("0.00")

  const darkMode = useDarkMode()

  const scheme = buildSurface(parseInt("ff" + color.hex.substring(1), 16), { coef: parseFloat(coef), darkMode })

  const handleChange = React.useCallback(color => setColor(color), [setColor])
  const handleCoefChange = React.useCallback(value => setCoef(value), [setCoef])

  return (
    <div w="full" h="full" >
      <Header color={color.hex} onChange={handleChange} />

      <Palette color={color.hex} coef={coef} mt="10" mb="5" />

      <div dflex flexRow w="full" alignItems="center" placeContent="center">
        <span>Adjust colors</span>

        <Slider
          mx="3"
          w="20"
          type="range"
          min={-0.5}
          max={0.5}
          step={0.001}
          value={parseFloat(coef)}
          onChange={handleCoefChange} />
        {/* <input
          mx="3"
          w="20"
          type="range"
          min={-0.5}
          max={0.5}
          step={0.001}
          value={coef}
          onChange={handleCoefChange} /> */}

        <span>{addZeroes(coef, 3)}</span>

      </div>


      <Container center size="x2" dflex flexCol gap="20" alignItems="center" justifyContent="center" py="20" fontWeight="600" fontSize="x4">

        <div dflex flexRow gap="20">
          <SurfaceBlock scheme={scheme} layer="main" />
          <SurfaceBlock scheme={scheme} layer="mainInv" />
          <SurfaceBlock scheme={scheme} layer="mainInvHovMain" />
          <SurfaceBlock scheme={scheme} layer="mainLayer" />
          <SurfaceBlock scheme={scheme} layer="mainLayerHovMain" />
        </div>

        <div dflex flexRow gap="20">
          <SurfaceBlock scheme={scheme} layer="alt" />
          <SurfaceBlock scheme={scheme} layer="altInv" />
          <SurfaceBlock scheme={scheme} layer="altHovMain" />
        </div>

      </Container>
    </div>
  );
}

interface SurfaceBlockProps extends SoperioComponent, LayerProps
{
  scheme: SurfaceScheme
}

const sfProps: Omit<SurfaceProps, "ref"> = {
  // transition: "colors",
  // duration: 350,
  // easing: "in",
  rounded: true,
  p: "10",
  hoverable: true
}

function SurfaceBlock({ scheme, layer }: SurfaceBlockProps)
{
  return (
    <div dflex flexCol gap="10">

      <div trait="typo.h5" fontSize="sm" textAlign="center" w="full" dflex flexCol placeContent="center" alignItems="center">{layer}</div>

      <Surface scheme={scheme} layer={layer} {...sfProps} w="36" h="36" dflex flexCol placeContent="center">
        <div trait="typo.h3">Title</div>
        <div trait="typo.subtitle1">Subtitle</div>
      </Surface>
    </div>
  )
}

interface HeaderProps
{
  color: string,
  onChange: (color: string) => void
}

function Header({ color, onChange }: HeaderProps)
{


  return (
    <div dflex w="full" pt="5" alignItems="center" placeContent="center">
      <SketchPicker color={color} onChange={onChange} />
    </div>
  )
}

interface PaletteProps extends SoperioComponent
{
  color: string,
  coef?: string
}

function Palette({ color, coef = "0", ...props }: PaletteProps)
{
  const transformDarkCoef = (parseFloat(coef) + 0.5) * 8
  const transformLightCoef = (parseFloat(coef) + 0.5) * 6
  const leveledDarkCoef = 4 + transformDarkCoef
  const leveledLightCoef = 4 + transformLightCoef
  const colors = [color]

  for (let i = 0; i < 5; i++)
    colors.push(lighten(color, leveledLightCoef + leveledLightCoef * i))

  for (let i = 0; i < 4; i++)
    colors.unshift(darken(color, leveledDarkCoef + leveledDarkCoef * i))

  return (
    <div w="full" alignItems="center" placeContent="center" dflex flexRow {...props}>
      {colors.map((color, index) => <div key={index} w="10" h="10" bgColor={color} />)}
    </div>
  )
}

function addZeroes(num, zeroes)
{
  const dec = String(num).split('.')[1]
  const len = dec && dec.length > zeroes ? dec.length : zeroes
  return (num >= 0 ? "+" : "") + Number(num).toFixed(len)
}