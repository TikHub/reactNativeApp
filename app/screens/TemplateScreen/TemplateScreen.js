import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  StatusBar,
  Text,
  TextInput,
  Switch,
} from "react-native";

import PlatformIcon from "../../components/PlatformIcon";

import colors from "../../config/colors";
import keyboardTypes from "../../config/keyboardTypes";
import AppInput from "../../components/AppInput";
import AppScreen from "../../components/AppScreen";
import AppPicker from "../../components/AppPicker";
import defaultStyles from "../../config/defaultStyles";

const categories = [
  {
    label: "Indica",
    value: 1,
    icon:
      "https://w0.pngwave.com/png/383/709/cannabis-sativa-cannabis-green-leaves-png-clip-art.png",
  },
  {
    label: "Sativa",
    value: 2,
    icon:
      "https://e7.pngegg.com/pngimages/865/473/png-clipart-cannabis-leaf-cannabis-sativa-leaf-cannabis-leaves-illustrations-watercolor-leaves-fall-leaves.png",
  },
  {
    label: "Drinks",
    value: 3,
    icon: "https://hempoilshop.gr/wp-content/uploads/2020/03/CBD-Drinks.png",
  },
  {
    label: "Oil",
    value: 4,
    icon:
      "https://banner2.cleanpng.com/20180422/uae/kisspng-cannabidiol-hemp-oil-medical-cannabis-hemp-5add289c6d20a0.097852661524443292447.jpg",
  },
];

export default function TemplateScreen() {
  const [firstName, setFirstName] = useState("");
  const [switchState, setSwitchState] = useState(false);
  const [category, setCategory] = useState();

  return (
    // <View style={styles.container}>
    //   <AppText>This is custom text component</AppText>
    //   <PlatformIcon />
    // </View>

    <AppScreen
      background={
        switchState
          ? defaultStyles.colors.darkThemeSurface
          : defaultStyles.colors.transparent
      }
    >
      <Switch
        value={switchState}
        onValueChange={(newValue) => setSwitchState(newValue)}
      />
      <AppInput
        placeholder="First Name"
        iconName="face"
        iconColor={colors.cornflowerblue}
      />
      <AppInput
        placeholder="Email"
        keyboardType={keyboardTypes.common.emailAddress}
        iconName="email"
        iconColor={colors.cornflowerblue}
      />
      <AppInput
        placeholder="Password"
        iconName="textbox-password"
        iconColor={colors.cornflowerblue}
      />
      <AppPicker
        pickerBackgroundColor={defaultStyles.colors.patientGreen}
        pickerItemBackgroundColor={defaultStyles.colors.patientGreen}
        closeIconPosition="end"
        items={categories}
        iconName="apps"
        iconSize={40}
        onSelectItem={(item) => setCategory(item)}
        selectedItem={category}
        text="Category"
        textColor={defaultStyles.colors.white}
      />
      <AppInput iconName="email" placeholder="Email" />
      <StatusBar
        barStyle={switchState ? "light-content" : "default"}
        hidden={true}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
