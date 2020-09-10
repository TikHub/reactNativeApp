import React from "react";
import { Text } from "react-native";

import styles from "./styles";

export default function AppText({ children, style, ...restProps }) {
  return (
    <Text style={[styles.text, style]} {...restProps}>
      {children}
    </Text>
  );
}
