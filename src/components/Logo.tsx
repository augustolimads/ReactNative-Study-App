import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import logo from "../assets/images/logo-white.png";

// import { Container } from './styles';

export function Logo() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <Image source={logo} style={{ height: 40, width: 40 }} />
    </TouchableOpacity>
  );
}
