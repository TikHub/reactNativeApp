import React from "react";
import { View, SafeAreaView } from "react-native";

import styles from "./style";
import colors from "../../config/colors";

import AppProduct from "../../components/AppProduct/AppProduct";

export default function (props) {
  return (
    <SafeAreaView style={styles.container}>
      <AppProduct
        title="Purple Kush"
        subTitle="$20"
        uri="https://picsum.photos/1600/900"
      />
    </SafeAreaView>
  );
}
