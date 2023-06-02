import React, {
  useState,
  useContext,
  createContext,
  useRef,
  useEffect,
} from 'react';

import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Button,
  Image,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Alert,
  Animated,
  Keyboard,
} from 'react-native';

import CheckBox from 'react-native-check-box';
import LinearGradient from 'react-native-linear-gradient';
import {FontSize, Color, FontWeight} from '../../GlobalStyles';
import InputField from '../components/InputField';
import InputFieldWithCross from '../components/InputFieldWithCross';
const {width, height} = Dimensions.get('window');
import {NavigationContainer, NavigationContext} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PickupIcon from '../svgImages/PickupIcon.svg';
import DropIcon from '../svgImages/DropIcon.svg';
import ViaRouteIcon from '../svgImages/ViaRouteIcon.svg';
import Name2 from '../svgImages/Name2.svg';
import TimePicker from '../svgImages/TimePicker.svg';
import Cross from '../svgImages/Cross.svg';
import CheckedCB from '../svgImages/CheckedCB.svg';
import UncheckBox from '../svgImages/UncheckBox.svg';
import Via from '../svgImages/Via.svg';
import MenuIcon from '../svgImages/MenuIcon.svg';
import Xlogo from '../svgImages/Xlogo.svg';
import Bell from '../svgImages/Bell.svg';
import DateTimePicker from '@react-native-community/datetimepicker';
import Notification2 from '../svgImages/Notification2.svg';

import {useNavigation} from '@react-navigation/native';

const Home = () => {
  
  const [isChecked, setIsChecked] = useState(false);
  const [isNotication, setIsNotification] = useState(true);
  const [form, setForm] = useState({
    pickup: '',
    drop: '',
    vai: [],
    pickupDate: '',
    pickuptime: '',
    passengersCount: '',
  });
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [pickupDateInput, setPickupdateInput] = useState('');
  const [passengers, setPassengers] = useState(form.passengersCount);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const [pickupdate, setPickupdate] = useState(new Date());
  const [pickupTime, setPickupTime] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const [count, setCount] = useState(0);
  const navigation = useNavigation();

  //this function is for increasing the Via Routes
  const incrementCount = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  // this function is used to decrease the Via Routes
  const handleHideRouteInput = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  //this is for checkbox
  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  //this is for clicking on PickupLocation box to navigate to Location page
  const handleInputPickupLocation = () => {
    Keyboard.dismiss();
    navigation.navigate('Location');
  };
  const handleInputDropLocation = () => {
    Keyboard.dismiss();
    navigation.navigate('Location');
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
    //  setTimePickerVisibility(false);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  //this function is for choosing date
  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDatePickerVisibility(Platform.OS === 'ios');
    setPickupdate(currentDate);

    let DateWhichIsSelected = new Date(currentDate).getTime();
    let TodaysDate = new Date(Date.now()).getTime();

    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    if (DateWhichIsSelected < TodaysDate) {
      Alert.alert('Select a valid Date');
      return;
    }
    setForm({
      ...form,
      pickupDate: `${day < 10 ? '0' + day : day}/${
        month < 10 ? '0' + month : month
      }/${year}`,
    });

    console.log(form);
    console.log(pickupTime);
    setTimePickerVisibility(true);
  };

  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setTimePickerVisibility(Platform.OS === 'ios');
    setTime(currentTime);
    //let timestamp = '2023-05-31T15:25:57.755Z';
    let fdate = new Date(currentTime);
    

    let hour = fdate.getHours();
    let minute = String(fdate.getMinutes()).padStart(2, '0');
    let ampm = hour >= 12 ? 'pm' : 'am';
   
   // hour = hour % 12;
  //  console.log('currentTime', hour);
    hour = hour ? String(hour).padStart(2, '0') : 12; // the hour '0' should be '12'
    let formattedDate = ` ${hour}:${minute} ${ampm}`;
    //console.log('currentTime', formattedDate);
    setForm({
      ...form,
      pickuptime: ` ${formattedDate}`,
    });
  };

  //this is for setting the form with the new changed data
  const handleInputChange = (field, value) => {
    console.log(field);
    setForm({
      ...form,
      [field]: value,
    });
  };

  //this is for selecting the Passengers count and setting it to the Form
  const handleInputChangePassengers = (field, value) => {
    setPassengers(value);
    setForm({
      ...form,
      [field]: value,
    });

    console.log(form);
  };

  //this function is for submitting the form where we have to collect all the input values and need to make a post request.
  const handleSubmit = () => {
    Alert.alert('Form Submitted');

    console.log(form);
    if (isChecked) {
      navigation.navigate('Quotes', {showReturnJourney: isChecked});
    } else {
      navigation.navigate('QuotesForPickupOnly', {
        showReturnJourney: isChecked,
      });
    }
  };

  return (
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      <Animated.View>
        <View style={styles.logoBox}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <View style={styles.menulogo}>
              <MenuIcon width={24} height={24} />
            </View>
          </TouchableOpacity>
          <View style={styles.xlogo}>
            <Xlogo width={84} height={28} />
          </View>
          <View style={styles.belllogo}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Notification')}>
              {isNotication ? (
                <Bell width={24} height={24} />
              ) : (
                <Notification2 width={24} height={24} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
      <ScrollView
        style={{backgroundColor: '#F3F7FA'}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: '#F3F7FA',
          }}>
          <View style={styles.backGround}>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <ImageBackground
                  style={styles.imageOnHome}
                  resizeMode="cover"
                  source={require('../images/imageOnHome.png')}>
                  <Text style={styles.textOnImage}>Book Your Ride!</Text>
                </ImageBackground>
              </View>
          
               
            
              <View style={styles.lowercontainer}>
                <View style={styles.inputDivs}>
                  {/* this is pickup inputbox container */}
                  <View style={styles.inputContainer}>
                    <View style={styles.leftIconContainer}>
                      <PickupIcon width={20} height={24} />
                    </View>

                    <TextInput
                      style={styles.inputBox}
                      multiline={true}
                      numberOfLines={4}
                      scrollEnabled={true}
                      placeholder="Pickup Location"
                      onPressOut={() => navigation.navigate('Location')}
                      value={pickupLocation}
                      showSoftInputOnFocus={false} //this will disable the Keyboard to open
                      onPressIn={handleInputPickupLocation}></TextInput>
                  </View>
                </View>
                {/* upto here pickup inputbox container */}
                <View style={styles.line}></View>

                <View style={styles.viaRouteBox}>
                  <View style={styles.viaSmallbox}>
                    <TouchableOpacity onPress={incrementCount}>
                      <Via width={16} height={16} />
                    </TouchableOpacity>

                    <Text style={styles.viaText}>Via</Text>
                  </View>

                  {Array(count)
                    .fill()
                    .map((_, i) => (
                      <View
                        key={i}
                        style={[
                          styles.inputDivs,
                          styles.inputDiv2,
                          styles.inputDivforLine,
                        ]}>
                        <InputFieldWithCross
                          placeholder="Via Route"
                          Icon={<ViaRouteIcon width={20} height={24} />}
                          Icon2={<Cross width={11} height={11} />}
                          handleHideRouteInput={handleHideRouteInput}
                        />

                        <View style={styles.dashedLine2}></View>
                      </View>
                    ))}
                </View>
                {/* this is Drop inputbox container */}
                <View style={[styles.inputDivs, styles.inputDiv3]}>
                  <View style={styles.inputContainer}>
                    <View style={styles.leftIconContainer}>
                      <DropIcon width={20} height={24} />
                    </View>

                    <TextInput
                      style={styles.inputBox}
                      multiline={true}
                      numberOfLines={4}
                      scrollEnabled={true}
                      placeholder="Drop Location"
                      onPressOut={() => navigation.navigate('Location')}
                      value={dropLocation}
                      showSoftInputOnFocus={false} //this will disable the Keyboard to open
                      onPressIn={handleInputDropLocation}></TextInput>
                  </View>
                </View>
                {/* upto here drop inputbox container */}
                {/* this is Date and Time inputbox container */}
                <View style={[styles.inputDivs, styles.inputDiv4]}>
                  <Pressable onPress={() => setDatePickerVisibility(true)}>
                    <View style={styles.inputContainer}>
                      <View style={styles.leftIconContainer}>
                        <TimePicker width={24} height={24} />
                      </View>

                      <TextInput
                        style={styles.inputBox}
                        multiline={true}
                        numberOfLines={4}
                        scrollEnabled={true}
                        placeholder="Pickup Date and Time"
                        value={form.pickupDate + '' + form.pickuptime}
                        caretHidden={true} //this will hide the Cursor
                        showSoftInputOnFocus={false} //this will disable the Keyboard to open
                        onChangeText={value => handleInputChange('date', value)}
                        keyboardType="numeric"
                        onPressIn={showDatePicker}></TextInput>
                    </View>
                  </Pressable>
                </View>
                <View style={[styles.inputDivs, styles.inputDiv5]}>
                  {/* <InputField
                    placeholder="Passengers"
                    Icon={<Name2 width={20} height={20} />}
                  /> */}
                  <View style={styles.inputContainer}>
                    <View style={styles.leftIconContainer}>
                      <Name2 width={20} height={20} />
                    </View>

                    <TextInput
                      style={styles.inputBox}
                      multiline={true}
                      numberOfLines={4}
                      scrollEnabled={true}
                      placeholder="Passengers"
                      value={form.passengersCount}
                      onChangeText={value =>
                        handleInputChangePassengers('passengersCount', value)
                      }
                      keyboardType="numeric"></TextInput>
                  </View>
                </View>

                <View style={styles.checkBoxDiv}>
                  <CheckBox
                    style={{
                      width: 20,
                      height: 20,
                      borderColor: 'red',
                      marginTop: 2,
                      marginLeft: 2,
                    }}
                    isChecked={isChecked}
                    onClick={handleCheckBox}
                    // onClick={setIsChecked}
                    checkedImage={<CheckedCB width={18} height={18} />}
                    unCheckedImage={<UncheckBox width={19} height={19} />}
                  />
                  <View style={styles.checkboxTextDiv}>
                    <Text style={styles.checkboxText}>Need Return Booking</Text>
                  </View>
                </View>
                {isChecked && (
                  <View style={[styles.inputDivs, styles.inputDiv6]}>
                    <InputField
                      placeholder="Return Date and Time"
                      Icon={<TimePicker width={24} height={24} />}
                    />
                  </View>
                )}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.getQuotesDiv}>
        <Pressable //here I am sending the information of IsReturn journey or not through params but actually we need to use redux to make a global state of IsReturn or not
          onPress={() => {
            if (isChecked) {
              navigation.navigate('Quotes', {showReturnJourney: isChecked});
            } else {
              navigation.navigate('QuotesForPickupOnly', {
                showReturnJourney: isChecked,
              });
            }
          }}>
          <GetQuotesBtn
            Btnwidth={'100%'}
            textInsideBtn="GET QUOTES"
            onSubmit={handleSubmit}
          />
        </Pressable>
      </View>
      <View>
        {isDatePickerVisible && (
          <DateTimePicker
            testID="dateTimePicker"
            value={pickupdate}
            mode="date"
            is24Hour={true}
            display="default"
            positiveButton={{label: 'OK', textColor: 'red'}}
            onChange={onDateChange}
          />
        )}
        {isTimePickerVisible && (
          <DateTimePicker
            value={time}
            mode="time"
            display="default"
            onChange={onTimeChange}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const GetQuotesBtn = ({Btnwidth, textInsideBtn, onSubmit}) => {
  return (
    <Pressable onPress={onSubmit}>
      <View
        style={{
          height: 48,

          width: Btnwidth,
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
                {textInsideBtn}
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  gif: {
    width: 50,
    height: 50,
  },
  inputContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E3E9ED',
  },
  inputBox: {
    marginLeft: 12,
    // fontSize: FontSize.for_caption,
    // fontFamily: 'ProximaNova-Regular',
    fontSize: 16,
    flex: 1,
    borderRadius: 16,
    lineHeight: 16 * 1.4,
    color: '#4F565E',
  },
  leftIconContainer: {
    marginLeft: 20,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backGround: {
    backgroundColor: '#F3F7FA',
    // borderColor: 'red',
    //  borderWidth: 1,
    marginBottom: 80,
  },
  viaText: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 16 * 1.4,
  },
  logoBox: {
    width,
    height: 54,
    backgroundColor: '#292F3B',
    position: 'relative',
  },
  xlogo: {
    position: 'absolute',
    height: 28,
    width: 84,
    left: 60,
    top: 13,
  },
  menulogo: {
    position: 'absolute',
    left: 20,
    top: 15,
    width: 24,
    height: 24,
  },
  belllogo: {
    position: 'absolute',
    top: 15,
    bottom: 15,
    right: 20,
  },
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  lowercontainer: {
    marginTop: 20,

    position: 'relative',
  },
  imageContainer: {
    borderRadius: 16,
    position: 'relative',
  },
  imageOnHome: {
    width: '100%',
    overflow: 'hidden',
    borderRadius: 16,
    height: 154,
    resizeMode: 'contain',
  },
  textOnImage: {
    position: 'absolute',
    left: '4.78%',
    top: '77.87%',
    fontSize: 18,
    color: 'white',
    fontFamily: 'Proxima Nova_regular',
    letterSpacing: 0.32,
    lineHeight: 18 * 1.4,
    fontWeight: 600,
  },
  inputDivs: {
    height: 56,
  },
  viaRouteBox: {
    marginTop: 12,
    position: 'relative',
  },
  viaSmallbox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,

    height: 23,
    alignItems: 'center',
  },
  inputDiv2: {
    marginTop: 12,
  },
  inputDiv3: {
    marginTop: 34,
    zIndex: -1000,
  },
  inputDiv4: {
    marginTop: 20,
  },
  inputDiv5: {
    marginTop: 20,
  },
  inputDiv6: {
    marginBottom: 20,
  },

  line: {
    height: 75,
    width: 0,
    borderColor: 'black',
    borderStyle: 'dashed',
    borderWidth: 1,
    position: 'absolute',
    left: 32,
    top: 43,
    zIndex: 1,
    borderColor: '#4F565E',
  },

  checkBoxDiv: {
    height: 22,
    marginTop: 22,
    width: 186,
    flexDirection: 'row',
    marginBottom: 20,

    alignContent: 'center',
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
  },
  getQuotesDiv: {
    width,
    backgroundColor: 'white',
    height: 72,

    paddingTop: 12,
    paddingHorizontal: 20,

    paddingBottom: 12,
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  inputDivforLine: {
    position: 'relative',
  },
  dashedLine2: {
    position: 'absolute',
    borderWidth: 1,
    left: 32,
    top: 44,
    height: 44,
    borderStyle: 'dashed',
    borderColor: '#4F565E',
    width: 0,
    zIndex: 1000,
  },
});

export default Home;
