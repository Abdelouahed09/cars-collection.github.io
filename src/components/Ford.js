import React, { useContext } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../App.css";
import { Typography } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import { ThemeContext } from "../MythemeProvider";

const Ford = () => {
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
      <MyTypography variant="h3" align="center" fontFamily="Arial" gutterBottom>
        Ford
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
            src="https://images.unsplash.com/photo-1636882441787-d9ac4ea22637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
            alt="abcd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1581012702928-017890500a6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=908&q=80"
            alt="abcd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1590043586864-d05a4ff3ec08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="abcd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1614484393797-257ee1d83a1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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
        Your next adventure starts now. Hit the road with a durable
        high-strength steel frame and frame-mounted steel bumpers, and a
        powerful class-exclusive* advanced turbocharged gas engine and
        class-exclusive speed SelectShift® transmission with the power to haul
        all the gear you’ll need. <br />
        Add the all-new Tremor Off-Road Package, and the 2021 Ford Ranger is
        prepared to face even the toughest of adventures on the most rugged
        terrain.
      </Typography>
    </div>
  );
};

export default Ford;
