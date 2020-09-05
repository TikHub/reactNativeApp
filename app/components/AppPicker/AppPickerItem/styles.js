import { StyleSheet } from "react-native";
import defaultStyles from "../../../config/defaultStyles";

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  icon: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  label: {
    fontSize: 24,
    fontFamily: defaultStyles.fontFamily,
  },
});

export default styles;
