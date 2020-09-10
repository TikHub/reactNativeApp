import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import styles from "./styles";

export default function AppIcon({
  background = colors.black,
  color = colors.white,
  IconTypeComponent = MaterialCommunityIcons,
  name = "trash-can",
  onPress,
  size = 40,
  style,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.icon,
          {
            height: size,
            width: size,
            backgroundColor: background,
            borderRadius: size / 2,
          },
          style,
        ]}
      >
        <IconTypeComponent name={name} color={color} size={size * 0.5} />
      </View>
    </TouchableWithoutFeedback>
  );
}
