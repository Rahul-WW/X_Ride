import {View, Text, Dimensions, Image, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import MoneyIcon from "../svgImages/MoneyIcon.svg"
import Name2 from "../svgImages/Name2.svg"
import PickupIcon from "../svgImages/PickupIcon.svg"
import DropIcon from "../svgImages/DropIcon.svg"

const {width, height} = Dimensions.get('window');

const passengers = 3,
  price = 1430; //pass this as a Prop in the Booking function
const UpcomingBookings = ({handleGoToUpcoming, pickupLocation, pickupTime, pickupDate,dropLocation, dropTime, dropDate,id,   passengerCount, price}) => {




  return (
    <Pressable
      style={{marginBottom: 16}}
      onPress={() => handleGoToUpcoming(id)}>
      <View style={styles.container}>
        <View style={styles.pickupAndDropBox}>
          <View style={styles.pickupBox}>
            {/* <Image
              style={{width: 24, height: 24}}
              source={require('../images/pickupIcon.png')}
            /> */}
            <PickupIcon width={24} height={24} />

            <View
              style={{
                height: 39,
              }}>
              <Text style={styles.pickupText}>{pickupLocation}</Text>
              <Text style={styles.dateTimeOfpickup}>
                {pickupDate + ' ' + pickupTime}
              </Text>
            </View>
          </View>
          <View style={styles.dropLocationBox}>
            {/* <Image source={require('../images/dropIcon.png')} /> */}
            <DropIcon width={24} height={24} />
            <View
              style={{
                height: 39,
              }}>
              <Text style={styles.pickupText}>{dropLocation}</Text>
              <Text style={styles.dateTimeOfpickup}>
                {dropDate + ' ' + dropTime}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.horizontalLine}></View>

        <View style={styles.passengerAndPriceBox}>
          <View style={styles.passengerBox}>
            <View>
              <Name2 width={20} height={20} />
            </View>

            <Text style={styles.passengerPriceText}>{passengerCount}</Text>
            <Text style={styles.passengerPriceText}>
              {passengerCount >= 2 ? (
                <Text> Passengers</Text>
              ) : (
                <Text> Passenger</Text>
              )}{' '}
            </Text>
          </View>
          <View style={styles.priceBox}>
            <View style={{alignSelf: 'center'}}>
              <MoneyIcon width={20} height={15} />
            </View>

            <Text style={styles.passengerPriceText}>£ {price}</Text>
          </View>
        </View>

        <View style={styles.dashedline}></View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#E3E9ED',
    borderRadius: 20,
    borderWidth: 1,

    backgroundColor: 'white',
    position: 'relative',
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
    fontFamily: 'ProximaNova',
    color: '#292F3B',
    letterSpacing: 0.32,

    lineHeight: 16 * 1.4,
  },
  dateTimeOfpickup: {
    fontSize: 13,
    fontWeight: 400,
    fontFamily: 'ProximaNova',
    color: '#4F565E',
    letterSpacing: 0.32,
    lineHeight: 16 * 1,
  },
  pickupBox: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 31,

    width: '100%',
  },
  dropLocationBox: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  horizontalLine: {
    height: 1,

    marginTop: 145,
    marginHorizontal: 20,

    backgroundColor: '#E3E9ED',
  },
  passengerAndPriceBox: {
    marginHorizontal: 20,
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  passengerBox: {
    flexDirection: 'row',
    gap: 8,

    alignItems: 'center',
  },
  priceBox: {
    flexDirection: 'row',
    gap: 8,
  },
  passengerPriceText: {
    color: '#4F565E',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 16 * 1.4,
    letterSpacing: 0.32,
    fontFamily: 'ProximaNova',
  },
  dashedline: {
    position: 'absolute',

    borderColor: '#4F565E',
    borderStyle: 'dashed',
    borderWidth: 1,
    width: 2,
    left: 31,
    height: 38,
    top: 48,
    backgroundColor: 'white',
  },
});

export default UpcomingBookings;
