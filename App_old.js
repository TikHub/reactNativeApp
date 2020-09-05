// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  // console.log(useDimensions(), useDeviceOrientation());
  const { landscape } = useDeviceOrientation();
  const handlePress = (val) => {
    if (typeof +val === "number" && !isNaN(val)) {
      console.log(val >= 18 ? "Welcome!" : "Fuck Off you kid!");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.bannerSection}>
        <Image
          source={{
            uri: "https://picsum.photos/70/70",
            height: 70,
            width: 70,
          }}
          // borderRadius={"50%"}
          borderRadius={50}
          resizeMode="cover"
        />
      </View>
      <TouchableOpacity>
        <Image
          source={{
            uri: "https://picsum.photos/150/200",
            width: 150,
            height: 200,
          }}
          // blurRadius={1}
          loadingIndicatorSource={require("./assets/splash.png")}
          borderRadius={5}
        />
      </TouchableOpacity>
      <Button
        onPress={() => Alert.prompt("Age", "How old are You?", handlePress)}
        title="Click Me!"
        color="#dd00dd"
      /> */}
      {/* <View
        style={{
          height: landscape ? "100%" : "30%",
          width: "100%",
          backgroundColor: "#c1c1c1",
        }}
      ></View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "yellowgreen",
    backgroundColor: "#efefef",
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  bannerSection: {
    // height: 100,
    width: "100%",
    backgroundColor: "dodgerblue",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
});
