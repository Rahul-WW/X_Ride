import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TextInput,
  Button
} from 'react-native';
import GoBackBtn from '../components/GoBackBtn';

import {
  FontSize,
  FontWeight,
  Color,
  FontFamily,
  LetterSpacing,
  LineHeight,
} from '../../GlobalStyles';

const {width, height} = Dimensions.get('window');
import InputField from '../components/InputField';
import XBtn from '../components/XBtn';


const ForgotPassword = ({navigation}) => {
  return (
    <SafeAreaView style={styles.backGround}>
      <View style={styles.container}>
        <View>
          <GoBackBtn />
        </View>
        <View style={styles.forgotPasswordBox}>
          <Text style={styles.forgotPasswordTextTitle}>Forgot Password</Text>
          <Text style={styles.forgotPasswordTextCaption}>
            Enter the email address that you wish to receive the password reset
            instructions.
          </Text>
        </View>
        <View style={styles.inputDivs}>
          <InputField
            placeholder="Email id"
            source={require('../images/emailIcon.png')}
          />
        </View>
        <View>
          <XBtn Btnwidth={'100%'} textInsideBtn="REQUEST RESET LINK" goTo="CreatNewPass" />
        </View>
      </View>
{/* 
      <Button onPress={() => navigation.navigate('SignUp')} title={'Go back'} /> */}
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  backGround: {
    backgroundColor: '#F3F7FA',
    height,
  },
  container: {
    marginHorizontal: 20,

  },
  forgotPasswordBox: {
    marginTop: 58,
    height: 84,
   
    marginBottom: 32,
  },
  forgotPasswordTextTitle: {
    fontSize: FontSize.for_title,
    color: Color.for_title,
    fontFamily: FontFamily.fontFamily,
    fontWeight: FontWeight.for_title,

    letterSpacing: LetterSpacing.letterSpacing,
    lineHeight: LineHeight.lineHeight,
  },
  forgotPasswordTextCaption: {
    marginTop: 12,
    fontFamily: 'ProximaNova-Regular',
    fontSize: FontSize.for_caption,
    fontWeight: FontWeight.for_caption,
    color: Color.for_caption,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
  },
  
  inputDivs: {
    height: 56,
    marginBottom:20
  },
});

export default ForgotPassword;
