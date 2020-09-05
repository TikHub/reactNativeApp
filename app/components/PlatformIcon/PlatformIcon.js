import React from "react";
import { View, Platform } from "react-native";
import { Zocial } from "@expo/vector-icons";

export default function PlatformIcon(props) {
  return (
    <View>
      <Zocial name="appstore" size={50} />
      <Zocial name="android" size={50} />
    </View>
  );
}
