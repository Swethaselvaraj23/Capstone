// src/ThemeContext.js
import { createContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "dark"
            ? {
                background: {
                  default: "#0a0d10",
                  paper: "#121212",
                },
                primary: {
                  main: "#00bcd4",
                },
                text: {
                  primary: "#ffffff",
                },
              }
            : {
                background: {
                  default: "#f0f8ff",
                  paper: "#ffffff",
                },
                primary: {
                  main: "rgb(1, 83, 90)",
                },
                text: {
                  primary: "#00332d",
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
