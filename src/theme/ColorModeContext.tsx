import { createContext, useContext, useMemo, useState } from "react";
import type { PropsWithChildren } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

export const ColorModeCtx = createContext({ toggle: () => {} });
export const useColorMode = () => useContext(ColorModeCtx);

export function ColorModeProvider({ children }: PropsWithChildren) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: "#1976d2" },
          ...(mode === "dark" && {
            background: { default: "#121212", paper: "#1e1e1e" },
          }),
        },
      }),
    [mode]
  );

  const toggle = () => setMode((m) => (m === "light" ? "dark" : "light"));

  return (
    <ColorModeCtx.Provider value={{ toggle }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeCtx.Provider>
  );
}
