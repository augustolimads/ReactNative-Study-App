import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import {StackRoute} from "./stack.routes";
import { TabRoute } from "./tab.routes";
import {DrawerRoute} from './drawer.routes'

export function Routes(){
  return (
    <NavigationContainer>
      <DrawerRoute />
    </NavigationContainer>
  );
};

