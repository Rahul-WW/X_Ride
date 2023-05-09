import React, {useState, useContext, createContext} from 'react';

import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Button,
  Image,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Alert,
} from 'react-native';


const {width, height} = Dimensions.get('window');
const DrawerNavigationContext = createContext();
import {NavigationContainer, NavigationContext} from '@react-navigation/native';


function DrawerButton() {
  const drawerNavigation = useContext(DrawerNavigationContext);
  return (
    <Button
      onPress={() => drawerNavigation.toggleDrawer()}
      title="Open drawer"
    />
  );
}

export default DrawerButton
