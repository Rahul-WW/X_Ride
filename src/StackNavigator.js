import {View, Text} from 'react-native';
import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';

import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

import EnterOTP from './screens/EnterOTP';
import Home from './screens/Home';
import ForgotPassword from './screens/ForgotPassword';
import CreatNewPass from './screens/CreatNewPass';
import Quotes from './screens/Quotes';
import Location from './screens/Location';
import Location2 from './screens/Location';
import DrawerNavigator from './DrawerNavigator';
import OnboardingScreen1 from './screens/OnboardingScreen1';
import OnboardingScreen2 from './screens/OnboardingScreen2';
import OnboardingScreen3 from './screens/OnboardingScreen3';
import Mybookings from './screens/Mybookings';
import Profile from './screens/Profile';
import QuotesForPickupOnly from './screens/QuotesForPickupOnly';
import TripDetails from './screens/TripDetails';
import AddDetails from './screens/AddDetails';
import DrawerButton from './components/DrawerButton';
import Payment from './screens/Payment';
import About from './screens/About';
import RefundPolicy from './screens/RefundPolicy';
import PrivacyPolicy from './screens/PrivacyPolicy';
import Filter from './screens/Filter';
import UpcomingTrip from './screens/UpcomingTrip';
import Notification from './screens/Notification';
import {Animated} from 'react-native';


const Stack = createStackNavigator();



const forSlide = ({current, next, inverted, layouts: {screen}}) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
      : 0,
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                screen.width, // Focused, but offscreen in the beginning
                0, // Fully focused
                screen.width * -0.3, // Fully unfocused
              ],
              extrapolateRight: 'clamp',
            }),
            inverted,
          ),
        },
      ],
    },
  };
};

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="DrawerNavigator"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}>
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          ...TransitionPresets.SlideFromRightIOS, // This transition preset includes the transitionSpec and cardStyleInterpolator to slide the screen in from the right
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          ...TransitionPresets.SlideFromRightIOS, // This transition preset includes the transitionSpec and cardStyleInterpolator to slide the screen in from the right
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          ...TransitionPresets.SlideFromRightIOS, // This transition preset includes the transitionSpec and cardStyleInterpolator to slide the screen in from the right
        }}
      />
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnboardingScreen1"
        component={OnboardingScreen1}
        options={{
          ...TransitionPresets.SlideFromRightIOS, // This transition preset includes the transitionSpec and cardStyleInterpolator to slide the screen in from the right
        }}
      />
      <Stack.Screen
        name="OnboardingScreen2"
        component={OnboardingScreen2}
        options={{
          ...TransitionPresets.SlideFromRightIOS, // This transition preset includes the transitionSpec and cardStyleInterpolator to slide the screen in from the right
        }}
      />
      <Stack.Screen
        name="OnboardingScreen3"
        component={OnboardingScreen3}
        // options={{
        //   cardStyleInterpolator: forSlide, // Use the custom animation we defined earlier
        // }}
        options={{
          ...TransitionPresets.SlideFromRightIOS, // This transition preset includes the transitionSpec and cardStyleInterpolator to slide the screen in from the right
        }}
      />
      <Stack.Screen
        name="EnterOTP"
        component={EnterOTP}
        options={{
          ...TransitionPresets.SlideFromRightIOS, // This transition preset includes the transitionSpec and cardStyleInterpolator to slide the screen in from the right
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          ...TransitionPresets.SlideFromRightIOS, // This transition preset includes the transitionSpec and cardStyleInterpolator to slide the screen in from the right
        }}
      />
      <Stack.Screen
        name="CreatNewPass"
        component={CreatNewPass}
        options={{
          ...TransitionPresets.SlideFromRightIOS, // This transition preset includes the transitionSpec and cardStyleInterpolator to slide the screen in from the right
        }}
      />
      <Stack.Screen
        name="Quotes"
        component={Quotes}
        options={{
          ...TransitionPresets.SlideFromRightIOS, // This transition preset includes the transitionSpec and cardStyleInterpolator to slide the screen in from the right
        }}
      />
      <Stack.Screen
        name="Location"
        component={Location}
        options={{
          ...TransitionPresets.SlideFromRightIOS, // This transition preset includes the transitionSpec and cardStyleInterpolator to slide the screen in from the right
        }}
      />

      <Stack.Screen
        name="Location2"
        component={Location2}
        options={{
          ...TransitionPresets.SlideFromRightIOS, // This transition preset includes the transitionSpec and cardStyleInterpolator to slide the screen in from the right
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          ...TransitionPresets.SlideFromRightIOS, // This transition preset includes the transitionSpec and cardStyleInterpolator to slide the screen in from the right
        }}
      />
      {/* <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          ...TransitionPresets.SlideFromRightIOS, // This transition preset includes the transitionSpec and cardStyleInterpolator to slide the screen in from the right
        }}
      /> */}
      <Stack.Screen
        name="QuotesForPickupOnly"
        component={QuotesForPickupOnly}
        options={{
          ...TransitionPresets.SlideFromRightIOS, // This transition preset includes the transitionSpec and cardStyleInterpolator to slide the screen in from the right
        }}
      />
      <Stack.Screen
        name="TripDetails"
        component={TripDetails}
        options={{
          ...TransitionPresets.SlideFromRightIOS, // This transition preset includes the transitionSpec and cardStyleInterpolator to slide the screen in from the right
        }}
      />
      <Stack.Screen
        name="AddDetails"
        component={AddDetails}
        options={{
          ...TransitionPresets.SlideFromRightIOS, // This transition preset includes the transitionSpec and cardStyleInterpolator to slide the screen in from the right
        }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{
          ...TransitionPresets.SlideFromRightIOS, // This transition preset includes the transitionSpec and cardStyleInterpolator to slide the screen in from the right
        }}
      />
      {/* <Stack.Screen
        name="About"
        component={About}
        options={{
          ...TransitionPresets.SlideFromRightIOS, // This transition preset includes the transitionSpec and cardStyleInterpolator to slide the screen in from the right
        }}
      /> */}
      <Stack.Screen
        name="RefundPolicy"
        component={RefundPolicy}
        options={{
          ...TransitionPresets.SlideFromRightIOS, // This transition preset includes the transitionSpec and cardStyleInterpolator to slide the screen in from the right
        }}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{
          ...TransitionPresets.SlideFromRightIOS, // This transition preset includes the transitionSpec and cardStyleInterpolator to slide the screen in from the right
        }}
      />
      <Stack.Screen
        name="Filter"
        component={Filter}
        options={{
          cardStyleInterpolator: forSlide, // Use the custom animation we defined earlier
        }}
      />

      {/* Add any other screens that are not navigated through the drawer */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
