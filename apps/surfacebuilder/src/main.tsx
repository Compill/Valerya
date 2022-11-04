import { extendTheme, SoperioProvider } from "@soperio/react";
import { withDefaultRootColors, withTailwind3Colors } from "@soperio/theme-extensions";
import { withDarkModeSurface, withDefaultSurfaces, withSurface } from "@valerya/core";
import { buildSurface } from "@valerya/surface";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./app/App";

export const theme = extendTheme(
  {
    globalStyles: {
      body: {
        fontFeatureSettings: "'kern'",
        webkitFontSmoothing: "antialiased",
        textRendering: "optimizelegibility"
      }
    },
    typography:
    {
      font:
      {
        mono: "Roboto Mono"
      }
    }
  },
  withDefaultSurfaces(),
  withSurface("default", buildSurface("#8b5cf6")),
  withDarkModeSurface("default", buildSurface("#8b5cf6", { darkMode: true })),
  withDefaultRootColors(),
  withTailwind3Colors(),
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <StrictMode>
  <SoperioProvider theme={theme}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </SoperioProvider>
  // </StrictMode>
);
