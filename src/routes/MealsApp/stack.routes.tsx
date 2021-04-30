import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//aqui vou importar as screens
import Categories from "../../screens/MealsApp/Categories";
import CategoryMeals from "../../screens/MealsApp/CategoryMeals";
import MealDetail from "../../screens/MealsApp/MealDetail";


const Stack = createStackNavigator();

export function MealsStackRoute(){
  return (
      <Stack.Navigator
        initialRouteName="Categories"
        // headerMode="none"
      >
        <Stack.Screen
          name="Categories"
          component={Categories}          
        />        
        <Stack.Screen
          name="CategoryMeals"
          component={CategoryMeals}          
        />        
        <Stack.Screen
          name="MealDetail"
          component={MealDetail}          
        />        
              
      </Stack.Navigator>
  );
};

