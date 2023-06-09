import {
  View,
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Modal,
  Animated,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  Platform,
} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import GoBackBtn from '../components/GoBackBtn';
import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Cross from '../svgImages/Cross.svg';
import {Google_Api_Key} from '@env';
import {Google_Map_Api_Key} from '@env';
import Pin from '../svgImages/Pin.svg';
import LoaderIndicator from '../components/LoaderIndicator';
import Target from '../svgImages/Target.svg';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';

import {
  PickupLocationReq,
  DropLocationReq,
  ViaLocationReq,
  PickupPlaceIdReq,
  DropPlaceIdReq
} from '../Redux/homeform/HomeActions'; //this is action
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import store from '../Redux/store';

const Location = ({navigation, route}) => {
  const from = route.params;

  const [isloading, setIsloading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [predictions, setPredictions] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [error, setError] = useState(false);
  const [currentLocation, setCurrentLocation] = useState('');
  const [getCurrentAddress, setGetCurrentAddress] = useState('');
 // const [origin, SetOrigin] = useState('');
  //const [destination, setDestination] = useState('');
  const [aproxTime, setAproxTime] = useState('');

  let data=[]

  const dispatch = useDispatch();

  const form = useSelector(state => state.form); //takeing data from store

  const handleSearchTextChange = text => {
    setSearchText(text);
    setShowSuggestions(true);

    // Clear the previous timeout
    // for India : in
    //for uk : gb
    clearTimeout(typingTimeout);
    const newTypingTimeout = setTimeout(() => {
      fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${Google_Api_Key}&input=${text}&components=country:${"in"}`,
      )
        .then(response => response.json())
        .then(data => {
          setPredictions(data.predictions);
          //  console.log(data.predictions[0].place_id);
          //  SetOrigin(data.predictions[0].place_id)
          //Keyboard.dismiss();
        })
        .catch(error => {
          console.error('Error fetching predictions:', error);
          if (error.message) {
            navigation.navigate('NoInternet');
          }
        });
    }, 400);

    setTypingTimeout(newTypingTimeout);
  };

  const handlePredictionSelect = prediction => {
    let finalTextToDIsplay =
      prediction.structured_formatting.main_text +
      ' ' +
      prediction.structured_formatting.secondary_text;

    if (from.from === 'pickup') {
      //console.log(finalTextToDIsplay)
      // SetOrigin(prediction.place_id);
      // console.log(prediction.place_id, 'place1');
      //SaveOrigin(prediction.place_id);
      dispatch(PickupLocationReq(finalTextToDIsplay));
      dispatch(PickupPlaceIdReq(prediction.place_id))
    } else if (from.from === 'drop') {
      //setDestination(prediction.place_id);
      //SaveDestination(prediction.place_id);
      //console.log(prediction.place_id, 'place2');
      dispatch(DropLocationReq(finalTextToDIsplay));
      dispatch(DropPlaceIdReq(prediction.place_id))
    } else if (from.from === 'vai0') {
      dispatch(ViaLocationReq(finalTextToDIsplay));
    } else if (from.from === 'vai1') {
      dispatch(ViaLocationReq(finalTextToDIsplay));
    } else if (from.from === 'vai2') {
      dispatch(ViaLocationReq(finalTextToDIsplay));
    }
    if (finalTextToDIsplay.length <= 35) {
      setSearchText(finalTextToDIsplay);
    } else {
      let subString = finalTextToDIsplay.substring(0, 35);
      setSearchText(subString + '...');
    }

    setShowSuggestions(false);

    navigation.goBack();
  };

  
    const SaveDestination = async (org) => {
      
      try {
        await AsyncStorage.setItem(
          'Place_Id_List',
          JSON.stringify({destination: org}),
        );
      } catch (error) {
        if (error.message) {
          navigation.navigate('NoInternet');
        }
      }
    };


  const handlePressCrossBtn = () => {
    setShowSuggestions(false);
    setSearchText('');
  };

  const requestLocationPermission = async () => {
    setIsloading(true);
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'MyApp needs access to your location',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the location');
          fetchLocation();
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      fetchLocation();
    }
  };

  const fetchLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        console.log(latitude, longitude);
        setCurrentLocation({latitude, longitude});
        console.log(latitude, longitude);
        getAddress(latitude, longitude);
      },
      error => console.log(error),
      {enableHighAccuracy: false, timeout: 30000, maximumAge: 1000},
    );
  };

  const getAddress = async (lat, lng) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${Google_Api_Key}`;
    try {
      const response = await axios.get(url);

      if (response.data.results.length > 0) {
        setGetCurrentAddress(response.data.results[0].formatted_address);
        setSearchText(response.data.results[0].formatted_address + ' ');
        if (from.from === 'pickup') {
           dispatch(
             DropPlaceIdReq(response.data.results[0].place_id),
           );
          dispatch(
            PickupLocationReq(response.data.results[0].formatted_address + ' '),
          );
        } else if (from.from === 'drop') {
             dispatch(DropPlaceIdReq(response.data.results[0].place_id));
          dispatch(
            DropLocationReq(response.data.results[0].formatted_address + ' '),
          );
        }
      } else {
        console.log('No address found');
      }
    } catch (error) {
      console.log(error);
    }
    setIsloading(false);
    navigation.goBack();
  };

  // console.log('predictions', origin, destination);
  // console.log('orgin', origin);
  // console.log('destination', destination);
  //GetData()

  useEffect(() => {
    // Clear the timeout when the component is unmounted
    return () => {
      clearTimeout(typingTimeout);
    };
  }, [typingTimeout]);

 

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F3F7FA'}}>
      <Animated.View>
        <Header headertext={'Location'} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputBox}
            // multiline={true}
            numberOfLines={1}
            scrollEnabled={true}
            maxLength={43}
            placeholder="Search"
            value={searchText}
            horizontal
            onChangeText={handleSearchTextChange}></TextInput>
          <TouchableOpacity
            style={styles.crossContainer}
            onPress={handlePressCrossBtn}>
            <Cross width={11} height={11} />
          </TouchableOpacity>
        </View>
      </Animated.View>

      {isloading ? (
        <LoaderIndicator />
      ) : (
        <ScrollView keyboardShouldPersistTaps="always">
          <View
            style={{
              height: 481,
              marginTop: 4,
              marginHorizontal: 20,
              marginTop: 20,
            }}>
            <View>
              <TouchableOpacity
                style={styles.dropDownList1}
                onPress={requestLocationPermission}>
                <View>
                  <Target />
                </View>

                <View>
                  <Text style={styles.locationMainText}>Current Location</Text>
                  <Text style={styles.locationSecondaryText}>Using GPS</Text>
                </View>
              </TouchableOpacity>
            </View>

            {showSuggestions && predictions?.map(prediction => {
              return (
                <View key={prediction.place_id} horizontal>
                  <TouchableOpacity
                    style={styles.dropDownList2}
                    key={prediction.place_id}
                    onPress={() => handlePredictionSelect(prediction)}>
                    <View>
                      <Pin />
                    </View>

                    <ScrollView keyboardShouldPersistTaps="always">
                      <Text style={styles.locationMainText}>
                        {prediction.structured_formatting.main_text}
                      </Text>
                      <Text style={styles.locationSecondaryText}>
                        {prediction.structured_formatting.secondary_text}
                      </Text>
                    </ScrollView>
                  </TouchableOpacity>
                </View>
              );
            })}

            {/* when no results found */}
            {predictions.length === 0 &&
            searchText.length > 3 &&
            getCurrentAddress === '' ? (
              <Text style={styles.locationSecondaryText}>No Results found</Text>
            ) : null}
          </View>
        </ScrollView>
      )}
      {/* {showSuggestions && (
        <ScrollView>
          <View
            style={{
              height: 481,
              marginTop: 4,
              marginHorizontal: 20,
              marginTop: 20,
            }}>
            <View>
              {predictions.length !== 0 ? (
                <TouchableOpacity
                  style={styles.dropDownList1}
                  onPress={requestLocationPermission}>
                  <View>
                    <Target />
                  </View>

                  <View>
                    <Text style={styles.locationMainText}>
                      Current Location
                    </Text>
                    <Text style={styles.locationSecondaryText}>Using GPS</Text>
                  </View>
                </TouchableOpacity>
              ) : null}
            </View>

            {predictions?.map(prediction => {
              return (
                <View key={prediction.place_id} horizontal>
                  <TouchableOpacity
                    style={styles.dropDownList2}
                    key={prediction.place_id}
                    onPress={() => handlePredictionSelect(prediction)}>
                    <View>
                      <Pin />
                    </View>

                    <ScrollView>
                      <Text style={styles.locationMainText}>
                        {prediction.structured_formatting.main_text}
                      </Text>
                      <Text style={styles.locationSecondaryText}>
                        {prediction.structured_formatting.secondary_text}
                      </Text>
                    </ScrollView>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>
      )} */}
    </SafeAreaView>
  );
};
//  {"description": "Bangalore, Karnataka, India",
//     "matched_substrings": [{"length": 4, "offset": 0}],
//     "place_id": "ChIJbU60yXAWrjsR4E9-UejD3_g",
//    "reference": "ChIJbU60yXAWrjsR4E9-UejD3_g",
//   "structured_formatting": {"main_text": "Bangalore", "main_text_matched_substrings": [[Object]], "secondary_text":
//                             "Karnataka, India"},
// "terms": [{"offset": 0, "value": "Bangalore"}, {"offset": 11, "value": "Karnataka"}, {"offset": 22, "value": "India"}],
// "types": ["locality", "political", "geocode"]}

const styles = StyleSheet.create({
  inputContainer: {
    height: 48,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E3E9ED',
    marginTop: 20,
    marginHorizontal: 20,
  },

  inputBox: {
    marginLeft: 20,
    fontSize: 16,
    fontFamily: 'ProximaNova-Regular',
    flex: 1,
    lineHeight: 16 * 1.4,
  },
  crossContainer: {
    width: 30,
    height: 30,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  dropDownList1: {
    height: 55,
    width: '100%',
    borderBottomWidth: 1,
    flexDirection: 'row',
    gap: 12,
    borderColor: '#E3E9ED',
    alignItems: 'center',
  },

  dropDownList2: {
    height: 55,
    borderColor: '#E3E9ED',

    width: '100%',
    // borderWidth: 1,
    flexDirection: 'row',
    gap: 12,
    borderBottomWidth: 1,
    marginTop: 16,
    alignItems: 'center',
  },

  locationMainText: {
    fontWeight: 400,
    fontSize: 16,
    color: '#292F3B',
    lineHeight: 16 * 1.4,
    letterSpacing: 0.32,
  },
  locationSecondaryText: {
    fontWeight: 400,
    fontSize: 13,
    color: '#4F565E',
    lineHeight: 16,
    letterSpacing: 0.32,
  },
});

export default Location;
