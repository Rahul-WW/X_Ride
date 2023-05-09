import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

import EnterOTP from './screens/EnterOTP';
import Home from './screens/Home';
import ForgotPassword from './screens/ForgotPassword';
import CreatNewPass from './screens/CreatNewPass';
import Quotes from './screens/Quotes';
import Location from './screens/Location';
import DrawerNavigator from './DrawerNavigator';
import OnboardingScreen1 from './screens/OnboardingScreen1';
import OnboardingScreen2 from './screens/OnboardingScreen2';
import OnboardingScreen3 from './screens/OnboardingScreen3';
import Mybookings from './screens/Mybookings';
import Profile from './screens/Profile';
import DrawerButton from './components/DrawerButton';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="OnboardingScreen1"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="OnboardingScreen1" component={OnboardingScreen1} />
      <Stack.Screen name="OnboardingScreen2" component={OnboardingScreen2} />
      <Stack.Screen name="OnboardingScreen3" component={OnboardingScreen3} />
      <Stack.Screen name="EnterOTP" component={EnterOTP} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="CreatNewPass" component={CreatNewPass} />
      <Stack.Screen name="Quotes" component={Quotes} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="Mybookings" component={Mybookings} />
      <Stack.Screen name="Profile" component={Profile} />
      {/* Add any other screens that are not navigated through the drawer */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
