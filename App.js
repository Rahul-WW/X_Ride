import React from 'react';
import {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
 BackHandler,
  View, Alert
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import NetInfo from '@react-native-community/netinfo';
import {NavigationContainer} from '@react-navigation/native';
import BugTracking from '@ruttl/bug-tracking';

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


  //  useEffect(() => {
  //    const backAction = () => {
  //      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
  //        {
  //          text: 'Cancel',
  //          onPress: () => null,
  //          style: 'cancel',
  //        },
  //        {text: 'YES', onPress: () => BackHandler.exitApp()},
  //      ]);
  //      return true; // This will prevent the event from bubbling up and the default back button functionality from happening.
  //    };

  //    const backHandler = BackHandler.addEventListener(
  //      'hardwareBackPress',
  //      backAction,
  //    );

  //    return () => backHandler.remove(); // Don't forget to remove the listener when the component is unmounted.
  //  }, []);

  return (
    <NavigationContainer>
      {/* <BugTracking
        projectID="z96WXSe5gZldiInebqKp"
        token="MrJEAODnvQaebscVuCanG4pAmNX2"
      /> */}
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
