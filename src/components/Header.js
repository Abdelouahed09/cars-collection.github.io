import React from "react";
import useStyles from "./Styles.js";
import { AppBar, Toolbar, Typography } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import InputBase from "@mui/material/InputBase";
import { useContext } from "react";
import { ThemeContext } from "../MythemeProvider";
import { PropTypes } from "prop-types";
import { props } from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Header = () => {
  const themeHandler = useContext(ThemeContext);
  const { theme, setTheme } = themeHandler;
  const classes = useStyles();

  const navigate = useNavigate();

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const MyTypography = styled(Typography)`
    color: ${theme === "light" ? "#fff" : "#000"};
  `;
  const MyAppbar = styled(AppBar)`
    color: ${theme === "light" ? "#fff" : "#121212"};
  `;

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

  return (
    <div>
      <HideOnScroll {...props}>
        <MyAppbar position="fixed">
          <Toolbar>
            <DirectionsCarIcon
              onClick={() => navigate("/")}
              className={classes.icon}
            />
            <MyTypography
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              variant="h6"
            >
              <b>VEHICLES</b>
            </MyTypography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                // onChange={(e) => filteredCars(e)}
              />
            </Search>
            {/* <Brightness6Icon
              className={classes.darkmodeicon}
              cursor="pointer"
              onClick={themeToggler}
            ></Brightness6Icon> */}
            <IconButton sx={{ ml: 1 }} onClick={themeToggler} color="inherit">
              {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Toolbar>
        </MyAppbar>
      </HideOnScroll>
    </div>
  );
};

export default Header;
