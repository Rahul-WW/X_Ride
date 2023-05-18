import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './screens/Home'
import Mybookings from './screens/Mybookings'
import PaymentHistory from './screens/PaymentHistory'
import SupportHome from './screens/SupportHome'
import SideBar from './screens/SideBar'

const Drawer= createDrawerNavigator()




const DrawerNavigator = ({navigation}) => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      {/* <Drawer.Screen name="Home">
        {props => <Home {...props} drawerNavigation={navigation} />}
      </Drawer.Screen> */}
      <Drawer.Screen name="Home" component={Home} />

      <Drawer.Screen name="Mybookings" component={Mybookings} />
      <Drawer.Screen name="PaymentHistory" component={PaymentHistory} />
      <Drawer.Screen name="SupportHomeme" component={SupportHome} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator