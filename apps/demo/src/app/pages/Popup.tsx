import { Button, Container, Popup } from "@valerya/components";
import React from "react";

/**
 *
 *
 */
export default function Page({ ...props })
{
  const [show, setShow] = React.useState(false)

  const onHide = React.useCallback(() => setShow(false), [setShow])

  return (
    <Container center size="x2" gap="4" py="20" px="10" mx="auto">

      <Popup show={show} side="bottom-start" onHide={onHide}>
        <Button onClick={() => setShow(true)}>  Show popup</Button>
        <div dflex flexCol w="96" h="96" bgColor="white"  mt="2" p="2" rounded shadow>
          <p>Hello!</p>
          <p>Hello!</p>
          <p>Hello!</p>
          <p>Hello!</p>
          <p>Hello!</p>
          <p>Hello!</p>
          <p>Hello!</p>
          <p>Hello!</p>
          <p>Hello!</p>
          <p>Hello!</p>
          <p>Hello!</p>
          <p>Hello!</p>
          <p>Hello!</p>
          {/* <Button onClick={() => setShow(false)}>Close popup</Button> */}
        </div>
      </Popup>
    </Container>
  );
}
