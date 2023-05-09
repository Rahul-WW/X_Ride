import {View, Text, Dimensions, Image, StyleSheet} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');
const passengers = 3,
  price = 1430; //pass this as a Prop in the Booking function
const UpcomingBookings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pickupAndDropBox}>
        <View style={styles.pickupBox}>
          <Image
            style={{width: 24, height: 24}}
            source={require('../images/pickupIcon.png')}
          />

          <View
            style={{
              height: 39,
            }}>
            <Text style={styles.pickupText}>Manchester Club Stadium (M16)</Text>
            <Text style={styles.dateTimeOfpickup}>Wed 24 Feb, 12 PM</Text>
          </View>
        </View>
        <View style={styles.dropLocationBox}>
          <Image source={require('../images/dropIcon.png')} />

          <View
            style={{
              height: 39,
            }}>
            <Text style={styles.pickupText}>
              Elland Road Stadium, Leed United
            </Text>
            <Text style={styles.dateTimeOfpickup}>Wed 22 Feb</Text>
          </View>
        </View>
      </View>
      <View style={styles.horizontalLine}></View>

      <View style={styles.passengerAndPriceBox}>
        <View style={styles.passengerBox}>
          <Image source={require('../images/nameInputIcon.png')} />
          <Text style={styles.passengerPriceText}>{passengers}</Text>
          <Text style={styles.passengerPriceText}>
            {passengers >= 2 ? (
              <Text> Passengers</Text>
            ) : (
              <Text> Passenger</Text>
            )}{' '}
          </Text>
        </View>
        <View style={styles.priceBox}>
          <View style={{alignSelf: 'center'}}>
            <Image source={require('../images/moneyIcon.png')} />
          </View>

          <Text style={styles.passengerPriceText}>£ {price}</Text>
        </View>
      </View>

      <View style={styles.dashedline}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    borderColor: '#E3E9ED',
    borderRadius: 20,
    borderWidth: 1,
    
    backgroundColor: 'white',
    position: 'relative',
    marginBottom:16
    
  },

  pickupAndDropBox: {
    position: 'absolute',

    top: 20,
    bottom: 71,
    left: 20,
    right: 20,
    backgroundColor: 'white',
  },
  pickupText: {
    fontSize: 16,
    fontWeight: 400,
    fontFamily: 'ProximaNova-Regular',
    color: '#292F3B',
    letterSpacing: 0.32,

    lineHeight: 16 * 1.4,
  },
  dateTimeOfpickup: {
    fontSize: 13,
    fontWeight: 400,
    fontFamily: 'ProximaNova-Regular',
    color: '#4F565E',
    letterSpacing: 0.32,

    lineHeight: 16 * 1,
  },
  pickupBox: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 31,
  },
  dropLocationBox: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  horizontalLine: {
    borderColor: '#E3E9ED',
    borderWidth: 1,
    borderRadius: 2,
    marginTop: 145,
    marginHorizontal: 20,
  },
  passengerAndPriceBox: {
    marginHorizontal: 20,
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  passengerBox: {
    flexDirection: 'row',
    gap: 8,
  },
  priceBox: {
    flexDirection: 'row',
    gap: 8,
  },
  passengerPriceText: {
    color: '#4F565E',
    fontWeight: 400,
    lineHeight: 16 * 1.4,
    letterSpacing: 0.32,
  },
  dashedline: {
    position: 'absolute',

    borderColor: '#4F565E',
    borderStyle: 'dashed',
    borderLeftWidth: 1,
    left: 32,
    height: 38,
    top: 48,
  },
});

export default UpcomingBookings;
