import { Slider, Container } from "@valerya/ui";
import React from "react";

/**
 *
 *
 */
export default function Page({ ...props })
{
  const cbStart = React.useCallback(value => console.log("change start", value), [])
  const cbEnd = React.useCallback(value => console.log("change end", value), [])
  const cb = React.useCallback(value => console.log("change", value), [])


  return (
    <Container center size="x2" dflex gap="20" justifyContent="center" py="20">

      <div dflex flexCol gap="10" w="64">
        <Slider variant="default" step={10}/>
        <Slider variant="solid"/>
        <Slider variant="test"/>
        <Slider variant="test2"/>
        <Slider scheme="primary" />
        <Slider scheme="primary" variant="solid" />
        <Slider scheme="primary" variant="test" mb="20" />
        <Slider variant="default" w="full" orientation="horizontal" defaultValue={30} onChange={cb} onChangeStart={cbStart} onChangeEnd={cbEnd}/>
        <Slider variant="solid" isReversed size="sm"/>
        <Slider variant="solid" isReversed size="md"/>
        <Slider variant="solid" isReversed size="lg"/>
        <Slider variant="solid" isReversed size="xl"/>
        <Slider variant="solid" isReversed size="x2"/>
        <Slider variant="test2" isReversed size="x2"/>
        <Slider variant="solid" orientation="vertical" minH="64"/>
      </div>

    </Container>
  );
}
