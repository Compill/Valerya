import { Container, Surface, SurfaceProps, SurfaceSchemeVariant } from "@katia/components";
import { buildAlphaSurface, buildSurfaceFromColor } from "@katia/core";
import { SoperioComponent, useDarkMode } from "@soperio/react";

// const blue = buildSurfaceFromColor(0xff0099ff)
// const red = buildSurfaceFromColor(0xffff3300)
// const sfGreen = buildSurfaceFromColor(0xff99ffcc)

const sfBlue = buildAlphaSurface(0xff010101)
const sfRed = buildAlphaSurface(0xffb3261e)
const sfGreen = buildAlphaSurface(0xff84cc16)

const sfBlueDark = buildAlphaSurface(0xff010101, { darkMode: true })
const sfRedDark = buildAlphaSurface(0xffb3261e, { darkMode: true })
const sfGreenDark = buildAlphaSurface(0xff84cc16, { darkMode: true })


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
  const sfProps:Omit<SurfaceProps, "ref"> = {
    // transition: "colors",
    // duration: 350,
    // easing: "in",
    rounded: true,
    p: "4",
    hoverable: true
  }

  return (
    <Container center size="x2" dflex flexCol gap="4" alignItems="center" justifyContent="center" py="5" fontWeight="600" fontSize="x4">

      <SurfaceBlock schemeVariant="main" surfaceProps={sfProps} />
      <SurfaceBlock schemeVariant="mainInv" surfaceProps={sfProps} />
      <SurfaceBlock schemeVariant="mainInvHovMain" surfaceProps={sfProps} />
      <SurfaceBlock schemeVariant="mainLayer" surfaceProps={sfProps} />
      <SurfaceBlock schemeVariant="mainLayerHovMain" surfaceProps={sfProps} />
      <SurfaceBlock schemeVariant="alt" surfaceProps={sfProps} />
      <SurfaceBlock schemeVariant="altInv" surfaceProps={sfProps} />
      <SurfaceBlock schemeVariant="altHovMain" surfaceProps={sfProps} />

    </Container>
  );
}

interface SurfaceBlockProps extends SoperioComponent, SurfaceSchemeVariant
{
  surfaceProps: Omit<SurfaceProps, "ref">
}

function SurfaceBlock({ schemeVariant, surfaceProps }: SurfaceBlockProps)
{
  const darkMode = useDarkMode()

  const blue = darkMode ? sfBlueDark : sfBlue
  const red = darkMode ? sfRedDark : sfRed
  const green = darkMode ? sfGreenDark : sfGreen

  return (
    <div dflex flexRow gap="10">

      <div trait="typo.h5" dflex flexCol placeContent="center" w="32">{schemeVariant}</div>

      <Surface scheme="primary" schemeVariant={schemeVariant} {...surfaceProps}>
        <div trait="typo.h3">Title</div>
        <div trait="typo.subtitle1">Subtitle</div>
      </Surface>

      <Surface scheme="secondary" schemeVariant={schemeVariant} {...surfaceProps}>
        <div trait="typo.h3">Title</div>
        <div trait="typo.subtitle1">Subtitle</div>
      </Surface>

      <Surface scheme="tertiary" schemeVariant={schemeVariant} {...surfaceProps}>
        <div trait="typo.h3">Title</div>
        <div trait="typo.subtitle1">Subtitle</div>
      </Surface>

      <Surface scheme={blue} schemeVariant={schemeVariant} {...surfaceProps}>
        <div trait="typo.h3">Title</div>
        <div trait="typo.subtitle1">Subtitle</div>
      </Surface>

      <Surface scheme={red} schemeVariant={schemeVariant} {...surfaceProps}>
        <div trait="typo.h3">Title</div>
        <div trait="typo.subtitle1">Subtitle</div>
      </Surface>

      <Surface scheme={green} schemeVariant={schemeVariant} {...surfaceProps}>
        <div trait="typo.h3">Title</div>
        <div trait="typo.subtitle1">Subtitle</div>
      </Surface>
    </div>
  )
}
