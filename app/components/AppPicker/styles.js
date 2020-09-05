import { StyleSheet } from "react-native";

import defaultStyles from "../../config/defaultStyles";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: defaultStyles.colors.lightGrey,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding: 5,
  },
  icon: {
    marginRight: 10,
  },
  selectedImage: {
    marginRight: 10,
  },
  text: {
    fontSize: 20,
    flex: 1,
  },
});

export default styles;
