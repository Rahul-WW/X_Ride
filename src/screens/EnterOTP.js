import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Dimensions, TextInput} from 'react-native';
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

const EnterOTP = () => {
  return (
    <SafeAreaView style={styles.backGround}>
      <View style={styles.container}>
        <View>
          <GoBackBtn />
        </View>
        <View style={styles.VerifyEmailBox}>
          <Text style={styles.VerifyEmailTextTitle}>Verify Email</Text>
          <Text style={styles.VerifyEmailTextCaption}>
            Enter the 4 digit code that you received on your e-mail id.{' '}
          </Text>
        </View>

        <View style={styles.OtpBox}>
          <View style={styles.FourBoxCombine}>
            <SingleBoxOtp />
            <SingleBoxOtp />
            <SingleBoxOtp />
            <SingleBoxOtp />
          </View>

          <Text style={styles.timer}>0:38</Text>
          <Text style={styles.didntRecieveText}>
            Didn’t receive the e-mail? 
            <Text style={styles.resendText}> Resend Now</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const SingleBoxOtp = () => {
  return (
    <View
      style={{
        width: 56,
        height: 56,
        borderRadius: 16,
        borderColor: '#E3E9ED',
        borderWidth: 1,
        backgroundColor:"white",
        
      }}>

        <TextInput style={{marginLeft:15, fontSize:20,}}/>
      </View>
  );
};

const styles = StyleSheet.create({
  backGround: {
    backgroundColor: '#F3F7FA',
    height
  },
  container: {
    
    marginHorizontal: 20,
  },
  VerifyEmailBox: {
  

    marginTop: 58,
    height: 84,
  },
  VerifyEmailTextTitle: {
    fontSize: FontSize.for_title,
    color: Color.for_title,
    fontFamily: FontFamily.fontFamily,
    fontWeight: FontWeight.for_title,
    textAlign: 'center',
    letterSpacing: LetterSpacing.letterSpacing,
    lineHeight: LineHeight.lineHeight,
  },
  VerifyEmailTextCaption: {
    textAlign: 'center',
    marginTop: 12,
    fontFamily: 'ProximaNova-Regular',
    fontSize: FontSize.for_caption,
    fontWeight: FontWeight.for_caption,
    color: Color.for_caption,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
  },
  OtpBox: {
    
    marginHorizontal: 20,
    marginTop: 24,
    height: 270,
  },
  FourBoxCombine: {
    height: 56,
    flexDirection: 'row',
    
    
    justifyContent:"space-around",
    
  },
  timer: {
    marginTop: 162,
    color: '#292F3B',
    fontFamily: 'ProximaNova-Regular',
    fontSize: FontSize.for_caption,
    fontWeight: FontWeight.for_caption,
    textAlign: 'center',
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
  },
  didntRecieveText: {
    marginTop: 8,
   textAlign:"center",
    fontSize: FontSize.for_caption,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
  },
  resendText: {
    color: '#00C96D',
    fontSize: FontSize.for_caption,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
  },
});

export default EnterOTP;
