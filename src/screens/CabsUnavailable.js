import {View, Text, ScrollView, SafeAreaView, Animated} from 'react-native';
import React from 'react';
import BadScreenComponent from '../components/BadScreenComponent';
import CabsUnavailableImage from '../svgImages/CabsUnavailableImage.svg';
import GoBackBtn from '../components/GoBackBtn';

const CabsUnavailable = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <Animated.View style={{marginHorizontal: 20}}>
        <GoBackBtn />
      </Animated.View>
      <ScrollView style={{ marginHorizontal: 20}}>
        <BadScreenComponent
          svgImage={<CabsUnavailableImage />}
          text1={'Cabs Unavailable'}
          text2={
            'Sorry, we are unable to provide any cabs for this location at the moment. Please check back shortly.'
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CabsUnavailable;
