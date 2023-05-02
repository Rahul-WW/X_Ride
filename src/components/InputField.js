import React from 'react';
import { TextInput, View, Image, StyleSheet } from 'react-native';
//import DateTimePicker from 'react-native-community/datetimepicker';
import { BackgroundColor, FontSize } from '../../GlobalStyles';





const InputField=( {source, placeholder, value, dateInput, onDateChange, dateValue})=>{
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
        <Image style={{marginLeft: 20}} source={source} />

        <TextInput
          style={{marginLeft: 12, fontSize: FontSize.for_caption}}
          placeholder={placeholder}></TextInput>
      </View>
    );
}



export default InputField