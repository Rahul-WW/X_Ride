import React from 'react';

import {
  SafeAreaView,
  Text,
  View,
  Button,
  StyleSheet,
  Dimensions,
  ImageBackground,
  ScrollView
} from 'react-native';
import XBtn from '../components/XBtn';
import XBtnWithoutArrow from '../components/XBtnWithoutArrow';

const {width, height} = Dimensions.get('window');
import {
  FontSize,
  Color,
  FontWeight,
  LetterSpacing,
  LineHeight,
} from '../../GlobalStyles';
import InputField from '../components/InputField';


const SignIn = ({navigation}) => {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView>
        <View>
          <ImageBackground
            source={require('../images/signInPic.png')}
            style={styles.bgImage}>
            <View style={styles.bgText}>
              <Text style={styles.signInText}>Sign In</Text>
              <Text style={styles.captionText}>
                We are happy to see you again! You can continue where you left
                by logging in.
              </Text>
            </View>
          </ImageBackground>

          <View style={styles.belowImgBox}>
            <View style={styles.inputDivs}>
              <InputField
                placeholder="Email id"
                source={require('../images/emailIcon.png')}
              />
            </View>

            <View style={[styles.inputDivs, styles.inputDivs2]}>
              <InputField
                placeholder="Password"
                source={require('../images/passwordIcon.png')}
              />
            </View>

            {/* <View style={styles.forgetTextDiv}>
          <Text>Forget Password</Text>
        </View> */}
            <View style={styles.forgotTextDiv}>
              <Text
                style={styles.forgotText}
                onPress={() => navigation.navigate('ForgotPassword')}>
                Forgot password?
              </Text>
            </View>

            <View>
             
              <XBtnWithoutArrow
                Btnwidth={'100%'}
                textInsideBtn="SIGN IN"
                goTo="Home"
              />
            </View>

            <View style={styles.newUser}>
              <Text style={styles.newUserText}>
                New User?
                <Text
                  style={styles.newUserRegisterText}
                  onPress={() => navigation.navigate('SignUp')}>
                  {' '}
                  Register
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F3F7FA',
    height,
  },
  bgImage: {
    width,
    height: 428,
    resizeMode: 'cover',
  },

  bgText: {
    marginHorizontal: 20,
    marginTop: 324,
    height: 84,
  },
  signInText: {
    fontSize: FontSize.for_title,
    fontWeight: FontWeight.for_title,
    color: 'white',
    letterSpacing: LetterSpacing.letterSpacing,
    fontFamily: 'ProximaNova-Regular',
    lineHeight: 20 * 1.4,
  },
  captionText: {
    marginTop: 12,
    fontSize: FontSize.for_caption,
    fontWeight: FontWeight.for_caption,
    color: 'white',
    letterSpacing: LetterSpacing.letterSpacing,
    lineHeight: LineHeight.lineHeight,
    fontFamily: 'ProximaNova-Regular',
  },
  belowImgBox: {
    marginHorizontal: 20,
    marginTop: 40,
    
    height: 272,
  },
  inputDivs: {
    height: 56,
  },
  inputDivs2: {
    marginTop: 20,
  },
  forgotTextDiv: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 16,

    height: 22,
  },
  forgotText: {
    marginLeft: 'auto',
    fontSize: FontSize.for_caption,
    color: Color.for_caption,
    fontWeight: FontWeight.for_caption,
    fontFamily: 'ProximaNova-Regular',
    letterSpacing: 0.32,

    lineHeight: 16 * 1.4,
  },
  newUser: {
    height: 22,

    marginHorizontal: 'auto',
    marginTop: 12,
  },
  newUserText: {
    textAlign: 'center',
    fontSize: FontSize.for_caption,
    color: Color.for_caption,
    fontWeight: FontWeight.for_caption,
    fontFamily: 'ProximaNova-Regular',
    letterSpacing: 0.32,

    lineHeight: 16 * 1.4,
  },
  newUserRegisterText: {
    color: '#00C96D',
    fontSize: FontSize.for_caption,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
  },
});

export default SignIn;
