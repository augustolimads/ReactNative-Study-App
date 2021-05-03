import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

import Filters from '../../screens/MealsApp/Filters'
import Categories from '../../screens/MealsApp/Categories'

const Drawer = createDrawerNavigator()

export function DrawerRoute(){
    return (
        <Drawer.Navigator initialRouteName="MealsApp">            
            <Drawer.Screen name="MealsApp" component={Categories}/>            
            <Drawer.Screen name="MealsApp" component={Filters}/>            
        </Drawer.Navigator>
    )
}