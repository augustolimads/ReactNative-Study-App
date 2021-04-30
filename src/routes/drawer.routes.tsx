import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from '../screens/Home'
import { TabRoute } from './tab.routes'
import { MealsStackRoute } from './MealsApp/stack.routes'

const Drawer = createDrawerNavigator()

export function DrawerRoute(){
    return (
        <Drawer.Navigator initialRouteName="MealsApp">
            <Drawer.Screen name="Home" component={Home}/>            
            <Drawer.Screen name="Second" component={TabRoute}/>            
            <Drawer.Screen name="MealsApp" component={MealsStackRoute}/>            
        </Drawer.Navigator>
    )
}