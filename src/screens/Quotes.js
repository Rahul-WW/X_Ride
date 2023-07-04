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
import UpcomingBtn from '../components/UpcomingBtns';
import CompletedBtn from '../components/CompletedBtn';
import FloatingBtn from '../components/FloatingBtn';
const {width, height} = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';
import Sort1 from '../svgImages/Sort1.svg';
import HeaderForPopUps from '../components/HeaderForPopUps';
import RadioForm from 'react-native-simple-radio-button';
import GoTop from '../svgImages/GoTop.svg';
import {useSelector} from 'react-redux';
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

const ReturnCab = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
import ReturnCabs from '../components/ReturnCabs';
import XBtnWithoutArrow from '../components/XBtnWithoutArrow';
import Filter from '../svgImages/Filter.svg';
const Quotes = ({navigation, route}) => {
  const {showReturnJourney} = route.params;

  console.log('showView1', showReturnJourney);
  const [bg, setBg] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const [selectedPickupCab, setSelectedPickupCab] = useState({});
  const [selectedDropCab, setSelectedDropCab] = useState({});
  const [car, setCar] = useState(null);
  const [car2, setCar2] = useState(null);
  const scrollViewRef = useRef();

  //these two function is for toggling the pickup and return cab list and the btn on top
  const handlepress1 = () => {
    if (bg === false) {
      setBg(true);
    }
  };
  const handlepress2 = () => {
      if (bg === true) {
        setBg(false);
      }
  };

  //this function will select the pickup cab and open the popup
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

  //this function will select the return cab and open the popup
  const handlePress2 = cab_no => {
    console.log(cab_no);
    setModalVisible2(true);
    ReturnCab.map(e => {
      if (e.id === cab_no) {
        setSelectedDropCab(e);
        setCar2(e.source);
      }
    });
  };

  //this function will close the popup and change the tab to pickup cab list and scroll to the top of the screen
  const handlePressNext = () => {
    setBg(false);
    setModalVisible(false);
    scrollViewRef.current.scrollTo({y: 0, animated: true});
  };

  //this function will close the popup and redirect to the Trip details
  const handlePressContinue = () => {
    setModalVisible(false);
    navigation.navigate('TripDetails', {
      showReturnJourney: route.params.showReturnJourney,
    });
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Animated.View>
        <HeaderForQuotes />
      </Animated.View>
      <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}>
        <View style={{position: 'relative'}}>
          <View style={styles.container}>
            <View style={styles.togglingBtnsDiv}>
              <UpcomingBtn
                handlepress={handlepress1}
                color={bg}
                text={'For Pickup'}
              />
              <CompletedBtn
                handlepress={handlepress2}
                color={bg}
                text={'For Return'}
              />
              <Pressable onPress={() => navigation.navigate('Filter')}>
                <View
                  style={{
                    height: 48,
                    width: 48,
                    borderWidth: 2,
                    alignSelf: 'center',

                    flexDirection: 'row',
                    alignItems: 'center',
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

            {bg === true ? (
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
            ) : (
              <View>
                {ReturnCab.map((e, i) => {
                  return (
                    <View key={i} style={{marginBottom: 20}}>
                      <ReturnCabs
                        type={e.type}
                        name={e.name}
                        price={e.price}
                        passengers={e.passengers}
                        suitcase={e.suitcase}
                        ratings={e.ratings}
                        cabinBag={e.cabinBag}
                        source={e.source}
                        id2={e.id}
                        handlePress2={handlePress2}
                        selected2={selectedDropCab.id}
                      />
                    </View>
                  );
                })}
              </View>
            )}
          </View>
        </View>
      </ScrollView>

      {/* modal box for selected cab starts here */}
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
                        fontFamily: 'ProximaNova',
                      }}>{`${selectedPickupCab.type}`}</Text>
                    <Text
                      style={{
                        color: '#4F565E',
                        fontWeight: 400,
                        fontSize: 14,
                        fontFamily: 'ProximaNova',
                      }}>
                      For Pickup
                    </Text>
                  </View>
                  <View style={{width: '50%'}}>
                    <TouchableOpacity onPress={handlePressNext}>
                      <NextBtn Btnwidth={'100%'} textInsideBtn={'NEXT'} />
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
      {/* modal box for selected cab ends here */}

      {/* modal box for selected Drop cab starts here */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            setModalVisible2(!modalVisible2);
          }}>
          <TouchableOpacity
            style={styles.centeredView2}
            activeOpacity={1}
            onPressOut={() => setModalVisible2(false)}>
            <View style={styles.modalView}>
              {car2 !== null ? (
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
                        fontFamily: 'ProximaNova',
                      }}>{`${selectedDropCab.type}`}</Text>
                    <Text
                      style={{
                        color: '#4F565E',
                        fontWeight: 400,
                        fontSize: 14,
                        fontFamily: 'ProximaNova',
                      }}>
                      For Return
                    </Text>
                  </View>
                  <View style={{width: '50%'}}>
                    <TouchableOpacity onPress={handlePressContinue}>
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
      {/* modal box for selected drop cab ends here */}

      {/* modal box for filtering starts here */}
      {/* modal box for filtering Ends here */}

      {/* floating sort btn starts here */}
      {/* <View style={styles.floatingBtn}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}>
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
      </View> */}
      {/* floating sort btn ends here */}
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
                  <GoTop width={20} height={20} />
                </View>
              </View>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const HeaderForQuotes = () => {
const pickupFromStore = useSelector(store => store.form.pickupLocation).substring(0,20)
  const dropFromStore = useSelector(store => store.form.dropLocation).substring(0,20)

  console.log(pickupFromStore, dropFromStore);
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
            <Text style={styles.textstyling}>{pickupFromStore}</Text>
          </View>
          <View style={{marginRight: 8}}>
            <BothDirection />
          </View>
          <View style={{marginRight: 8}}>
            <Text style={styles.textstyling}>
             {dropFromStore}
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
                fontFamily: 'ProximaNova',
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

const sortingList = () => {
  return (
    <View //this Box is contain sorting labels
      style={{
        marginLeft: 20,
        marginTop: 20,
        width: 135,
        height: 190,
      }}>
      <RadioForm
        radio_props={sortingBasis}
        initial={sortValue}
        buttonSize={15}
        selectedButtonColor="green"
        buttonInnerColor="#e74c3c"
        labelStyle={{fontSize: 16, color: '#4F565E', fontWeight: 400}}
        onPress={value => setSortValue(value)}
      />
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
    shadowColor: '#000',
    shadowOpacity: 0.25,
    elevation: 5,
    height: 80,

    borderColor: 'red',
    paddingVertical: 16,
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
    width: '83%',

    justifyContent: 'space-between',
  },
  floatingBtn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 40,
    height: 40,
  },
});
export default Quotes;

// THIS CAN BE USED FOR SORTING AND MAKEING RADIO BUTTONS

// import React, { useState } from 'react';
// import { View, Text } from 'react-native';
// import { ButtonGroup } from 'react-native-elements';
// import LinearGradient from 'react-native-linear-gradient';

// const data = [
//   { price: 100, rating: 4.5 },
//   { price: 200, rating: 4.7 },
//   { price: 150, rating: 4.2 },
//   // ... more data
// ];

// const App = () => {
//   const [selectedIndex, setSelectedIndex] = useState(null);
//   const [sortedData, setSortedData] = useState([...data]);

//   const buttons = ['Highest Price', 'Lowest Price', 'Highest Rating', 'Lowest Rating'];

//   const updateIndex = (selectedIndex) => {
//     setSelectedIndex(selectedIndex);
//     let sorted;
//     switch (selectedIndex) {
//       case 0:
//         sorted = [...data].sort((a, b) => b.price - a.price);
//         break;
//       case 1:
//         sorted = [...data].sort((a, b) => a.price - b.price);
//         break;
//       case 2:
//         sorted = [...data].sort((a, b) => b.rating - a.rating);
//         break;
//       case 3:
//         sorted = [...data].sort((a, b) => a.rating - b.rating);
//         break;
//       default:
//         sorted = data;
//     }
//     setSortedData(sorted);
//   };

//   const renderButtons = () => {
//     return buttons.map((button, i) => (
//       <LinearGradient
//         colors={selectedIndex === i ? ['#4c669f', '#3b5998', '#192f6a'] : ['#fff', '#fff']}
//         style={{flex: 1}}
//         start={{x: 0, y: 0}}
//         end={{x: 1, y: 0}}
//       >
//         <Text style={{color: selectedIndex === i ? '#fff' : '#000', textAlign: 'center'}}>{button}</Text>
//       </LinearGradient>
//     ));
//   };

//   return (
//     <View>
//       <ButtonGroup
//         onPress={updateIndex}
//         selectedIndex={selectedIndex}
//         buttons={renderButtons()}
//       />
//       {/* Render sortedData here */}
//     </View>
//   );
// };

// export default App;
