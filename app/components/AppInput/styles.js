import { StyleSheet, Platform } from "react-native";
import colors from "../../config/colors";
import defaultStyles from "../../config/defaultStyles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding: 10,
  },
  icon: {
    marginRight: 10,
    paddingTop: 5,
  },
});

export default styles;
