import React from "react";
import { View, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import styles from "./styles";
import AppText from "../AppText";
import colors from "../../config/colors";

export default function AppProduct({
  title = "Product",
  subTitle = "Subtitle",
  uri = "",
  onPress,
  renderRightActions,
  renderLeftActions,
}) {
  return (
    <Swipeable
      renderRightActions={renderRightActions}
      renderLeftActions={renderLeftActions}
    >
      <TouchableHighlight
        underlayColor={colors.lightGrey}
        style={styles.wrapper}
        onPress={onPress}
      >
        <View style={styles.product}>
          <Image
            style={styles.productImage}
            source={{
              uri,
            }}
            loadingIndicatorSource={require("../../assets/placeholder.gif")}
          />
          <View style={styles.productInfoSection}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
