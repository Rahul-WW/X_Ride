import React from 'react';
import {TouchableOpacity,Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';


const GoBackBtn = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handlePress} style={{marginTop:16}}>
      <Image
        
        resizeMode="cover"
        source={require('../images/backArrow.png')}
      />
    </TouchableOpacity>
  );
};

export default GoBackBtn