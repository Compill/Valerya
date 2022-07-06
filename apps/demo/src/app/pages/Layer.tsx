import { Button, Container } from "@katia/components";

/**
 *
 *
 */
export default function Page({ ...props })
{
  return (
    <Container center size="x2" dflex gap="20" justifyContent="center" py="20">

      <div spaceX="10">
        <Button>Button</Button>
        <Button variant="light">Button</Button>
      </div>
      <Button size="xl">Button</Button>
    </Container>
  );
}
