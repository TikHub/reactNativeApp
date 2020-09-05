import React, { useState } from "react";
import {
  Image,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  Text,
  FlatList,
  TouchableNativeFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";
import defaultStyles from "../../config/defaultStyles";
import AppButton from "../AppButton";
import AppScreen from "../AppScreen";
import AppPickerItem from "./AppPickerItem";
import AppSeparator from "../AppSeparator/AppSeparator";
import AppIcon from "../AppIcon/AppIcon";

export default function AppPicker({
  pickerBackgroundColor,
  pickerItemBackgroundColor,
  closeIconPosition = "start",
  textColor,
  iconName,
  iconSize = 25,
  iconColor,
  items,
  onSelectItem,
  selectedItem,
  text,
  ...textInputProps
}) {
  const [modalState, setModalState] = useState(false);

  const formatTitleForID = (title) => title.toLowerCase().replace(" ", "_");

  const detectCloseIconPosition = (position) => {
    let iconPosition = "";
    switch (position) {
      case "start":
        iconPosition = "flex-start";
        break;
      case "center":
        iconPosition = "center";
        break;
      case "end":
        iconPosition = "flex-end";
        break;
      default:
        iconPosition = "flex-start";
        break;
    }
    return iconPosition;
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalState(true)}>
        <View
          style={[styles.container, { backgroundColor: pickerBackgroundColor }]}
        >
          {selectedItem ? (
            <Image
              style={styles.selectedImage}
              source={{
                height: iconSize,
                width: iconSize,
                uri: selectedItem.icon,
              }}
              resizeMode="cover"
            />
          ) : (
            iconName && (
              <MaterialCommunityIcons
                name={iconName}
                size={iconSize}
                color={iconColor ? iconColor : textColor}
                style={styles.icon}
              />
            )
          )}

          <Text style={[styles.text, { color: textColor }]}>
            {selectedItem ? selectedItem.label : text}
          </Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={iconSize}
            color={iconColor ? iconColor : textColor}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalState} animationType="slide">
        <AppScreen>
          <AppIcon
            background={defaultStyles.colors.transparent}
            color={defaultStyles.colors.patientGreen}
            name="close"
            onPress={() => setModalState(false)}
            size={60}
            style={[{ alignSelf: detectCloseIconPosition(closeIconPosition) }]}
          />
          <FlatList
            data={items}
            keyExtractor={(item) => formatTitleForID(item.label)}
            renderItem={({ item }) => (
              <AppPickerItem
                icon={item.icon}
                label={item.label}
                backgroundColor={pickerItemBackgroundColor}
                color={defaultStyles.colors.white}
                onPress={() => {
                  setModalState(false);
                  onSelectItem(item);
                }}
              />
            )}
            ItemSeparatorComponent={() => <AppSeparator size={5} />}
          />
        </AppScreen>
      </Modal>
    </>
  );
}
