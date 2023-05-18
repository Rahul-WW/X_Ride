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
  TextInput, Pressable, Alert
} from 'react-native';
import XBtn from '../components/XBtn';
import XBtnWithoutArrow from '../components/XBtnWithoutArrow';
import EmailIcon from '../svgImages/EmailIcon.svg';
import MobileIcon from '../svgImages/MobileIcon.svg';
import PasswordIcon from '../svgImages/PasswordIcon.svg';
import LinearGradient from 'react-native-linear-gradient';


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
 const [form, setForm] = useState({
   
   email: '',
   password: '',
 });
 const [errors, setErrors] = useState({
   
   email: false,
   password: false,
 });


 const [activeField, setActiveField] = useState(null);



  const handleInputChange = (field, value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
     if (field === 'email' && !emailRegex.test(value)) {
      setErrors(errors => ({...errors, email: true}));
    }  else if (field === 'password' && value === '') {
      setErrors(errors => ({...errors, password: true}));
    } else {
      setErrors(errors => ({...errors, [field]: false}));
    }

    console.log(errors);
    setForm({
      ...form,
      [field]: value,
    });
  };


  const handleSubmit = () => {  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      Alert.alert('Error', 'Please provide a valid email');
      return;
    }
    if (form.password === '') {
      Alert.alert('Error', 'Password field cannot be empty');
      return;
    }
//Instead of making an Alert down there, make an API call to signIn
    Alert.alert(
      'Form Submitted',
      'Your form has been submitted successfully!',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Home'),
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView>
        <View style={{marginBottom: 40}}>
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
             
            </View>

            <View style={[styles.inputDivs, styles.inputDivs2]}>
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
                  onChangeText={value => handleInputChange('password', value)}
                  onFocus={() => setActiveField('password')}
                />
              </View>
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
              <SubmitSignInBtn onSubmit={handleSubmit} />
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

const SubmitSignInBtn = ({onSubmit}) => {
  return (
    <Pressable onPress={onSubmit} >
      <View
        style={{
          height: 48,

          width:"100%",
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
                marginVertical: 14,
              }}>
              <Text
                style={{
                  color: 'white',
                  alignItems: 'center',
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: 600,
                  fontFamily: 'ProximaNova-Regular',
                  letterSpacing: 0.32,
                  lineHeight: 18,
                }}>
                SIGN IN
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F3F7FA',
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
    fontFamily: 'ProximaNova-Regular',
    flex: 1,
    borderRadius: 16,
    lineHeight: 16 * 1.4,
    color: '#4F565E',
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
    fontFamily: 'Proxima Nova Rg',
    lineHeight: 20 * 1.4,
  },
  captionText: {
    marginTop: 12,
    fontSize: FontSize.for_caption,
    fontWeight: FontWeight.for_caption,
    color: 'white',
    letterSpacing: LetterSpacing.letterSpacing,
    lineHeight: LineHeight.lineHeight,
    fontFamily: 'Proxima Nova Rg',
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
