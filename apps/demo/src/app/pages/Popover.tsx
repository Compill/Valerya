import { Button, Container, Radio, Popover } from "@valerya/components";

/**
 *
 *
 */
export default function Page({ ...props })
{
  return (
    <Container center size="x2" gap="4" justifyContent="center" py="20">
      <Popover>
        <Button>Open menu</Button>
        <div w="96" h="96" bgColor="white">
          Hello!
        </div>
      </Popover>
    </Container>
  );
}
