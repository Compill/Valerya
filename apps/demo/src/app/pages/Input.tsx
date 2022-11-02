import { Checkbox, Container, Input } from "@valerya/components";
import { useDarkMode } from "@soperio/react";
import { useAccentScheme } from "../hooks/useAccentScheme";


type Side = "left" | "right" | "top" | "bottom";

/**
 *
 *
 */
export default function Page({ ...props })
{
  const darkMode = useDarkMode();

  const accentScheme = useAccentScheme()

  return (
    <Container center size="x2" gap="20" px="10" justifyContent="center" py="20">

      <div mb="10">
        <Input scheme="default" block size="xs" variant="default" mb="5" length={50} placeholder="Hello" />
        <Input scheme="default" block size="xs" variant="solid" mb="5" length={50} placeholder="Hello" />
        <Input scheme="default" block size="xs" variant="underline" corners="square" mb="5" length={50} placeholder="Hello" />
      </div>

      <div mb="10">
        <Input scheme={accentScheme} block size="sm" variant="default" mb="5" length={50} placeholder="Hello" />
        <Input scheme={accentScheme} block size="sm" variant="solid" mb="5" length={50} placeholder="Hello" />
        <Input scheme={accentScheme} block size="sm" variant="underline" corners="square" mb="5" length={50} placeholder="Hello" />
      </div>

      <div mb="10">
        <Input scheme={accentScheme} disabled value="Hola que tal" block size="sm" variant="default" mb="5" length={50} placeholder="Hello" />
        <Input scheme={accentScheme} disabled block size="sm" variant="solid" mb="5" length={50} placeholder="Hello" />
        <Input scheme={accentScheme} disabled block size="sm" variant="underline" corners="square" mb="5" length={50} placeholder="Hello" />
      </div>

      <div mb="10">
        <Input block variant="default" mb="5" length={50} placeholder="Hello" />
        <Input block variant="solid" mb="5" length={50} placeholder="Hello" />
        <Input block variant="underline" mb="5" length={50} placeholder="Hello" />
      </div>

      <div mb="10">
        <Input block size="lg" variant="default" mb="5" length={50} placeholder="Hello" />
        <Input block size="lg" variant="solid" mb="5" length={50} placeholder="Hello" />
        <Input block size="lg" variant="underline" mb="5" length={50} placeholder="Hello" />
      </div>
      <div mb="10">
        <Input block size="xl" variant="default" mb="5" length={50} placeholder="Hello" />
        <Input block size="xl" variant="solid" mb="5" length={50} placeholder="Hello" />
        <Input block size="xl" variant="underline" mb="5" length={50} placeholder="Hello" />
      </div>
      <div>
        <Input block size="x2" variant="default" mb="5" length={50} placeholder="Hello" />
        <Input block size="x2" variant="solid" mb="5" length={50} placeholder="Hello" />
        <Input block size="x2" variant="underline" mb="5" length={50} placeholder="Hello" />
      </div>
    </Container>
  );
}
