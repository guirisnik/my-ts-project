import React from "react";
import global from "../../Global";
import { Button, Text, View } from "react-native";
import { CartNavigationProp, CartRouteProp } from "../../Stack";

type Props = {
  navigation: CartNavigationProp;
  route: CartRouteProp;
};

export const Cart = ({ navigation, route }: Props) => (
  <View>
    <Text>This is the cart</Text>
  </View>
);
