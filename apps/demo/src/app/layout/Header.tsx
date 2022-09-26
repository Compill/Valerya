import { Button } from "@katia/ui"
import { useToggleDarkMode } from "@soperio/react"

export function Header()
{
  const toggleDarkMode = useToggleDarkMode()

  return (
    <div w="full" h="64px" dflex alignItems="center" placeContent="center">

      <Button onClick={() => toggleDarkMode()}>Toggle Dark Mode</Button>

      {/* <Button variant="default" onClick={toggleDirection}>Toggle direction</Button>
      <Button variant="default" onClick={toggleTheme} ms="3">Toggle theme</Button>
      <Button onClick={() => toggleDarkMode()} ms="3">Toggle Dark Mode</Button> */}

    </div>
  )
}
