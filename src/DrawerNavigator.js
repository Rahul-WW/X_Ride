import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './screens/Home'
import Mybookings from './screens/Mybookings'
import PaymentHistory from './screens/PaymentHistory'
import SupportHome from './screens/SupportHome'
import About from './screens/About'
import CustomDrawer from './screens/CustomDrawer'
import Profile from './screens/Profile'
const Drawer= createDrawerNavigator()




const DrawerNavigator = ({navigation}) => {

  
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
        gestureEnabled: false,
        drawerStyle: {width: '76.8%'},
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={Home} />

      <Drawer.Screen name="Mybookings" component={Mybookings} />
      <Drawer.Screen name="PaymentHistory" component={PaymentHistory} />
      <Drawer.Screen name="SupportHomeme" component={SupportHome} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator