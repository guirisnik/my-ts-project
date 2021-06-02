import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type StackParams = {
  Home: undefined;
  Cart: { name: String };
};

export type HomeNavigationProp = StackNavigationProp<StackParams, "Home">;
export type CartNavigationProp = StackNavigationProp<StackParams, "Cart">;

export type CartRouteProp = RouteProp<StackParams, "Cart">;

export const Stack = createStackNavigator<StackParams>();
