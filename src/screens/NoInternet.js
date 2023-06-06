import { View, Text, ScrollView, SafeAreaView, Animated } from 'react-native'
import React from 'react'
import BadScreenComponent from '../components/BadScreenComponent'
import NoInternetImage from "../svgImages/NoInternetImage.svg"

const NoInternet = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <ScrollView>
        <BadScreenComponent
          svgImage={<NoInternetImage />}
          text1={'Oh No!'}
          text2={
            'It looks like you don’t have an internet connection. Kindly check and try again. '
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default NoInternet