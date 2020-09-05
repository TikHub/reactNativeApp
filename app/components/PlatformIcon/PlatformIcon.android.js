import React from "react";
import { View } from "react-native";
import { Zocial } from "@expo/vector-icons";

export default function PlatformIcon(props) {
  return (
    <View>
      <Zocial name="android" size={50} />
    </View>
  );
}
