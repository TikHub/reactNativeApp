import React from "react";
import { View, FlatList } from "react-native";

import styles from "./styles";
import AppScreen from "../../components/AppScreen/AppScreen";
import AppIcon from "../../components/AppIcon/AppIcon";
import AppUserInfo from "../../components/AppUserInfo";
import colors from "../../config/colors";
import AppSeparator from "../../components/AppSeparator/AppSeparator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      color: colors.white,
      backgroundColor: colors.danger,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      color: colors.white,
      backgroundColor: colors.patientGreen,
    },
  },
];

export default function AccountScreen(props) {
  const formatItemTitle = (item) => item.toLowerCase().replace(" ", "_");

  return (
    <AppScreen background={colors.grey}>
      <AppUserInfo
        title="Tigran Soghomonyan"
        subTitle="soghomonyantigran@gmail.com"
        uri={require("../../assets/user.png")}
        onPress={() => null}
      />

      <View style={styles.itemsContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => formatItemTitle(item.title)}
          renderItem={({ item }) => (
            <AppUserInfo
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  color={item.icon.color}
                  background={item.icon.backgroundColor}
                  size={60}
                />
              }
            />
          )}
          ItemSeparatorComponent={() => <AppSeparator size={5} />}
        />
      </View>
      <AppUserInfo
        title={"Log out"}
        IconComponent={
          <AppIcon
            name={"logout"}
            color={colors.white}
            background={colors.danger}
            size={60}
          />
        }
      />
    </AppScreen>
  );
}
