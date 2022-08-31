// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { buildSurface, buildDarkSurface, buildWhiteSurface } from "@katia/ui";
import { extendTheme, SoperioProvider } from "@soperio/react";
import { AppContextProvider } from "./layout/AppContext";
import { Content } from "./layout/Content";
import { Header } from "./layout/Header";
import { Menu } from "./layout/Menu";


/* TODO Decision!

  Ditch Material UI colors, but keep surfaces

  A neutral surface with Tailwind's Slate color is good enough

  Add way to get palette from Surface, this way, 
  we can customize components further in a good way

  Also, would be a good thing to be able to get access to the rest
  of the theme values like colors and stuff


  So, how do I create a palette and a surface?
*/



const theme = extendTheme({
  extras:
  {
    // TODO Transform into 
    // withLightSurface
    // withDarkSurface
    // withDefaultSurface
    "katia.surfaces":
    {
      // "primary": buildSurface(0xff16a34a),
      "default": buildSurface(0xff12A2DF),
      "light": buildWhiteSurface(0xffffffff, 0xff181818),
      "dark": buildDarkSurface(0xff181818, 0xffffffff),
      "neutral": buildSurface(0xff94a3b8),
      "primary": buildWhiteSurface(0xffffffff, 0xff181818),
      // "secondary": buildSurfaceFromColor(0xffff00ff),
      "secondary": buildSurface(0xff475569),
      "tertiary": buildSurface(0xff39B8FC), 
      // "tertiary": buildSurfaceFromColor(0xff3a691e),
      "accent": buildSurface(0xffb3261e)
    },
    "katia.surfaces.dark":
    {
      "default": buildSurface(0x12A2DF, { darkMode: true }),
      "neutral": buildSurface(0xff94a3b8, { darkMode: true }),
      "light": buildDarkSurface(0xff181818, 0xffffffff),
      "dark": buildWhiteSurface(0xffffffff, 0xff181818),

      // "primary": buildSurface(0xff16a34a, { darkMode: true }),
      "primary": buildDarkSurface(0xff181818, 0xffffffff),
      // "secondary": buildSurfaceFromColor(0xffff00ff, { darkMode: true }),
      "secondary": buildSurface(0xff475569, { darkMode: true }),
      "tertiary": buildSurface(0xff39B8FC, { darkMode: true }),
      // "tertiary": buildSurfaceFromColor(0xff3a691e, { darkMode: true }),
      "accent": buildSurface(0xffb3261e, { darkMode: true })
    },
    "katia.surfaces.default":
    {
      "light": buildSurface(0xff0ea5e9),//buildSurface(0xff06b6d4),
      "dark": buildSurface(0xff06b6d4, { darkMode: true }),
      "neutral": buildSurface(0xff94a3b8)
    }
  }
})

export function App()
{

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