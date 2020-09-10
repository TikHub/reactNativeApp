import { StyleSheet } from "react-native";

import defaultStyles from "../../config/defaultStyles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGrey,
    borderColor: defaultStyles.colors.transparent,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding: 10,
  },
  icon: {
    marginRight: 10,
  },
  modal: {
    paddingHorizontal: 15,
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
