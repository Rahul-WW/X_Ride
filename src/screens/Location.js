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
} from 'react-native';
import GoBackBtn from '../components/GoBackBtn';
import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Cross from '../svgImages/Cross.svg';
import {Google_Api_Key} from '@env';
import Pin from '../svgImages/Pin.svg';
import GpsDot from "../svgImages/GpsDot.svg"
import GpsCircle from "../svgImages/GpsCircle.svg"
import Target from "../svgImages/Target.svg"

const Location = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [predictions, setPredictions] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleSearchTextChange = text => {
    
    setSearchText(text);
    setShowSuggestions(true);

    // Clear the previous timeout
    clearTimeout(typingTimeout);

    const newTypingTimeout = setTimeout(() => {
      fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${Google_Api_Key}&input=${text}`,
      )
        .then(response => response.json())
        .then(data => {
          setPredictions(data.predictions);
          console.log(data.predictions);
        Keyboard.dismiss();
        })
        .catch(error => {
          console.error('Error fetching predictions:', error);
        });
    }, 2000);

    setTypingTimeout(newTypingTimeout);
   
  };

  const handlePredictionSelect = prediction => {

    console.log(
      prediction.structured_formatting.main_text,
      prediction.structured_formatting.secondary_text,
    );

    console.log(prediction.structured_formatting.main_text.length);

    let finalTextToDIsplay=prediction.structured_formatting.main_text+" "+prediction.structured_formatting.secondary_text;

    if(finalTextToDIsplay.length <= 35){
        setSearchText(finalTextToDIsplay)
    }else{
      let subString=finalTextToDIsplay.substring(0, 35)
      setSearchText(subString+"...")
    }
    
    setShowSuggestions(false);
   navigation.goBack()
    
  };

  const handlePressCrossBtn=()=>{
    setShowSuggestions(false)
    setSearchText("")
  }

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
            multiline={true}
            numberOfLines={1}
            // scrollEnabled={true}
            maxLength={43}
            placeholder="Search"
            value={searchText}
            onChangeText={handleSearchTextChange}></TextInput>
          <TouchableOpacity
            style={styles.crossContainer}
            onPress={handlePressCrossBtn}>
            <Cross />
          </TouchableOpacity>
        </View>
      </Animated.View>
      {showSuggestions ? (
        <ScrollView>
          <View
            style={{
              height: 481,
              marginTop: 4,
              marginHorizontal: 20,
              marginTop: 20,
            }}>
            <TouchableOpacity style={styles.dropDownList1}>
              <View >
                <Target/>
              </View>

              <View >
                <Text style={styles.locationMainText}>Current Location</Text>
                <Text style={styles.locationSecondaryText}>Using GPS</Text>
              </View>
            </TouchableOpacity>
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

                    <View>
                      <Text style={styles.locationMainText}>
                        {prediction.structured_formatting.main_text}
                      </Text>
                      <Text style={styles.locationSecondaryText}>
                        {prediction.structured_formatting.secondary_text}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}

            {/* <Modal
          visible={showSuggestions}
          animationType="slide"
          transparent
          onRequestClose={() => setShowSuggestions(false)}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}>
            <View style={{backgroundColor: 'white', padding: 10}}>
              {predictions.map(prediction => (
                <TouchableOpacity
                  key={prediction.place_id}
                  onPress={() => handlePredictionSelect(prediction)}>
                  <Text>{prediction.description}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Modal> */}
          </View>
        </ScrollView>
      ) : null}
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
    width: 20,
    height: 20,
    marginRight: 20,
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
