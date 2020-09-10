import React from "react";
import { FlatList, Linking, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import styles from "./styles";

import mockData from "../../config/mockData";

export default function AppSocialIcons({ iconColumns, size = 20 }) {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.buttonContainer}
        data={mockData.socialLinks}
        keyExtractor={(link) => link.id}
        renderItem={({ item }) => (
          <Text
            onPress={() => Linking.openURL(item.url)}
            style={[styles.text, { width: size }]}
          >
            <MaterialCommunityIcons
              color={colors.patientGreen}
              name={item.icon}
              size={size}
            />
          </Text>
        )}
        numColumns={iconColumns ? mockData.socialLinks.length : 0}
      />
    </View>
  );
}
