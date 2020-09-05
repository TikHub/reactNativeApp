import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors,
  fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  error: {
    color: colors.danger,
    textAlign: "left",
  },
};
