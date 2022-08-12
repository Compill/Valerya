import { Slider, Container } from "@katia/components";

/**
 *
 *
 */
export default function Page({ ...props })
{
  return (
    <Container center size="x2" dflex gap="20" justifyContent="center" py="20">

      <div dflex flexCol gap="20" w="64">
        <Slider variant="default" w="full" orientation="horizontal"/>
        <Slider variant="solid" />
      </div>

    </Container>
  );
}
