import React from "react";
import styled from "styled-components";
import Imggg from "./Image/opt.jpg";

const HomeAbout = () => {
  return (
    <Container>
      <ImgSide src={Imggg} alt="" />

      <ImgText>
        <StrongDiv>WELCOME TO NATTY OPITICAL</StrongDiv>
        <SmallText>
          Mobile app development is the act or process by which a mobile app is
          developed for mobile devices, such as personal digital assistants,
          enterprise digital assistants or mobile phones. These applications can
          be pre-installed on phones during manufacturing platforms. Mobile app
          development is the act or process by which a mobile app is developed
          for mobile devices, such as personal digital assistants, enterprise
          digital assistants or mobile phones. These applications can be
          pre-installed on phones during manufacturing platforms, or delivered
          as web applications using server-side or client-side processing
        </SmallText>
      </ImgText>
    </Container>
  );
};

export default HomeAbout;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
  font-family: poppins;
`;

const StrongDiv = styled.strong`
  font-size: x-large;
  text-align: center;
  @media screen and (max-width: 400px) {
    font-size: 15px;
  }
`;

const SmallText = styled.div`
  width: 500px;
  color: #000;
  font-size: 18px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 600px) {
    width: 400px;
    text-align: center;
  }
  @media screen and (max-width: 400px) {
    width: 310px;
    text-align: center;
  }
`;

const ImgSide = styled.img`
  height: 350px;
  width: 600px;
  border-radius: 7px;
  object-fit: cover;
  margin-bottom: 10px;

  @media screen and (max-width: 700px) {
    width: 500px;
  }
  @media screen and (max-width: 500px) {
    width: 400px;
  }
  @media screen and (max-width: 400px) {
    width: 310px;
  }
`;

// const SubContainer = styled.div`
//   /* width: 1100px; */
//   display: flex;
//   background-color: blue;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   align-items: center;
// `;

const ImgText = styled.div`
  width: 550px;
  font-size: 16px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  /* @media screen and (max-width: 600px) {
    width: 310px;
  } */
`;
