import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Button,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Container } from "../../components/Containers/Container";
import { ContainerCenter } from "../../components/Containers/ContainerCenter";
import { colors } from "../../constants/colors";
import Routes from "../../constants/Routes";
import { appMealCategoryData } from "../../data/appMeal-data";

export default function Categories() {
  const navigation = useNavigation();
  const { mealsApp } = Routes;
  return (
    <Container>
      <View style={styles.content}>
        <View style={styles.gridContainer}>
          <FlatList
            data={appMealCategoryData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.gridItem,
                  { backgroundColor: item.color, shadowColor: item.color },
                ]}
                onPress={() => {
                  navigation.navigate(mealsApp.categoryMeals, {
                    id: item.id,
                    title: item.title,
                    color: item.color,
                  });
                }}
              >
                <Text>{item.title}</Text>
              </TouchableOpacity>
            )}
            numColumns={2}
          />
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  gridContainer: {
    flex: 1,
    width: "100%",
    marginTop: 20,
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    height: 150,
    width: Dimensions.get("window").width * 0.4,
    backgroundColor: colors.white,
    borderRadius: 8,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
  },
});
