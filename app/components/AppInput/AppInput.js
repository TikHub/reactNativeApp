import React from "react";
import { View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles.js";
import defaultStyles from "../../config/defaultStyles.js";

export default function AppInput({
  iconName,
  iconSize = 25,
  iconColor,
  multiline,
  hasError,
  width = "100%",
  ...textInputProps
}) {
  return (
    <View
      style={[
        styles.container,
        {
          borderColor: hasError
            ? defaultStyles.colors.danger
            : defaultStyles.colors.transparent,
          width,
        },
      ]}
    >
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={iconSize}
          color={hasError ? defaultStyles.colors.danger : iconColor}
          style={styles.icon}
        />
      )}
      <TextInput
        multiline={multiline}
        style={[
          defaultStyles.textInput,
          {
            flex: 1,
            // color: hasError
            //   ? defaultStyles.colors.danger
            //   : defaultStyles.colors.darkGrey,
            fontSize: iconSize / 1.3,
          },
        ]}
        placeholderTextColor={
          hasError ? defaultStyles.colors.danger : defaultStyles.colors.darkGrey
        }
        {...textInputProps}
      />
    </View>
  );
}
