import { Button, Container, Sidebar } from "@katia/ui";
import React from "react";

type Side = "start" | "end" | "top" | "bottom";

/**
 *
 *
 */
export default function Page({ ...props })
{
  const [side, setSide] = React.useState<Side | null>(null);

  return (
    <Container center size="x2" dflex gap="20" justifyContent="center" py="20">

      <div flexRow spaceX="5">
        <Button onClick={() => setSide("start")}>Open Left</Button>
        <Button onClick={() => setSide("end")}>Open Right</Button>
        <Button onClick={() => setSide("top")}>Open Top</Button>
        <Button onClick={() => setSide("bottom")}>Open Bottom</Button>
      </div>

{/* TODO Add variant */}
      <Sidebar scheme="default" show={side != null} side={side as Side} sidebarWidth="500px" onClose={() => setSide(null)}>
        <div p="8">Hello</div>
      </Sidebar>
    </Container>
  );
}
