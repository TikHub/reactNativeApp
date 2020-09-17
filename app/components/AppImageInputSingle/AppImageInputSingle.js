import React, { useState, useEffect } from "react";
import { Alert, Image, TouchableWithoutFeedback, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppIcon from "../AppIcon";

import defaultStyles from "../../config/defaultStyles";
import styles from "./styles";

export default function AppImageInputSingle({
  allowsEditing,
  background,
  base64,
  circle,
  color,
  IconTypeComponent = MaterialCommunityIcons,
  name = "camera",
  onPress,
  radius = 0,
  size = 30,
  style,
  ...restProps
}) {
  const [imageUri, setImageUri] = useState();

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    // const result = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION);
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) {
      alert("You need to enable permissions to access the library.");
    }
  };

  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    } else {
      deleteRequest();
    }
  };
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        allowsEditing: !!allowsEditing,
        // base64: !!base64,
        // exif: true,
      });
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRequest = async () => {
    Alert.alert("Remove Image", "Are You sure You want to delete this image?", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", onPress: () => deleteImage() },
    ]);
  };

  const deleteImage = async () => {
    setImageUri(null);
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View
        style={[
          styles.button,
          {
            height: size,
            width: size,
            backgroundColor: background,
            borderRadius: circle ? size / 2 : radius,
          },
          style,
        ]}
      >
        {!imageUri && (
          <IconTypeComponent name={name} color={color} size={size * 0.5} />
        )}
        {imageUri && (
          <Image
            source={{
              height: size,
              width: size,
              uri: imageUri,
            }}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
