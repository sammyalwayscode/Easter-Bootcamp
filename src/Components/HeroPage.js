import React from "react";
import styled from "styled-components";
import BgImage from "./Image/BackGroundImage.jpg";

const HeroPage = () => {
  return (
    <Main>
      <Container>
        {/* <HeroImage src={Logo} alt="" /> */}
        <NavText> Enjoy a clearer Future</NavText>
        <SubNavText>Get Rid of a Cloudly Vision Today</SubNavText>
        <Button style={{ fontWeight: "bold", fontSize: "15px" }}>
          Book An Appointment
        </Button>
      </Container>
    </Main>
  );
};

export default HeroPage;

const Main = styled.div`
  background-image: url(${BgImage});
  width: 100%;
  height: 500px;
  object-fit: cover;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
  margin-top: 20px;
  font-family: poppins;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
`;

const HeroImage = styled.img`
  @media screen and (max-width: 800px) {
    width: 500px;
  }
  @media screen and (max-width: 400px) {
    width: 300px;
  }
`;

const NavText = styled.div`
  font-weight: 600;

  font-size: xx-large;
  color: #fff;
  text-align: center;

  @media screen and (max-width: 800px) {
    font-size: x-large;
  }
  @media screen and (max-width: 400px) {
    font-size: large;
  }
`;

const SubNavText = styled.div`
  color: #fff;
  font-size: large;
  margin-bottom: 20px;
`;

const Button = styled.div`
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: #fff;
  border-radius: 5px;
  background-color: #4a87ed;
`;
