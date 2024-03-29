// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SoperioProvider, Theme, useTheme } from "@soperio/react";
import { AppContextProvider } from "./layout/AppContext";
import { Content } from "./layout/Content";
import { Header } from "./layout/Header";
import { Menu } from "./layout/Menu";
import theme from "./theme";

declare module "@valerya/core"
{
  export interface ValeryaThemeTypings extends Theme
  {
    surfaces: "default" | "light" | "dark" | "neutral" | "primary" | "secondary" | "tertiary"
    darkSurfaces: "default" | "light" | "dark" | "neutral"
  }

}


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
  const theme = useTheme()
  console.log(theme)
  return (
    <div bgColor="--bg-color-3" transition="colors">
      <div dflex alignItems="start">
        <Menu />
        <div flexGrow h="screen" ms="240px">
          <Header />
          <Content />
        </div>
      </div>
    </div>
  )
}

export default App;