import React, { useContext } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../App.css";
import { Typography } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import { ThemeContext } from "../MythemeProvider";

const Chevrolet = () => {
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
        Chevrolet
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
            src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="abcd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1546716148-b4d27fc8930c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="abcd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1562911791-472321d62247?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="abcd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1615769516664-ca7302760b23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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
        <b>Life never stops, and neither should you.</b>
        <br />
        <br />
        The 2022 Chevrolet Camaro coupe and convertible are about the pure and
        simple joy of driving. Forget about their compromised outward visibility
        and cramped rear seats. Instead, embrace their lithe handling,
        satisfying stick-shift transmission, and remarkably smooth ride. A
        275-hp turbo four is the default engine, but opting for the 335-hp V-6
        or the 455-hp V-8 unlocks more melodic soundtracks and punchier
        acceleration. <br />
        Its cabin includes some unattractive materials, and some will call it
        claustrophobic, but its front seats are comfy and supportive, and its
        well-stocked infotainment system is easy to use.
      </Typography>
    </div>
  );
};

export default Chevrolet;
