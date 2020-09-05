import { StyleSheet, Platform } from "react-native";

import colors from "../../config/colors";

const styles = StyleSheet.create({
  logo: {
    height: 80,
    width: 80,
    alignSelf: "center",
  },
  logoContainer: {
    marginTop: 50,
    marginBottom: 20,
  },
  tagName: {
    color: colors.patientGreen,
    fontSize: 14,
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
      },
      android: {
        fontFamily: "Roboto",
      },
    }),
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
});

export default styles;
