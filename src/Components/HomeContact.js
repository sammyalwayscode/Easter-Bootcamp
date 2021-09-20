import React from "react";
import styled from "styled-components";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PublicRoundedIcon from "@material-ui/icons/PublicRounded";

const HomeContact = () => {
  return (
    <div>
      <MainContainer>
        <ConText>Contact Us</ConText>
        <SubContainer>
          {/* <Bounce bottom> */}
          <Container>
            <StoreMallDirectoryIcon
              style={{
                color: "#fff",
                fontSize: "35px",
                marginBottom: "5%",
              }}
            />
            <Title>Address</Title>
            <Content>144, Barista Ahmed, Apapa, Lagos-Nigeria</Content>
          </Container>
          {/* </Bounce> */}
          {/* <Bounce bottom> */}
          <Container>
            <PhoneIcon
              style={{
                color: "#fff",
                fontSize: "35px",
                marginBottom: "5%",
              }}
            />
            <Title>Contact Number</Title>
            <Content>+2349032676595</Content>
          </Container>

          <Container>
            <MailOutlineIcon
              style={{
                color: "#fff",
                fontSize: "35px",
                marginBottom: "5%",
              }}
            />
            <Title>Email Address</Title>
            <Content>natty@gmail.com</Content>
          </Container>
          {/* </Bounce> */}
          {/* <Bounce bottom> */}
          <Container>
            <PublicRoundedIcon
              style={{
                color: "#fff",
                fontSize: "35px",
                marginBottom: "5%",
              }}
            />
            <Title>Website</Title>
            <Content>www.natty.com</Content>
          </Container>
          {/* </Bounce> */}
        </SubContainer>
      </MainContainer>
    </div>
  );
};

export default HomeContact;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
const ConText = styled.div`
  color: #000;
  font-size: xx-large;
  font-weight: bold;
  margin-bottom: 5%;
`;
const SubContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1000px) {
    width: 768px;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 700px) {
    width: 318px;
    justify-content: center;
    align-items: center;
  }
`;
const Container = styled.div`
  background-color: #0e85d1;
  height: 220px;
  width: 285px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  /* margin: 3%; */
  /* margin-bottom: 3%; */

  @media screen and (max-width: 1000px) {
    margin: 3%;
  }
`;
const Title = styled.div`
  color: #fff;
  font-weight: 600;
  font-size: 17px;
  margin-bottom: 5%;
`;
const Content = styled.div`
  text-align: center;
  color: #fff;
`;
