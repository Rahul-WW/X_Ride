import {View, Text, ScrollView, SafeAreaView, Animated} from 'react-native';
import React from 'react';
import BadScreenComponent from '../components/BadScreenComponent';
import NoInternetImage from '../svgImages/NoInternetImage.svg';
import UnderMaintainanceImage from "../svgImages/UnderMaintainanceImage.svg"
import GoBackBtn from '../components/GoBackBtn';
const UnderMaintainance = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <Animated.View style={{marginHorizontal: 20}}>
        <GoBackBtn />
      </Animated.View>
      <ScrollView>
        <BadScreenComponent
          svgImage={<UnderMaintainanceImage />}
          text1={'We’ll be back!'}
          text2={
            "We're currently undergoing maintenance to enhance your experience. Check back soon! "
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default UnderMaintainance;
