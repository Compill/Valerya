// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { buildSurfaceFromColor } from "@katia/core";
import { extendTheme, SoperioProvider } from "@soperio/react";
import { AppContextProvider } from "./layout/AppContext";
import { Content } from "./layout/Content";
import { Header } from "./layout/Header";
import { Menu } from "./layout/Menu";


const theme = extendTheme({
  extras:
  {
    "katia.surfaces":
    {
      "primary": buildSurfaceFromColor(0xff6750a4),
      "secondary": buildSurfaceFromColor(0xffff00ff),
      "tertiary": buildSurfaceFromColor(0xff3a691e),
      "accent": buildSurfaceFromColor(0xffb3261e)
    },
    "katia.surfaces.dark":
    {
      "primary": buildSurfaceFromColor(0xff6750a4, { darkMode: true }),
      "secondary": buildSurfaceFromColor(0xffff00ff, { darkMode: true }),
      "tertiary": buildSurfaceFromColor(0xff3a691e, { darkMode: true }),
      "accent": buildSurfaceFromColor(0xffb3261e, { darkMode: true })
    }
  }
})

console.log(theme)

export function App() {

  return (
    <AppContextProvider>
      <SoperioProvider theme={theme}>
        <AppContent />
      </SoperioProvider>
    </AppContextProvider>
  );
}

function AppContent()
{
  console.log("app content")
  return (
    <div dflex alignItems="start">
      <Menu />
      <div flexGrow h="screen" ms="240px">
        <Header />
        <Content />
      </div>
    </div>
  )
}

export default App;
