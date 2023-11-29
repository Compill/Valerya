import { ParentComponent } from "@soperio/react";
import { Button, Collapse, Container } from "@valerya/components";
import React from "react";


function useComponentHeight(ref: React.MutableRefObject<HTMLDivElement | null>)
{
  const [height, setHeight] = React.useState(0)

  React.useEffect(() =>
  {
    if (ref.current)
    {
      setHeight(ref.current.scrollHeight)
      console.log("ref", ref.current)
    }
  }, []);

  return height
}

export default function CollapsePage()
{
  const [show, setShow] = React.useState(false)

  const handleToggle = React.useCallback(() => setShow(!show), [show, setShow])

  return (
    <Container center size="x2" gap="20" justifyContent="center" p="20" spaceY="10" >

      <Collapse in={show} startingHeight={20}>
        <div bgColor="red" textColor="white">
          <p>Lorem ipsum something</p>
          <p>Lorem ipsum something</p>
          <p>Lorem ipsum something</p>
          <p>Lorem ipsum something</p>
          <p>Lorem ipsum something</p>
          <p>Lorem ipsum something</p>
          <p>Lorem ipsum something</p>
          <p>Lorem ipsum something</p>
        </div>
      </Collapse>

      <Button onClick={handleToggle}>Show more</Button>


      <CollapsibleText startHeight={48}>
        <p>Lorem ipsum something</p>
        <p>Lorem ipsum something</p>
        <p>Lorem ipsum something</p>
      </CollapsibleText>

    </Container>
  )
}

export function CollapsibleText({ startHeight, children }: { startHeight: number } & ParentComponent)
{
  const [show, setShow] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)
  const [childHeight, setChildHeight] = React.useState(1) // Set a positive value so that child height is processed

  const handleToggle = React.useCallback(() => setShow(!show), [show, setShow])

  React.useLayoutEffect(() =>
  {
    if (ref.current)
      setChildHeight(ref.current?.clientHeight)
  }, [ref])

  return (
    <div>
      <Collapse in={show} startingHeight={Math.min(childHeight, startHeight)}>
        <div ref={ref}>
          {children}
        </div>
      </Collapse>
      {childHeight > startHeight && <Button onClick={handleToggle}>Show more</Button>}
    </div>
  )
}
