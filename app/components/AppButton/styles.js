import { StyleSheet } from "react-native";

import colors from "../../config/colors";

const styles = StyleSheet.create({
  actionText: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  button: {
    width: "100%",
    height: 60,
    backgroundColor: colors.patientGreen,
    borderColor: colors.patientGreen,
    marginTop: 8,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(50,182,53,.2)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 10, // for Android
  },
});

export default styles;
