import React, {useState}from 'react';

import {
  View,
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  ImageSourcePropType,
  Dimensions,
  Image
} from 'react-native';


import GoBackWhiteBtn from '../components/GoBackWhiteBtn';
import BothDirection from "../svgImages/BothDirection.svg"
import UpcomingBtn from '../components/UpcomingBtns';
import CompletedBtn from '../components/CompletedBtn';

const Cabs = [
  {
    type: 'Comphy Cabs',
    name: 'Toyota Auris or similar',
    price: 240,
    passengers: 4,
    suitcase: 1,
    ratings: 4.5,
    cabinBag: 1,
    source: require('../images/Car1.png'),
  },
  {
    type: 'Mini Cabs',
    name: 'Toyota Auris or similar',
    price: 240,
    passengers: 4,
    suitcase: 1,
    ratings: 4.5,
    cabinBag: 1,
    source: require('../images/car2.png'),
  },
  {
    type: 'Comphy Cabs',
    name: 'Toyota Auris or similar',
    price: 240,
    passengers: 4,
    suitcase: 1,
    ratings: 4.5,
    cabinBag: 1,
    source: require('../images/car3.png'),
  },
  {
    type: 'Combo Drives',
    name: 'Toyota Auris or similar',
    price: 240,
    passengers: 4,
    suitcase: 1,
    ratings: 4.5,
    cabinBag: 1,
    source: require('../images/Car1.png'),
  },
  {
    type: 'Jupitar Cabs',
    name: 'Toyota Auris or similar',
    price: 240,
    passengers: 4,
    suitcase: 1,
    ratings: 4.5,
    cabinBag: 1,
    source: require('../images/car2.png'),
  },
];

const ReturnCab = [
  {
    type: 'Mini Cabs',
    name: 'Toyota Auris or similar',
    price: 240,
    passengers: 4,
    suitcase: 1,
    ratings: 4.5,
    cabinBag: 1,
    source: require('../images/car2.png'),
  },
  {
    type: 'Comphy Cabs',
    name: 'Toyota Auris or similar',
    price: 240,
    passengers: 4,
    suitcase: 1,
    ratings: 4.5,
    cabinBag: 1,
    source: require('../images/car3.png'),
  },
  {
    type: 'Comphy Cabs',
    name: 'Toyota Auris or similar',
    price: 240,
    passengers: 4,
    suitcase: 1,
    ratings: 4.5,
    cabinBag: 1,
    source: require('../images/Car1.png'),
  },
  {
    type: 'Combo Drives',
    name: 'Toyota Auris or similar',
    price: 240,
    passengers: 4,
    suitcase: 1,
    ratings: 4.5,
    cabinBag: 1,
    source: require('../images/Car1.png'),
  },
  {
    type: 'Jupitar Cabs',
    name: 'Toyota Auris or similar',
    price: 240,
    passengers: 4,
    suitcase: 1,
    ratings: 4.5,
    cabinBag: 1,
    source: require('../images/car2.png'),
  },
];





import PickupCabs from '../components/PickupCabs';
import ReturnCabs from "../components/ReturnCabs"

const Quotes = ({navigation}) => {

   const [bg, setBg] = useState(true);
   const handlepress = () => {
     setBg(!bg);
   };
  return (
    <SafeAreaView>
      <ScrollView>
        <HeaderForQuotes />
        <View style={styles.container}>
          <View style={styles.togglingBtnsDiv}>
            <UpcomingBtn
              handlepress={handlepress}
              color={bg}
              text={'For Pickup'}
            />
            <CompletedBtn
              handlepress={handlepress}
              color={bg}
              text={'For Return'}
            />
          </View>

          {bg === true ? (
            <View>
              {Cabs.map((e, i) => {
                return (
                  <View key={i}>
                    <PickupCabs
                      type={e.type}
                      name={e.name}
                      price={e.price}
                      passengers={e.passengers}
                      suitcase={e.suitcase}
                      ratings={e.ratings}
                      cabinBag={e.cabinBag}
                      source={e.source}
                    />
                  </View>
                );
              })}
            </View>
          ) : (
            <View>
              {ReturnCab.map((e, i) => {
                return (
                  <View key={i}>
                    <ReturnCabs
                      type={e.type}
                      name={e.name}
                      price={e.price}
                      passengers={e.passengers}
                      suitcase={e.suitcase}
                      ratings={e.ratings}
                      cabinBag={e.cabinBag}
                      source={e.source}
                    />
                  </View>
                );
              })}
            </View>
          )}
        </View>
        <Button onPress={() => navigation.navigate('Home')} title={'Go back'} />
      </ScrollView>
    </SafeAreaView>
  );
};

const HeaderForQuotes = () => {
  return (
    <View
      style={{
        height: 54,
        backgroundColor: '#292F3B',
        
      }}>
      <View
        style={{
          flexDirection: 'row',
          height: 28,
          marginHorizontal: 20,
          marginTop: 13,
          alignItems: 'center',
          gap: 8,
         
        }}>
        <View style={{paddingLeft: 8}}>
          <GoBackWhiteBtn />
        </View>
        <ScrollView
          style={{
            flexDirection: 'row',

          }}
          horizontal>
          <View style={{ marginRight: 8}}>
            <Text style={styles.textstyling}>Manchester Stadium</Text>
          </View>
          <View style={{ marginRight: 8}}>
            <BothDirection />
          </View>
          <View style={{ marginRight: 8}}>
            <Text style={styles.textstyling}>
              Elland Key Stadium.wwrtwqrtqrrgrw.
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  textstyling: {
    color: 'white',
    fontSize: 14,
    fontWeight: 400,
    fontFamily: 'ProximaNova',
    letterSpacing: 0.32,

    lineHeight: 14 * 1.4,
  },
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  togglingBtnsDiv: {
    height: 48,
    marginBottom: 20,
    flexDirection: 'row',
  },
});
export default Quotes;
