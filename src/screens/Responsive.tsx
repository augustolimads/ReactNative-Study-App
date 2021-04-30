import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Platform } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ContainerCenter } from "../components/Containers/ContainerCenter";
import { colors } from "../constants/colors";
import * as Orientation from 'expo-screen-orientation'

export default function Responsive() {
  const [orientationValue, setOrientationValue] = useState("Portrait");


//   useEffect(() => {

//     const getOrientation = () =>{
//         setOrientationValue("Landscape");
//     }

//     Dimensions.addEventListener("change", getOrientation);

//       return () => {
//           Dimensions.removeEventListener('change', getOrientation)
//       }
//   })

  

  return (
    <ContainerCenter>
      <ScrollView style={styles.scroll}>
        <Text>{orientation}</Text>
        <Text>FontScale: {Dimensions.get("window").fontScale}</Text>
        <Text>Width: {Dimensions.get("window").width}</Text>
        <Text>Height: {Dimensions.get("window").height}</Text>
        <Text>Scale: {Dimensions.get("window").scale}</Text>
        <View style={styles.group}>
          <View style={[styles.screen, styles.center]}>
            <Text>Screen</Text>
          </View>
          <View style={[styles.window, styles.center]}>
            <Text>Window</Text>
          </View>
        </View>
      </ScrollView>
    </ContainerCenter>
  );
}

const styles = StyleSheet.create({
  scroll: {
    // width: '100%',
    flex: 1,
    // justifyContent: 'center',
  },
  group: {
    flexDirection: "row",
    marginVertical: 20,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  screen: {
    backgroundColor: Platform.OS === 'ios' ? colors.orange : colors.white,
    height: Dimensions.get("screen").height / 3,
    width: Dimensions.get("screen").width / 3,
    marginRight: 10,
  },
  window: {
    backgroundColor: colors.orange,
    height: Dimensions.get("window").height / 3,
    width: Dimensions.get("window").width / 3,
  },
});
