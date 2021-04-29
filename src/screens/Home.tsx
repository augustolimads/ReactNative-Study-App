import React from "react";
import { useNavigation } from "@react-navigation/core";
import { View, Text, StyleSheet, Button } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { ContainerCenter } from "../components/Containers/ContainerCenter";
import {} from '@react-navigation/drawer'

const Home: React.FC = () => {
  const navigation = useNavigation();
  // const DrawerActions = 

  return (
    <ContainerCenter>
      <Text>Bem vindo Augusto!</Text>
      <Button onPress={()=>{}} title="Isso é um btn" />
      <RectButton onPress={() => navigation.navigate("Second")}>
        <Text>Go to second</Text>
      </RectButton>
      {/* <RectButton onPress={() => DrawerActions.openDrawer()}>
        <Text>Drawer</Text>
      </RectButton> */}
    </ContainerCenter>
  );
};

export default Home;

const styles = StyleSheet.create({
  
});
