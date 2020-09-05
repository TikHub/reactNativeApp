import React, { useState } from "react";
import { FlatList } from "react-native";

import styles from "./styles";
import AppProduct from "../../components/AppProduct/AppProduct";
import AppScreen from "../../components/AppScreen/AppScreen";
import AppSeparator from "../../components/AppSeparator/AppSeparator";
import AppProductDeleteAction from "../../components/AppProduct/AppProductDeleteAction";
import AppProductShareAction from "../../components/AppProduct/AppProductShareAction";
import colors from "../../config/colors";

const initialData = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: "https://picsum.photos/1600/900",
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: "https://picsum.photos/1400/800",
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: "https://picsum.photos/1600/900",
  },
  {
    id: 4,
    title: "T4",
    description: "D4",
    image: "https://picsum.photos/1400/800",
  },
];

export default function MessagesScreen(props) {
  const [data, setData] = useState(initialData);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (item) => {
    setData(data.filter((i) => i.id !== item.id));
  };

  return (
    <AppScreen>
      <FlatList
        data={data}
        keyExtractor={(dataItem) => dataItem.id.toString()}
        renderItem={({ item }) => (
          <AppProduct
            title={item.title}
            subTitle={item.description}
            uri={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <AppProductDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <AppSeparator size={2} />}
        refreshing={refreshing}
        onRefresh={() => setData(initialData)}
      />
    </AppScreen>
  );
}
