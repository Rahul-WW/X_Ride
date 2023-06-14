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
  Modal,
  KeyboardAvoidingView,
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
import DrawerCross from '../svgImages/DrawerCross.svg';
import Exclemation from '../svgImages/Exclemation.svg';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isNotication, setIsNotification] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [form, setForm] = useState({
    pickup: '',
    drop: '',
    vai: [],
    pickupDate: '',
    pickuptime: '',
    passengersCount: '',
    returnDate:"",
    returnTime:""
  });

  const [errors, setErrors] = useState({
    pickupDateTime: '',
    passengerCount: '',
    returnDateTime:""
  });
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  
  
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [isDatePickerVisibleForReturn, setDatePickerVisibilityForReturn] =
    useState(false);
  const [isTimePickerVisibleForReturn, setTimePickerVisibilityForReturn] =
    useState(false);

  const [pickupdate, setPickupdate] = useState(new Date());
  const [pickupTime, setPickupTime] = useState(new Date());

  const [returndate, setReturndate] = useState(new Date());
  const [returnTime, setReturnTime] = useState(new Date());
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
  const showDatePicker2 = () => {
    setDatePickerVisibilityForReturn(true);
    //  setTimePickerVisibility(false);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const handleGoToLocation = () => {
    navigation.navigate('Location');
  };

  //this function is for choosing date
  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDatePickerVisibility(Platform.OS === 'ios');
    setPickupdate(currentDate);

    let DateWhichIsSelected = new Date(currentDate).getTime();
    let TodaysDate = new Date(Date.now()).getTime();
    //let dateAfter365days = new Date(new Date.getTime());

    console.log(TodaysDate - DateWhichIsSelected, 'today');

    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    if (DateWhichIsSelected < TodaysDate) {
      setErrors(errors => ({
        ...errors,
        pickupDateTime: 'Enter valid Upcoming date and time',
      }));
      return;
    }
    if (DateWhichIsSelected > TodaysDate + 31536000000) {
      setModalVisible2(true);
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
    setErrors(errors => ({...errors, pickupDateTime: ''}));
    setTimePickerVisibility(true);
  };
 const onDateChange2 = (event, selectedDate) => {
   const currentDate = selectedDate || date;
   setDatePickerVisibilityForReturn(Platform.OS === 'ios');
   setReturndate(currentDate);

   let DateWhichIsSelected = new Date(currentDate).getTime();
   let TodaysDate = new Date(Date.now()).getTime();
   //let dateAfter365days = new Date(new Date.getTime());

   console.log(TodaysDate - DateWhichIsSelected, 'today');

   let day = currentDate.getDate();
   let month = currentDate.getMonth() + 1;
   let year = currentDate.getFullYear();
   if (DateWhichIsSelected < TodaysDate) {
     setErrors(errors => ({
       ...errors,
       returnDateTime: 'Enter valid Upcoming return date and time',
     }));
     return;
   }
   if (DateWhichIsSelected > TodaysDate + 31536000000) {
     setModalVisible2(true);
     return;
   }
   setForm({
     ...form,
     returnDate: `${day < 10 ? '0' + day : day}/${
       month < 10 ? '0' + month : month
     }/${year}`,
   });

   
   setErrors(errors => ({...errors, returnDateTime: ''}));
   setTimePickerVisibilityForReturn(true);
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

   const onTimeChange2 = (event, selectedTime) => {
     const currentTime = selectedTime || time;
     setTimePickerVisibilityForReturn(Platform.OS === 'ios');
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
       returnTime: ` ${formattedDate}`,
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

  const handleInputChange2 = (field, value) => {
    console.log(field);
    setForm({
      ...form,
      [field]: value,
    });
  };

  //this is for selecting the Passengers count and setting it to the Form
  const handleInputChangePassengers = (field, value) => {
    console.log('pass', value, field);
    if (value > 15) {
      setErrors(errors => ({
        ...errors,
        passengerCount: 'Passengers should be less than or equal  15',
      }));
    }else{
      setErrors(errors => ({
        ...errors,
        passengerCount: '',
      }));
    }

    setForm({
      ...form,
      [field]: value,
    });
    console.log(form);
  };
console.log(errors)
  //this function is for submitting the form where we have to collect all the input values and need to make a post request.
  const handleSubmit = () => {
    Alert.alert('Form Submitted');

    console.log(form);
    if (isChecked === true) {
      console.log('Bothonly', isChecked);
      navigation.navigate('Quotes', {showReturnJourney: isChecked});
    } else {
      console.log('only', isChecked);
      navigation.navigate('QuotesForPickupOnly', {
        showReturnJourney: isChecked,
      });
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        position: 'relative',
        backgroundColor: '#F3F7FA',
      }}>
      <Animated.View>
        <View style={styles.logoBox}>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}>
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
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container1}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 10} // Adjust the offset here
      >
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
                            value={form.vai[i]}
                            handleGoToLocation={handleGoToLocation}
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
                          onChangeText={value =>
                            handleInputChange('date', value)
                          }
                          keyboardType="numeric"
                          onPressIn={showDatePicker}></TextInput>
                      </View>
                    </Pressable>
                    {errors.pickupDateTime !== '' && (
                      <Text style={styles.errorText}>
                        {errors.pickupDateTime}
                      </Text>
                    )}
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
                    {errors.passengerCount !== '' && (
                      <Text style={styles.errorText}>
                        {errors.passengerCount}
                      </Text>
                    )}
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
                      <Text style={styles.checkboxText}>
                        Need Return Booking
                      </Text>
                    </View>
                  </View>
                  {isChecked && (
                    <View style={[styles.inputDivs, styles.inputDiv6]}>
                      <Pressable
                        onPress={() => setDatePickerVisibilityForReturn(true)}>
                        <View style={styles.inputContainer}>
                          <View style={styles.leftIconContainer}>
                            <TimePicker width={24} height={24} />
                          </View>

                          <TextInput
                            style={styles.inputBox}
                            multiline={true}
                            numberOfLines={4}
                            scrollEnabled={true}
                            placeholder="Return Date and Time"
                            value={form.returnDate + '' + form.returnTime}
                            caretHidden={true} //this will hide the Cursor
                            showSoftInputOnFocus={false} //this will disable the Keyboard to open
                            onChangeText={value =>
                              handleInputChange2('date', value)
                            }
                            keyboardType="numeric"
                            onPressIn={showDatePicker2}></TextInput>
                        </View>
                      </Pressable>
                      {errors.returnDateTime !== '' && (
                        <Text style={styles.errorText}>
                          {errors.returnDateTime}
                        </Text>
                      )}
                    </View>
                  )}
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* pop up for invalid date choosen */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            setModalVisible2(!modalVisible2);
          }}>
          <TouchableOpacity style={styles.centeredView2} activeOpacity={1}>
            <View style={styles.modalView}>
              <View
                style={styles.headerBox} // header of the popup
              >
                <View style={styles.headerContent}>
                  <View style={{width: 200, height: 28}}>
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontSize: 18,
                        fontWeight: 500,
                        letterSpacing: 0.32,
                        lineHeight: 18 * 1.4,
                      }}>
                      Schedule
                    </Text>
                  </View>
                  <View style={{height: 24, width: 24}}>
                    <TouchableOpacity
                      onPress={() => setModalVisible2(!modalVisible2)}>
                      <DrawerCross />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View //main container of popup with width 100%
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  flex: 1,
                }}>
                <View
                  style={styles.popupContainer} // container with marginHorizontal 20
                >
                  <View
                    style={{
                      height: 32,
                      flexDirection: 'row',
                      gap: 8,
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}>
                    <Exclemation />
                    <Text
                      style={{fontWeight: 600, fontSize: 20, color: '#292F3B'}}>
                      Note
                    </Text>
                  </View>

                  <View style={{marginTop: 16, height: 132}}>
                    <Text style={styles.popupText1}>
                      Please note that for cab reservations, the advance booking
                      window is limited to a maximum of 365 days.
                    </Text>
                    <Text style={styles.popupText2}>
                      Reservations beyond this timeframe cannot be accommodated
                      at the moment.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>

      {/* lower button box */}
      <View style={styles.getQuotesDiv}>
        <GetQuotesBtn
          Btnwidth={'100%'}
          textInsideBtn="GET QUOTES"
          onSubmit={handleSubmit}
        />
      </View>

      {/* date and time picker popups */}
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
        {isDatePickerVisibleForReturn && (
          <DateTimePicker
            testID="dateTimePicker"
            value={returndate}
            mode="date"
            is24Hour={true}
            display="default"
            positiveButton={{label: 'OK', textColor: 'red'}}
            onChange={onDateChange2}
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
        {isTimePickerVisibleForReturn && (
          <DateTimePicker
            value={time}
            mode="time"
            display="default"
            onChange={onTimeChange2}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const GetQuotesBtn = ({Btnwidth, textInsideBtn, onSubmit}) => {
  return (
    <TouchableOpacity onPress={onSubmit}>
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
                  fontFamily: 'ProximaNova',
                  letterSpacing: 0.32,
                  lineHeight: 18,
                }}>
                {textInsideBtn}
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </TouchableOpacity>
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
    fontFamily: 'ProximaNova',
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
    fontFamily: 'ProximaNova',
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
    // left: 20,
    // top: 10,
    width: 54,
    height:54,
    
    borderColor: 'white',
    paddingTop: 15,
    paddingLeft: 20
    
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
  container1: {
    backgroundColor: '#F3F7FA',
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
    fontFamily: 'ProximaNova',
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
    marginBottom: 60,
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
    fontFamily: 'ProximaNova',
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
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  centeredView2: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  modalView: {
    width: Dimensions.get('window').width,
    backgroundColor: '#F3F7FA',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    elevation: 5,
    height: 301,
  },
  headerBox: {
    height: 54,
    backgroundColor: '#292F3B',
    width: '100%',

    paddingVertical: 13,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  headerContent: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  popupContainer: {
    marginTop: 24,
    marginHorizontal: 20,
  },
  popupText1: {
    color: '#4F565E',
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
    marginBottom: 20,
    fontFamily: 'ProximaNova',
  },
  popupText2: {
    color: '#4F565E',
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
    fontFamily: 'ProximaNova',
  },
});

export default Home;
