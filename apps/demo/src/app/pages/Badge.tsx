import { Badge, Container } from "@valerya/components";

/**
 *
 *
 */
export default function Page({ ...props })
{
  return (
    <Container center size="x2" gap="20" justifyContent="center" py="20">

      <div mb="10">
        <Badge size="xs" mx="2" my="2">Badge</Badge>
        <Badge size="sm" mx="2" my="2">Badge</Badge>
        <Badge size="md" mx="2" my="2">Badge</Badge>
        <Badge size="lg" mx="2" my="2">Badge</Badge>
        <Badge size="xl" mx="2" my="2">Badge</Badge>
        <Badge size="x2" mx="2" my="2">Badge</Badge>
      </div>

      <div mb="10">
        <Badge scheme="primary" shape="pill" textTransform="uppercase" size="xs" mx="2" my="2">Badge</Badge>
        <Badge scheme="primary" shape="pill" textTransform="uppercase" size="sm" mx="2" my="2">Badge</Badge>
        <Badge scheme="primary" shape="pill" textTransform="uppercase" size="md" mx="2" my="2">Badge</Badge>
        <Badge scheme="primary" shape="pill" textTransform="uppercase" size="lg" mx="2" my="2">Badge</Badge>
        <Badge scheme="primary" shape="pill" textTransform="uppercase" size="xl" mx="2" my="2">Badge</Badge>
        <Badge scheme="primary" shape="pill" textTransform="uppercase" size="x2" mx="2" my="2">Badge</Badge>
      </div>

      <div mb="10">
        <Badge scheme="secondary" size="xs" mx="2" my="2">Badge</Badge>
        <Badge scheme="secondary" size="sm" mx="2" my="2">Badge</Badge>
        <Badge scheme="secondary" size="md" mx="2" my="2">Badge</Badge>
        <Badge scheme="secondary" size="lg" mx="2" my="2">Badge</Badge>
        <Badge scheme="secondary" size="xl" mx="2" my="2">Badge</Badge>
        <Badge scheme="secondary" size="x2" mx="2" my="2">Badge</Badge>
      </div>

      <div mb="10">
        <Badge variant="outline" size="xs" mx="2" my="2">Badge</Badge>
        <Badge variant="outline" size="sm" mx="2" my="2">Badge</Badge>
        <Badge variant="outline" size="md" mx="2" my="2">Badge</Badge>
        <Badge variant="outline" size="lg" mx="2" my="2">Badge</Badge>
        <Badge variant="outline" size="xl" mx="2" my="2">Badge</Badge>
        <Badge variant="outline" size="x2" mx="2" my="2">Badge</Badge>
      </div>

      <div mb="10">
        <Badge variant="light" size="xs" mx="2" my="2">Badge</Badge>
        <Badge variant="light" size="sm" mx="2" my="2">Badge</Badge>
        <Badge variant="light" size="md" mx="2" my="2">Badge</Badge>
        <Badge variant="light" size="lg" mx="2" my="2">Badge</Badge>
        <Badge variant="light" size="xl" mx="2" my="2">Badge</Badge>
        <Badge variant="light" size="x2" mx="2" my="2">Badge</Badge>
      </div>

      <div mb="10">
        <Badge scheme="tertiary" variant="light" size="xs" mx="2" my="2">Badge</Badge>
        <Badge scheme="tertiary" variant="light" size="sm" mx="2" my="2">Badge</Badge>
        <Badge scheme="tertiary" variant="light" size="md" mx="2" my="2">Badge</Badge>
        <Badge scheme="tertiary" variant="light" size="lg" mx="2" my="2">Badge</Badge>
        <Badge scheme="tertiary" variant="light" size="xl" mx="2" my="2">Badge</Badge>
        <Badge scheme="tertiary" variant="light" size="x2" mx="2" my="2">Badge</Badge>
      </div>

      <div mb="10">
        <Badge variant="light-outline" size="xs" mx="2" my="2">Badge</Badge>
        <Badge variant="light-outline" size="sm" mx="2" my="2">Badge</Badge>
        <Badge variant="light-outline" size="md" mx="2" my="2">Badge</Badge>
        <Badge variant="light-outline" size="lg" mx="2" my="2">Badge</Badge>
        <Badge variant="light-outline" size="xl" mx="2" my="2">Badge</Badge>
        <Badge variant="light-outline" size="x2" mx="2" my="2">Badge</Badge>
      </div>
    </Container>
  );
}
