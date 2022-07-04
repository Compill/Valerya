// import React from "react";
// import { ParentComponent } from "@soperio/react";
// import { SurfaceSchemeSet } from "./SurfaceScheme";


// export interface KatiaProviderProps extends ParentComponent
// {
//   componentsTheme: ComponentTheme,
//   surfaces: Record<string, SurfaceSchemeSet>
// };

// export function KatiaProvider({
//   resetCss = true,
//   theme = defaultTheme,
//   direction,
//   darkMode,
//   children,
//   ...props
// }: KatiaProviderProps)
// {
//   const ref = React.useRef(0);
//   const setTheme = useSetTheme();
//   const setDarkModeConfig = useSetDarkModeConfig();
//   const setDirection = useSetDirection();

//   // The idea is that the UI is not built yet
//   // So we do the first initialization of the theme and darkMode
//   // instantly, and not in useEffect
//   // Otherwise, if we use useEffect, the component will be built, then our initialization
//   // in useEffect will be called, meaning there might be some flickering if
//   // the theme or dark mode change from its default values
//   if (ref.current === 0)
//   {
//     setTheme(theme);
//     setDarkModeConfig(darkMode || theme.darkMode);
//     setDirection(direction || theme.direction || "ltr");
//   }

//   // Use useEffect only when theme or dark mode props change
//   React.useEffect(() =>
//   {
//     if (ref.current === 0)
//     {
//       ref.current = 1;
//     }
//     else
//     {
//       // Something like Soperio.initTheme(theme, darkMode)
//       setTheme(theme);
//       setDarkModeConfig(darkMode || theme.darkMode);
//       setDirection(direction || theme.direction || "ltr");
//       ThemeCache.get().clear()
//     }
//   }, [theme, setTheme, darkMode, setDarkModeConfig, direction, setDirection]);

//   return (
//     // TODO --so should be dynamic
//     <ThemeProvider theme={theme} >
//       {resetCss ? <NormalizeCSS /> : null}

//       {/* TODO Implement GlobalStyle https://github.com/chakra-ui/chakra-ui/blob/f77fd9999ec1105cf846cd830019d2c3ba5a0f4e/packages/system/src/providers.tsx */}
//       {theme.globalStyles && <Global styles={css(theme.globalStyles)} />}

//       <ContentContainer {...props}>
//         {children}
//       </ContentContainer>
//     </ThemeProvider>
//   );
// }

// function ContentContainer({ children, ...props }: ParentComponent)
// {
//   const direction = useDirection()
//   console.log("direction", direction)
//   return (
//     <div dir={direction ? "ltr" : "rtl"} style={{ color: "rgb(var(--so-text-color-1))" }} /*textColor="root.text-color-1"*/ {...props}>
//       {children}
//     </div>
//   )
// }