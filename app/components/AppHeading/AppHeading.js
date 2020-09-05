import React from "react";
import { View, Image, Text, StyleSheet, Platform } from "react-native";

import styles from "./styles";

export default function AppHeading({ tagName }) {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require("../../assets/logo.png")}
        borderRadius={20}
        style={styles.logo}
      />
      <Text style={styles.tagName}>{tagName}</Text>
    </View>
  );
}
