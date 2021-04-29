import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//aqui vou importar as screens
import Home from "../screens/Home";
import Second from "../screens/Second";

import { colors } from "../constants/colors";
import { Logo } from "../components/Logo";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native";
import { DrawerRoute } from "./drawer.routes";
import { TabRoute } from "./tab.routes";
import {Todo} from "../screens/Todo";

const Stack = createStackNavigator();

export function StackRoute(){
  return (
      <Stack.Navigator
        initialRouteName="Todo"
        // headerMode="none"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.orange,
          },
          headerTintColor: colors.white,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          cardStyle: {
            backgroundColor: colors.background,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={DrawerRoute}
          options={{
            headerTitle: () => <Logo />,            
          }}
        />        
        <Stack.Screen
          name="Todo"
          component={Todo}          
        />        
      </Stack.Navigator>
  );
};

