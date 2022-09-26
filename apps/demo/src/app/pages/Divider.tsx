import { Container, Divider } from "@valerya/components";

/**
 *
 *
 */
export default function Page({ ...props })
{

  return (
    <Container center size="x2" flexCol spaceY="10" justifyContent="center" py="20"  >
      <div ms="8" spaceY="5" {...props}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate nobis, recusandae hic autem error eaque officia culpa veritatis dolorem corrupti. Odit incidunt repudiandae, corporis laboriosam cum architecto non officiis ipsum?</p>
      </div>

      <Divider />
      <Divider variant="light" />
      <Divider scheme="default"/>
      <Divider scheme="default" variant="light" />

      <Divider thickness="sm" />
      <Divider thickness="sm" variant="light" />
      <Divider thickness="sm" scheme="default" />
      <Divider thickness="sm" scheme="default" variant="light" />

      <Divider thickness="md" />
      <Divider thickness="md" variant="light" />
      <Divider thickness="md" scheme="default" />
      <Divider thickness="md" scheme="default" variant="light" />

      <Divider thickness="lg" />
      <Divider thickness="lg" variant="light" />
      <Divider thickness="lg" scheme="default" />
      <Divider thickness="lg" scheme="default" variant="light" />

      <Divider thickness="xl" />
      <Divider thickness="xl" variant="light" />
      <Divider thickness="xl" scheme="default" />
      <Divider thickness="xl" scheme="default" variant="light" />
    </Container>
  );
}
