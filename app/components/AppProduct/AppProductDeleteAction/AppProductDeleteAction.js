import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";
import colors from "../../../config/colors";

export default function AppProductDeleteAction({
  onPress,
  background = colors.danger,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.actionBar,
          {
            backgroundColor: background,
          },
        ]}
      >
        <MaterialCommunityIcons
          style={styles.icon}
          name="trash-can"
          size={40}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
