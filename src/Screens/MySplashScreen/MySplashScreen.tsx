import { View, Text, Image } from "react-native";
import React from "react";
import { Container, SubTitle, TextContainer, WaiterText } from "./styles";

const MySplashScreen = () => {
  return (
    <Container>
      <Image
        source={require("../../assets/images/splash/splash_screen.png")}
        resizeMode="contain"
      />
      {/* 
      <TextContainer>
        <WaiterText>
          WAITER
          <Text style={{ color: "#fff", fontFamily: "GeneralSans400" }}>
            APP
          </Text>
        </WaiterText>

        <SubTitle>O App do garçom</SubTitle>
      </TextContainer> */}
    </Container>
  );
};

export default MySplashScreen;
