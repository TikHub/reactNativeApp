import React from "react";
import { SafeAreaView, View } from "react-native";

import styles from "./styles";

export default function AppScreen({ background, children, style }) {
  return (
    <SafeAreaView
      style={[styles.screen, { backgroundColor: background, flex: 1 }, style]}
    >
      <View style={[style]}>{children}</View>
    </SafeAreaView>
  );
}
