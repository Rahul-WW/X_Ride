import {View, Text, Dimensions, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

import WhitePickup from '../svgImages/WhitePickup.svg';
import WhiteDrop from '../svgImages/WhiteDrop.svg';

import WhiteUser from '../svgImages/WhiteUser.svg';
import WhiteSuitcase from '../svgImages/WhiteSuitcase.svg';
import WhiteRoundtrip from '../svgImages/WhiteRoundtrip.svg';
import WhiteCabinbag from '../svgImages/WhiteCabinbag.svg';
import ViaRouteIcon from '../svgImages/ViaRouteIcon.svg';

const TripDetailsComponent = ({
  PickupLocation,
  PickupDateTime,
  DropLocation,
  DropDateTime,
  VaiRoute,
}) => {
  return (
    <View style={styles.container}>
      {/* pickup and drop details, this box is upto horizontal line */}
      <View style={styles.pickupAndDropBox}>
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
        {/* <TouchableOpacity onPress={handleEditBtnPress}>
          <View style={styles.editBox}>
            <EditTrip />
            <Text style={styles.editText}>EDIT</Text>
          </View>
        </TouchableOpacity> */}

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
          <ViaRouteIcon width={24} />
          <Text style={styles.dateTimeOfpickup}>{VaiRoute}</Text>
        </View>
        {/* this is Via icons and vai Location box upto here */}

        <View style={styles.dropLocationBox}>
          <WhiteDrop width={24} height={24} />

          <View
            style={{
              height: 39,
            }}>
            <Text style={styles.pickupText}>{DropLocation}</Text>
            <Text style={styles.dateTimeOfpickup}>{DropDateTime}</Text>
          </View>
        </View>
      </View>
      {/* pickup and drop details upto here */}

      <View style={styles.horizontalLine}></View>

      <View style={styles.dashedline}></View>
      <View style={styles.dashedline2}></View>

      {/* passengers and suitcase and bags */}
      <View style={styles.passengerDetailsBox}>
        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'space-between',
            marginBottom: 16,
          }}>
          <View style={styles.iconWithText}>
            <View style={styles.svgSize2}>
              <WhiteUser width={16} height={16} />
            </View>

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
            // gap: 83
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
  },
  editBox: {
    position: 'absolute',
    height: 22,
    top: 51,
    left: 36,
    flexDirection: 'row',
    gap: 8,
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
    borderRightWidth: 1,
    left: 32,
    height: 30,
    top: 48,
  },
  dashedline2: {
    position: 'absolute',
     width:1,
    borderColor: 'white',
    borderStyle: 'dashed',
    borderWidth: 1,
    left: 31,
    height: 28,
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
    width: '50%',
  },
  iconWithText2: {
    flexDirection: 'row',
    gap: 8,
    width: '50%',
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
    fontFamily: 'ProximaNova',
  },
});

export default TripDetailsComponent;
