import React from 'react';

import {SafeAreaView, Text, View, Button} from 'react-native';

const Login = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      }}>
      <Text style={{fontSize: 25, color: 'white'}}> Login Page</Text>
      <Button onPress={()=> navigation.navigate("OnboardingScreen1")} title={"Go back"}/>
    </SafeAreaView>
  );
};


export default Login