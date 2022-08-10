import React, { useContext } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../App.css";
import { Typography } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import { ThemeContext } from "../MythemeProvider";

const BMW = () => {
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
        BMW
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
            src="https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="abcd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1610809376778-928ee2c3a561?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="abcd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1600024247066-5f170a2a5057?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="abcd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1626419836588-540d7fadacbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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
        From breathtaking scenic routes to bustling metropoles, from stunning
        design to conscious sustainability, from iconic heroes of the past to
        high-tech power houses on wheels of the future – mobility has never been
        more fascinating – and automobile advancement never so exciting and
        promising – as it is today. With BMW.com, we offer you a platform that
        brings you closer to this fascination and the latest technological and
        lifestyle trends.
        <br />
        With stories focusing on topics like mobility, heritage, our shared
        future and recent milestones, facts, insights, recent and future BMW
        icons, we invite you inside the BMW universe to explore and enjoy.
        <br />
      </Typography>
    </div>
  );
};

export default BMW;
