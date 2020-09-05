import React from "react";
import { View, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import styles from "./styles";
import AppText from "../AppText";
import colors from "../../config/colors";
import AppProductDeleteAction from "../AppProduct/AppProductDeleteAction";
import AppProductShareAction from "../AppProduct/AppProductShareAction";

export default function AppUserInfo({
  title,
  subTitle,
  uri,
  background = colors.white,
  imageSize = 60,
  IconComponent,
  onPress,
}) {
  return (
    // <Swipeable
    //   renderRightActions={() => (
    //     <AppProductDeleteAction background={colors.customGreen} />
    //   )}
    //   renderLeftActions={() => (
    //     <AppProductShareAction background={colors.customYellow} />
    //   )}
    // >
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
          {title && <AppText style={styles.title}>{title}</AppText>}
          {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
        </View>
      </View>
    </TouchableHighlight>
    // </Swipeable>
  );
}
