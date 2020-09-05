import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function AppPickerItem({
  backgroundColor,
  color,
  label,
  icon,
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { backgroundColor }]}>
        {icon && (
          <Image
            style={styles.icon}
            source={{
              uri: icon ? icon : "../../../assets/user.png",
            }}
          />
        )}
        <Text style={[styles.label, { color }]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}
