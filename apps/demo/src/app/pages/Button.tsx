import { Button, Container } from "@katia/components";

/**
 *
 *
 */
export default function Page({ ...props })
{
  return (
    <Container center size="x2" dflex gap="20" justifyContent="center" py="20">

      <div flexRow>
        <Button variant="default" block mx="auto" my="5" shadow z="1001">Open Left</Button>
        <Button variant="light" block mx="auto" my="5">Light button</Button>
        <Button variant="link" block mx="auto" my="5">Link button</Button>
        <Button variant="outline" block mx="auto" my="5">Outline button</Button>
        <Button variant="borderless" block mx="auto" my="5">Borderless</Button>
      </div>

      <div flexRow>
        <Button scheme="secondary" variant="default" block mx="auto" my="5" shadow z="1001">Open Left</Button>
        <Button scheme="secondary" variant="light" block mx="auto" my="5">Light button</Button>
        <Button scheme="secondary" variant="link" block mx="auto" my="5">Link button</Button>
        <Button scheme="secondary" variant="outline" block mx="auto" my="5">Outline button</Button>
        <Button scheme="secondary" variant="borderless" block mx="auto" my="5">Borderless</Button>
      </div>

      <div flexRow>
        <Button scheme="tertiary" variant="default" block mx="auto" my="5" textTransform="uppercase" >Open Right</Button>
        <Button scheme="tertiary" variant="light" block mx="auto" my="5" textTransform="uppercase">Light button</Button>
        <Button scheme="tertiary" variant="link" block mx="auto" my="5" textTransform="uppercase">Link button</Button>
        <Button scheme="tertiary" variant="outline" block mx="auto" my="5" textTransform="uppercase">Outline button</Button>
        <Button scheme="tertiary" variant="borderless" block mx="auto" my="5" textTransform="uppercase">Borderless</Button>
      </div>

      <div flexRow>
        <Button scheme="accent" variant="default" block mx="auto" my="5" textTransform="uppercase">Open Top</Button>
        <Button scheme="accent" variant="light" block mx="auto" my="5" textTransform="uppercase">Light button</Button>
        <Button scheme="accent" variant="link" block mx="auto" my="5" textTransform="uppercase">Link button</Button>
        <Button scheme="accent" variant="outline" block mx="auto" my="5" textTransform="uppercase">Outline button</Button>
        <Button scheme="accent" variant="borderless" block mx="auto" my="5" textTransform="uppercase">Borderless</Button>
      </div>

      <div flexRow>
        <Button variant="default" block mx="auto" my="5" textTransform="uppercase">Open Bottom</Button>
        <Button variant="light" block mx="auto" my="5" textTransform="uppercase">Light button</Button>
        <Button variant="link" block mx="auto" my="5" textTransform="uppercase">Link button</Button>
        <Button variant="outline" block mx="auto" my="5" textTransform="uppercase">Outline button</Button>
        <Button variant="borderless" block mx="auto" my="5" textTransform="uppercase">Borderless</Button>
      </div>

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
        <Button variant="link" block mx="auto" my="5" selected>Link button</Button>
        <Button variant="outline" block mx="auto" my="5" selected>Outline button</Button>
        <Button variant="borderless" block mx="auto" my="5" selected>Borderless</Button>
      </div>

      <div flexRow>
        <Button variant="default" block mx="auto" my="5" disabled>Default button</Button>
        <Button variant="light" block mx="auto" my="5" selected disabled>Light button</Button>
        <Button variant="link" block mx="auto" my="5" selected disabled>Link button</Button>
        <Button variant="outline" block mx="auto" my="5" disabled>Outline button</Button>
        <Button variant="borderless" block mx="auto" my="5" disabled>Borderless</Button>
      </div>
    </Container>
  );
}
