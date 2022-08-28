import { Container, Surface, SurfaceProps } from "@katia/ui";
import { SoperioComponent, useDarkMode } from "@soperio/react";
import { buildSurface, SurfaceScheme } from "@katia/ui";
import { ThemeSurfaceScheme, useSurface } from "@katia/ui";
import { LayerProps } from "@katia/components";

// const blue = buildSurfaceFromColor(0xff0099ff)
// const red = buildSurfaceFromColor(0xffff3300)
// const sfGreen = buildSurfaceFromColor(0xff99ffcc)

const sfBlue = buildSurface(0xff010101)
const sfRed = buildSurface(0xffb3261e)
const sfGreen = buildSurface(0xff84cc16)

const sfBlueDark = buildSurface(0xff010101, { darkMode: true })
const sfRedDark = buildSurface(0xffb3261e, { darkMode: true })
const sfGreenDark = buildSurface(0xff84cc16, { darkMode: true })


// TODO Surface system
// In order to use useSurface and to get a default surface in the case
// that none is defined in the theme, define a default surface
// in the code (not the theme, because user may not add Katia config in the theme)
// This way, since we don't know what semantic the user will use, we have at least
// one existing surface to fallback to


/**
 *
 *
 */
export default function Page({ ...props })
{
  const sfProps: Omit<SurfaceProps, "ref"> = {
    // transition: "colors",
    // duration: 350,
    // easing: "in",
    rounded: true,
    p: "4",
    hoverable: true
  }

  const darkMode = useDarkMode()

  const blue = darkMode ? sfBlueDark : sfBlue
  const red = darkMode ? sfRedDark : sfRed
  const green = darkMode ? sfGreenDark : sfGreen

  return (
    <Container center size="x2" dflex flexRow gap="10">

      <div dflex flexCol gap="4" alignItems="center" justifyContent="center" py="5" fontWeight="600" fontSize="x4">
        <SurfaceBlock layer="main" surfaceProps={sfProps} />
        <SurfaceBlock layer="mainInv" surfaceProps={sfProps} />
        <SurfaceBlock layer="mainInvHovMain" surfaceProps={sfProps} />
        <SurfaceBlock layer="mainLayer" surfaceProps={sfProps} />
        <SurfaceBlock layer="mainLayerHovMain" surfaceProps={sfProps} />
        <SurfaceBlock layer="alt" surfaceProps={sfProps} />
        <SurfaceBlock layer="altInv" surfaceProps={sfProps} />
        <SurfaceBlock layer="altHovMain" surfaceProps={sfProps} />
      </div>

      <div>
        <Palette surface="primary" py="5" />
        <Palette surface="secondary" py="5" />
        <Palette surface="tertiary" py="5" />
        <Palette surface={blue} py="5" />
        <Palette surface={red} py="5" />
        <Palette surface={green} py="5" />
      </div>

    </Container>
  );
}

interface SurfaceBlockProps extends SoperioComponent, LayerProps
{
  surfaceProps: Omit<SurfaceProps, "ref">
}

function SurfaceBlock({ layer, surfaceProps }: SurfaceBlockProps)
{
  const darkMode = useDarkMode()

  const blue = darkMode ? sfBlueDark : sfBlue
  const red = darkMode ? sfRedDark : sfRed
  const green = darkMode ? sfGreenDark : sfGreen

  return (
    <div dflex flexRow gap="10">

      <div trait="typo.h5" dflex flexCol placeContent="center" w="32">{layer}</div>

      <Surface scheme="default" layer={layer} {...surfaceProps}>
        <div trait="typo.h3">Title</div>
        <div trait="typo.subtitle1">Subtitle</div>
      </Surface>

      <Surface scheme="primary" layer={layer} {...surfaceProps}>
        <div trait="typo.h3">Title</div>
        <div trait="typo.subtitle1">Subtitle</div>
      </Surface>

      <Surface  scheme="secondary" layer={layer} {...surfaceProps}>
        <div trait="typo.h3">Title</div>
        <div trait="typo.subtitle1">Subtitle</div>
      </Surface>

      <Surface scheme="tertiary" layer={layer} {...surfaceProps}>
        <div trait="typo.h3">Title</div>
        <div trait="typo.subtitle1">Subtitle</div>
      </Surface>

      <Surface scheme={blue} layer={layer} {...surfaceProps}>
        <div trait="typo.h3">Title</div>
        <div trait="typo.subtitle1">Subtitle</div>
      </Surface>

      <Surface scheme={red} layer={layer} {...surfaceProps}>
        <div trait="typo.h3">Title</div>
        <div trait="typo.subtitle1">Subtitle</div>
      </Surface>

      <Surface scheme={green} layer={layer} {...surfaceProps}>
        <div trait="typo.h3">Title</div>
        <div trait="typo.subtitle1">Subtitle</div>
      </Surface>
    </div>
  )
}

interface PaletteProps extends SoperioComponent
{
  surface: SurfaceScheme | ThemeSurfaceScheme
}

function Palette({ surface, ...props }: PaletteProps)
{
  const _surface = useSurface(surface)

  return (
    <div w="full" alignItems="center" placeContent="center" dflex flexRow {...props}>
      {Object.values(_surface.palette).map((color, index) => <div key={index} w="10" h="10" bgColor={color} />)}
    </div>
  )
}
