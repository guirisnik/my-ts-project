import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  ImageSourcePropType,
} from "react-native";
import { HomeNavigationProp } from "../../Stack";
import { Product } from "../components/Product";
import global from "../../Global";

type Props = {
  navigation: HomeNavigationProp;
};

export const Home = ({ navigation: { navigate } }: Props) => {
  const DATA = [
    {
      id: "1",
      name: "Banana",
      imageSource: require("../../assets/bananas.png"),
    },
    {
      id: "2",
      name: "Banana",
      imageSource: require("../../assets/bananas.png"),
    },
    {
      id: "3",
      name: "Banana",
      imageSource: require("../../assets/bananas.png"),
    },
    {
      id: "4",
      name: "Banana",
      imageSource: require("../../assets/bananas.png"),
    },
    {
      id: "5",
      name: "Banana",
      imageSource: require("../../assets/bananas.png"),
    },
    {
      id: "6",
      name: "Banana",
      imageSource: require("../../assets/bananas.png"),
    },
    {
      id: "7",
      name: "Banana",
      imageSource: require("../../assets/bananas.png"),
    },
    {
      id: "8",
      name: "Banana",
      imageSource: require("../../assets/bananas.png"),
    },
  ];

  type ProductProp = {
    item: {
      id: string;
      name: string;
      imageSource: ImageSourcePropType;
    };
  };
  const renderProduct = ({ item }: ProductProp) => (
    <Product productName={item.name} imageSource={item.imageSource} />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        horizontal={false}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  columnWrapper: { margin: 20 },
});
