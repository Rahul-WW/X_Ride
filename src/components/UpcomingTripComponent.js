import {View, Text, Dimensions, Image, StyleSheet} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

import WhitePickup from '../svgImages/WhitePickup.svg';
import WhiteDrop from '../svgImages/WhiteDrop.svg';

import WhiteUser from '../svgImages/WhiteUser.svg';
import WhiteSuitcase from '../svgImages/WhiteSuitcase.svg';
import WhiteRoundtrip from '../svgImages/WhiteRoundtrip.svg';
import WhiteCabinbag from '../svgImages/WhiteCabinbag.svg';
import ViaRouteIcon from '../svgImages/ViaRouteIcon.svg';
import EditTrip from '../svgImages/EditTrip.svg';
// {
//   pickupLocation,
//     pickupDate,
//     pickupTime,
//     dropDate,
//     dropLocation,
//     dropTime,
//     passengerCount,
//     price;
// }  these are the parameters to be passed in UpcomingTripComponent whose parent is Mybookings, 
//    where we have to make an API call to get the selected cab
const UpcomingTripComponent = () => {
  return (
    <View style={styles.container}>
      {/* pickup and drop details, this box is upto horizontal line */}
      <View style={styles.pickupAndDropBox}>
        <View style={styles.pickupBox}>
          <WhitePickup />

          <View>
            {/* <Text style={styles.pickupText}>{pickupLocation}</Text> */}
            <Text style={styles.pickupText}>Manchester Club Stadium (M16)</Text>
            <View style={{flexDirection: 'row', gap: 8}}>
              {/* <Text style={styles.dateTimeOfpickup}>{pickupDate}</Text>
              <Text style={styles.dateTimeOfpickup}>{pickupTime}</Text> */}
              <Text style={styles.dateTimeOfpickup}>24 Feb 2023</Text>
              <Text style={styles.dateTimeOfpickup}>12 AM</Text>
            </View>
          </View>
        </View>
        <View style={styles.editBox}>
          <EditTrip />
          <Text style={styles.editText}>EDIT</Text>
        </View>

        {/* this is Via icons and vai Location box */}

        <View
          style={{
            borderColor: 'white',
            flexDirection: 'row',
            gap: 12,
            marginTop: 21,
            height: 22,
            alignItems: 'center',
          }}>
          {/* <ViaRouteIcon width={24} /> */}
          {/* <Text style={styles.dateTimeOfpickup}>{VaiRoute}</Text> */}
        </View>
        {/* this is Via icons and vai Location box upto here */}

        <View style={styles.dropLocationBox}>
          <WhiteDrop />

          <View
            style={{
              height: 39,
            }}>
            {/* <Text style={styles.pickupText}>{dropLocation}</Text> */}
            <Text style={styles.pickupText}>
              Elland Road Stadium, Leed United
            </Text>
            <View style={{flexDirection: 'row', gap: 8}}>
              {/* <Text style={styles.dateTimeOfpickup}>{dropDate}</Text>
              <Text style={styles.dateTimeOfpickup}>{dropTime}</Text> */}
              <Text style={styles.dateTimeOfpickup}>25 Feb 2023</Text>
              <Text style={styles.dateTimeOfpickup}>12 AM</Text>
            </View>
          </View>
        </View>
      </View>
      {/* pickup and drop details upto here */}

      <View style={styles.horizontalLine}></View>

      <View style={styles.dashedline}></View>

      {/* passengers and suitcase and bags */}
      <View style={styles.passengerDetailsBox}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16,
          }}>
          <View style={styles.iconWithText}>
            <View style={styles.svgSize2}>
              <WhiteUser width={16} height={16} />
            </View>

            {/* <Text
              style={
                styles.passengerText
              }>{`${passengerCount} Passengers`}</Text> */}
            <Text style={styles.passengerText}>2 Passengers</Text>
          </View>
          <View style={styles.iconWithText2}>
            <View style={styles.svgSize}>
              <WhiteSuitcase width={16} height={16} />
            </View>

            <Text style={styles.passengerText}>2 Suitcase</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={styles.iconWithText2}>
            <View style={styles.svgSize}>
              <WhiteCabinbag width={16} height={16} />
            </View>

            <Text style={styles.passengerText}>2 Cabin Bag</Text>
          </View>
          <View style={styles.iconWithText2}>
            <View style={styles.svgSize}>
              <WhiteRoundtrip width={20} height={20} />
            </View>

            <Text style={styles.passengerText}>2 Round Trip</Text>
          </View>
        </View>
      </View>
      {/* passengers and suitcase and bags  upto here*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 285,
    borderColor: '#E3E9ED',
    borderRadius: 20,

    backgroundColor: '#292F3B',
    position: 'relative',
    marginBottom: 24,
  },

  pickupAndDropBox: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    backgroundColor: '#292F3B',
  },
  pickupText: {
    fontSize: 16,
    fontWeight: 400,

    color: 'white',
    letterSpacing: 0.32,
    fontFamily: 'Proxima Nova_regular',
    lineHeight: 16 * 1.4,
  },
  dateTimeOfpickup: {
    fontSize: 13,
    fontWeight: 400,

    color: '#ffffff',
    letterSpacing: 0.32,

    lineHeight: 16 * 1,
  },
  pickupBox: {
    flexDirection: 'row',
    gap: 12,
  },
  editBox: {
    height: 22,
    top: 12,
    left: 36,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },

  editText: {
    fontSize: 16,
    fontWeight: 400,
    color: '#FFFFFF',
    letterSpacing: 0.32,
    fontFamily: 'Proxima Nova_regular',
    lineHeight: 16 * 1.4,
  },

  dropLocationBox: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
    position: 'absolute',
    top: 105,
  },
  horizontalLine: {
    borderRadius: 2,
    marginTop: 184,
    marginHorizontal: 20,
    marginBottom: 20,
    height: 1,
    backgroundColor: '#E3E9ED',
  },
  passengerAndPriceBox: {
    marginHorizontal: 20,
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  dashedline: {
    position: 'absolute',

    borderColor: 'white',
    borderStyle: 'dashed',
    borderRightWidth: 2,
    left: 31.2,
    height: 73,
    top: 48,
  },
  dashedline2: {
    position: 'absolute',

    borderColor: 'white',
    borderStyle: 'dashed',
    borderRightWidth: 2,
    left: 31.2,
    height: 35,
    top: 97,
    zIndex: 1000,
  },
  passengerDetailsBox: {
    marginHorizontal: 20,
    height: 60,
  },
  iconWithText: {
    flexDirection: 'row',
    gap: 8,

    height: 22,
    alignItems: 'center',
  },
  iconWithText2: {
    flexDirection: 'row',
    gap: 8,

    height: 22,
  },
  svgSize: {
    height: 20,
    width: 20,
    marginTop: 3,
  },
  svgSize2: {
    height: 20,
    width: 20,
    marginTop: 6,
  },
  passengerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
  },
});


export default UpcomingTripComponent;
