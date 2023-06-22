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
  TouchableWithoutFeedback,
} from 'react-native';

import CheckBox from 'react-native-check-box';
import LinearGradient from 'react-native-linear-gradient';
import {FontSize, Color, FontWeight} from '../../GlobalStyles';
import InputField from '../components/InputField';
import InputFieldWithCross from '../components/InputFieldWithCross';
const {width, height} = Dimensions.get('window');
import {NavigationContainer, NavigationContext} from '@react-navigation/native';

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
import {useSelector} from 'react-redux';
import {ViaLocationReqRemove} from '../Redux/homeform/HomeActions';
import { ToggleIsReturnJourney } from '../Redux/homeform/HomeActions';
import {useDispatch} from 'react-redux';
import { PickupDateTimeReq } from '../Redux/homeform/HomeActions';
import { ReturnDateTimeReq } from '../Redux/homeform/HomeActions';


const Home = () => {
  const isReturnJourney = useSelector(store => store.form.isReturn);
  const [isChecked, setIsChecked] = useState(isReturnJourney);
  const [isNotication, setIsNotification] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);


  const pickupFromStore = useSelector(store => store.form.pickupLocation);
  const dropFromStore = useSelector(store => store.form.dropLocation);
  const viaFromStore = useSelector(store => store.form.viaLocation);
  const pickupdateTimeFromStore=useSelector(store => store.form.pickupDateTime);
 const returndateTimeFromStore= useSelector(store=> store.form.returnDateTime)

  const dispatch = useDispatch();


  let PickupToDistplay = pickupFromStore;
  let dropToDisplay = dropFromStore;
  let viaToDisplay = [];
  if (pickupFromStore.length <= 20) {
    PickupToDistplay = pickupFromStore;
  } else {
    PickupToDistplay = pickupFromStore.substring(0, 28) + '...';
  }
  if (dropFromStore.length <= 20) {
    dropToDisplay = dropFromStore;
  } else {
    dropToDisplay = dropFromStore.substring(0, 28) + '...';
  }

  for (let i = 0; i < viaFromStore.length; i++) {
    if (viaFromStore[i].length <= 20) {
      viaToDisplay[i] = viaFromStore[i];
    } else {
      viaToDisplay[i] = viaFromStore[i].substring(0, 32) + '...';
    }
  }

  const [form, setForm] = useState({
    pickup: useSelector(store => store.form.pickupLocation),
    drop: useSelector(store => store.form.dropLocation),
    vai: useSelector(store => store.form.viaLocation),
    pickupDate: '',
    pickuptime: '',
    passengersCount: '',
    returnDate: '',
    returnTime: '',
  });

  const [errors, setErrors] = useState({
    pickupError: '',
    dropError: '',
    viaErro: '',
    pickupDateTime: '',
    passengerCount: '',
    returnDateTime: '',
  });
  //const [pickupLocation, setPickupLocation] = useState('');
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
    if (pickupFromStore === '') {
      setErrors(errors => ({
        ...errors,
        pickupError: 'Select a Pickup Location first',
      }));
      return;
    }
    if (count < 3) {
      setErrors(errors => ({
        ...errors,
        pickupError: '',
      }));
      setCount(count + 1);
    }
  };

  // this function is used to decrease the Via Routes
  const handleHideRouteInput = index => {
    if (count > 0) {
      setCount(count - 1);
      console.log('index', index);
      dispatch(ViaLocationReqRemove(index));
    }
  };

  //this is for checkbox
  const handleCheckBox = () => {
    
    setIsChecked(!isChecked);
     dispatch(ToggleIsReturnJourney());
      
  };

  //this is for clicking on PickupLocation box to navigate to Location page
  const handleInputPickupLocation = () => {
    Keyboard.dismiss();
        setErrors(errors => ({
          ...errors,
          pickupError: '',
        }));
    navigation.navigate('Location');
  };
  const handleInputDropLocation = () => {
    Keyboard.dismiss();
    navigation.navigate('Location');
  };

  const showDatePicker = () => {
    if(dropFromStore === ""){
      setErrors(errors => ({
        ...errors,
        dropError: 'Select a Drop Location first',
      }));
      return 
    }
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
    

    //console.log(TodaysDate - DateWhichIsSelected, 'today');

    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    if (DateWhichIsSelected + 3600000 < TodaysDate) {
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
//  console.log(form.pickupDate, "pickup")
    // console.log(form);
    // console.log(pickupTime);
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

  
    let timeAfterHalfAnHr = new Date().getTime()+ 1800000  // time after half an hr in miliseconds
    let selectedTimeInMilisecond=new Date(selectedTime).getTime()  //selected time in milisecond



    let fdate = new Date(currentTime);// this is formated date

    // if(selectedTimeInMilisecond < timeAfterHalfAnHr){
    //   setErrors(errors => ({
    //     ...errors,
    //     pickupDateTime: 'Select time more than Half an hour from time of booking',
    //   }));
    //   return;
    // }else{
    //    setErrors(errors => ({
    //      ...errors,
    //      pickupDateTime:
    //        '',
    //    }));
    // }

    // let day = currentDate.getDate();
    // let month = currentDate.getMonth() + 1;
    // let year = currentDate.getFullYear();
   

    let hour = fdate.getHours();
    let minute = String(fdate.getMinutes()).padStart(2, '0');
    let ampm = hour >= 12 ? 'PM' : 'AM';

    // hour = hour % 12;
    //  console.log('currentTime', hour);
    hour = hour ? String(hour).padStart(2, '0') : 12; // the hour '0' should be '12'
    let formattedDate = ` ${hour}:${minute} ${ampm}`; //this is formated Time like 12:00 PM
   // console.log('currentTime', formattedDate);

    dispatch(PickupDateTimeReq(form.pickupDate+` ${formattedDate}`))
    setForm({
      ...form,
      pickuptime: ` ${formattedDate}`,
    });


    // console.log(form.pickupDate+" "+ ` ${formattedDate}`  )
    // dispatch(PickupDateTimeReq(form.pickupDate+` ${formattedDate}` ))
     //dispatch(PickupDateTimeReq(`${formattedDate}`))
    
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
    dispatch(ReturnDateTimeReq(form.returnDate+` ${formattedDate}`))
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
    } else {
      setErrors(errors => ({
        ...errors,
        passengerCount: '',
      }));
    }

    setForm({
      ...form,
      [field]: value,
    });
  };

  //this function is for submitting the form where we have to collect all the input values and need to make a post request.
  const handleSubmit = () => {


   
   if(isChecked=== true && form.returnDate === ""){
        setErrors(errors => ({
          ...errors,
          returnDateTime: 'Select a return date',
        }));
        return 
   }

 

  //  if(form.pickup==="" || form.drop==="" || form.pickupDate==="" || form.passengersCount===""){
  //   console.log(errors)
  //   return
  //  }

  if(errors.pickup ==="" || pickupFromStore===""){
     setErrors(errors => ({
          ...errors,
          pickupError: 'Select a Pickup Location first',
        }));
        return 
  }

   if(errors.dropError !== ""){
      setErrors(errors => ({
          ...errors,
          pickupError: 'Select a Pickup Location first 2',
        }));
        return 
   }

//console.log(form)



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

  useEffect(() => {
    if (pickupFromStore !== '') {
      setErrors(errors => ({
        ...errors,
        pickupError: '',
      }));
      setForm({
      ...form,
      pickup: pickupFromStore,
    })
    }
    if(dropFromStore !== ""){
       setErrors(errors => ({
         ...errors,
         dropError: '',
       }));
       setForm({
      ...form,
    drop: dropFromStore,
    });
    }
  }, [pickupFromStore, dropFromStore]);

  console.log("datetime", pickupdateTimeFromStore)
  return (
    <SafeAreaView
      style={{
        flex: 1,
        position: 'relative',
        backgroundColor: '#F3F7FA',
      }}>
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
                        placeholder={
                          PickupToDistplay
                            ? PickupToDistplay
                            : 'Pickup Location'
                        }
                        onPressOut={
                          () =>
                            navigation.navigate('Location', {from: 'pickup'}) // think about this tomorrow
                        }
                        value={PickupToDistplay}
                        showSoftInputOnFocus={false} //this will disable the Keyboard to open
                        onPressIn={handleInputPickupLocation}></TextInput>
                    </View>
                    {errors.pickupError !== '' && (
                      <Text style={styles.errorText}>{errors.pickupError}</Text>
                    )}
                  </View>
                  {/* upto here pickup inputbox container */}
                  <View style={styles.line}></View>

                  <View style={styles.viaRouteBox}>
                   
                    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                      <View ></View>
                      <TouchableOpacity style={{ flexDirection:"row", gap: 8, alignItems:"center"}} onPress={incrementCount}>
                        <View >
                          <Via width={16} height={16} />
                        </View>

                         <Text style={styles.viaText}>Via</Text>
                      </TouchableOpacity>
                      
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
                          <View
                            style={{
                              width: '100%',
                              height: '100%',
                              borderRadius: 16,
                              borderWidth: 1,
                              backgroundColor: 'white',
                              flexDirection: 'row',
                              alignItems: 'center',
                              borderColor: '#E3E9ED',
                            }}>
                            <View
                              style={{
                                marginLeft: 20,
                                width: 24,
                                height: 24,
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              <ViaRouteIcon width={20} height={24} />
                            </View>
                            <TextInput
                              style={{
                                marginLeft: 12,
                                fontSize: 16,
                                fontFamily: 'ProximaNova',
                                flex: 1,
                                lineHeight: 16 * 1.4,
                              }}
                              multiline={true}
                              numberOfLines={4}
                              scrollEnabled={true}
                              placeholder={
                                viaToDisplay[i] ? viaToDisplay[i] : 'Via Route'
                              }
                              value={form.vai[i]}
                              caretHidden={true}
                              showSoftInputOnFocus={false}
                              onPressOut={() =>
                                navigation.navigate('Location', {
                                  from: `vai${i}`,
                                })
                              }></TextInput>
                            <TouchableOpacity
                              onPress={() => handleHideRouteInput(i)}
                              style={{
                                width: 20,
                                height: 20,
                                marginRight: 20,
                              }}>
                              <View
                                style={{
                                  width: 20,
                                  height: 20,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}>
                                <Cross width={11} height={11} />
                              </View>
                            </TouchableOpacity>
                          </View>

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
                        placeholder={
                          dropToDisplay ? dropToDisplay : 'Drop Location'
                        }
                        onPressOut={() =>
                          navigation.navigate('Location', {from: 'drop'})
                        }
                        value={dropToDisplay}
                        showSoftInputOnFocus={false} //this will disable the Keyboard to open
                        onPressIn={handleInputDropLocation}></TextInput>
                    </View>
                    {errors.dropError !== '' && (
                      <Text style={styles.errorText}>{errors.dropError}</Text>
                    )}
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
    letterSpacing: 0.32,
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
    fontSize: 16,
    flex: 1,
    borderRadius: 16,
    lineHeight: 16 * 1.4,
    letterSpacing: 0.32,
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
    letterSpacing: 0.32
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
    height: 54,

    borderColor: 'white',
    paddingTop: 15,
    paddingLeft: 20,
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
    fontFamily: 'ProximaNovaSemibold',
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
   
   width: 52,
   
    
    
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
