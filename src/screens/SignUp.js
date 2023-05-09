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
  Alert,
  Platform,
  ScrollView
} from 'react-native';
const {width, height} = Dimensions.get('window');
import CheckBox from 'react-native-check-box';

import {FontSize, Color, FontWeight} from '../../GlobalStyles';
import InputField from '../components/InputField';
import DateTimePicker from '@react-native-community/datetimepicker';
import XBtn from '../components/XBtn';
import CheckedBox from "../svgImages/CheckedBox.svg"
const SignUp = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(!show);
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    setText(fDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <ScrollView>
      <SafeAreaView style={{backgroundColor: '#F3F7FA'}}>
        <View>
          <View style={styles.logoBox}>
            <Image
              source={require('../images/xLogo.png')}
              style={styles.logo}
            />
          </View>
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
              <Pressable onPress={() => showMode('date')}>
                <InputField
                  placeholder="Date of Birth"
                  source={require('../images/dobInputIcon.png')}
                  value={text}
                />
              </Pressable>
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
                style={{position:"absolute" }}
                isChecked={isChecked}
                onClick={() => setIsChecked(!isChecked)}
                checkedImage={
                  // <Image source={require('../images/checkedCheckBox.png')} />
                  <CheckedBox/>
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
                <XBtn
                  disability={!isChecked}
                  Btnwidth={'100%'}
                  textInsideBtn="REGISTER"
                  goTo={'EnterOTP'}
                />
              </Pressable>

              <View style={styles.haveAnAccountBox}>
                <Text style={styles.haveAnAccountText}>
                  Have an account?
                  <Text
                    style={styles.signInText}
                    onPress={() => navigation.navigate('SignIn')}>
                    {' '}
                    Sign In
                  </Text>
                </Text>
              </View>
            </View>

            {/* this is date picker */}
            <View>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
            </View>
            {/* date picker upto here */}
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },

  logoBox: {
    width,
    height: 68,
    backgroundColor: '#292F3B',
    position: 'relative',
  },
  logo: {
    position: 'absolute',
    left: width / 2 - 54 - 0.5,
    top: 16,
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

    lineHeight: 20 * 1.4,
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
    
    flexDirection: 'row',
   
    position:"relative"
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
    height:44,
    marginLeft: 28,
    
   
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
