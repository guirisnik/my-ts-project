import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";

type Props = {
  imageSource: ImageSourcePropType;
  productName: string;
};

export const Product = ({ imageSource, productName }: Props) => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} resizeMode="stretch" source={imageSource} />
    </View>
    <Text>{productName}</Text>
    <Button
      title="Add / Remove"
      onPress={() => alert("add / remove product")}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    height: 150,
    width: 150,
  },
  imageContainer: {
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#CCCCCC",
    padding: 5,
  },
});
