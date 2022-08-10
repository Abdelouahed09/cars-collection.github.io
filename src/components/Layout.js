import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { GlobalStyle } from "./Themes";
import { CssBaseline } from "@mui/material";

const Layout = (props) => {
  return (
    <div
      style={{
        margin: "auto",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <GlobalStyle />
      <CssBaseline />
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
