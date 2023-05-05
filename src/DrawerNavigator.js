import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './screens/Home'
import Mybookings from './screens/Mybookings'
import PaymentHistory from './screens/PaymentHistory'
import SupportHome from './screens/SupportHome'


const Drawer= createDrawerNavigator()




const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Mybookings" component={Mybookings} />
      <Drawer.Screen name="PaymentHistory" component={PaymentHistory} />
      <Drawer.Screen name="SupportHomeme" component={SupportHome} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator