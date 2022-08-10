import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#FFF",
  text: "#000",
  toggleBorder: "#FFF",
  background: "#121212",
};

export const darkTheme = {
  body: "#121212",
  text: "#fff",
  toggleBorder: "#6B8096",
  background: "#999",
};

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.5s linear;
  }
  `;
