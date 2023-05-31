import React, {useState, useRef} from 'react';

import {
  View,
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  Modal,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
  Alert,
  Animated,
} from 'react-native';

import GoBackWhiteBtn from '../components/GoBackWhiteBtn';
import BothDirection from '../svgImages/BothDirection.svg';

const {width, height} = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';
import Sort1 from '../svgImages/Sort1.svg';
import XBtnWithoutArrow from '../components/XBtnWithoutArrow';
import HeaderForPopUps from '../components/HeaderForPopUps';
import Filter from '../svgImages/Filter.svg';
import RadioForm from 'react-native-simple-radio-button';

const Cabs = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
const sortingBasis = [
  {
    label: 'Rating Highest',
    value: 0,
  },
  {
    label: 'Rating Lowest',
    value: 1,
  },
  {
    label: 'Price Highest',
    value: 2,
  },
  {
    label: 'Price Lowest',
    value: 3,
  },
  {
    label: 'Popularity',
    value: 4,
  },
];

import PickupCabs from '../components/PickupCabs';

const QuotesForPickupOnly = ({navigation, route}) => {
  const {showReturnJourney} = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [sortValue, setSortValue] = useState(-1);
  const [selectedPickupCab, setSelectedPickupCab] = useState({});
  const [car, setCar] = useState(null);
  const scrollViewRef = useRef();

  const handlePress = cab_no => {
    console.log(cab_no);
    setModalVisible(true);
    Cabs.map(e => {
      if (e.id === cab_no) {
        setSelectedPickupCab(e);
        setCar(e.source);
      }
    });
  };

  const handlePressNext = () => {
    setModalVisible(false);
    navigation.navigate('TripDetails', {
      showViews: route.params.showReturnJourney,
    });
  };
  console.log(selectedPickupCab);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Animated.View>
        <HeaderForQuotes />
      </Animated.View>
      <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.togglingBtnsDiv}>
            <View style={{width: '83%'}}>
              <XBtnWithoutArrow
                Btnwidth={'100%'}
                textInsideBtn={'For Pickup'}
                disability={true}
              />
            </View>

            <Pressable onPress={() => navigation.navigate('Filter')}>
              <View
                style={{
                  height: 48,
                  width: 48,
                  borderWidth: 2,
                  alignSelf: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderColor: 'red',
                  paddingHorizontal: 10,
                  borderRadius: 16,
                  borderColor: '#E3E9ED',
                  marginLeft: 13,
                  backgroundColor: 'white',
                }}>
                <Filter width={24} height={24} />
              </View>
            </Pressable>
          </View>

          <View>
            {Cabs.map((e, i) => {
              return (
                <View key={i}>
                  <TouchableOpacity style={{marginBottom: 20}}>
                    <PickupCabs
                      type={e.type}
                      name={e.name}
                      price={e.price}
                      passengers={e.passengers}
                      suitcase={e.suitcase}
                      ratings={e.ratings}
                      cabinBag={e.cabinBag}
                      source={e.source}
                      selected={selectedPickupCab.id}
                      handlePress={handlePress}
                      id={e.id}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>

      {/* modal box starts here */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <TouchableOpacity
            style={styles.centeredView2}
            activeOpacity={1}
            onPressOut={() => setModalVisible(false)}>
            <View style={styles.modalView}>
              {car !== null ? (
                <View
                  style={{
                    height: 48,
                    flexDirection: 'row',
                    marginHorizontal: 20,
                  }}>
                  <View style={{width: '50%', paddingLeft: 8}}>
                    <Text
                      style={{
                        fontWeight: 600,
                        fontSize: 18,
                        color: '#048AD7',
                      }}>{`${selectedPickupCab.type}`}</Text>
                    <Text
                      style={{color: '#4F565E', fontWeight: 400, fontSize: 14}}>
                      For Pickup
                    </Text>
                  </View>
                  <View style={{width: '50%'}}>
                    <TouchableOpacity onPress={handlePressNext}>
                      <NextBtn Btnwidth={'100%'} textInsideBtn={'CONTINUE'} />
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <Text> None Selected</Text>
              )}
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
      {/* modal box ends here */}

      {/* floating sort btn starts here */}
      <View style={styles.floatingBtn}>
        <TouchableOpacity
          onPress={() =>
            scrollViewRef.current.scrollTo({y: 0, animated: true})
          }>
          <View>
            <LinearGradient
              locations={[0, 1]}
              colors={['#00c96d', '#048ad7']}
              useAngle={true}
              angle={90}
              style={{borderRadius: 8}}>
              <View>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    left: 10,
                    top: 10,
                  }}>
                  <Sort1 width={20} height={20} />
                </View>
              </View>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </View>

      {/* floating sort btn ends here */}
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
          <View style={{marginRight: 8}}>
            <Text style={styles.textstyling}>Manchester Stadium</Text>
          </View>
          <View style={{marginRight: 8}}>
            <BothDirection />
          </View>
          <View style={{marginRight: 8}}>
            <Text style={styles.textstyling}>
              Elland Key Stadium.wwrtwqrtqrrgrw.
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const NextBtn = ({Btnwidth, textInsideBtn}) => {
  return (
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
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  centeredView2: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  modalView: {
    width,

    backgroundColor: 'white',
    borderRadius: 20,

    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingVertical: 16,
    height: 80,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

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
    justifyContent: 'space-between',
    width: '100%',
  },
  floatingBtn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 40,
    height: 40,
  },
});
export default QuotesForPickupOnly;
