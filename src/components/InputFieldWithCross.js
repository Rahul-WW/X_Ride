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
  Icon,
  Icon2,
  handleGoToLocation
  
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
          fontFamily: 'ProximaNova',

          flex: 1,

          lineHeight: 16 * 1.4,
        }}
        multiline={true}
        numberOfLines={4}
        scrollEnabled={true}
        placeholder={placeholder}
        value={value}
        caretHidden={true}
        showSoftInputOnFocus={false}
        editable={editablity}
        onPressOut={handleGoToLocation}
        ></TextInput>
      <TouchableOpacity
        onPress={handleHideRouteInput}
        style={{
          width: 20,
          height: 20,
          marginRight: 20,
        }}>
        <View
          style={{
            width: 20,
            height: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {Icon2}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputFieldWithCross;
