import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const CustomCheckBox = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={{
          height: 16,
          width: 16,

          borderWidth: 1,
          borderColor: '#4F565E',
          backgroundColor: isSelected ? 'blue' : 'transparent',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4,
          marginTop: 8,
        }}
        onPress={() => setSelection(!isSelected)}></TouchableOpacity>
    </View>
  );
};

export default CustomCheckBox;
