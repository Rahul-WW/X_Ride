import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import BackWhite from "../svgImages/BackWhite.svg"

const GoBackWhiteBtn = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View >
       
      <BackWhite  />
      </View>
    </TouchableOpacity>
  );
};

export default GoBackWhiteBtn;
