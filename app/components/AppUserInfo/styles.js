import { StyleSheet } from "react-native";

import colors from "../../config/colors";

const styles = StyleSheet.create({
  chevronWrapper: {},
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 15,
  },
  subTitle: {
    textAlign: "left",
  },
  text: {
    textAlign: "left",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
});

export default styles;
