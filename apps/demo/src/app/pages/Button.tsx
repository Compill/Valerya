import { Button, Container } from "@valerya/ui";
import { usePrimaryScheme } from "../hooks/usePrimaryScheme";
import { useSecondaryScheme } from "../hooks/useSecondaryScheme";
import { useTertiaryScheme } from "../hooks/useTertiaryScheme";

/**
 *
 *
 */
export default function Page({ ...props })
{
  const primaryScheme = usePrimaryScheme()
  const secondaryScheme = useSecondaryScheme()
  const tertiaryScheme = useTertiaryScheme()

  return (
    <Container center size="x2" dflex gap="20" justifyContent="center" py="20">

      <div flexRow>
        <Button scheme={primaryScheme} hover_scheme={tertiaryScheme} variant="default" block mx="auto" my="5">Open Left</Button>
        <Button scheme={primaryScheme} variant="light" block mx="auto" my="5">Light button</Button>
        <Button scheme={primaryScheme} variant="glass" block mx="auto" my="5">Glass button</Button>
        <Button scheme={primaryScheme} variant="link" block mx="auto" my="5">Link button</Button>
        <Button scheme={primaryScheme} variant="outline" block mx="auto" my="5">Outline button</Button>
        <Button scheme={primaryScheme} variant="borderless" block mx="auto" my="5">Borderless</Button>
      </div>

      <div flexRow>
        <Button scheme={secondaryScheme} variant="default" block mx="auto" my="5">Open Left</Button>
        <Button scheme={secondaryScheme} variant="light" block mx="auto" my="5">Light button</Button>
        <Button scheme={secondaryScheme} variant="glass" block mx="auto" my="5">Glass button</Button>
        <Button scheme={secondaryScheme} variant="link" block mx="auto" my="5">Link button</Button>
        <Button scheme={secondaryScheme} variant="outline" block mx="auto" my="5">Outline button</Button>
        <Button scheme={secondaryScheme} variant="borderless" block mx="auto" my="5">Borderless</Button>
      </div>

      <div flexRow>
        <Button scheme={tertiaryScheme} variant="default" block mx="auto" my="5" textTransform="uppercase" >Open Right</Button>
        <Button scheme={tertiaryScheme} variant="light" block mx="auto" my="5" textTransform="uppercase">Light button</Button>
        <Button scheme={tertiaryScheme} variant="glass" block mx="auto" my="5" textTransform="uppercase">Glass button</Button>
        <Button scheme={tertiaryScheme} variant="link" block mx="auto" my="5" textTransform="uppercase">Link button</Button>
        <Button scheme={tertiaryScheme} variant="outline" block mx="auto" my="5" textTransform="uppercase">Outline button</Button>
        <Button scheme={tertiaryScheme} variant="borderless" block mx="auto" my="5" textTransform="uppercase">Borderless</Button>
      </div>

      <div flexRow>
        <Button scheme="dark" variant="default" block mx="auto" my="5" textTransform="uppercase">Open Top</Button>
        <Button scheme="dark" variant="light" block mx="auto" my="5" textTransform="uppercase">Light button</Button>
        <Button scheme="dark" variant="glass" block mx="auto" my="5" textTransform="uppercase">Glass button</Button>
        <Button scheme="dark" variant="link" block mx="auto" my="5" textTransform="uppercase">Link button</Button>
        <Button scheme="dark" variant="outline" block mx="auto" my="5" textTransform="uppercase">Outline button</Button>
        <Button scheme="dark" variant="borderless" block mx="auto" my="5" textTransform="uppercase">Borderless</Button>
      </div>

      {/* <div flexRow>
        <Button scheme="accent" variant="default" block mx="auto" my="5" textTransform="uppercase">Open Bottom</Button>
        <Button scheme="accent" variant="light" block mx="auto" my="5" textTransform="uppercase">Light button</Button>
        <Button scheme="accent" variant="glass" block mx="auto" my="5" textTransform="uppercase">Glass button</Button>
        <Button scheme="accent" variant="link" block mx="auto" my="5" textTransform="uppercase">Link button</Button>
        <Button scheme="accent" variant="outline" block mx="auto" my="5" textTransform="uppercase">Outline button</Button>
        <Button scheme="accent" variant="borderless" block mx="auto" my="5" textTransform="uppercase">Borderless</Button>
      </div> */}

      {/* <div flexRow>
                    <Button variant="default" corners="square" block mx="auto" my="5">Default button</Button>
                    <Button variant="light" corners="square" block mx="auto" my="5">Light button</Button>
                    <Button variant="link" corners="square" block mx="auto" my="5">Link button</Button>
                    <Button variant="outline" corners="square" block mx="auto" my="5">Outline button</Button>
                    <Button variant="borderless" corners="square" block mx="auto" my="5">Borderless</Button>
                </div> */}

      <div flexRow>
        <Button variant="default" block mx="auto" my="5" selected>Default button</Button>
        <Button variant="light" block mx="auto" my="5" selected>Light button</Button>
        <Button variant="glass" block mx="auto" my="5" selected>Glass button</Button>
        <Button variant="link" block mx="auto" my="5" selected>Link button</Button>
        <Button variant="outline" block mx="auto" my="5" selected>Outline button</Button>
        <Button variant="borderless" block mx="auto" my="5" selected>Borderless</Button>
      </div>

      <div flexRow>
        <Button scheme={tertiaryScheme} selected variant="default" block mx="auto" my="5" disabled>Default button</Button>
        <Button scheme={tertiaryScheme} selected variant="light" block mx="auto" my="5" disabled>Light button</Button>
        <Button scheme={tertiaryScheme} selected variant="link" block mx="auto" my="5" disabled>Link button</Button>
        <Button scheme={tertiaryScheme} selected variant="outline" block mx="auto" my="5" disabled>Outline button</Button>
        <Button scheme={tertiaryScheme} selected variant="borderless" block mx="auto" my="5" disabled>Borderless</Button>
      </div>
    </Container>
  );
}
