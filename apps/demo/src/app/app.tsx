// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { buildAlphaSurface, buildDarkSurface, buildSurfaceFromColor, buildWhiteSurface, SurfaceSchemeSet } from "@katia/core";
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
      // "primary": buildAlphaSurface(0xff16a34a),
      "primary": buildWhiteSurface(0xffffffff, 0xff181818),
      // "secondary": buildSurfaceFromColor(0xffff00ff),
      "secondary": buildAlphaSurface(0xff94a3b8),
      "tertiary": buildAlphaSurface(0xff0ea5e9),
      // "tertiary": buildSurfaceFromColor(0xff3a691e),
      "accent": buildSurfaceFromColor(0xffb3261e)
    },
    "katia.surfaces.dark":
    {
      // "primary": buildAlphaSurface(0xff16a34a, { darkMode: true }),
      "primary": buildDarkSurface(0xff181818, 0xffffffff),
      // "secondary": buildSurfaceFromColor(0xffff00ff, { darkMode: true }),
      "secondary": buildAlphaSurface(0xff475569, { darkMode: true }),
      "tertiary": buildAlphaSurface(0xff0ea5e9, { darkMode: true }),
      // "tertiary": buildSurfaceFromColor(0xff3a691e, { darkMode: true }),
      "accent": buildSurfaceFromColor(0xffb3261e, { darkMode: true })
    },
    "katia.surfaces.default":
    {
      "light": buildAlphaSurface(0xff0ea5e9),//buildAlphaSurface(0xff06b6d4),
      "dark": buildAlphaSurface(0xff06b6d4, { darkMode: true }),
      "neutral": buildAlphaSurface(0xff94a3b8)
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

// const whiteSurface: SurfaceSchemeSet = {
//   main:
//   {
//     color: "white-alpha-100",
//     onColor: "black-alpha-100"
//   },
//   mainInv:
//   {
//     color: "black-alpha-100",
//     onColor: "white-alpha-100"
//   },
//   mainLayer:
//   {
//     color: "transparent",
//     onColor: "black-alpha-100"
//   },
//   alt:
//   {
//     color: "white-alpha-100",
//     onColor: "black-alpha-100"
//   },
//   altInv:
//   {
//     color: "black-alpha-100"
//     onColor: "white-alpha-100",
//   }
// }