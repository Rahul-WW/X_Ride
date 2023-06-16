


import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  StyleSheet,
  Dimensions,
  ImageBackground,
  ScrollView,
  TextInput,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import XBtn from '../components/XBtn';
import XBtnWithoutArrow from '../components/XBtnWithoutArrow';
import EmailIcon from '../svgImages/EmailIcon.svg';
import MobileIcon from '../svgImages/MobileIcon.svg';
import PasswordIcon from '../svgImages/PasswordIcon.svg';
import LinearGradient from 'react-native-linear-gradient';
import {
  FontSize,
  Color,
  FontWeight,
  LetterSpacing,
  LineHeight,
} from '../../GlobalStyles';
import InputField from '../components/InputField';

const {width, height} = Dimensions.get('window');

const SignIn = ({navigation}) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [activeField, setActiveField] = useState(null);

  const handleInputChange = (field, value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (field === 'email' && !emailRegex.test(value)) {
      setErrors(errors => ({...errors, email: 'Enter a valid email Id'}));
    } else if (field === 'password' && value === '') {
      setErrors(errors => ({...errors, password: 'Enter a password'}));
    } else {
      setErrors(errors => ({...errors, email: ''}));
       setErrors(errors => ({...errors, password: ''}));
    }

    setForm({
      ...form,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
        setErrors(errors => ({...errors, email: 'Enter a valid email Id'}));
        console.log("yes")
      return;
    }
    if (form.password === '') {
       setErrors(errors => ({...errors, password: 'Password cannot be Empty'}));
      return;
    }
    navigation.navigate('DrawerNavigator');
  };

  const handleScreenPress = () => {
    Keyboard.dismiss();
  };

  console.log(errors)

  return (
    <SafeAreaView style={styles.background}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 10}>
        <TouchableWithoutFeedback onPress={handleScreenPress}>
          <ScrollView>
            <View>
              <ImageBackground
                source={require('../images/signInPic.png')}
                style={styles.bgImage}>
                <View style={styles.bgText}>
                  <Text style={styles.signInText}>Sign In</Text>
                  <Text style={styles.captionText}>
                    We are happy to see you again! You can continue where you
                    left by logging in.
                  </Text>
                </View>
              </ImageBackground>

              <View style={styles.belowImgBox}>
                <View style={styles.inputDivs}>
                  <View
                    style={[
                      styles.inputBox,
                      {
                        borderColor:
                          activeField === 'password' && errors.email
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

                <KeyboardAvoidingView
                  behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                  <View style={[styles.inputDivs, styles.inputDivs2]}>
                    <View
                      style={[
                        styles.inputBox,
                        // {borderColor: errors.password ? 'red' : '#E3E9ED'},
                        {
                          borderColor:
                            activeField === 'password' && errors.email
                              ? '#E3E9ED'
                              : '#E3E9ED',
                        },
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
                </KeyboardAvoidingView>

                <View style={styles.forgotTextDiv}>
                  <Text
                    style={styles.forgotText}
                    onPress={() => navigation.navigate('ForgotPassword')}>
                    Forgot password?
                  </Text>
                </View>

                <View>
                  <SubmitSignInBtn onSubmit={handleSubmit} />
                </View>

                <View style={styles.newUser}>
                  <Text style={styles.newUserText}>
                    New User?
                    <Text
                      style={styles.newUserRegisterText}
                      onPress={() => navigation.navigate('SignUp')}>
                      Register
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const SubmitSignInBtn = ({onSubmit}) => {
  return (
    <Pressable onPress={onSubmit}>
      <View style={styles.submitButton}>
        <LinearGradient
          locations={[0, 1]}
          colors={['#00c96d', '#048ad7']}
          useAngle={true}
          angle={90}
          style={styles.submitButtonGradient}>
          <Text style={styles.submitButtonText}>SIGN IN</Text>
        </LinearGradient>
      </View>
    </Pressable>
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
  background: {
    backgroundColor: '#F3F7FA',
    height: '100%',
  },
  container: {
    flex: 1,
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
    borderColor:"red"
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
    borderRadius: 16,
    lineHeight: 16 * 1.4,
    color: '#4F565E',
   
    width: "80%"
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
    fontWeight: 600,
    color: 'white',
    letterSpacing: LetterSpacing.letterSpacing,
    fontFamily: 'ProximaNovaSemibold',
    lineHeight: 20 * 1.4,
  },
  captionText: {
    marginTop: 12,
    fontSize: FontSize.for_caption,
    fontWeight: FontWeight.for_caption,
    color: 'white',
    letterSpacing: LetterSpacing.letterSpacing,
    lineHeight: LineHeight.lineHeight,
    fontFamily: 'ProximaNova',
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
    fontFamily: 'ProximaNova',
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
    fontFamily: 'ProximaNova',
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
  },
  newUserRegisterText: {
    color: '#00C96D',
    fontSize: FontSize.for_caption,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
    fontFamily: 'ProximaNova',
  },
  submitButton: {
    height: 48,
    width: '100%',
  },
  submitButtonGradient: {
    flex: 1,
    borderRadius: 16,
    justifyContent: 'center',
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 600,
    fontFamily: 'ProximaNovaSemibold',
    letterSpacing: 0.32,
  },
});

export default SignIn;