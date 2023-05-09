import React from 'react';
import {
  TextInput,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Alert,
  TouchableOpacity,
} from 'react-native';
//import DateTimePicker from 'react-native-community/datetimepicker';
import {BackgroundColor, FontSize} from '../../GlobalStyles';
const {width, height} = Dimensions.get('window');

const InputFieldWithCross = ({
  source,
  placeholder,
  value,
  dateInput,
  OpenModal,
  onDateChange,
  dateValue,
  source2,
  handleHideRouteInput,
  editablity,
  
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
      <Image style={{marginLeft: 20}} source={source} />

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
        value={value}
        editable={editablity}></TextInput>
      <TouchableOpacity
        onPress={handleHideRouteInput}
        style={{
          width: 20,
          height: 20,
          marginRight: 20,
        }}>
        <Image source={source2} />
      </TouchableOpacity>
    </View>
  );
};

export default InputFieldWithCross;
