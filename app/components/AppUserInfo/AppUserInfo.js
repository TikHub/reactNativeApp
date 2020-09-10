import React from "react";
import { Image, Text, TouchableHighlight, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppProductDeleteAction from "../AppProduct/AppProductDeleteAction";
import AppProductShareAction from "../AppProduct/AppProductShareAction";
import AppText from "../AppText";

import styles from "./styles";
import colors from "../../config/colors";

export default function AppUserInfo({
  background = colors.white,
  hasChevron,
  IconComponent,
  imageSize = 60,
  onPress,
  subTitle,
  title,
  uri,
}) {
  return (
    <Swipeable
    //   renderRightActions={() => (
    //     <AppProductDeleteAction background={colors.customGreen} />
    //   )}
    //   renderLeftActions={() => (
    //     <AppProductShareAction background={colors.customYellow} />
    //   )}
    >
      <TouchableHighlight underlayColor={colors.black} onPress={onPress}>
        <View style={[styles.wrapper, { backgroundColor: background }]}>
          {IconComponent}
          {uri && (
            <Image
              style={[
                styles.img,
                {
                  height: imageSize,
                  width: imageSize,
                  backgroundColor: background,
                  borderRadius: imageSize / 1,
                },
              ]}
              source={uri}
            />
          )}
          <View style={styles.detailsContainer}>
            {title && (
              <AppText style={styles.title} numberOfLines={1}>
                {title}
              </AppText>
            )}
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          {hasChevron && (
            <Text style={[styles.chevronWrapper]}>
              <MaterialCommunityIcons name="chevron-right" size={40} />
            </Text>
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
