import React from "react";
import { FlatList, Text, View } from "react-native";

import AppIcon from "../../components/AppIcon/AppIcon";
import AppScreen from "../../components/AppScreen/AppScreen";
import AppSeparator from "../../components/AppSeparator/AppSeparator";
import AppUserInfo from "../../components/AppUserInfo";
import { FontAwesome5 } from "@expo/vector-icons";

import colors from "../../config/colors";
import styles from "./styles";

import mockData from "../../config/mockData";

export default function AccountScreen(props) {
  const formatItemTitle = (item) => item.toLowerCase().replace(" ", "_");

  return (
    <AppScreen background={colors.grey}>
      <AppUserInfo
        hasChevron
        onPress={() => null}
        subTitle="soghomonyantigran@gmail.com"
        title="Tigran Soghomonyan"
        uri={require("../../assets/user.png")}
      />

      <View style={[styles.itemsContainer]}>
        <FlatList
          data={mockData.accountMenuItems}
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
            name={"exit-run"}
            background={colors.danger}
            color={colors.white}
            // IconTypeComponent={FontAwesome5}
            size={60}
          />
        }
      />
    </AppScreen>
  );
}
