import React, { useState, createContext } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Themes";

export const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
});
const MythemeProvider = (props) => {
  const [theme, setTheme] = useState("light");
  const themeHandler = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={themeHandler}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default MythemeProvider;
