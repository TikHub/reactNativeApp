import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import styles from "./styles";

export default function AppSocialIcons(props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="linkedin"
        size={30}
        color={colors.patientGreen}
      />
      <MaterialCommunityIcons
        name="facebook"
        size={30}
        color={colors.patientGreen}
      />
      <MaterialCommunityIcons
        name="instagram"
        size={30}
        color={colors.patientGreen}
      />
      <MaterialCommunityIcons
        name="twitter"
        size={30}
        color={colors.patientGreen}
      />
    </View>
  );
}
