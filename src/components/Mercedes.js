import React, { useContext } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../App.css";
import { Typography } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import { ThemeContext } from "../MythemeProvider";

const Mercedes = () => {
  const themeHandler = useContext(ThemeContext);
  const { theme } = themeHandler;

  const MyTypography = styled(Typography)`
    color: ${theme === "light" ? "#000" : "#fff"};
    transition: "all 0.5s linear";
  `;
  return (
    <div
      style={{
        margin: "auto",
        width: "100%",
        maxWidth: "700px",
        paddingTop: "100px",
      }}
    >
      <MyTypography
        variant="h3"
        align="center"
        fontFamily="verdana"
        gutterBottom
      >
        Mercedes
      </MyTypography>

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1532578498858-e21a39e0a449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="abcd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1578148103598-aed9e3871003?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="abcd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1603598629493-093254bea20d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            alt="abcd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1600005896822-bc3f31549775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
            alt="abcd"
          />
        </SwiperSlide>
      </Swiper>
      <br />
      <Typography
        paddingTop="25px"
        fontSize="medium"
        align="center"
        fontFamily="Gill Sans Extrabold"
        paragraph
      >
        Mercedes-Benz: Lifestyle. Mercedes-Benz lifestyle has many different
        facets: from journeys, road trips and digital travel guides through
        fashion to fitness and exciting formats such as the Mercedes me Magazine
        and She’s Mercedes.
        <br />
        Get to know strong women who adopt new perspectives and thus change the
        world. Delve into the lives of strong personalities who share their
        extraordinary and inspiring stories with the Mercedes-Benz community.
        Susie Wolff, Mike Horn, Alondra de la Parra and Roger Federer are just
        some of the people who prove to us every day that nothing is impossible.
      </Typography>
    </div>
  );
};

export default Mercedes;
