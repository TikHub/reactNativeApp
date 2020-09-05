import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  detailsContainer: {
    justifyContent: "center",
    marginLeft: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  subTitle: {
    textAlign: "left",
  },
  text: {
    textAlign: "left",
  },
});

export default styles;
