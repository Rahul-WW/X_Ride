import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Star2 from '../svgImages/Star2.svg';

import Name2 from '../svgImages/Name2.svg';
import Suitcase2 from '../svgImages/Suitcase2.svg';
import CabinBag2 from '../svgImages/CabinBag2.svg';

const ReturnCabs = ({
  type,
  name,
  price,
  passengers,
  suitcase,
  cabinBag,
  ratings,
  source,
  id2,
  handlePress2,
  selected2,
}) => {



  let condition = false;

  if (selected2 == id2) {
    condition = true;

    console.log(condition);
  }
  return (
    <View>
      <GradientBorder condition={condition}>
        <View //bahar wala
        // style={[
        //   styles.container1,
        //   {borderColor: selected2 === id2 ? 'green' : '#E3E9ED'},
        //   // {backgroundColor: selected === id ? '#01b78a' : 'white'},

        // ]}
        >
          <TouchableOpacity onPress={() => handlePress2(id2)}>
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
                    source={source}
                    style={{position: 'absolute', top: 30}}
                  />
                </View>
              </LinearGradient>
            </View>

            <View //  second ie cab type and price
              style={styles.priceCabDetails}>
              <View>
                <Text style={styles.cabTypeText}>{type}</Text>
                <Text style={styles.carName}>{name}</Text>
              </View>
              <View style={styles.priceBox}>
                <Text style={styles.priceText}>{`£ ${price}`}</Text>
              </View>
            </View>


           {/* <View style={{borderWidth:1}}></View> */}
            <View // 3rd ie pasengers nd ratings
              style={styles.cabDetails}>
              <View style={styles.passengerBox}>
                <View style={styles.svgSize}>
                  <Name2 width={20} height={20} />
                </View>

                <Text
                  style={
                    styles.passengerText
                  }>{`${passengers} Passengers`}</Text>
              </View>
              <View style={styles.passengerBox}>
                <View style={styles.svgSize}>
                  <Suitcase2 width={20} height={20} />
                </View>

                <Text
                  style={styles.passengerText}>{`${suitcase} Suitcase`}</Text>
              </View>
              <View style={styles.passengerBox2}>
                <View style={styles.svgSize}>
                  <CabinBag2 width={20} height={20} />
                </View>

                <Text
                  style={styles.passengerText}>{`${cabinBag} Cabin Bag`}</Text>
              </View>
              <View style={styles.passengerBox2}>
                <View style={styles.svgSize}>
                  <Star2 width={20} height={20} />
                </View>

                <Text style={styles.passengerText}>{`${ratings} Rated`}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </GradientBorder>
    </View>
  );
};

const GradientBorder = ({children, condition}) => {
  if (condition) {
    return (
      <LinearGradient
        colors={['#00c96d', '#048ad7']}
        useAngle={true}
        angle={90}
        style={{borderRadius: 24, padding: 1}}>
        <View style={{borderRadius: 24, backgroundColor: 'white'}}>
          {children}
        </View>
      </LinearGradient>
    );
  } else {
    return (
      <View
        style={{
          borderColor: '#E3E9ED',
          borderRadius: 24,
          borderWidth: 1,
          backgroundColor: 'white',
        }}>
        {children}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container1: {
    borderRadius: 24,

    backgroundColor: 'white',
  },
  picBox: {
    marginHorizontal: 20,
    marginVertical: 20,
    position: 'relative',
  },
  picContainer: {
    height: 140,
    alignItems: 'center',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  priceCabDetails: {
    borderColor: '#E3E9ED',
    borderBottomWidth: 1,

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
    fontFamily: 'ProximaNova',
  },
  carName: {
    color: '#4F565E',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 16 * 1.4,
    fontFamily: 'ProximaNova',
  },
  priceBox: {
    backgroundColor: '#048AD7',
    paddingLeft: 12,
    paddingRight: 12,
   
    height: 31,
    borderRadius: 12,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  priceText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: 0.32,
    fontFamily: 'ProximaNova',
  },
  cabDetails: {
    marginTop: 16,
    marginHorizontal: 20,
    height: 68,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  passengerBox: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  passengerBox2: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  svgSize: {
    height: 20,
    width: 20,
    marginTop: 1,
  },
  passengerText: {
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
    fontFamily: 'ProximaNova',
    color: '#4F565E',
  },
});

export default ReturnCabs;
