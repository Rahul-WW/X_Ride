import {View, Text, Dimensions, Image, StyleSheet} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

import WhitePickup from '../svgImages/WhitePickup.svg';
import WhiteDrop from '../svgImages/WhiteDrop.svg';
import EditTrip from '../svgImages/EditTrip.svg';
import Star2 from '../svgImages/Star2.svg';

import Name2 from '../svgImages/Name2.svg';
import WhiteUser from '../svgImages/WhiteUser.svg';
import WhiteSuitcase from '../svgImages/WhiteSuitcase.svg';
import WhiteRoundtrip from '../svgImages/WhiteRoundtrip.svg';
import WhiteCabinbag from '../svgImages/WhiteCabinbag.svg';




const TripDetailsComponent = ({
  PickupLocation,
  PickupDateTime,
  DropLocation,
  DropDateTime
}) => {
 

  return (
    <View style={styles.container}>
      {/* pickup and drop details, this box is upto horizontal line */}
      <View style={styles.pickupAndDropBox}>
        <View style={styles.pickupBox}>
          <WhitePickup />

          <View
            style={{
              height: 39,
            }}>
            <Text style={styles.pickupText}>{PickupLocation}</Text>
            <Text style={styles.dateTimeOfpickup}>{PickupDateTime}</Text>
          </View>
        </View>

        <View style={styles.editBox}>
          <EditTrip />
          <Text style={{color: 'white'}}>EDIT</Text>
        </View>
        <View style={styles.dropLocationBox}>
          <WhiteDrop />

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
    borderColor: '#E3E9ED',
    borderWidth: 1,
    borderRadius: 2,
    marginTop: 184,
    marginHorizontal: 20,
    marginBottom: 20,
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
    borderLeftWidth: 2,
    left: 32,
    height: 73,
    top: 48,
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

export default TripDetailsComponent;
