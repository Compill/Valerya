import { Checkbox, Container } from "@valerya/components";
import React from "react";

/**
 *
 *
 */
export default function Page({ ...props })
{
  const [checked, setChecked] = React.useState(false)

  return (
    <Container center size="x2" dflex flexCol gap="20" justifyContent="center" py="20">
      <div dflex gap="20">
        <Checkbox scheme="neutral" label="Hello" size="sm" checked={checked} onChange={() => setChecked(!checked)} />
        <Checkbox scheme="neutral" label="Hello" size="md" checked={checked} variant="outline" onChange={() => setChecked(!checked)} />
        <Checkbox scheme="neutral" size="lg" label="Hello" checked={checked} onChange={() => setChecked(!checked)} />
        <Checkbox scheme="neutral" size="xl" label="Hello" checked={checked} variant="outline" onChange={() => setChecked(!checked)} />
        <Checkbox  size="x2" label="Hello" checked={checked} variant="outline" onChange={() => setChecked(!checked)} />
      </div>

      <div dflex gap="20">
        <Checkbox scheme="neutral" corners="circle" label="Hello" size="sm" checked={checked} onChange={() => setChecked(!checked)} />
        <Checkbox scheme="neutral" corners="circle" label="Hello" size="md" checked={checked} variant="outline" onChange={() => setChecked(!checked)} />
        <Checkbox scheme="neutral" corners="circle" size="lg" label="Hello" checked={checked} onChange={() => setChecked(!checked)} />
        <Checkbox scheme="neutral" corners="circle" size="xl" label="Hello" checked={checked} variant="outline" onChange={() => setChecked(!checked)} />
        <Checkbox scheme="neutral" corners="circle" size="x2" label="Hello" checked={checked} variant="outline" onChange={() => setChecked(!checked)} />
      </div>

      <div dflex gap="20">
        <Checkbox scheme="neutral" corners="square" label="Hello" size="sm" checked={checked} onChange={() => setChecked(!checked)} />
        <Checkbox scheme="neutral" corners="square" label="Hello" size="md" checked={checked} variant="outline" onChange={() => setChecked(!checked)} />
        <Checkbox scheme="neutral" corners="square" size="lg" label="Hello" checked={checked} onChange={() => setChecked(!checked)} />
        <Checkbox scheme="neutral" corners="square" size="xl" label="Hello" checked={checked} variant="outline" onChange={() => setChecked(!checked)} />
        <Checkbox scheme="neutral" corners="square" size="x2" label="Hello" checked={checked} variant="outline" onChange={() => setChecked(!checked)} />
      </div>

      <div dflex gap="20">
        <Checkbox scheme="neutral" label="Hello" size="sm" checked={checked} disabled onChange={() => setChecked(!checked)} />
        <Checkbox scheme="neutral" label="Hello" size="md" checked={checked} disabled variant="outline" onChange={() => setChecked(!checked)} />
        <Checkbox scheme="neutral" size="lg" label="Hello" checked={checked} disabled onChange={() => setChecked(!checked)} />
        <Checkbox scheme="neutral" size="xl" label="Hello" checked={checked} disabled variant="outline" onChange={() => setChecked(!checked)} />
        <Checkbox scheme="neutral" size="x2" label="Hello" checked={checked} disabled variant="outline" onChange={() => setChecked(!checked)} />
      </div>
    </Container>
  );
}
