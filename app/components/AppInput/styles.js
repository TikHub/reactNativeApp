import { StyleSheet, Platform } from "react-native";
import colors from "../../config/colors";
import defaultStyles from "../../config/defaultStyles";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.lightGrey,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    marginVertical: 10,
    padding: 10,
  },
  icon: {
    marginRight: 10,
    paddingTop: 5,
  },
});

export default styles;
