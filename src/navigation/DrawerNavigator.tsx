import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import Main from '../screens/Main'
import Tutorial from '../screens/Tutorial'

const Drawer = createDrawerNavigator()

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Main" component={Main} />
            <Drawer.Screen name="Tutorial" component={Tutorial} />
        </Drawer.Navigator>
    )
}
