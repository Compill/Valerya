import { Container, Stack, Switch } from "@valerya/components";
import React from "react";


export default function Page({ ...props })
{
  const [checked, setChecked] = React.useState(true);

  function handleClick(e: any)
  {
    // console.log("click", e)
  }

  const handleChange = React.useCallback((e: any) =>
  {

    setChecked(!checked);
  }, [checked, setChecked])

  return (
    <Container center size="x2" dflex flexCol gap="20" justifyContent="center" py="20">
      <Stack lg_direction="row" gap='24px' alignItems="end">
        <Switch checked={checked} onClick={handleClick} onChange={handleChange} size="sm" ></Switch>
        <Switch checked={checked} onClick={handleClick} onChange={handleChange} size="md"></Switch>
        <Switch checked={checked} scheme="accent" onClick={handleClick} onChange={handleChange} size="lg"></Switch>
        <Switch checked={checked} onClick={handleClick} onChange={handleChange} size="xl"></Switch>
        <Switch checked={checked} onClick={handleClick} onChange={handleChange} size="x2"></Switch>
      </Stack>

      <Stack lg_direction="row" gap='24px' alignItems="end">
        <Switch disabled checked={checked} onClick={handleClick} onChange={handleChange} size="sm" ></Switch>
        <Switch disabled checked={checked} onClick={handleClick} onChange={handleChange} size="md"></Switch>
        <Switch disabled checked={checked} scheme="accent" onClick={handleClick} onChange={handleChange} size="lg"></Switch>
        <Switch disabled checked={checked} onClick={handleClick} onChange={handleChange} size="xl"></Switch>
        <Switch disabled checked={checked} onClick={handleClick} onChange={handleChange} size="x2"></Switch>
      </Stack>

      <Stack lg_direction="row" gap='24px' alignItems="end">
        <Switch checked={checked} onClick={handleClick} onChange={handleChange} size="sm" corners="square"></Switch>
        <Switch checked={checked} onClick={handleClick} onChange={handleChange} size="md" corners="square"></Switch>
        <Switch checked={checked} onClick={handleClick} onChange={handleChange} size="lg" corners="square"></Switch>
        <Switch checked={checked} onClick={handleClick} onChange={handleChange} size="xl" corners="square"></Switch>
        <Switch checked={checked} onClick={handleClick} onChange={handleChange} size="x2" corners="square"></Switch>
      </Stack>

      <Stack lg_direction="row" gap='24px' alignItems="end">
        <Switch disabled checked={checked} onClick={handleClick} onChange={handleChange} size="sm" corners="square"></Switch>
        <Switch disabled checked={checked} onClick={handleClick} onChange={handleChange} size="md" corners="square"></Switch>
        <Switch disabled checked={checked} onClick={handleClick} onChange={handleChange} size="lg" corners="square"></Switch>
        <Switch disabled checked={checked} onClick={handleClick} onChange={handleChange} size="xl" corners="square"></Switch>
        <Switch disabled checked={checked} onClick={handleClick} onChange={handleChange} size="x2" corners="square"></Switch>
      </Stack>

      <Stack lg_direction="row" gap='24px' alignItems="end">
        <Switch variant="inverse" checked={checked} onClick={handleClick} onChange={handleChange} size="sm" ></Switch>
        <Switch variant="inverse" checked={checked} onClick={handleClick} onChange={handleChange} size="md"></Switch>
        <Switch variant="inverse" scheme="accent" checked={checked} onClick={handleClick} onChange={handleChange} size="lg"></Switch>
        <Switch variant="inverse" checked={checked} onClick={handleClick} onChange={handleChange} size="xl"></Switch>
        <Switch variant="inverse" checked={checked} onClick={handleClick} onChange={handleChange} size="x2"></Switch>
      </Stack>

      <Stack lg_direction="row" gap='24px' alignItems="end">
        <Switch variant="inverse" disabled checked={checked} onClick={handleClick} onChange={handleChange} size="sm" ></Switch>
        <Switch variant="inverse" disabled checked={checked} onClick={handleClick} onChange={handleChange} size="md"></Switch>
        <Switch variant="inverse" disabled scheme="accent" checked={checked} onClick={handleClick} onChange={handleChange} size="lg"></Switch>
        <Switch variant="inverse" disabled checked={checked} onClick={handleClick} onChange={handleChange} size="xl"></Switch>
        <Switch variant="inverse" disabled checked={checked} onClick={handleClick} onChange={handleChange} size="x2"></Switch>
      </Stack>

      <Stack gap='24px'>
        <Switch checked={checked} onClick={handleClick} onChange={handleChange} size="sm" >Label</Switch>
        <Switch checked={checked} onClick={handleClick} onChange={handleChange} size="md">Label</Switch>
        <Switch scheme="accent" checked={checked} onClick={handleClick} onChange={handleChange} size="lg">Label</Switch>
        <Switch checked={checked} onClick={handleClick} onChange={handleChange} size="xl">Label</Switch>
        <Switch checked={checked} onClick={handleClick} onChange={handleChange} size="x2">Label</Switch>
      </Stack>

    </Container>
  );
}
