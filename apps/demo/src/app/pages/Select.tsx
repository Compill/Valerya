import { Checkbox, Container, Select } from "@valerya/components";

/**
 *
 *
 */
export default function Page({ ...props })
{

  return (
    <Container center size="x2" gap="20" justifyContent="center" py="20">
      <div mb="10">
        <Select scheme="default" block size="xs" variant="default" mb="5" defaultValue="tenerife">
          <option value="tenerife">Tenerife</option>
          <option value="grandcanaria">Gran Canaria</option>
          <option value="laspalmas">Las Palmas</option>
        </Select>

        <Select scheme="default" block size="sm" variant="default" mb="5" defaultValue="tenerife">
          <option value="tenerife">Tenerife</option>
          <option value="grandcanaria">Gran Canaria</option>
          <option value="laspalmas">Las Palmas</option>
        </Select>

        <Select scheme="default" disabled block size="sm" variant="default" mb="5" defaultValue="tenerife">
          <option value="tenerife">Tenerife</option>
          <option value="grandcanaria">Gran Canaria</option>
          <option value="laspalmas">Las Palmas</option>
        </Select>

        <Select scheme="default" block size="sm" variant="solid" mb="5" defaultValue="tenerife">
          <option value="tenerife">Tenerife</option>
          <option value="grandcanaria">Gran Canaria</option>
          <option value="laspalmas">Las Palmas</option>
        </Select>

        <Select scheme="default" disabled block size="sm" variant="solid" mb="5" defaultValue="tenerife">
          <option value="tenerife">Tenerife</option>
          <option value="grandcanaria">Gran Canaria</option>
          <option value="laspalmas">Las Palmas</option>
        </Select>

        <Select scheme="default" corners="square" block size="sm" variant="underline" mb="5" defaultValue="tenerife">
          <option value="tenerife">Tenerife</option>
          <option value="grandcanaria">Gran Canaria</option>
          <option value="laspalmas">Las Palmas</option>
        </Select>
      </div>

      <div mb="10">
        <Select block variant="default" mb="5" defaultValue="tenerife">
          <option value="tenerife">Tenerife</option>
          <option value="grandcanaria">Gran Canaria</option>
          <option value="laspalmas">Las Palmas</option>
        </Select>
        <Select block variant="solid" mb="5" defaultValue="tenerife">
          <option value="tenerife">Tenerife</option>
          <option value="grandcanaria">Gran Canaria</option>
          <option value="laspalmas">Las Palmas</option>
        </Select>
        <Select block corners="square" variant="underline" mb="5" defaultValue="tenerife">
          <option value="tenerife">Tenerife</option>
          <option value="grandcanaria">Gran Canaria</option>
          <option value="laspalmas">Las Palmas</option>
        </Select>
      </div>

      <div mb="10">
        <Select block size="lg" variant="default" mb="5" defaultValue="tenerife">
          <option value="tenerife">Tenerife</option>
          <option value="grandcanaria">Gran Canaria</option>
          <option value="laspalmas">Las Palmas</option>
        </Select>
        <Select block size="lg" variant="solid" mb="5" defaultValue="tenerife">
          <option value="tenerife">Tenerife</option>
          <option value="grandcanaria">Gran Canaria</option>
          <option value="laspalmas">Las Palmas</option>
        </Select>
        <Select block size="lg" variant="underline" mb="5" defaultValue="tenerife">
          <option value="tenerife">Tenerife</option>
          <option value="grandcanaria">Gran Canaria</option>
          <option value="laspalmas">Las Palmas</option>
        </Select>
      </div>
      <div mb="10">
        <Select block size="xl" variant="default" mb="5" defaultValue="tenerife">
          <option value="tenerife">Tenerife</option>
          <option value="grandcanaria">Gran Canaria</option>
          <option value="laspalmas">Las Palmas</option>
        </Select>
        <Select block size="xl" variant="solid" mb="5" defaultValue="tenerife">
          <option value="tenerife">Tenerife</option>
          <option value="grandcanaria">Gran Canaria</option>
          <option value="laspalmas">Las Palmas</option>
        </Select>
        <Select block size="xl" variant="underline" mb="5" defaultValue="tenerife">
          <option value="tenerife">Tenerife</option>
          <option value="grandcanaria">Gran Canaria</option>
          <option value="laspalmas">Las Palmas</option>
        </Select>
      </div>
      <div mb="10">
        <Select block size="x2" variant="default" mb="5" defaultValue="tenerife">
          <option value="tenerife">Tenerife</option>
          <option value="grandcanaria">Gran Canaria</option>
          <option value="laspalmas">Las Palmas</option>
        </Select>
        <Select block size="x2" variant="solid" mb="5" defaultValue="tenerife">
          <option value="tenerife">Tenerife</option>
          <option value="grandcanaria">Gran Canaria</option>
          <option value="laspalmas">Las Palmas</option>
        </Select>
        <Select block size="x2" variant="underline" mb="5" defaultValue="tenerife">
          <option value="tenerife">Tenerife</option>
          <option value="grandcanaria">Gran Canaria</option>
          <option value="laspalmas">Las Palmas</option>
        </Select>
      </div>
    </Container>
  );
}
