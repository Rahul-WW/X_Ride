import React from 'react';
import {
  TextInput,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Alert,
  TouchableOpacity,
  Text
} from 'react-native';
//import DateTimePicker from 'react-native-community/datetimepicker';
import { BackgroundColor, FontSize } from '../../GlobalStyles';
const {width, height}= Dimensions.get("window")





const InputField=( {source, placeholder, value, dateInput,OpenModal,Icon, onDateChange, dateValue, source2})=>{
   

  const handleHideViaInput=()=>{
 Alert.alert("yess")
  }
 
 
  
  
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
      <View
        style={{
          marginLeft: 20,
          width: 24,
          height: 24,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {Icon}
      </View>

      <TextInput
        style={{
          marginLeft: 12,
          fontSize: FontSize.for_caption,
          fontFamily: 'ProximaNova-Regular',
          flex: 1,
          borderRadius: 16,
          lineHeight: 16 * 1.4,
          color: '#4F565E',
        }}
        multiline={true}
        numberOfLines={4}
        scrollEnabled={true}
        placeholder={placeholder}
        value={value}></TextInput>
    </View>
  );
}



export default InputField