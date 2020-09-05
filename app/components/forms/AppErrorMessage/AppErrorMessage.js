import React from "react";
import { Text } from "react-native";

import styles from "./styles";

export default function AppErrorMessage({ error, style, visible }) {
  if (!visible || !error) return null;

  return <Text style={[styles.text, style]}>{error}</Text>;
}
