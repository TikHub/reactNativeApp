import { StyleSheet } from "react-native";

import colors from "../../config/colors";

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
  },
  product: {
    height: 300,
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, .1)",
    overflow: "hidden",
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      height: 15,
      width: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
  },
  productImage: {
    flex: 1,
    resizeMode: "cover",
  },
  productInfoSection: {
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  title: {
    color: colors.patientGreen,
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 5,
  },
  subTitle: {
    fontSize: 20,
    marginBottom: 25,
  },
});

export default styles;
