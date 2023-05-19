import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import BackBlack from "../svgImages/BackBlack.svg"

const GoBackBtn = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={{marginTop:16}}>
       
          <BackBlack/>
      
      </View>
    </TouchableOpacity>
  );
};

export default GoBackBtn;
