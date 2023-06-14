import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Alert,
  Pressable,
  Dimensions,
  Animated,
  TouchableOpacity,
  Modal, TextInput
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import DrawerCross from "../svgImages/DrawerCross.svg"
import Header from '../components/Header';
import Star2 from '../svgImages/Star2.svg';
import Clock from '../svgImages/Clock.svg';
import FadedClock from '../svgImages/FadedClock.svg';

import CabIcon from '../svgImages/CabIcon.svg';
import CabType from '../svgImages/CabType.svg';
import TimePicker from '../svgImages/TimePicker.svg';

const {height, width} = Dimensions.get('window');
import TripDetailsComponent from '../components/TripDetailsComponent';
import XBtnWithoutArrow from '../components/XBtnWithoutArrow';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WhitePickup from '../svgImages/WhitePickup.svg';
import EditTrip from '../svgImages/EditTrip.svg';
import WhiteVia from '../svgImages/WhiteVia.svg';
import WhiteDrop from '../svgImages/WhiteDrop.svg';
import LinearGradient from 'react-native-linear-gradient';



const TripDetails = ({navigation, route}) => {
  const {showReturnJourney} = route.params;
  console.log('trip', showReturnJourney);
  const PickupLocation = 'Manchester Club Stadium (M16)';
  const PickupDateTime = 'Wed 24 Feb, 12 PM';
  const DropLocation = 'Elland Road Stadium, Leed United';
  const DropDateTime = 'Wed 22 Feb';
  const VaiRoute = 'Great Ancoats Street';
  const PricePickupJourney = 280;
  const PriceReturnJourney = 240;

  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);

  const [EditTimeValue, setEditTimeValue] = useState('03.15 PM');


  const handleEditBtnPress = () => {
    const pickupTime = new Date(); // this will come from backend
    pickupTime.setHours(17, 15, 0, 0); // take random time of 7.15 PM

    let currentTime = new Date();
    console.log(pickupTime, currentTime);
    // currentTime.setHours(
    //   parseInt(time.split(':')[0]),
    //   parseInt(time.split(':')[1]),
    //   0,
    //   0,
    // );

    let timeDifference = (pickupTime - currentTime) / (1000 * 60 * 60);

    if (timeDifference < 6) {
      setModalVisible4(true);
    } else {
      setModalVisible3(true);
    }
  };

  const handlePressSaveBtn = () => {
    setModalVisible3(false);
  };

  const handlePressGotItBtn = () => {
    setModalVisible4(false);
  };


  return (
    <SafeAreaView style={styles.mainContainer}>
      <Animated.View>
        <Header headertext={'Trip Details'} />
      </Animated.View>
      <ScrollView
        style={{backgroundColor: '#F3F7FA'}}
        showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: '#F3F7FA'}}>
          <View>
            <View style={styles.container}>
              {/* <TripDetailsComponent
                PickupLocation={PickupLocation}
                PickupDateTime={PickupDateTime}
                DropLocation={DropLocation}
                DropDateTime={DropDateTime}
                VaiRoute={VaiRoute}
              /> */}

              <TripDetailsIncludingViaRoutes
                PickupLocation={PickupLocation}
                PickupDateTime={PickupDateTime}
                DropLocation={DropLocation}
                DropDateTime={DropDateTime}
                VaiRoute={VaiRoute}
                handleEditBtnPress={handleEditBtnPress}
              />
              <PickupDetails
                PickupLocation={PickupLocation}
                PickupDateTime={PickupDateTime}
                DropLocation={DropLocation}
                DropDateTime={DropDateTime}
                pickupOrReturn={'Pickup'}
                Price={PricePickupJourney}
                showReturnJourney={showReturnJourney}
              />

              {showReturnJourney ? (
                <ReturnDetails
                  PickupLocation={PickupLocation}
                  PickupDateTime={PickupDateTime}
                  DropLocation={DropLocation}
                  DropDateTime={DropDateTime}
                  pickupOrReturn={'Return'}
                  Price={PriceReturnJourney}
                />
              ) : null}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.priceAndBookBox}>
        <View style={styles.textAndBtnBox}>
          <View
            style={{
              width: '50%',
              paddingLeft: 8,
              flexDirection: 'row',
              alignSelf: 'center',
              gap: 8,
            }}>
            <View style={{alignSelf: 'center'}}>
              <Text
                style={{
                  color: '#4F565E',
                  fontWeight: 600,
                  fontSize: 16,
                  lineHeight: 16 * 1.4,
                }}>
                Total
              </Text>
            </View>
            <View>
              {showReturnJourney === true ? (
                <Text
                  style={{
                    fontWeight: 600,
                    fontSize: 23,
                    color: '#048AD7',
                    lineHeight: 23 * 1.4,
                  }}>
                  {`£ ${PriceReturnJourney + PricePickupJourney}`}
                </Text>
              ) : (
                <Text
                  style={{
                    fontWeight: 600,
                    fontSize: 23,
                    color: '#048AD7',
                    lineHeight: 23 * 1.4,
                  }}>{`£ ${PricePickupJourney}`}</Text>
              )}
            </View>
          </View>
          <View style={{width: '50%'}}>
            <XBtnWithoutArrow
              Btnwidth={'100%'}
              textInsideBtn={'BOOK NOW'}
              goTo={'AddDetails'}
            />
          </View>
        </View>
      </View>

     
    </SafeAreaView>
  );
};

const PickupDetails = ({
  PickupLocation,
  PickupDateTime,
  DropLocation,
  DropDateTime,
  pickupOrReturn,
  Price,
  showReturnJourney,
}) => {
  return (
    <View
      style={[styles.PickBox, {marginBottom: !showReturnJourney ? 100 : 20}]}>
      {/* first layer of title and price */}
      <View style={styles.titleAndPriceBox}>
        <Text style={styles.PickupTitle}>{pickupOrReturn}</Text>
        <View style={styles.priceBox}>
          <Text style={styles.priceText}> {`£ ${Price}`}</Text>
        </View>
      </View>
      {/* first layer of title and price upto here */}

      <View style={styles.horizontalLine}></View>

      {/* second layer of pickup and drop locations */}
      <View style={styles.pickupDropText}>
        <View style={styles.pickuplocationTextBox}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.pickupAndDropText}>{PickupLocation}</Text>
          </ScrollView>
        </View>

        <View style={styles.droplocationTextBox}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.pickupAndDropText}>{DropLocation}</Text>
          </ScrollView>
        </View>
      </View>

      {/* second layer of pickup and drop locations ends */}
      <View style={styles.horizontalLine}></View>

      {/* third layer ie type of cab, pickup time, ratings */}

      <View style={styles.cabDetails}>
        <View style={styles.cabTypeBox}>
          <View style={styles.svgSize}>
            <CabIcon width={18} height={18} />
          </View>

          <Text style={styles.cabTypeText}>Comfy cabs</Text>
        </View>
        <View style={styles.cabTypeBox2}>
          <View style={styles.svgSize}>
            <CabType width={18} height={18} />
          </View>

          <Text style={styles.cabTypeText}> Saloon</Text>
        </View>
        <View style={styles.cabTypeBox2}>
          <View style={styles.svgSize}>
            <TimePicker width={18} height={18} />
          </View>

          <Text style={styles.cabTypeText}>22 Feb, 12 PM</Text>
        </View>
        <View style={styles.cabTypeBox2}>
          <View style={styles.svgSize}>
            <Star2 width={18} height={18} />
          </View>

          <Text style={styles.cabTypeText}>4.5 Rated</Text>
        </View>
      </View>

      {/* third layer ie type of cab, pickup time, ratings upto here*/}
    </View>
  );
};
const ReturnDetails = ({
  PickupLocation,
  PickupDateTime,
  DropLocation,
  DropDateTime,
  pickupOrReturn,
  Price,
}) => {
  return (
    <View style={[styles.PickBox2]}>
      {/* first layer of title and price */}
      <View style={styles.titleAndPriceBox}>
        <Text style={styles.PickupTitle}>{pickupOrReturn}</Text>
        <View style={styles.priceBox}>
          <Text style={styles.priceText}> {`£ ${Price}`}</Text>
        </View>
      </View>
      {/* first layer of title and price upto here */}

      <View style={styles.horizontalLine}></View>

      {/* second layer of pickup and drop locations */}
      <View style={styles.pickupDropText}>
        <View style={styles.pickuplocationTextBox}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.pickupAndDropText}>{PickupLocation}</Text>
          </ScrollView>
        </View>

        <View style={styles.droplocationTextBox}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.pickupAndDropText}>{DropLocation}</Text>
          </ScrollView>
        </View>
      </View>

      {/* second layer of pickup and drop locations ends */}
      <View style={styles.horizontalLine}></View>

      {/* third layer ie type of cab, pickup time, ratings */}

      <View style={styles.cabDetails}>
        <View style={styles.cabTypeBox}>
          <View style={styles.svgSize}>
            <CabIcon width={18} height={18} />
          </View>

          <Text style={styles.cabTypeText}>Comfy cabs</Text>
        </View>
        <View style={styles.cabTypeBox2}>
          <View style={styles.svgSize}>
            <CabType width={18} height={18} />
          </View>

          <Text style={styles.cabTypeText}> Saloon</Text>
        </View>
        <View style={styles.cabTypeBox2}>
          <View style={styles.svgSize}>
            <TimePicker width={18} height={18} />
          </View>

          <Text style={styles.cabTypeText}>22 Feb, 12 PM</Text>
        </View>
        <View style={styles.cabTypeBox2}>
          <View style={styles.svgSize}>
            <Star2 width={18} height={18} />
          </View>

          <Text style={styles.cabTypeText}>4.5 Rated</Text>
        </View>
      </View>

      {/* third layer ie type of cab, pickup time, ratings upto here*/}
    </View>
  );
};

const TripDetailsIncludingViaRoutes = ({
  PickupLocation,
  PickupDateTime,
  DropLocation,
  DropDateTime,
  VaiRoute,
  handleEditBtnPress,
}) => {
  return (
    <View
      style={{
        height: 263,
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: '#292F3B',
        position: 'relative',
        marginBottom: 32,
      }}>
      <View
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          right: 20,
          bottom: 20,
          backgroundColor: '#292F3B',
        }}>
        <View style={styles.pickupBox}>
          <WhitePickup width={24} height={24} />

          <View
            style={{
              height: 39,
            }}>
            <Text style={styles.pickupText}>{PickupLocation}</Text>
            <Text style={styles.dateTimeOfpickup}>{PickupDateTime}</Text>
          </View>
        </View>

       

        <View
          style={{
            flexDirection: 'row',
            gap: 12,
            marginTop: 30+22+12,
          }}>
          <WhiteVia width={24} height={24} />

          <View>
            <Text style={styles.pickupText}>{VaiRoute}</Text>
          </View>
        </View>

        <View style={styles.dropLocationBox}>
          <View style={{marginTop: 16}}>
            <WhiteDrop width={24} height={24} />
          </View>

          <View
            style={{
              height: 39,
              marginTop: 5,
            }}>
            <Text style={styles.pickupText}>{DropLocation}</Text>
            <Text style={styles.dateTimeOfpickup}>{DropDateTime}</Text>
          </View>
        </View>

        <View
          style={{
            height: 73,
            width: 1,
            position: 'absolute',

            borderLeftWidth: 1,
            borderColor: 'white',
            borderStyle: 'dashed',
            left: 11.75,
            top: 28,
          }}></View>
        <View
          style={{
            height: 73,
            width: 1,
            position: 'absolute',
            borderLeftWidth: 1,
            borderColor: 'white',
            borderStyle: 'dashed',
            left: 11.75,
            top: 126,
          }}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  dropLocationBox: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 54,
  },
  editBox: {
    height: 22,
    marginTop: 12,
    left: 36,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    width: 100,
  },

  editText: {
    fontSize: 16,
    fontWeight: 400,
    color: '#FFFFFF',
    letterSpacing: 0.32,
    fontFamily: 'ProximaNova',
    lineHeight: 16 * 1.4,
  },
  pickupText: {
    fontSize: 16,
    fontWeight: 400,

    color: 'white',
    letterSpacing: 0.32,
    fontFamily: 'ProximaNova',
    lineHeight: 16 * 1.4,
  },
  dateTimeOfpickup: {
    fontSize: 13,
    fontWeight: 400,
    fontFamily: 'ProximaNova',
    color: '#ffffff',
    letterSpacing: 0.32,

    lineHeight: 16 * 1,
  },
  pickupBox: {
    flexDirection: 'row',
    gap: 12,
    height: 39,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: '#ff9800',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    overflow: 'hidden',
  },
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },

  PickBox: {
    height: 241,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'white',
    marginBottom: 20,
    borderColor: '#E3E9ED',
  },
  PickBox2: {
    height: 241,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'white',
    marginBottom: 144,
    borderColor: '#E3E9ED',
  },
  titleAndPriceBox: {
    height: 31,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: 20,
    alignItems: 'center',
    marginBottom: 16,
  },
  priceBox: {backgroundColor: '#048AD7', borderRadius: 12},
  priceText: {
    marginHorizontal: 12,
    marginVertical: 3,
    fontSize: 18,
    fontWeight: 600,
    color: 'white',
  },
  PickupTitle: {
    fontSize: 18,
    color: '#292F3B',
    fontWeight: 500,
    lineHeight: 18 * 1.4,
    letterSpacing: 0.32,
  },
  horizontalLine: {
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 2,
    height: 1,
    backgroundColor: '#E3E9ED',
  },
  pickupDropText: {
    marginHorizontal: 20,
    marginBottom: 16,
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 64,
  },
  pickuplocationTextBox: {
    width: '40%',
    height: '100%',
  },
  pickupAndDropText: {
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
    color: '#292F3B',
  },
  droplocationTextBox: {
    width: '40%',
    height: '100%',
  },
  cabDetails: {
    marginHorizontal: 20,
    height: 60,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cabTypeBox: {
    flexDirection: 'row',
    gap: 8,
    marginRight: 51,
    marginBottom: 16,

    width: '40%',
    height: 22,
    alignItems: 'center',
  },
  cabTypeBox2: {
    flexDirection: 'row',
    gap: 8,

    marginBottom: 16,
    width: '40%',
    alignItems: 'center',
  },
  svgSize: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 1,
  },
  cabTypeText: {
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
    color: '#4F565E',
  },

  priceAndBookBox: {
    backgroundColor: 'white',

    height: 80,

    paddingVertical: 16,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,

    left: 0,
  },
  textAndBtnBox: {
    height: 48,
    flexDirection: 'row',
  },
});

export default TripDetails;
