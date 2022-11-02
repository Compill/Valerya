import { Button, Card, Container } from "@valerya/components";
import { usePrimaryScheme } from "../hooks/usePrimaryScheme";

/**
 *
 *
 */
export default function Page({ ...props })
{
  const primaryScheme = usePrimaryScheme()

  return (
    <Container center size="x2" gap="20" justifyContent="center" p="20" spaceY="10" >

      <Card w="50%" scheme={primaryScheme} shadow>
        <Card.Header dflex alignItems="center">
          <span>Basic Card</span>
        </Card.Header>

        <Card.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
        </Card.Body>

        <Card.Footer  dflex placeContent="end" alignItems="center">
          <Button variant="borderless" theme="neutral" me="3">Cancel</Button>
          <Button variant="borderless">Save</Button>
        </Card.Footer>
      </Card>

      <Card w="50%" shadow scheme={primaryScheme}>
        <Card.Header showDivider dflex alignItems="center">
          <span textSize="lg" fontWeight="600">Basic Card</span>
        </Card.Header>

        <Card.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
        </Card.Body>

        <Card.Footer showDivider dflex placeContent="end" alignItems="center">
          <Button scheme="secondary" variant="borderless" me="3">Cancel</Button>
          <Button scheme="secondary" variant="borderless">Save</Button>
        </Card.Footer>
      </Card>

      <Card w="50%" shadow>
        <Card.Header showDivider dflex alignItems="center">
          <span textSize="lg" fontWeight="600">Basic Card</span>
        </Card.Header>

        <Card.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
        </Card.Body>

        <Card.Footer showDivider dflex placeContent="end" alignItems="center">
          <Button scheme="secondary" variant="borderless" me="3">Cancel</Button>
          <Button scheme="secondary" variant="borderless">Save</Button>
        </Card.Footer>
      </Card>

      <Card w="50%" shadow>
        <Card.Header showDivider dividerWidth="32" dflex alignItems="center">
          Basic Card
        </Card.Header>

        <Card.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
        </Card.Body>

        <Card.Footer showDivider dividerWidth="32" dflex placeContent="end" alignItems="center">
          <Button variant="borderless" theme="neutral" me="3">Cancel</Button>
          <Button variant="borderless">Save</Button>
        </Card.Footer>
      </Card>

      <Card w="50%" shadow shadowColor="sky-500">
        <Card.Header dflex alignItems="center">
          <span textSize="lg" fontWeight="600">Basic Card</span>
        </Card.Header>

        <Card.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
        </Card.Body>

        <Card.Footer dflex placeContent="end" alignItems="center">
          <Button variant="borderless" theme="neutral" me="3">Cancel</Button>
          <Button variant="borderless">Save</Button>
        </Card.Footer>
      </Card>

      <Card w="50%" variant="bordered">
        <Card.Header dflex alignItems="center">
          <span textSize="lg" fontWeight="600">Basic Card</span>
        </Card.Header>

        <Card.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
        </Card.Body>

        <Card.Footer dflex placeContent="end" alignItems="center">
          <Button variant="borderless" theme="neutral" me="3">Cancel</Button>
          <Button variant="borderless">Save</Button>
        </Card.Footer>
      </Card>

    </Container>
  );
}
