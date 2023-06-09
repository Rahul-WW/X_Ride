import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Pressable,
  Dimensions,
  Animated,
  Modal,
  TextInput,
  BackHandler
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import MaskedView from '@react-native-community/masked-view';

import UpcomingTripComponent from '../components/UpcomingTripComponent';
import LinearGradient from 'react-native-linear-gradient';
import EmailIcon2 from '../svgImages/EmailIcon2.svg';
import ChatIcon from '../svgImages/ChatIcon.svg';
import CallIcon from '../svgImages/CallIcon.svg';
import XBtnWithoutArrow from '../components/XBtnWithoutArrow';
import DrawerCross from '../svgImages/DrawerCross.svg';
import HeaderDrawerScreens from '../components/HeaderDrawerScreens';
import Clock from '../svgImages/Clock.svg';
import FadedClock from '../svgImages/FadedClock.svg';
import GradientText from '../components/GradientText';
import {Linking} from 'react-native';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
const UpcomingTrip = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);
  const [EditTimeValue, setEditTimeValue] = useState('09.15 AM');
 const pickupDateTimeFromStore = useSelector(
   store => store.form.pickupDateTime,
 );
  // const {selectedfromList} = route.params;

  // console.log(selectedfromList);


  //this function is for making a call
  const handleCallBtnPressed = phoneNumber => {
   const phoneUrl = `tel:${phoneNumber}`;
   Linking.openURL(phoneUrl);    
  };



  const handlePressConfirmCancel = () => {
    setModalVisible(false);
    setModalVisible2(true);
  };



  const handlePressGetNewQuotes = () => {
    setModalVisible2(false);
    navigation.navigate('Home');
  };

  const handleEditBtnPress = () => {
    //const pickupTime = new Date(); // this will come from backend
   // pickupTime.setHours(6, 15, 0, 0); // take random time of 7.15 PM

    //console.log('pickupTime', new Date(pickupDateTimeFromStore).getTime());
    let timeTodisplayInInputBox = pickupDateTimeFromStore.split('  ')
    console.log('hii', timeTodisplayInInputBox[1]);
    setEditTimeValue(timeTodisplayInInputBox[1]);


  let pickupTime = 1687537581285;  //this is taken as random
  let DateWhichIsSelected = new Date().getTime();
   let currentTime = new Date().getTime();
   const getValue = async () => {
     try {
       DateWhichIsSelected = await AsyncStorage.getItem('DateWhichIsSelected');
       console.log(DateWhichIsSelected, 'DateWhichIsSelected');
        let timeDifference = DateWhichIsSelected - currentTime;
        console.log(timeDifference);
        if (timeDifference < 21600000) {
          setModalVisible4(true);
        } else {
          setModalVisible3(true);
        }
     } catch (e) {
       // error reading value
     }
   };

   getValue()
    // let dateTimeString = '24/06/2023 15:15 PM';

    // // Split the date and time
    // let [date, time, period] = pickupDateTimeFromStore.split(' ');

    // // Split the date into day, month, and year
    // let [day, month, year] = date.split('/');

    // // Adjust month to zero-indexed (January is 0, December is 11)
    // month = Number(month) - 1;

    // // Convert the 12-hour time to 24-hour time
    // let [hours, minutes] = time.split(':');
    // if (period.toUpperCase() === 'PM' && hours !== '12') {
    //   hours = Number(hours) + 12;
    // } else if (period.toUpperCase() === 'AM' && hours === '12') {
    //   hours = '00';
    // }

    // // Create a new Date object
    // let dateTime = new Date(year, month, day, hours, minutes);

    // // Convert to milliseconds since the Unix epoch
    // let milliseconds = dateTime.getTime();

    // console.log(milliseconds, "mili");

   
    //console.log('now', currentTime);
    // currentTime.setHours(
    //   parseInt(time.split(':')[0]),
    //   parseInt(time.split(':')[1]),
    //   0,
    //   0,
    // );

   
  };

  const handlePressSaveBtn = () => {
    setModalVisible3(false);
   
  };

  const handlePressGotItBtn=()=>{
     setModalVisible4(false);
  }

  
 useEffect(() => {
   const backAction = () => {
     navigation.navigate('Mybookings');
    
     console.log("back")
     return true; // This will prevent the event from bubbling up and the default back button functionality from happening.
   };
   const backHandler = BackHandler.addEventListener(
     'hardwareBackPress',
     backAction,
   )
    return () => backHandler.remove(); // Don't forget to remove the listener when the component is unmounted.
 }, [navigation]);


  return (
    <SafeAreaView
      style={{backgroundColor: '#F3F7FA', flex: 1, position: 'relative'}}>
      <Animated.View>
        {/* <Header headertext={'Upcoming Trip'} /> */}
        <HeaderDrawerScreens
          headertext={'Upcoming Trip'}
          navigation={navigation}
          backto={'Mybookings'}
        />
      </Animated.View>
      <ScrollView
        style={{marginHorizontal: 20}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <UpcomingTripComponent
            // pickupLocation={selectedfromList.pickupLocation}
            // pickupDate={selectedfromList.pickupDate}
            // pickupTime={selectedfromList.pickupTime}
            // dropLocation={selectedfromList.dropLocation}
            // dropTime={selectedfromList.dropTime}
            // dropDate={selectedfromList.dropDate}
            // passengerCount={selectedfromList.passengerCount}
            // price={selectedfromList.price}
            handleEditBtnPress={handleEditBtnPress}
            widthEditBtn={true}
            isInpayment={false}
          />

          <View style={styles.tripDetails}>
            <View style={styles.titleBox}>
              <Text style={styles.titleText}>Trip Details</Text>
              <View style={styles.confirmBox}>
                <Text style={{color: 'white', fontSize: 13, fontWeight: 400}}>
                  Confirmed
                </Text>
              </View>
            </View>
            <View>
              <View // first   ie pic wala
                style={styles.picBox}>
                <LinearGradient
                  locations={[0, 1]}
                  colors={['#F6F6F6', '#FFFFFF']}
                  useAngle={true}
                  angle={180}
                  style={{borderTopLeftRadius: 14, borderTopRightRadius: 14}}>
                  <View style={styles.picContainer}>
                    <Image
                      source={require('../images/Car1.png')}
                      style={{
                        position: 'absolute',
                        top: 30,
                        width: 200,
                        height: 80,
                      }}
                    />
                  </View>

                  <View style={styles.cabNameNumberBox}>
                    <Text style={styles.cabName}>Toyota Etios</Text>
                    <Text style={styles.cabName}>KA 0113</Text>
                  </View>
                </LinearGradient>
              </View>
            </View>
            <View
              style={{
                height: 128,
                marginTop: 16,
                marginHorizontal: 20,
              }}>
              <LinearGradient
                locations={[0, 1]}
                colors={['#F6F6F6', '#FFFFFF']}
                useAngle={true}
                angle={180}
                style={{borderTopLeftRadius: 14, borderTopRightRadius: 14}}>
                <View style={{height: 128, width: '100%'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: 12,
                      marginHorizontal: 12,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 8,
                      }}>
                      <Image
                        source={{
                          uri: 'https://images.unsplash.com/photo-1683033473384-d7d2fa5e4483?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
                        }}
                        style={{height: 40, width: 40, borderRadius: 14}}
                      />
                      <Text style={styles.cabName}>Elian Rasim</Text>
                    </View>
                    <View style={styles.priceBox}>
                      <Text style={styles.priceText}>£ 523</Text>
                    </View>
                  </View>
                  <View style={styles.horizontal}></View>

                  <View style={{marginTop: 16, height: 48}}>
                    <CallBtn
                      textInsideBtn={'CALL DRIVER'}
                      Btnwidth={'100%'}
                      handleCallBtnPressed={handleCallBtnPressed}
                      phoneNumber={'9973764333'}
                    />
                  </View>
                </View>
              </LinearGradient>
            </View>
          </View>

          <View style={styles.passengerDetails}>
            <View style={styles.passengerDetailsTextBox}>
              <Text style={{fontSize: 18, fontWeight: 500, color: '#292F3B'}}>
                Passenger Details
              </Text>
            </View>
            <View style={styles.horizontal2}></View>
            <View style={styles.detailList}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: 22,
                }}>
                <Text style={styles.detailsListText}>Name</Text>
                <Text style={styles.detailsListText2}>Jaslin Jay</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: 22,
                }}>
                <Text style={styles.detailsListText}>Contact No</Text>
                <Text style={styles.detailsListText2}>5455545454</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: 22,
                }}>
                <Text style={styles.detailsListText}>Email</Text>
                <Text style={styles.detailsListText2}>Jaslin@gmail.com</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: 22,
                }}>
                <Text style={styles.detailsListText}>Paid By</Text>
                <Text style={styles.detailsListText2}>Cash</Text>
              </View>
            </View>
          </View>

          <View style={styles.foranyEnquiry}>
            <View style={styles.passengerDetailsTextBox}>
              <Text style={{fontSize: 18, fontWeight: 500, color: '#292F3B'}}>
                For any Enquiry
              </Text>
            </View>
            <View style={styles.horizontal2}></View>
            <View style={styles.detailList}>
              <Pressable
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 12,

                  width: '50%',
                }}
                onPress={() => handleCallBtnPressed(88888888888)}>
                <CallIcon width={20} height={20} />
                <View>
                  <Text style={styles.detailsListText}>Call Us</Text>
                </View>
              </Pressable>
              <Pressable
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 12,
                }}
                onPress={() =>
                  navigation.navigate('ChatSupport', {from: 'UpcomingTrip'})
                }>
                <ChatIcon width={20} height={20} />
                <View>
                  <Text style={styles.detailsListText}>Chat with Us</Text>
                </View>
              </Pressable>
              <Pressable
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 12,
                }}
                onPress={() =>
                  navigation.navigate('Email', {from: 'UpcomingTrip'})
                }>
                <EmailIcon2 width={20} height={20} />
                <View>
                  <Text style={styles.detailsListText}>Email Us</Text>
                </View>
              </Pressable>
            </View>
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPressOut={() => setModalVisible(true)}>
              <GradientText style={styles.CancelRidetext}>
                Cancel Ride
              </GradientText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.footerContainer}>
          <View
            style={{
              paddingLeft: 8,
              flexDirection: 'row',
              alignSelf: 'center',
              gap: 8,
            }}>
            <View style={{alignSelf: 'center'}}>
              <Text
                style={{
                  color: '#555555',
                  fontWeight: 500,
                  fontSize: 18,
                  lineHeight: 18 * 1.4,
                  letterSpacing: 0.32,
                }}>
                Driver On The Way
              </Text>
            </View>
          </View>
          <View style={{width: '50%'}}>
            <XBtnWithoutArrow
              Btnwidth={129}
              textInsideBtn={'TRACK'}
              goTo={'TrackTrip'}
            />
          </View>
        </View>
      </View>
      {/*First model  popup*/}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
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
                      Cancellation Policy
                    </Text>
                  </View>
                  <View style={{height: 24, width: 24}}>
                    <TouchableOpacity
                      onPress={() => setModalVisible(!modalVisible)}>
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
                  <View style={styles.cancellationtimeBox}>
                    <Text style={styles.cancellationText}>
                      Cancellation Time
                    </Text>
                    <Text style={styles.cancellationText}>Refund Amount</Text>
                  </View>
                  <View style={styles.horizontal3}></View>
                  <View style={styles.cancellationTimingAndPriceBox}>
                    <View style={styles.timingAndPriceBox}>
                      <View style={{width: '30%'}}>
                        <Text style={styles.detailsListText}>
                          Befor 6 hours of travel
                        </Text>
                      </View>
                      <View style={styles.cancelPrice}>
                        <Text style={styles.detailsListText}>£ 40</Text>
                      </View>
                    </View>
                    <View style={styles.timingAndPriceBox}>
                      <View style={{width: '35%'}}>
                        <Text style={styles.detailsListText}>
                          Befor 48 hours
                        </Text>
                      </View>
                      <View style={styles.cancelPrice}>
                        <Text style={styles.detailsListText}>£ 80</Text>
                      </View>
                    </View>
                    <View style={styles.timingAndPriceBox2}>
                      <View style={{width: '35%'}}>
                        <Text style={styles.detailsListText}>
                          Befor 5.30 hours of travel
                        </Text>
                      </View>
                      <View style={styles.cancelPrice}>
                        <Text style={styles.detailsListText}>No Refund</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.horizontal3}></View>
                  <View style={styles.note}>
                    <Text style={styles.noteText}>
                      Note: You will get your refund in 5 business days.
                    </Text>
                  </View>
                  <View style={styles.surityBox}>
                    <View
                      style={{
                        borderColor: 'white',
                        height: 44,
                      }}>
                      <Text style={styles.surityText}>
                        Are you sure you want to cancel your ride?
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={styles.resetBox} //bottom part containing buttons
                >
                  <View
                    style={{
                      marginHorizontal: 20,
                      flexDirection: 'row',

                      gap: 16,
                      height: 48,
                    }}>
                    <Pressable style={{width: '37.15%'}}>
                      <LinearGradient
                        colors={['#00c96d', '#048ad7']}
                        useAngle={true}
                        angle={90}
                        style={{borderRadius: 16, padding: 2}}>
                        <TouchableOpacity
                          onPress={() => setModalVisible(!modalVisible)}>
                          <View style={[styles.resetBtn]}>
                            <View>
                              <Text style={styles.resetText}>NO</Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </LinearGradient>
                    </Pressable>
                    <Pressable style={{width: '58.29%'}}>
                      <LinearGradient
                        colors={['#00c96d', '#048ad7']}
                        useAngle={true}
                        angle={90}
                        style={{borderRadius: 16}}>
                        <TouchableOpacity onPress={handlePressConfirmCancel}>
                          <View style={styles.applyFilter}>
                            <Text style={styles.applyText}>Yes, Cancel</Text>
                          </View>
                        </TouchableOpacity>
                      </LinearGradient>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>

      {/*second model  popup*/}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            setModalVisible2(!modalVisible2);
          }}>
          <TouchableOpacity style={styles.centeredView2} activeOpacity={1}>
            <View style={styles.modalView2}>
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
                      Cancelled Successfully
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
                  <View style={{width: '100%', height: 22}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 400,
                        color: '#4F565E',
                        lineHeight: 16 * 1.4,
                        letterSpacing: 0.32,
                      }}>
                      Hey! Your ride has been cancelled{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      height: 44,

                      marginTop: 12,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 400,
                        color: '#4F565E',
                        lineHeight: 16 * 1.4,
                        letterSpacing: 0.32,
                      }}>
                      £ 40 has been deducted for cancelling too late
                    </Text>
                  </View>
                </View>

                <View
                  style={styles.resetBox} //bottom part containing buttons
                >
                  <View
                    style={{
                      marginHorizontal: 20,
                      height: 48,
                    }}>
                    <CallBtn
                      Btnwidth={'100%'}
                      textInsideBtn={'GET NEW QUOTES'}
                      handleCallBtnPressed={handlePressGetNewQuotes}
                    />
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>

      {/* edit pickuptime popup */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible3}
          onRequestClose={() => {
            setModalVisible3(!modalVisible3);
          }}>
          <TouchableOpacity style={styles.centeredView2} activeOpacity={1}>
            <View style={styles.modalView3}>
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
                      Edit Pickup Time
                    </Text>
                  </View>
                  <View style={{height: 24, width: 24}}>
                    <TouchableOpacity
                      onPress={() => setModalVisible3(!modalVisible3)}>
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
                  style={{
                    top: 20,
                    height: 44,
                    marginHorizontal: 20,
                  }}>
                  <Text style={styles.detailsListText}>
                    Note: Only you can edit the pickup time 6 hours before
                    journey
                  </Text>
                </View>
                {/* input box for Edit time */}
                <View style={styles.inputContainer}>
                  <View
                    style={{
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
                      <Clock />
                    </View>

                    <TextInput
                      style={styles.inputStyling}
                      multiline={true}
                      numberOfLines={4}
                      scrollEnabled={true}
                      placeholder={EditTimeValue}
                      onChangeText={setEditTimeValue}
                      value={EditTimeValue}></TextInput>
                  </View>
                </View>

                <View
                  style={styles.resetBox} //bottom part containing buttons
                >
                  <View
                    style={{
                      marginHorizontal: 20,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      gap: 16,
                      height: 48,
                    }}>
                    <Pressable style={{width: 124}}>
                      <LinearGradient
                        colors={['#00c96d', '#048ad7']}
                        useAngle={true}
                        angle={90}
                        style={{borderRadius: 17, padding: 2}}>
                        <TouchableOpacity
                          onPress={() => setModalVisible3(!modalVisible3)}>
                          <View style={[styles.resetBtn]}>
                            <View>
                              <Text style={styles.resetText}>CANCEL</Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </LinearGradient>
                    </Pressable>
                    <Pressable style={{width: 195}}>
                      <LinearGradient
                        colors={['#00c96d', '#048ad7']}
                        useAngle={true}
                        angle={90}
                        style={{borderRadius: 16}}>
                        <TouchableOpacity onPress={handlePressSaveBtn}>
                          <View style={styles.applyFilter}>
                            <Text style={styles.applyText}>SAVE</Text>
                          </View>
                        </TouchableOpacity>
                      </LinearGradient>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>

      {/* edit Timed Out popup */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible4}
          onRequestClose={() => {
            setModalVisible4(!modalVisible4);
          }}>
          <TouchableOpacity style={styles.centeredView2} activeOpacity={1}>
            <View style={styles.modalView3}>
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
                      Edit Pickup Time
                    </Text>
                  </View>
                  <View style={{height: 24, width: 24}}>
                    <TouchableOpacity
                      onPress={() => setModalVisible4(!modalVisible4)}>
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
                  style={{
                    top: 20,
                    height: 44,
                    marginHorizontal: 20,
                  }}>
                  <Text style={styles.detailsListText}>
                    Oops timed out, you can only edit before 6 hours of your
                    journey
                  </Text>
                </View>
                {/* input box for Edit time */}
                <View style={styles.inputContainer}>
                  <View
                    style={{
                      borderRadius: 16,
                      borderWidth: 1,
                      backgroundColor: '#E3E9ED',
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
                      <FadedClock />
                    </View>

                    <TextInput
                      style={styles.inputStyling2}
                      multiline={true}
                      numberOfLines={4}
                      scrollEnabled={true}
                      placeholder={EditTimeValue}
                      value={EditTimeValue}
                      editable={false}></TextInput>
                  </View>
                </View>

                <View
                  style={styles.resetBox} //bottom part containing buttons
                >
                  <View
                    style={{
                      marginHorizontal: 20,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      gap: 16,
                      height: 48,
                    }}>
                    {/* <Pressable style={{width: 124}}>
                      <LinearGradient
                        colors={['#00c96d', '#048ad7']}
                        useAngle={true}
                        angle={90}
                        style={{borderRadius: 17, padding: 2}}>
                        <TouchableOpacity
                          onPress={() => setModalVisible3(!modalVisible3)}>
                          <View style={[styles.resetBtn]}>
                            <View>
                              <Text style={styles.resetText}>CANCEL</Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </LinearGradient>
                    </Pressable> */}
                    <Pressable style={{width: '100%'}}>
                      <LinearGradient
                        colors={['#00c96d', '#048ad7']}
                        useAngle={true}
                        angle={90}
                        style={{borderRadius: 16}}>
                        <TouchableOpacity onPress={handlePressGotItBtn}>
                          <View style={styles.applyFilter}>
                            <Text style={styles.applyText}>GOT IT</Text>
                          </View>
                        </TouchableOpacity>
                      </LinearGradient>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const CallBtn = ({textInsideBtn, Btnwidth, handleCallBtnPressed, phoneNumber}) => {
  return (
    <Pressable onPress={() => handleCallBtnPressed(phoneNumber)}>
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
    </Pressable>
  );
};



const styles = StyleSheet.create({
  inputStyling: {
    marginLeft: 12,
    fontSize: 16,
    fontFamily: 'ProximaNova-Regular',
    flex: 1,
    borderRadius: 16,
    lineHeight: 16 * 1.4,
    color: '#4F565E',
  },
  inputStyling2: {
    marginLeft: 12,
    fontSize: 16,
    fontFamily: 'ProximaNova-Regular',
    flex: 1,
    borderRadius: 16,
    lineHeight: 16 * 1.4,
    color: '#C1CCD3',
  },

  inputContainer: {
    height: 56,
    position: 'absolute',
    top: 80,
    right: 20,
    left: 20,
  },
  resetBox: {
    width: '100%',
    backgroundColor: 'white',
    height: 72,
    paddingTop: 12,
    position: 'absolute',
    bottom: 0,
  },
  resetBtn: {
    borderRadius: 15,
    backgroundColor: 'white',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetText: {
    fontSize: 16,
    fontWeight: 600,
    color: '#4F565E',
    letterSpacing: 0.32,
  },
  applyFilter: {
    width: '100%',
    height: '100%',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyText: {
    fontSize: 16,
    fontWeight: 600,
    color: '#FFFFFF',
    letterSpacing: 0.32,
  },
  surityBox: {
    height: 76,
    backgroundColor: '#292F3B',
    width: '100%',
    borderRadius: 16,
    padding: 16,
  },
  noteText: {
    fontSize: 16,
    fontWeight: 400,
    color: '#292F3B',
    lineHeight: 16 * 1.4,
    letterSpacing: 0.32,
    // fontFamily: 'ProximaNova-Regular',
  },
  surityText: {
    fontSize: 16,
    fontWeight: 400,
    color: '#FFFFFF',
    lineHeight: 16 * 1.4,
    letterSpacing: 0.32,
    // fontFamily: "Proxima_Nova_Font"
    // fontFamily: 'ProximaNova Bold',
  },

  note: {
    height: 44,
    marginBottom: 20,
  },
  cancellationTimingAndPriceBox: {
    width: '100%',
  },
  timingAndPriceBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  timingAndPriceBox2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelPrice: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  popupContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  cancellationtimeBox: {
    width: '100%',
    height: 23,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancellationText: {
    fontSize: 16,
    fontWeight: 400,
    color: '#048AD7',
    lineHeight: 16 * 1.4,
    letterSpacing: 0.32,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 72,
    backgroundColor: 'white',
  },
  footerContainer: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 12,
    justifyContent: 'space-between',
  },
  maskedView: {
    flexDirection: 'row',
    textAlign: 'center',
  },
  CancelRidetext: {
    fontSize: 18,
    fontWeight: 600,
    fontWeight: 'bold',
    lineHeight: 18 * 1.4,
    letterSpacing: 0.32,
  },
  transparentText: {
    opacity: 0,
  },
  container: {
    marginTop: 20,

    width: '100%',
    marginBottom: 209,
  },
  tripDetails: {
    borderColor: '#E3E9ED',
    height: 385,

    borderRadius: 20,

    backgroundColor: 'white',
  },
  titleBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,

    marginTop: 20,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 500,
    color: '#292F3B',
    letterSpacing: 0.32,
    lineHeight: 18 * 1.4,
  },
  confirmBox: {
    backgroundColor: '#00C96D',
    paddingHorizontal: 8,
    height: 21,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
  },
  picBox: {
    marginHorizontal: 20,
    marginTop: 16,
    position: 'relative',

    height: 159,
  },
  picContainer: {
    height: 129,
    alignItems: 'center',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  priceCabDetails: {
    borderColor: '#E3E9ED',
    borderBottomWidth: 2,

    marginHorizontal: 20,
    height: 68,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cabTypeText: {
    color: '#292F3B',
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 18 * 1.4,
    marginBottom: 4,
  },
  carName: {
    color: '#4F565E',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 16 * 1.4,
  },
  priceBox: {
    backgroundColor: '#048AD7',
    height: 32,
    borderRadius: 12,
    width: 72,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cabNameNumberBox: {
    marginTop: 8,
    height: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cabName: {
    fontSize: 16,
    fontWeight: 400,
    color: '#292F3B',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 600,
    color: '#FFFFFF',
  },

  passengerDetails: {
    borderColor: '#E3E9ED',
    height: 226,
    borderRadius: 20,
    backgroundColor: 'white',
    marginTop: 20,
  },
  foranyEnquiry: {
    borderColor: '#E3E9ED',
    height: 200,
    borderRadius: 20,
    backgroundColor: 'white',
    marginTop: 20,
  },
  passengerDetailsTextBox: {
    marginTop: 20,
    marginLeft: 20,
    height: 25,
  },
  horizontal: {
    width: '100%',
    marginTop: 12,

    backgroundColor: '#E3E9ED',
    height: 1,
  },
  horizontal2: {
    width: '100%',
    marginTop: 12,
    marginHorizontal: 20,
    backgroundColor: '#E3E9ED',
    height: 1,
  },
  horizontal3: {
    width: '100%',
    marginTop: 12,
    marginBottom: 12,
    backgroundColor: '#E3E9ED',
    height: 1,
  },
  detailList: {
    marginTop: 16,

    marginHorizontal: 20,
    flexDirection: 'column',
    gap: 16,
  },
  detailsListText: {
    fontSize: 16,
    fontWeight: 400,
    color: '#4F565E',
    lineHeight: 16 * 1.4,
    letterSpacing: 0.32,
  },

  detailsListText2: {
    fontSize: 16,
    fontWeight: 400,
    color: '#292F3B',
    // lineHeight: 16 * 1.4,
    // letterSpacing: 0.32,
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
    height: 534,
  },
  modalView2: {
    width: Dimensions.get('window').width,
    backgroundColor: '#F3F7FA',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    elevation: 5,
    height: 250,
  },
  modalView3: {
    width: Dimensions.get('window').width,
    backgroundColor: '#F3F7FA',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    elevation: 5,
    height: 288,
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
});

export default UpcomingTrip;
