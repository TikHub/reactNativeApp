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

import AccountScreen from "./app/screens/AccountScreen";
import AccountSettingsScreen from "./app/screens/AccountSettingsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ProductsScreen from "./app/screens/ProductsScreen";
import TemplateScreen from "./app/screens/TemplateScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return <ListingEditScreen />;
  // return <LoginScreen />;
  // return <TemplateScreen />;
  // return <AccountScreen />;
  return <AccountSettingsScreen />;
  // return <MessagesScreen />;
  // return <WelcomeScreen />;
  // return <ProductsScreen />;
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingTop: Constants.statusBarHeight,
  },
});
