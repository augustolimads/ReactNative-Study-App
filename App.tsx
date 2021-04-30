import React from "react";
import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
} from "@expo-google-fonts/open-sans";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <>
      <StatusBar style="dark" backgroundColor="transparent" />
      <Routes />
    </>
  );
}
