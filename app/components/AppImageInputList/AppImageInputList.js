import React, { useState } from "react";
import { View } from "react-native";

import AppImageInput from "../AppImageInput";

import defaultStyles from "../../config/defaultStyles";
import styles from "./styles";

export default function AppImageInputList({
  imageUris = [],
  onAddImage,
  onRemoveImage,
  allowsEditing,
}) {
  return (
    <View style={[styles.container]}>
      {imageUris.map((uri) => (
        <AppImageInput
          background={defaultStyles.colors.lightGrey}
          color={defaultStyles.colors.mediumGrey}
          imageUri={uri}
          name="camera"
          radius={15}
          size={100}
          key={uri}
          style={{
            marginRight: 10,
          }}
          onChangeImage={(uri) => onRemoveImage(uri)}
        />
      ))}
      <AppImageInput
        allowsEditing={!!allowsEditing}
        background={defaultStyles.colors.lightGrey}
        color={defaultStyles.colors.mediumGrey}
        name="camera"
        radius={15}
        size={100}
        style={{
          marginRight: 10,
        }}
        onChangeImage={(uri) => onAddImage(uri)}
      />
    </View>
  );
}
