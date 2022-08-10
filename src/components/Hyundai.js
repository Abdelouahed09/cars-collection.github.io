import React, { useContext } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../App.css";
import { Typography } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import { ThemeContext } from "../MythemeProvider";

const Hyundai = () => {
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
        Hyundai
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
            src="https://images.unsplash.com/photo-1644907961094-8852aca773d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI3fHxoeXVuZGFpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="abcd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1571561944842-542037875b50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="abcd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1629709274075-daed63a1a642?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="abcd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1629709305804-a4c8a48e6bc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="abcd"
          />
        </SwiperSlide>
      </Swiper>
      <br />
      <MyTypography
        fontSize="medium"
        align="center"
        fontFamily="Gill Sans Extrabold"
        paragraph
      >
        <b>Thrive for Speed</b>
        <br />
        <br />
        The thrill of driving a high-performance car is not about just the speed
        but also the exhilaration of accelerating round corners. It's the rush
        of adrenaline and the gravitational forces pressing you against your
        seat. One thing’s for sure; high-performance cars deliver in so many
        different and adrenaline-inducing ways. But, if you’ve ever wondered how
        to get the most out of your high-performance car, here are some tips for
        you.
        <br />
        In a race, a fast start is a make or break. For professional drivers,
        getting off the line and to the first bend in the shortest amount of
        time is critical. The key to making fast starts is making each gear
        change as smooth and quick as possible. It’s not easy to make smooth
        gear changes in a high-performance car, especially if your car has a
        manual transmission.
        <br />
        Luckily, Hyundai N’s performance cars have a launch control feature to
        help you get the fastest start possible. This is because the launch
        control system controls the torque from a standing start and gives you
        maximum traction thanks to its electronic accelerator that prevents
        slippage, engine failure, and gearbox problems. You can find this system
        in all our N models.
      </MyTypography>
    </div>
  );
};

export default Hyundai;
