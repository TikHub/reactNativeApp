import React from "react";
import { View } from "react-native";

import styles from "./styles";
import colors from "../../config/colors";

export default function AppSeparator({
  size = 1,
  background = colors.transparent,
}) {
  return (
    <View
      style={
        ([styles.separator], { height: size, backgroundColor: background })
      }
    />
  );
}
