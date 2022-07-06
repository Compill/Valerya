// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SoperioProvider } from "@soperio/react";
import { AppContextProvider } from "./layout/AppContext";
import { Content } from "./layout/Content";
import { Header } from "./layout/Header";
import { Menu } from "./layout/Menu";

export function App() {
  return (
    <AppContextProvider>
      <SoperioProvider>
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
