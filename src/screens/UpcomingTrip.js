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
} from 'react-native';
import React from 'react';
import Header from '../components/Header';

import UpcomingTripComponent from '../components/UpcomingTripComponent';
import LinearGradient from 'react-native-linear-gradient';

const UpcomingTrip = ({navigation, route}) => {
  const {selectedfromList} = route.params;

  console.log(selectedfromList);

  const handleCallBtnPressed = () => {
    Alert.alert('yes pressed');
  };

  return (
    <SafeAreaView style={{backgroundColor: '#F3F7FA'}}>
      <Animated.View>
        <Header headertext={'Upcoming Trip'} />
      </Animated.View>
      <ScrollView style={{marginHorizontal: 20, borderWidth: 1}}>
        <View style={styles.container}>
          <UpcomingTripComponent
            pickupLocation={selectedfromList.pickupLocation}
            pickupDate={selectedfromList.pickupDate}
            pickupTime={selectedfromList.pickupTime}
            dropLocation={selectedfromList.dropLocation}
            dropTime={selectedfromList.dropTime}
            dropDate={selectedfromList.dropDate}
            passengerCount={selectedfromList.passengerCount}
            price={selectedfromList.price}
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
                <Text style={styles.detailsListText}>Jaslin Jay</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
              
                  height: 22,
                }}>
                <Text style={styles.detailsListText}>Contact No</Text>
                <Text style={styles.detailsListText}>5455545454</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                 
                  height: 22,
                }}>
                <Text style={styles.detailsListText}>Email</Text>
                <Text style={styles.detailsListText}>Jaslin@gmail.com</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                 
                  height: 22,
                }}>
                <Text style={styles.detailsListText}>Paid By</Text>
                <Text style={styles.detailsListText}>Cash</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const CallBtn = ({textInsideBtn, Btnwidth, handleCallBtnPressed}) => {
  return (
    <Pressable onPress={handleCallBtnPressed}>
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
  container: {
    marginTop: 20,
   
    width: '100%',
    marginBottom: 80,
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
    letterSpacing: 0.32
  },
});

export default UpcomingTrip;
