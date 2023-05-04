import React from 'react';
import {TextInput, View, Image, StyleSheet} from 'react-native';
//import DateTimePicker from 'react-native-community/datetimepicker';
import {BackgroundColor, FontSize} from '../../GlobalStyles';

const InputFieldWithoutIcon = ({
  
  placeholder,
  value,
  dateInput,
  OpenModal,
  onDateChange,
  dateValue,
}) => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        borderRadius: 16,
        borderWidth: 1,
        backgroundColor: BackgroundColor.for_input,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#E3E9ED',
      }}>
      <TextInput
        style={{
          marginLeft: 12,
          fontSize: FontSize.for_caption,
          fontFamily: 'ProximaNova-Regular',

          flex: 1,

          lineHeight: 16 * 1.4,
        }}
        multiline={true}
        numberOfLines={4}
        scrollEnabled={true}
        placeholder={placeholder}
        value={value}></TextInput>
    </View>
  );
};

export default InputFieldWithoutIcon;
