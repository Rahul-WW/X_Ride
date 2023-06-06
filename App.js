import React from 'react';
import {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
 
  View, Alert
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import NetInfo from '@react-native-community/netinfo';
import {NavigationContainer} from '@react-navigation/native';


import StackNavigator from './src/StackNavigator';

function App() {


  useEffect(() => {
    SplashScreen.hide();
  }, []);


   useEffect(() => {
     const unsubscribe = NetInfo.addEventListener(state => {
       if (!state.isConnected) {
         Alert.alert(
           'No Internet Connection',
           'Please check your internet connection',
           [{text: 'OK', onPress: () => console.log('OK Pressed')}],
         );
       }
     });

     return () => {
       // Cleanup function to unsubscribe to the listener when the component unmounts.
       unsubscribe();
     };
   }, []);

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
