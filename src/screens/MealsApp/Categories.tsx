import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Button, Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Container } from "../../components/Containers/Container";
import { ContainerCenter } from "../../components/Containers/ContainerCenter";
import { colors } from "../../constants/colors";
import Routes from "../../constants/Routes";
import { appMealData } from "../../data/appMeal-data";

export default function Categories() {
  const navigation = useNavigation();
  const { mealsApp } = Routes;
  return (
    <Container>
      <View style={styles.content}>
        <Text>Categories Screen!</Text>
        <View style={styles.gridContainer}>
          <FlatList
            data={appMealData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.gridItem}>
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
    backgroundColor: colors.orange,
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
    margin: 15,
    height: 150,
    width: Dimensions.get("window").width * 0.4,
    backgroundColor: colors.white,
  },
});
