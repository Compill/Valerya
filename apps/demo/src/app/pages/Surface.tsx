import { buildDarkSurface, Container, Surface, SurfaceProps } from "@valerya/ui";
import { SoperioComponent, useDarkMode } from "@soperio/react";
import { buildSurface, SurfaceScheme } from "@valerya/ui";
import { ThemeSurfaceScheme, useSurface } from "@valerya/ui";
import { LayerProps } from "@valerya/components";

// const blue = buildSurfaceFromColor(0xff0099ff)
// const red = buildSurfaceFromColor(0xffff3300)
// const sfGreen = buildSurfaceFromColor(0xff99ffcc)

// const sfBlue = buildDarkSurface(0xff010101, 0xffffff)
const sfBlue = buildSurface("#010101")
const sfRed = buildSurface("#b3261e")
const sfGreen = buildSurface("#84cc16")

const sfBlueDark = buildDarkSurface("#010101", "#ffffff")
const sfRedDark = buildSurface("#b3261e", { darkMode: true })
const sfGreenDark = buildSurface("#84cc16", { darkMode: true })


// TODO Surface system
// In order to use useSurface and to get a default surface in the case
// that none is defined in the theme, define a default surface
// in the code (not the theme, because user may not add Valerya config in the theme)
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

      <div dflex flexCol gap="4" alignItems="center" justifyContent="center" py="5" fontWeight="600" textSize="x4">
        <SurfaceBlock layer="main" surfaceProps={sfProps} />
        <SurfaceBlock layer="main" surfaceProps={{...sfProps, disabled: true}} />
        <SurfaceBlock layer="mainInv" surfaceProps={sfProps} />
        <SurfaceBlock layer="mainInv" surfaceProps={{...sfProps, disabled: true}} />
        <SurfaceBlock layer="mainInvHovMain" surfaceProps={sfProps} />
        <SurfaceBlock layer="mainInvHovMain" surfaceProps={{...sfProps, disabled: true}} />
        <SurfaceBlock layer="mainLayer" surfaceProps={sfProps} />
        <SurfaceBlock layer="mainLayer" surfaceProps={{...sfProps, disabled: true}} />
        <SurfaceBlock layer="mainLayerHovMain" surfaceProps={sfProps} />
        <SurfaceBlock layer="mainLayerHovMain" surfaceProps={{...sfProps, disabled: true}} />
        <SurfaceBlock layer="alt" surfaceProps={sfProps} />
        <SurfaceBlock layer="alt" surfaceProps={{...sfProps, disabled: true}} />
        <SurfaceBlock layer="altInv" surfaceProps={sfProps} />
        <SurfaceBlock layer="altInv" surfaceProps={{...sfProps, disabled: true}} />
        <SurfaceBlock layer="altHovMain" surfaceProps={sfProps} />
        <SurfaceBlock layer="altHovMain" surfaceProps={{...sfProps, disabled: true}} />
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

      <div trait="typo.h5" dflex flexCol placeContent="center" w="32">{layer + (surfaceProps.disabled ? " (disabled)" : "")}</div>

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
