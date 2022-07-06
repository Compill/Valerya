import { Container, Surface, SurfaceProps } from "@katia/components";
import { buildSurfaceFromColor } from "@katia/core";

const sfBlue = buildSurfaceFromColor(0xff0099ff)
const sfRed = buildSurfaceFromColor(0xffff3300)
const sfGreen = buildSurfaceFromColor(0xff99ffcc)

/**
 *
 *
 */
export default function Page({ ...props })
{

  const sfProps:Omit<SurfaceProps, "ref"> = {
    transition: "colors",
    duration: 350,
    easing: "in",
    rounded: true,
    p: "10",
    hoverable: true
  }

  return (
    <Container center size="x2" dflex flexCol gap="20" alignItems="center" justifyContent="center" py="20" fontWeight="600" fontSize="x4">

      <div dflex flexRow gap="20">
        <Surface scheme={sfBlue} {...sfProps}>
          Hello
        </Surface>

        <Surface scheme={sfRed} {...sfProps}>
          Hello
        </Surface>

        <Surface scheme={sfGreen} {...sfProps}>
          Hello
        </Surface>
      </div>

      <div dflex flexRow gap="20">
        <Surface scheme={sfBlue} variant="alt" {...sfProps}
{...sfProps}
{...sfProps}>
          Hello
        </Surface>

        <Surface scheme={sfRed} variant="alt" {...sfProps}
{...sfProps}
{...sfProps}>
          Hello
        </Surface>

        <Surface scheme={sfGreen} variant="alt" {...sfProps}
{...sfProps}
{...sfProps}>
          Hello
        </Surface>
      </div>

      <div dflex flexRow gap="20">
        <Surface scheme={sfBlue} variant="mainInverse" {...sfProps}
{...sfProps}
{...sfProps}>
          Hello
        </Surface>

        <Surface scheme={sfRed} variant="mainInverse" {...sfProps}
{...sfProps}
{...sfProps}>
          Hello
        </Surface>

        <Surface scheme={sfGreen} variant="mainInverse" {...sfProps}
{...sfProps}
{...sfProps}>
          Hello
        </Surface>
      </div>

      <div dflex flexRow gap="20">
        <Surface scheme={sfBlue} variant="mainLayer" {...sfProps}
{...sfProps}
{...sfProps}>
          Hello
        </Surface>

        <Surface scheme={sfRed} variant="mainLayer" {...sfProps}
{...sfProps}
{...sfProps}>
          Hello
        </Surface>

        <Surface scheme={sfGreen} variant="mainLayer" {...sfProps}
{...sfProps}
{...sfProps}>
          Hello
        </Surface>
      </div>

      <div dflex flexRow gap="20">
        <Surface scheme={sfBlue} variant="altInverse" {...sfProps}
{...sfProps}
{...sfProps}>
          Hello
        </Surface>

        <Surface scheme={sfRed} variant="altInverse" {...sfProps}
{...sfProps}
{...sfProps}>
          Hello
        </Surface>

        <Surface scheme={sfGreen} variant="altInverse" {...sfProps}
{...sfProps}
{...sfProps}>
          Hello
        </Surface>
      </div>

      <div dflex flexRow gap="20">
        <Surface scheme={sfBlue} variant="mainLayerHoverMain" {...sfProps}
{...sfProps}
{...sfProps}>
          Hello
        </Surface>

        <Surface scheme={sfRed} variant="mainLayerHoverMain" {...sfProps}
{...sfProps}
{...sfProps}>
          Hello
        </Surface>

        <Surface scheme={sfGreen} variant="mainLayerHoverMain" {...sfProps}
{...sfProps}
{...sfProps}>
          Hello
        </Surface>
      </div>

      <div dflex flexRow gap="20">
        <Surface scheme={sfBlue} variant="mainInverseHoverMain" {...sfProps}
{...sfProps}
{...sfProps}>
          Hello
        </Surface>

        <Surface scheme={sfRed} variant="mainInverseHoverMain" {...sfProps}
{...sfProps}
{...sfProps}>
          Hello
        </Surface>

        <Surface scheme={sfGreen} variant="mainInverseHoverMain" {...sfProps}
{...sfProps}
{...sfProps}>
          Hello
        </Surface>
      </div>
      <div dflex flexRow gap="20">
        <Surface scheme={sfBlue} variant="altHoverMain" {...sfProps}
{...sfProps}
{...sfProps}>
          Hello
        </Surface>

        <Surface scheme={sfRed} variant="altHoverMain" {...sfProps}
{...sfProps}
{...sfProps}>
          Hello
        </Surface>

        <Surface scheme={sfGreen} variant="altHoverMain" {...sfProps}
{...sfProps}
{...sfProps}>
          Hello
        </Surface>
      </div>
    </Container>
  );
}
