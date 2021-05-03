import React, {useEffect} from "react";
import { StyleSheet, Text, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";
import { ContainerCenter } from "../../components/Containers/ContainerCenter";
import Routes from "../../constants/Routes";
import { appMealCategoryProps } from "../../data/appMeal-data";

export default function CategoryMeals() {
  const navigation = useNavigation();
  const routes = useRoute();
  const {id, title, color} = routes.params as appMealCategoryProps;
  const { mealsApp } = Routes;

    useEffect(() => {
        navigation.setOptions({
            title,
            headerStyle:{
              backgroundColor: color
            }
        })        
    }, [])

  return (
    <ContainerCenter>
      <Text>{title} Screen!</Text>
      <Button
        color={color}
        title="go to details"
        onPress={() => {
          navigation.navigate(mealsApp.mealDetail);
        }}
      />
      <Button
        color={color}
        title="go back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </ContainerCenter>
  );
}

CategoryMeals.navigationOptions = () => {

}

const styles = StyleSheet.create({});
