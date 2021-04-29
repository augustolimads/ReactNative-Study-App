import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { MaterialIcons } from "@expo/vector-icons";

import Home from '../screens/Home'
import { colors } from '../constants/colors';
import Second from '../screens/Second';

const Tab = createBottomTabNavigator()

export function TabRoute(){
    return (
        <Tab.Navigator
            tabBarOptions={{
                // activeTintColor: colors.heading
                labelPosition: 'beside-icon',
                style:{
                    height: 72,                    
                }
            }}
        >
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                      <MaterialIcons
                        name="add-circle-outline"
                        size={size}
                        color={color}
                      />
                    ),
                  }}
            />
            <Tab.Screen 
                name="Second"
                component={Second}
                options={{
                    tabBarIcon: ({ size, color }) => (
                      <MaterialIcons
                        name="add-circle-outline"
                        size={size}
                        color={color}
                      />
                    ),
                  }}
            />
        </Tab.Navigator>
    )
}