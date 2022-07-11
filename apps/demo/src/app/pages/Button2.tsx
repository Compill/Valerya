import { Button2, Container } from "@katia/components";

/**
 *
 *
 */
export default function Page({ ...props })
{
  return (
    <Container center size="x2" dflex gap="20" justifyContent="center" py="20">

      <div flexRow>
        <Button2 variant="default" block mx="auto" my="5" shadow z="1001">Open Left</Button2>
        <Button2 variant="light" block mx="auto" my="5">Light button</Button2>
        <Button2 variant="link" block mx="auto" my="5">Link button</Button2>
        <Button2 variant="outline" block mx="auto" my="5">Outline button</Button2>
        <Button2 variant="borderless" block mx="auto" my="5">Borderless</Button2>
      </div>

      <div flexRow>
        <Button2 scheme="secondary" variant="default" block mx="auto" my="5" shadow z="1001">Open Left</Button2>
        <Button2 scheme="secondary" variant="light" block mx="auto" my="5">Light button</Button2>
        <Button2 scheme="secondary" variant="link" block mx="auto" my="5">Link button</Button2>
        <Button2 scheme="secondary" variant="outline" block mx="auto" my="5">Outline button</Button2>
        <Button2 scheme="secondary" variant="borderless" block mx="auto" my="5">Borderless</Button2>
      </div>

      <div flexRow>
        <Button2 scheme="tertiary" variant="default" block mx="auto" my="5" textTransform="uppercase" >Open Right</Button2>
        <Button2 scheme="tertiary" variant="light" block mx="auto" my="5" textTransform="uppercase">Light button</Button2>
        <Button2 scheme="tertiary" variant="link" block mx="auto" my="5" textTransform="uppercase">Link button</Button2>
        <Button2 scheme="tertiary" variant="outline" block mx="auto" my="5" textTransform="uppercase">Outline button</Button2>
        <Button2 scheme="tertiary" variant="borderless" block mx="auto" my="5" textTransform="uppercase">Borderless</Button2>
      </div>

      <div flexRow>
        <Button2 scheme="accent" variant="default" block mx="auto" my="5" textTransform="uppercase">Open Top</Button2>
        <Button2 scheme="accent" variant="light" block mx="auto" my="5" textTransform="uppercase">Light button</Button2>
        <Button2 scheme="accent" variant="link" block mx="auto" my="5" textTransform="uppercase">Link button</Button2>
        <Button2 scheme="accent" variant="outline" block mx="auto" my="5" textTransform="uppercase">Outline button</Button2>
        <Button2 scheme="accent" variant="borderless" block mx="auto" my="5" textTransform="uppercase">Borderless</Button2>
      </div>

      <div flexRow>
        <Button2 variant="default" block mx="auto" my="5" textTransform="uppercase">Open Bottom</Button2>
        <Button2 variant="light" block mx="auto" my="5" textTransform="uppercase">Light button</Button2>
        <Button2 variant="link" block mx="auto" my="5" textTransform="uppercase">Link button</Button2>
        <Button2 variant="outline" block mx="auto" my="5" textTransform="uppercase">Outline button</Button2>
        <Button2 variant="borderless" block mx="auto" my="5" textTransform="uppercase">Borderless</Button2>
      </div>

      {/* <div flexRow>
                    <Button2 variant="default" corners="square" block mx="auto" my="5">Default button</Button2>
                    <Button2 variant="light" corners="square" block mx="auto" my="5">Light button</Button2>
                    <Button2 variant="link" corners="square" block mx="auto" my="5">Link button</Button2>
                    <Button2 variant="outline" corners="square" block mx="auto" my="5">Outline button</Button2>
                    <Button2 variant="borderless" corners="square" block mx="auto" my="5">Borderless</Button2>
                </div> */}

      <div flexRow>
        <Button2 variant="default" block mx="auto" my="5" selected>Default button</Button2>
        <Button2 variant="light" block mx="auto" my="5" selected>Light button</Button2>
        <Button2 variant="link" block mx="auto" my="5" selected>Link button</Button2>
        <Button2 variant="outline" block mx="auto" my="5" selected>Outline button</Button2>
        <Button2 variant="borderless" block mx="auto" my="5" selected>Borderless</Button2>
      </div>

      <div flexRow>
        <Button2 variant="default" block mx="auto" my="5" disabled>Default button</Button2>
        <Button2 variant="light" block mx="auto" my="5" selected disabled>Light button</Button2>
        <Button2 variant="link" block mx="auto" my="5" selected disabled>Link button</Button2>
        <Button2 variant="outline" block mx="auto" my="5" disabled>Outline button</Button2>
        <Button2 variant="borderless" block mx="auto" my="5" disabled>Borderless</Button2>
      </div>
    </Container>
  );
}
