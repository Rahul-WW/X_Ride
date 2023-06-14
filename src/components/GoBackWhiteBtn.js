import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import BackWhite from '../svgImages/BackWhite.svg';

const GoBackWhiteBtn = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handlePress} style={{ width: 54, height: 54, marginLeft: -20}}>
      <View
        style={{
          height: 24,
          width: 20,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          
          marginLeft: 20, marginTop: 15
        }}>
        <BackWhite />
      </View>
    </TouchableOpacity>
  );
};

export default GoBackWhiteBtn;
