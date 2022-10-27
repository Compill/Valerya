import { Container, Radio } from "@valerya/components";
import React from "react";


type Side = "left" | "right" | "top" | "bottom";

/**
 *
 *
 */
export default function Page({ ...props })
{
  const [checked, setChecked] = React.useState("a");

  function handleClick(e: any)
  {
    setChecked(e.target.name);
  }

  function handleChange(e: any)
  {
    setChecked(e.target.name);
  }

  return (
    <Container center size="x2" gap="4" justifyContent="center" py="20">
      <div mb="10">
        <Radio name="sm" size="sm" corners="circle" label="Accept the terms and conditions" checked={checked == "sm"} onClick={handleClick} onChange={handleChange} />
        <Radio name="md" size="md" corners="circle" label="Accept the terms and conditions" checked={checked == "md"} onClick={handleClick} onChange={handleChange} />
        <Radio name="lg" size="lg" corners="circle" label="Accept the terms and conditions" checked={checked == "lg"} onClick={handleClick} onChange={handleChange} />
        <Radio name="xl" size="xl" corners="circle" label="Accept the terms and conditions" checked={checked == "xl"} onClick={handleClick} onChange={handleChange} />
        <Radio name="x2" size="x2" corners="circle" label="Accept the terms and conditions" checked={checked == "x2"} onClick={handleClick} onChange={handleChange} />
      </div>

      {/* <div mb="10" dflex flexCol spaceY="20">
        <Radio name="aa" label="Answer A" value="a" dotSize="sm" disabled onChange={handleRadioChange} />
        <Radio name="aa" label="Answer B" value="b" my="2" dotSize="md" disabled />
        <Radio name="aa" label="Answer C" value="c" my="2" dotSize="lg" disabled />
      </div> */}

      <div mb="10" dflex flexCol spaceY="2">
        <Radio name="a" label="Answer A" value="a" dotSize="lg" disabled checked={checked == "a"} onChange={handleChange} />
        <Radio name="b" label="Answer B" value="b" dotSize="lg" disabled checked={checked == "b"} onChange={handleChange} />
        <Radio name="c" label="Answer C" value="c" dotSize="lg" checked={checked == "c"} onClick={handleClick} />
      </div>

      <div mb="10" dflex flexCol spaceY="2">
        <Radio name="a" variant="outline" label="Answer A" value="a" checked={checked == "a"} dotSize="sm" onChange={handleChange} />
        <Radio name="b" variant="outline" label="Answer B" value="b" checked={checked == "b"} dotSize="md" onChange={handleChange} />
        <Radio name="c" variant="outline" label="Answer C" value="c" checked={checked == "c"} dotSize="lg" onChange={handleChange} />
      </div>

      <div mb="10" dflex flexCol spaceY="2">
        <Radio name="a" variant="outline" label="Answer A" value="a" dotSize="sm" disabled checked={checked == "a"} onChange={handleChange} />
        <Radio name="b" variant="outline" label="Answer B" value="b" dotSize="md" disabled checked={checked == "b"} onChange={handleChange} />
        <Radio name="c" variant="outline" label="Answer C" value="c" dotSize="lg" disabled checked={checked == "c"} onChange={handleChange} />
      </div>
    </Container>
  );
}
