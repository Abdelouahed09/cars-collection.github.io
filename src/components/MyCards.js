import React, { useContext } from "react";
import {
  Typography,
  Container,
  Grid,
  Button,
  CardActionArea,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import useStyles from "./Styles.js";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { ThemeContext } from "../MythemeProvider";

const cards = [
  {
    heading: "Hyundai",
    text: "Explore Hyundai Motor's various vehicle lineups ,brand vision and global campaign like clean mobility, sustainability, art and sports partnership.",
    link: "https://images.unsplash.com/photo-1644907969192-0ac331cc8456?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    path: "/hyundai",
  },

  {
    heading: "Mercedes",
    text: "The Mercedes-Benz Group AG (former Daimler AG) is one of the world's most successful automotive companies. ",
    link: "https://images.unsplash.com/photo-1610099610040-ab19f3a5ec35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1lcmNlZGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    path: "/mercedes",
  },

  {
    heading: "BMW",
    text: "Welcome to the BMW Group. Our focus on the premium idea and the principle of sustainability appeals to people worldwide.",
    link: "https://images.unsplash.com/photo-1593460354583-4224ab273cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym13fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    path: "/bmw",
  },

  {
    heading: "Chevrolet",
    text: "Explore Chevrolet's exciting lineup of cars, trucks, SUVs, crossovers and vans. Build your own and schedule a test drive today.",
    link: "https://images.unsplash.com/photo-1573074617613-fc8ef27eaa2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hldnJvbGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    path: "/chevrolet",
  },

  {
    heading: "Mustang",
    text: "Mustang calls upon its performance roots with features for enhanced handling, high-powered engine options & a classic Mustang design. ",
    link: "https://images.unsplash.com/photo-1612544448445-b8232cff3b6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzdGFuZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    path: "/mustang",
  },

  {
    heading: "Ford",
    text: "Ford® is Built for America. Discover the latest lineup in new Ford vehicles! Explore hybrid & electric vehicle options, see photos, build & price",
    link: "https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    path: "/ford",
  },
];

const MyCards = () => {
  const themeHandler = useContext(ThemeContext);
  const { theme } = themeHandler;
  const classes = useStyles();

  const navigate = useNavigate();

  // Scroll to Bottom

  const scrollRef = useRef();
  const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const MyCardContent = styled(CardContent)`
    color: ${theme === "light" ? "#121212" : "#fff"};
    background-color: ${theme === "light" ? "#fff" : "#121212"};
  `;
  const MyCardActions = styled(CardActions)`
    color: ${theme === "light" ? "#121212" : "#fff"};
    background-color: ${theme === "light" ? "#fff" : "#121212"};
  `;
  const MyTypography = styled(Typography)`
    color: ${theme === "light" ? "#000" : "#fff"};
  `;

  return (
    <div>
      <Container maxWidth="sm" className={classes.cardGrid}>
        <MyTypography
          marginTop="66px"
          variant="h4"
          align="center"
          fontFamily="Verdana"
          color="textPrimary"
          gutterBottom
        >
          <b>Cars Collection</b>
        </MyTypography>
        <MyTypography
          variant="h6"
          align="center"
          color="textSecondary"
          fontFamily="Gill Sans Extrabold"
          paragraph
        >
          Browse through our amazing car model collection. <br /> These models
          are deeply detailed replicating every aspect of the originals.
        </MyTypography>
        <Container className={classes.cardGrid}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Button
                onClick={scrollToBottom}
                // onClick={handleOnClick}
                variant="contained"
                color="primary"
              >
                See Our Collection
              </Button>
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Container>
      </Container>
      <Container className={classes.cardGrid} maxWidth="md" ref={scrollRef}>
        <Grid container spacing={4}>
          {cards.map((card, key) => (
            <Grid item key={key} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia className={classes.CardMedia} image={card.link} />
                </CardActionArea>
                <MyCardContent className={classes.CardContent}>
                  <Typography gutterBottom variant="h5">
                    <b>{card.heading}</b>
                  </Typography>
                  <Typography>{card.text}</Typography>
                </MyCardContent>
                <MyCardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => navigate(card.path)}
                  >
                    View
                  </Button>
                </MyCardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default MyCards;
