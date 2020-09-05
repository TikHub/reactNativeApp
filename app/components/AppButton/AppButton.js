import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import colors from "../../config/colors";

export default function AppButton({
  color = "patientGreen",
  onPress,
  textColor = "white",
  title,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={[styles.actionText, { color: colors[textColor] }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
