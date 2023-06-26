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
} from 'react-native';
import React, {useState} from 'react';
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
import Comfy from '../svgImages/Comfy.svg';
import ColoredStar from "../svgImages/ColoredStar.svg"
import BlackStar from "../svgImages/BlackStar.svg"

const TripCompletion = ({navigation}) => {

    const [selectedStar, setSelectedStar] = useState(null);
    const [comment, setComment]= useState("")

    const stars = [1, 2, 3, 4, 5];

    const onStarPress = star => {
      setSelectedStar(star);
    
    };

    const handleSubmit=()=>{
       // Alert.alert(`Rating has been submitted  ${selectedStar} Stars and Comment as ${comment}`)
        navigation.navigate("Home")
    }

    
  return (
    <SafeAreaView
      style={{backgroundColor: '#F3F7FA', flex: 1, position: 'relative'}}>
      <Animated.View>
        {/* <Header headertext={'Upcoming Trip'} /> */}
        <HeaderDrawerScreens
          headertext={'# 4502500212'}
          navigation={navigation}
          backto={'CompletedTrip'}
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

          <View style={styles.rateTrip}>
            <View style={{marginLeft: 20, marginTop: 20, marginBottom: 12}}>
              <Text style={styles.rateTitle}>Rate Trip</Text>
            </View>
            <View style={styles.horizontal}></View>
            <View style={styles.imageContainer}>
              <Comfy width={104} height={72} />
              <View>
                <Text style={styles.rateTitle}>Compfy Cabs</Text>
                <Text style={styles.cabType}>Toyota Auris</Text>
                <Text style={styles.cabType}>CRN-12842451</Text>
              </View>
            </View>
          </View>
          <View style={styles.howWasTripBox}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
                marginBottom: 20,
              }}>
              <Text style={styles.rateTitle}>How was your trip</Text>
              <Text style={styles.cabType}>
                Your feedback will improve our services
              </Text>
            </View>
            <View
              style={{
                width: '62%',
                height: 24,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              {stars.map(star => (
                <TouchableOpacity key={star} onPress={() => onStarPress(star)}>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    {star <= selectedStar ? (
                      <ColoredStar width={25} height={25} />
                    ) : (
                      <BlackStar width={24} height={24} />
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputBox}
              multiline={true}
              scrollEnabled={true}
              numberOfLines={4}
              placeholder="Comments"
              value={comment}
              onChangeText={(value)=> setComment(value)}
              ></TextInput>
          </View>
        </View>
      </ScrollView>
      <View style={styles.submitBtn}>
        <SubmitBtn
          Btnwidth={'100%'}
          textInsideBtn="SUBMIT"
          handleSubmit={handleSubmit}
        />
      </View>
    </SafeAreaView>
  );
};
const SubmitBtn = ({Btnwidth, textInsideBtn, handleSubmit}) => {
  return (
    <Pressable onPress={handleSubmit}>
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
          style={{borderRadius: 20}}>
          <View
            style={{
              flexDirection: 'row',
              textAlign: 'center',
              justifyContent: 'center',
              gap: 8,
              borderRadius: 20,
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
  submitBtn: {
    width: '100%',
    backgroundColor: 'white',
    height: 72,

    paddingTop: 12,
    paddingHorizontal: 20,

    paddingBottom: 12,
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  inputContainer: {
    height: 104,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: 'white',
    textAlignVertical: 'top',
    borderColor: '#E3E9ED',
    marginTop: 32,
  },

  inputBox: {
    textAlignVertical: 'top',
    paddingTop: 16,
    paddingLeft: 16,
    fontSize: 16,
    fontFamily: 'ProximaNova-Regular',
    flex: 1,
    lineHeight: 16 * 1.4,
  },
  rateTrip: {
    borderColor: '#E3E9ED',

    borderRadius: 20,
    backgroundColor: 'white',

    height: 166,
    borderWidth: 1,
  },
  rateTitle: {
    color: '#292F3B',
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 18 * 1.4,
    letterSpacing: 0.32,
  },
  cabType: {
    color: '#4F565E',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 16 * 1.4,
    letterSpacing: 0.32,
  },
  imageContainer: {
    flexDirection: 'row',
    gap: 24,
    marginHorizontal: 20,
  },
  howWasTripBox: {
    height: 99,
    marginTop: 24,
    flexDirection: 'column',
    alignItems: 'center',
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
    height: 200,
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
    backgroundColor: '#E3E9ED',
    height: 1,
    marginHorizontal: 20,
    marginBottom: 16,
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

export default TripCompletion;
