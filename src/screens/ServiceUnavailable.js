import {View, Text, ScrollView, SafeAreaView, Animated} from 'react-native';
import React from 'react';
import BadScreenComponent from '../components/BadScreenComponent';

import ServiceUnavailableImage from '../svgImages/ServiceUnavailableImage.svg';

import GoBackBtn from '../components/GoBackBtn';

const ServiceUnavailable = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <Animated.View style={{marginHorizontal: 20}}>
        <GoBackBtn />
      </Animated.View>
      <ScrollView>
        <BadScreenComponent
          svgImage={<ServiceUnavailableImage />}
          text1={'Uh Oh!'}
          text2={
            'Sorry we haven’t got this location on our plate yet. You can try a different location.'
          }
        />
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default ServiceUnavailable;
