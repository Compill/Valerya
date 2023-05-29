import { Badge, Container } from "@valerya/components";
import { useSecondaryScheme } from "../hooks/useSecondaryScheme";
import { useTertiaryScheme } from "../hooks/useTertiaryScheme";

/**
 *
 *
 */
export default function Page({ ...props })
{
  const secondaryScheme = useSecondaryScheme()
  const tertiaryScheme = useTertiaryScheme()

  return (
    <Container center size="x2" gap="20" justifyContent="center" py="20">

      <div mb="10">
        <Badge size="xs" mx="2" my="2">Small</Badge>
        <Badge size="sm" mx="2" my="2">Small</Badge>
        <Badge size="md" mx="2" my="2">Small</Badge>
        <Badge size="lg" mx="2" my="2">Small</Badge>
        <Badge size="xl" mx="2" my="2">Small</Badge>
        <Badge size="x2" mx="2" my="2">Small</Badge>
      </div>

      <div mb="10">
        <Badge corners="pill" size="xs" mx="2" my="2">Small</Badge>
        <Badge corners="pill" size="sm" mx="2" my="2"><span>Small</span></Badge>
        <Badge corners="pill" size="md" mx="2" my="2">Small</Badge>
        <Badge corners="pill" size="lg" mx="2" my="2">Small</Badge>
        <Badge corners="pill" size="xl" mx="2" my="2">Small</Badge>
        <Badge corners="pill" size="x2" mx="2" my="2">Small</Badge>
      </div>

      <div mb="10">
        <Badge scheme={secondaryScheme} size="xs" mx="2" my="2">Badge</Badge>
        <Badge scheme={secondaryScheme} size="sm" mx="2" my="2"><span>Badge</span></Badge>
        <Badge scheme={secondaryScheme} size="md" mx="2" my="2">Badge</Badge>
        <Badge scheme={secondaryScheme} size="lg" mx="2" my="2">Badge</Badge>
        <Badge scheme={secondaryScheme} size="xl" mx="2" my="2">Badge</Badge>
        <Badge scheme={secondaryScheme} size="x2" mx="2" my="2">Badge</Badge>
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
        <Badge scheme={tertiaryScheme} variant="light" size="xs" mx="2" my="2">Badge</Badge>
        <Badge scheme={tertiaryScheme} variant="light" size="sm" mx="2" my="2">Badge</Badge>
        <Badge scheme={tertiaryScheme} variant="light" size="md" mx="2" my="2">Badge</Badge>
        <Badge scheme={tertiaryScheme} variant="light" size="lg" mx="2" my="2">Badge</Badge>
        <Badge scheme={tertiaryScheme} variant="light" size="xl" mx="2" my="2">Badge</Badge>
        <Badge scheme={tertiaryScheme} variant="light" size="x2" mx="2" my="2">Badge</Badge>
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
