import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function AppPickerItem({
  backgroundColor,
  color,
  item,
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { backgroundColor }]}>
        {item.icon && item.icon !== null && (
          <Image
            style={styles.icon}
            source={{
              uri: item.icon
                ? item.icon
                : "https://www.uokpl.rs/fpng/d/279-2790744_cannabis-clipart-png.png",
            }}
          />
        )}
        <Text style={[styles.label, { color }]}>{item.label}</Text>
      </View>
    </TouchableOpacity>
  );
}
