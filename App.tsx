import "react-native-gesture-handler";
import React from "react";
import { Button } from "react-native-elements";
import { ShoppingCart } from "./src/components/Icons";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "./Stack";
import { Home, Cart } from "./src/screens";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () => <Text>Home</Text>,
            headerRight: () => (
              <Button
                icon={<ShoppingCart size={40} numberOfItems={0} />}
                type="clear"
              />
            ),
          }}
        />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
