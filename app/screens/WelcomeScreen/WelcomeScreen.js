import React from "react";
import { ImageBackground, View, Image, StatusBar, Text } from "react-native";

import AppHeading from "../../components/AppHeading";
import AppSocialNetworks from "../../components/AppSocialNetworks";
import AppButton from "../../components/AppButton";
import styles from "./styles";

export default function WelcomeScreen() {
  const handlePress = (event) => {
    console.log("Tapped");
  };
  return (
    <ImageBackground
      //   source={require("../../assets/background.jpg")}
      style={styles.background}
    >
      <AppHeading></AppHeading>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={handlePress} />
        <AppButton
          title="Register"
          onPress={handlePress}
          //  color="customGreen"
        />
      </View>
      <AppSocialNetworks></AppSocialNetworks>
    </ImageBackground>
  );
}
