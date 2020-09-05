import { StyleSheet, Platform, StatusBar } from "react-native";

import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    flex: 1,
    alignItems: "center",
    ...Platform.select({
      ios: {
        paddingTop: 30,
      },
      android: {
        paddingTop: StatusBar.currentHeight + 30,
      },
    }),
  },
});

export default styles;
