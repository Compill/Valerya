import { ParentComponent, SoperioComponent, useDarkMode } from "@soperio/react"

function CodeContainer(props: SoperioComponent & ParentComponent)
{
  const darkMode = useDarkMode()

  return <div py="1" bgColor={darkMode ? "slate-700" : "slate-800"} {...props} />
}

export default CodeContainer
