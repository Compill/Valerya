import { Button, ButtonProps } from "@katia/ui";
import { useAppContext } from "./AppContext";
import { menu } from "./config";

export function Menu()
{
  const { page, setPage } = useAppContext()
  const config = menu

  const items = Object.keys(config)

  return (
    <div dflex flexCol spaceY="3" h="screen" position="fixed" overflowY="auto" w="240px" py="10" px="5" bgColor="root.bg-color-1">
      {items.map(item => <MenuItem key={item} selected={page === item} onClick={() => setPage(item)}>{item}</MenuItem>)}
    </div>
  )
}

function MenuItem({ selected, children,...props }: Omit<ButtonProps, "ref">)
{
  return (
    <Button
      variant={selected ? "default" : "borderless"}
      rounded
      px="5"
      py="2"
      fontSize="lg"
      {...props}
    >
      {children}
    </Button>
  )
}
