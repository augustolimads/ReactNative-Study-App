import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from '../screens/Home'
import { TabRoute } from './tab.routes'

const Drawer = createDrawerNavigator()

export function DrawerRoute(){
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home}/>            
            <Drawer.Screen name="Second" component={TabRoute}/>            
        </Drawer.Navigator>
    )
}