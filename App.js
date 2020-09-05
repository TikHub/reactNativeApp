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
import Constants from "expo-constants";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import TemplateScreen from "./app/screens/TemplateScreen";
import ProductsScreen from "./app/screens/ProductsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import LoginScreen from "./app/screens/LoginScreen/LoginScreen";

export default function App() {
  // return <LoginScreen />;
  // return <TemplateScreen />;
  // return <AccountScreen />;
  return <MessagesScreen />;
  // return <WelcomeScreen />;
  // return <ProductsScreen />;
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingTop: Constants.statusBarHeight,
  },
});
