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
    <Container center size="x2" gap="4" justifyContent="center" py="20">


      <Popup show={show} side="top-end" onHide={onHide}>
        <Button onClick={() => setShow(true)}>Show popup</Button>
        <div dflex flexCol w="96" h="96" bgColor="white">
          Hello!
          <Button onClick={() => setShow(false)}>Close popup</Button>
        </div>
      </Popup>
    </Container>
  );
}
