import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";
import colors from "../../../config/colors";

export default function AppProductShareAction({
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
          name="share"
          size={40}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

// const styles = StyleSheet.create({
//   actionBar: {
//     width: 70,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
