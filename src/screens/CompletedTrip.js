import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
  Dimensions,
  Animated,
  Modal,
  TextInput,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {Linking} from 'react-native';

import UpcomingTripComponent from '../components/UpcomingTripComponent';
import LinearGradient from 'react-native-linear-gradient';
import EmailIcon2 from '../svgImages/EmailIcon2.svg';
import ChatIcon from '../svgImages/ChatIcon.svg';
import CallIcon from '../svgImages/CallIcon.svg';
import Comfy from '../svgImages/Comfy.svg';
import RateStars from '../svgImages/RateStars.svg';

import HeaderDrawerScreens from '../components/HeaderDrawerScreens';

import InvoiceIcon from '../svgImages/InvoiceIcon.svg';
const source = {
  uri: 'https://drive.google.com/file/d/1VBatDrtZYI8OuWObLZisymF-fiVO8e_Y/view?usp=share_link',
  cache: true,
};

const CompletedTrip = ({navigation}) => {
  const [ratingDone, setRatingDone] = useState(false); // if true rating will show, make some arrangemnt to do the rating part
  const [filePath, setFilePath] = useState('');

  const handleRateBtnPressed = () => {
   
    navigation.navigate('TripCompletion');
  };

    const handleCallBtnPressed = phoneNumber => {
      const phoneUrl = `tel:${phoneNumber}`;
      Linking.openURL(phoneUrl);
    };

  return (
    <SafeAreaView
      style={{backgroundColor: '#F3F7FA', flex: 1, position: 'relative'}}>
      <Animated.View>
        {/* <Header headertext={'Upcoming Trip'} /> */}
        <HeaderDrawerScreens
          headertext={'Trip Details'}
          navigation={navigation}
          backto={'Mybookings'}
        />
      </Animated.View>
      <ScrollView style={{marginHorizontal: 20}}>
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
            // handleEditBtnPress={handleEditBtnPress}
            widthEditBtn={false}
            isInpayment={true}
          />

          {/* <View style={styles.tripDetails}>
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
                    />
                  </View>
                </View>
              </LinearGradient>
            </View>
          </View> */}

          <View style={styles.passengerDetails}>
            <View style={styles.passengerDetailsTextBox}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                  color: '#292F3B',
                  lineHeight: 18 * 1.4,
                  letterSpacing: 0.32,
                }}>
                Ride-id
              </Text>
              <Text
                style={{
                  color: '#048AD7',
                  fontSize: 18,
                  fontWeight: 500,
                  lineHeight: 18 * 1.4,
                  letterSpacing: 0.32,
                }}>
                # 4502500212
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
                <Text style={styles.detailsListText}>Date of Ride</Text>
                <Text style={styles.detailsListText}>29/10/2022</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: 22,
                }}>
                <Text style={styles.detailsListText}>Time</Text>
                <Text style={styles.detailsListText}>2:40 PM</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: 22,
                }}>
                <Text style={styles.detailsListText}>Fare</Text>
                <Text style={styles.detailsListText}>£ 1430</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: 22,
                }}>
                <Text style={styles.detailsListText}>Payment Mode</Text>
                <Text style={styles.detailsListText}>Card</Text>
              </View>
            </View>
            <View style={styles.horizontal3}></View>

            {!ratingDone ? (
              <View
                style={{
                  marginHorizontal: 20,
                  height: 40,
                  marginBottom: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: '#292F3B',
                    lineHeight: 18 * 1.4,
                    letterSpacing: 0.32,
                  }}>
                  Comphy Cab
                </Text>
                <RateBtn
                  Btnwidth={140}
                  textInsideBtn={'RATE TRIP'}
                  handleRateBtnPressed={handleRateBtnPressed}
                />
              </View>
            ) : (
              <View
                style={{
                  marginHorizontal: 20,
                  height: 40,
                  marginBottom: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 8,
                }}>
                <Comfy />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    color: '#4F565E',
                    lineHeight: 16 * 1.4,
                    letterSpacing: 0.32,
                  }}>
                  You Rated
                </Text>
                <View style={{marginLeft: 32}}>
                  <RateStars />
                </View>
              </View>
            )}

            {/* <View
              style={{
                marginHorizontal: 20,
                height: 40,
                marginBottom: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#292F3B',
                  lineHeight: 18 * 1.4,
                  letterSpacing: 0.32,
                }}>
                Comphy Cab
              </Text>
              <RateBtn
                Btnwidth={140}
                textInsideBtn={'RATE TRIP'}
                handleRateBtnPressed={handleRateBtnPressed}
              />
            </View> */}
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
                  navigation.navigate('ChatSupport', {from: 'CompletedTrip'})
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
                  navigation.navigate('Email', {from: 'CompletedTrip'})
                }>
                <EmailIcon2 width={20} height={20} />
                <View>
                  <Text style={styles.detailsListText}>Email Us</Text>
                </View>
              </Pressable>
              <Pressable
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 12,
                  marginBottom: 20,
                }}>
                <InvoiceIcon width={20} height={20} />
                <View>
                  <Text style={styles.detailsListText}>Invoice</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const RateBtn = ({textInsideBtn, Btnwidth, handleRateBtnPressed}) => {
  return (
    <Pressable onPress={handleRateBtnPressed}>
      <View
        style={{
          height: 40,
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
              height: 40,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
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
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container: {
    marginTop: 20,

    width: '100%',
    marginBottom: 209,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 600,
    color: '#FFFFFF',
  },

  passengerDetails: {
    borderColor: '#E3E9ED',

    borderRadius: 20,
    backgroundColor: 'white',
    marginTop: 20,
  },
  foranyEnquiry: {
    borderColor: '#E3E9ED',

    borderRadius: 20,
    backgroundColor: 'white',
    marginTop: 20,
  },
  passengerDetailsTextBox: {
    marginTop: 20,
    marginLeft: 20,
    height: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  horizontal: {
    width: '100%',
    marginTop: 12,
    backgroundColor: '#E3E9ED',
    height: 1,
  },
  horizontal2: {
    marginTop: 12,
    marginHorizontal: 20,
    backgroundColor: '#E3E9ED',
    height: 1,
  },
  horizontal3: {
    marginTop: 16,
    marginHorizontal: 20,
    backgroundColor: '#E3E9ED',
    height: 1,
    marginBottom: 16,
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
    color: '#4F565E',
    // lineHeight: 16 * 1.4,
    // letterSpacing: 0.32,
  },
});

export default CompletedTrip;
