import React, {useState} from 'react';

import {
  SafeAreaView,
  Text,
  View,
  Button,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
 
} from 'react-native';
const {width, height} = Dimensions.get('window');
import CheckBox from "react-native-check-box"


import {FontSize, Color, FontWeight} from '../../GlobalStyles';
import InputField from '../components/InputField';





const SignUp = ({navigation}) => {
    const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView style={{backgroundColor: '#F3F7FA'}}>
      <Image
        style={{width: '100%'}}
        source={require('../images/XRideIcon.png')}
      />
      <View style={styles.container}>
        <View style={styles.registerBox}>
          <View style={styles.registerTextBox}>
            <Text style={styles.registerText}>Register</Text>
          </View>
          <View style={styles.signcaptionTextBox}>
            <Text style={styles.signUpcaptionText}>
              Get moving with just a tap! Sign up now for hassle-free cab
              bookings.
            </Text>
          </View>
        </View>

        <View style={styles.inputDivs}>
          <InputField
            placeholder="Name"
            source={require('../images/nameInputIcon.png')}
          />
        </View>
        <View style={styles.inputDivs}>
          <InputField
            placeholder="Date of Birth"
            source={require('../images/dobInputIcon.png')}
          />
        </View>
        <View style={styles.inputDivs}>
          <InputField
            placeholder="Email id"
            source={require('../images/emailIcon.png')}
          />
        </View>
        <View style={styles.inputDivs}>
          <InputField
            placeholder="Mobile No"
            source={require('../images/mobileIcon.png')}
          />
        </View>
        <View style={styles.inputDivs}>
          <InputField
            placeholder="Password"
            source={require('../images/passwordIcon.png')}
          />
        </View>

        <View style={styles.checkBoxDiv}>
          <CheckBox
          style={{padding: 0}}
            isChecked={isChecked}
            onClick={() => setIsChecked(!isChecked)}
            checkedImage={
              <Image
                source={require('../images/checkedCheckBox.png')}
              
              />
            }
          />
          <View style={styles.checkboxTextDiv}>
            <Text style={styles.checkboxText}>
              By clicking here, I state that I have read and understood the
              terms and conditions.
            </Text>
          </View>
        </View>

        <View style={styles.registerBtnDiv}>
          <Pressable>
            <Image
              style={{width: '100%'}}
              source={require('../images/registerBtn.png')}
            />
          </Pressable>

          <View style={styles.haveAnAccountBox}>
            <Text style={styles.haveAnAccountText}>
              Have an account?
              <Text
                style={styles.signInText}
                onPress={() => navigation.navigate('Login')}>
                {' '}
                Sign In
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  wrapperLayout: {
    height: 24,
    width: 24,
    marginTop: 16,
  },
  registerBox: {
    marginTop: 30,
    height: 84,
  },
  registerTextBox: {
    width: 77,
    height: 28,
  },
  registerText: {
    fontSize: FontSize.for_title,
    fontWeight: FontWeight.for_title,
    color: '#292F3B',
    fontFamily: 'ProximaNova-Regular',
    letterSpacing: 0.32,

    lineHeight: 16 * 1.4,
  },
  signcaptionTextBox: {
    top: 12,
    height: 44,
  },
  signUpcaptionText: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: FontSize.for_caption,
    fontWeight: FontWeight.for_caption,
    color: Color.for_caption,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
  },

  inputDivs: {
    marginTop: 32,
    height: 56,
  },

  checkBoxDiv: {
    height: 44,
    marginTop: 16,
    borderWidth: 1,
    flexDirection: 'row',
  },
  checkboxText: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: FontSize.for_caption,
    fontWeight: FontWeight.for_caption,
    color: Color.for_caption,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
  },
  checkboxTextDiv: {
    marginLeft: 8,
    borderWidth: 1,
  },
  registerBtnDiv: {
    marginTop: 24,

    height: 82,
  },
  signInText: {
    color: '#00C96D',
    fontSize: FontSize.for_caption,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
  },
  haveAnAccountText: {
    fontSize: FontSize.for_caption,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
    fontFamily: 'ProximaNova-Regular',
  },
  haveAnAccountBox: {
    marginTop: 12,
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: 'ProximaNova-Regular',
  },
});

export default SignUp;
