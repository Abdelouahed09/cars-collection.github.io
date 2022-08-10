import React, { useContext } from "react";
import { Typography } from "@mui/material";
import useStyles from "./Styles.js";
import "../App.css";
import { styled } from "@mui/material/styles";
import { ThemeContext } from "../MythemeProvider";

const Footer = () => {
  const classes = useStyles();
  const themeHandler = useContext(ThemeContext);
  const { theme } = themeHandler;

  const MyTypography = styled(Typography)`
    color: ${theme === "light" ? "#000" : "#fff"};
  `;
  return (
    <footer className={classes.footer}>
      <MyTypography variant="h6" color="#636364" align="center" gutterBottom>
        Copyright &copy; 2022
      </MyTypography>
      <MyTypography variant="subtitle1" align="center" color="textSecondary">
        All Rights Reserved.
      </MyTypography>
      <MyTypography variant="subtitle2" align="center" color="textSecondary">
        Created by : Abdelouahed Amalas
      </MyTypography>
    </footer>
  );
};

export default Footer;
