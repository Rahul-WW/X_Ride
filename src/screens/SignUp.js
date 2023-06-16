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
  ScrollView,
  Animated,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
const {width, height} = Dimensions.get('window');
import CheckBox from 'react-native-check-box';
import LinearGradient from 'react-native-linear-gradient';
import {FontSize, Color, FontWeight} from '../../GlobalStyles';
import InputField from '../components/InputField';
import DateTimePicker from '@react-native-community/datetimepicker';
import XBtn from '../components/XBtn';
import CheckedBox from '../svgImages/CheckedBox.svg';
import Name2 from '../svgImages/Name2.svg';
import TimePicker from '../svgImages/TimePicker.svg';
import EmailIcon from '../svgImages/EmailIcon.svg';
import MobileIcon from '../svgImages/MobileIcon.svg';
import PasswordIcon from '../svgImages/PasswordIcon.svg';
import Xlogo2 from '../svgImages/Xlogo2.svg';
import GradientText from '../components/GradientText';


const SignUp = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [form, setForm] = useState({
    name: '',
    dob: '',
    email: '',
    mobile: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    dob: '',
    email: '',
    mobile: '',
    password: '',
  });
  const [activeField, setActiveField] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDatePickerVisibility(Platform.OS === 'ios');
    setDate(currentDate);

    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();

    setForm({
      ...form,
      dob: `${day < 10 ? '0' + day : day}/${
        month < 10 ? '0' + month : month
      }/${year}`,
    });
  };

  const handleInputChange = (field, value) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const dobRegex =
      /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{10}$/;
    const errorMessages = {
      name: 'Name should be  only  alphabets',
      dob: 'Format must be dd/mm/yyyy eg 12/05/2023',
      email: 'Please provide a valid email',
      mobile: 'Mobile number must be 10 digits',
      password: 'Password field cannot be empty',
    };
    if (field === 'name' && !nameRegex.test(value)) {
      setErrors(errors => ({...errors, name: errorMessages.name}));
    } else if (field === 'dob' && !dobRegex.test(value)) {
      setErrors(errors => ({...errors, dob: errorMessages.dob}));
    } else if (field === 'email' && !emailRegex.test(value)) {
      setErrors(errors => ({...errors, email: errorMessages.email}));
    } else if (field === 'mobile' && !mobileRegex.test(value)) {
      setErrors(errors => ({...errors, mobile: errorMessages.mobile}));
    } else if (field === 'password' && value === '') {
      setErrors(errors => ({...errors, password: errorMessages.password}));
    } else {
      setErrors(errors => ({...errors, [field]: ''}));
    }

    console.log(errors);
    setForm({
      ...form,
      [field]: value,
    });
  };

  const handleSubmit = () => {
     const nameRegex = /^[A-Za-z\s]+$/;
     const dobRegex =
       /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     const mobileRegex = /^\d{10}$/;

     if (!nameRegex.test(form.name)) {
       setErrors(errors => ({
         ...errors,
         name: 'Name cannot be empty',
       }));
       return;
     }

     if (!dobRegex.test(form.dob)) {
      setErrors(errors => ({...errors, dob: "Please select DOB"}));
       return;
     }

     if (!emailRegex.test(form.email)) {
      setErrors(errors => ({...errors, email: 'Please provide a valid Email Id'}));
       return;
     }

     if (!mobileRegex.test(form.mobile)) {
        setErrors(errors => ({
          ...errors,
          mobile: 'Please provide a valid Mobile number',
        }));
       return;
     }

     if (form.password === '') {
      
        setErrors(errors => ({...errors, password: "Please enter valid password"}));
       
       return;
     }
    // instead of making Alert down there, make an API call to register
    // Alert.alert(
    //   'Form Submitted',
    //   'Your form has been submitted successfully!',
    //   [
    //     {
    //       text: 'OK',
    //       onPress: () => navigation.navigate('EnterOTP'),
    //     },
    //   ],
    //   {cancelable: false},
    // );

  
      navigation.navigate('EnterOTP');
    
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Animated.View>
        <View style={styles.logoBox}>
          <View style={styles.logo}>
            <Xlogo2 />
          </View>
        </View>
      </Animated.View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container1}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 10} // Adjust the offset here
      >
        
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <View style={styles.container}>
                <View style={styles.registerBox}>
                  <View style={styles.registerTextBox}>
                    <Text style={styles.registerText}>Register</Text>
                  </View>
                  <View style={styles.signcaptionTextBox}>
                    <Text style={styles.signUpcaptionText}>
                      Get moving with just a tap! Sign up now for hassle-free
                      cab bookings.
                    </Text>
                  </View>
                </View>

                {/* first input Box ie Name */}
                <View style={styles.inputDivs}>
                  <View
                    style={[
                      styles.inputBox,
                      {
                        borderColor:
                          activeField === 'dob' && errors.name
                            ? 'red'
                            : '#E3E9ED',
                      },
                    ]}>
                    <View style={styles.iconBox}>
                      <Name2 width={20} height={20} />
                    </View>
                    <TextInput
                      style={styles.textInput}
                      multiline={true}
                      numberOfLines={4}
                      scrollEnabled={true}
                      placeholder="Name"
                      value={form.name}
                      onChangeText={value => handleInputChange('name', value)}
                      onFocus={() => setActiveField('name')}
                    />
                  </View>
                  {errors.name !== '' && (
                    <Text style={styles.errorText}>{errors.name}</Text>
                  )}
                </View>

                {/* second Input field ie Date of birth */}
                <View style={[styles.inputDivs2]}>
                  <View
                    style={[
                      styles.inputBox,
                      {
                        borderColor:
                          activeField === 'email' && errors.dob
                            ? 'red'
                            : '#E3E9ED',
                      },
                    ]}>
                    <View style={styles.iconBox}>
                      <TimePicker
                        width={24}
                        height={24}
                        onPress={showDatePicker}
                      />
                    </View>
                    <TextInput
                      style={styles.textInput}
                      multiline={true}
                      numberOfLines={4}
                      scrollEnabled={true}
                      placeholder="Date of Birth"
                      keyboardType="numeric"
                      value={form.dob}
                      onPressOut={showDatePicker}
                      onChangeText={value => handleInputChange('dob', value)}
                      onFocus={() => setActiveField('dob')}
                    />
                  </View>
                  {errors.dob !== '' && (
                    <Text style={styles.errorText}>{errors.dob}</Text>
                  )}
                </View>
                {/* third Input field ie Email ID */}
                <View style={styles.inputDivs2}>
                  <View
                    style={[
                      styles.inputBox,
                      {
                        borderColor:
                          activeField === 'mobile' && errors.email
                            ? 'red'
                            : '#E3E9ED',
                      },
                    ]}>
                    <View style={styles.iconBox}>
                      <EmailIcon width={24} height={18} />
                    </View>
                    <TextInput
                      style={styles.textInput}
                      multiline={true}
                      numberOfLines={4}
                      scrollEnabled={true}
                      placeholder="Email id"
                      value={form.email}
                      onChangeText={value => handleInputChange('email', value)}
                      onFocus={() => setActiveField('email')}
                    />
                  </View>
                  {errors.email !== '' && (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  )}
                </View>

                {/* third Input field ie Mobile number */}
                <View style={styles.inputDivs2}>
                  <View
                    style={[
                      styles.inputBox,
                      {
                        borderColor:
                          activeField === 'password' && errors.mobile
                            ? 'red'
                            : '#E3E9ED',
                      },
                    ]}>
                    <View style={styles.iconBox}>
                      <MobileIcon width={16} height={24} />
                    </View>
                    <TextInput
                      style={styles.textInput}
                      multiline={true}
                      numberOfLines={4}
                      scrollEnabled={true}
                      placeholder="Mobile No"
                      value={form.mobile}
                      onChangeText={value => handleInputChange('mobile', value)}
                      onFocus={() => setActiveField('mobile')}
                      keyboardType="numeric"
                      // editable={form.mobile.length < 13}
                      maxLength={10}
                    />
                  </View>
                  {errors.mobile !== '' && (
                    <Text style={styles.errorText}>{errors.mobile}</Text>
                  )}
                </View>
                {/* third Input field ie Password */}
                <View style={styles.inputDivs2}>
                  <View
                    style={[
                      styles.inputBox,
                      {borderColor: errors.password ? 'red' : '#E3E9ED'},
                    ]}>
                    <View style={styles.iconBox}>
                      <PasswordIcon width={24} height={14} />
                    </View>
                    <TextInput
                      secureTextEntry
                      style={styles.textInput}
                      placeholder="Password"
                      value={form.password}
                      onChangeText={value =>
                        handleInputChange('password', value)
                      }
                      onFocus={() => setActiveField('password')}
                    />
                  </View>
                  {errors.password !== '' && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}
                </View>

                <View style={styles.checkBoxDiv}>
                  <CheckBox
                    style={{position: 'absolute'}}
                    isChecked={isChecked}
                    onClick={() => setIsChecked(!isChecked)}
                    checkedImage={
                      // <Image source={require('../images/checkedCheckBox.png')} />
                      <CheckedBox />
                    }
                  />
                  <View style={styles.checkboxTextDiv}>
                    <Text style={styles.checkboxText}>
                      By clicking here, I state that I have read and understood
                      the terms and conditions.
                    </Text>
                  </View>
                </View>

                <View style={styles.registerBtnDiv}>
                  <View>
                    <SubmitBtn
                      onSubmit={handleSubmit}
                      disability={!isChecked}
                    />
                  </View>

                  <View style={styles.haveAnAccountBox}>
                    <Text style={styles.haveAnAccountText}>
                      Have an account?
                      <Text
                        style={styles.signInText}
                        onPress={() => navigation.navigate('SignIn')}>
                        {` Sign In`}
                      </Text>
                    </Text>
                  </View>
                </View>

                {/* this is date picker */}
                <View>
                  {isDatePickerVisible && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      mode="date"
                      is24Hour={true}
                      display="default"
                      positiveButton={{label: 'OK'}}
                      onChange={onDateChange}
                    />
                  )}
                </View>
                {/* date picker upto here */}
              </View>
            </View>
          </ScrollView>
        
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const SubmitBtn = ({onSubmit, disability}) => {
  return (
    <View>
      <Pressable onPress={onSubmit} disabled={disability}>
        <View
          style={{
            height: 48,
            borderRadius: 16,
            width: '100%',
          }}>
          <LinearGradient
            locations={[0, 1]}
            colors={['#00c96d', '#048ad7']}
            useAngle={true}
            angle={90}
            style={{borderRadius: 16}}>
            <View
              style={{
                flexDirection: 'row',
                textAlign: 'center',
                justifyContent: 'center',
                gap: 8,
                borderRadius: 16,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  height: 48,
                }}>
                <Text
                  style={{
                    color: 'white',
                    alignItems: 'center',
                    textAlign: 'center',
                    fontSize: 16,
                    fontWeight: 600,
                    fontFamily: 'ProximaNovaSemibold',
                    letterSpacing: 0.32,
                    
                  }}>
                  REGISTER
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  lineHeight: 16,
                  alignItems: 'center',
                  marginVertical: 10,
                }}>
                <Image
                  resizeMode="cover"
                  source={require('../images/leftforwardArrow.png')}
                />
                <Image
                  resizeMode="cover"
                  source={require('../images/forwardArrow.png')}
                />
              </View>
            </View>
          </LinearGradient>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    fontSize: 12,
    color: 'red',
    fontWeight: 400,
    fontFamily: 'ProximaNova',
    marginLeft: 10,
  },
  inputBox: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E3E9ED',
  },
  iconBox: {
    marginLeft: 20,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    marginLeft: 12,
    fontSize: 16,
    fontFamily: 'ProximaNova',
    flex: 1,
    borderRadius: 16,
    lineHeight: 16 * 1.4,
    color: '#4F565E',
  },
  mainContainer: {
    backgroundColor: '#F3F7FA',
    flex: 1,
  },
  container: {
    marginHorizontal: 20,
  },
  container1: {
    flex: 1,
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
    height: 28,
  },
  registerText: {
    fontSize: 20,
    fontWeight: 600,
    color: '#292F3B',
    fontFamily: 'ProximaNovaSemibold',
    letterSpacing: 0.32,
    lineHeight: 20 * 1.4,
    fontStyle: 'normal',
  },
  signcaptionTextBox: {
    top: 12,
    height: 44,
  },
  signUpcaptionText: {
    fontFamily: 'ProximaNova',
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
  inputDivs2: {
    marginTop: 20,
    height: 56,
  },

  checkBoxDiv: {
    height: 44,
    marginTop: 16,

    flexDirection: 'row',

    position: 'relative',
  },
  checkboxText: {
    fontFamily: 'ProximaNova',
    fontSize: FontSize.for_caption,
    fontWeight: FontWeight.for_caption,
    color: Color.for_caption,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
  },
  checkboxTextDiv: {
    height: 44,
    marginLeft: 28,
  },
  registerBtnDiv: {
    marginTop: 24,

    height: 82,
    marginBottom: 40,
  },
  signInText: {
    color: '#00C96D',
    fontSize: FontSize.for_caption,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
    fontFamily: 'ProximaNova',
  },
  haveAnAccountText: {
    fontSize: FontSize.for_caption,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
    fontFamily: 'ProximaNova',
  },
  haveAnAccountBox: {
    marginTop: 12,
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: 'ProximaNova',
  },
});

export default SignUp;
