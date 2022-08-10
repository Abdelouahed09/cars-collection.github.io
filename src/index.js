import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import MythemeProvider from "./MythemeProvider";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";

import "swiper/css/bundle";
import "./App.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MythemeProvider>
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
      </MythemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
export default App;
