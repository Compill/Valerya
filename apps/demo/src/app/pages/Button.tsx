import { Button, Button2, Container } from "@katia/components";

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
        <Button2 scheme="secondary" variant="default" block mx="auto" my="5" shadow z="1001">Open Left</Button2>
        <Button2 scheme="secondary" variant="light" block mx="auto" my="5">Light button</Button2>
        <Button2 scheme="secondary" variant="link" block mx="auto" my="5">Link button</Button2>
        <Button2 scheme="secondary" variant="outline" block mx="auto" my="5">Outline button</Button2>
        <Button2 scheme="secondary" variant="borderless" block mx="auto" my="5">Borderless</Button2>
      </div>

      <div flexRow>
        <Button theme={"success"} variant="default" block mx="auto" my="5" textTransform="uppercase" >Open Right</Button>
        <Button theme={"success"} variant="light" block mx="auto" my="5" textTransform="uppercase">Light button</Button>
        <Button theme={"success"} variant="link" block mx="auto" my="5" textTransform="uppercase">Link button</Button>
        <Button theme={"success"} variant="outline" block mx="auto" my="5" textTransform="uppercase">Outline button</Button>
        <Button theme={"success"} variant="borderless" block mx="auto" my="5" textTransform="uppercase">Borderless</Button>
      </div>

      <div flexRow>
        <Button theme={"pink"} variant="default" block mx="auto" my="5" textTransform="uppercase">Open Top</Button>
        <Button theme={"pink"} variant="light" block mx="auto" my="5" textTransform="uppercase">Light button</Button>
        <Button theme={"pink"} variant="link" block mx="auto" my="5" textTransform="uppercase">Link button</Button>
        <Button theme={"pink"} variant="outline" block mx="auto" my="5" textTransform="uppercase">Outline button</Button>
        <Button theme={"pink"} variant="borderless" block mx="auto" my="5" textTransform="uppercase">Borderless</Button>
      </div>

      <div flexRow>
        <Button theme={"neutral"} variant="default" block mx="auto" my="5" textTransform="uppercase">Open Bottom</Button>
        <Button theme={"neutral"} variant="light" block mx="auto" my="5" textTransform="uppercase">Light button</Button>
        <Button theme={"neutral"} variant="link" block mx="auto" my="5" textTransform="uppercase">Link button</Button>
        <Button theme={"neutral"} variant="outline" block mx="auto" my="5" textTransform="uppercase">Outline button</Button>
        <Button theme={"neutral"} variant="borderless" block mx="auto" my="5" textTransform="uppercase">Borderless</Button>
      </div>

      {/* <div flexRow>
                    <Button variant="default" corners="square" block mx="auto" my="5">Default button</Button>
                    <Button variant="light" corners="square" block mx="auto" my="5">Light button</Button>
                    <Button variant="link" corners="square" block mx="auto" my="5">Link button</Button>
                    <Button variant="outline" corners="square" block mx="auto" my="5">Outline button</Button>
                    <Button variant="borderless" corners="square" block mx="auto" my="5">Borderless</Button>
                </div> */}

      <div flexRow>
        <Button variant="default" corners="square" block mx="auto" my="5" selected>Default button</Button>
        <Button variant="light" corners="square" block mx="auto" my="5" selected>Light button</Button>
        <Button variant="link" corners="square" block mx="auto" my="5" selected>Link button</Button>
        <Button variant="outline" corners="square" block mx="auto" my="5" selected>Outline button</Button>
        <Button variant="borderless" corners="square" block mx="auto" my="5" selected>Borderless</Button>
      </div>

      <div flexRow>
        <Button variant="default" theme="default" block mx="auto" my="5" disabled>Default button</Button>
        <Button variant="light" theme="default" block mx="auto" my="5" selected disabled>Light button</Button>
        <Button variant="link" theme="default" block mx="auto" my="5" selected disabled>Link button</Button>
        <Button variant="outline" theme="default" block mx="auto" my="5" disabled>Outline button</Button>
        <Button variant="borderless" theme="default" block mx="auto" my="5" disabled>Borderless</Button>
      </div>
    </Container>
  );
}
