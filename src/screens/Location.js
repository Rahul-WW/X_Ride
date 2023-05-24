import {View, SafeAreaView, Text, Button, StyleSheet, TextInput, Modal, Animated, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import GoBackBtn from '../components/GoBackBtn';
import React, {useState, useEffect} from "react"
import Header from '../components/Header';
import Cross from "../svgImages/Cross.svg"
import API_KEY from './env';



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
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${API_KEY}&input=${text}`,
    )
      .then(response => response.json())
      .then(data => {
        setPredictions(data.predictions);
        console.log(data.predictions);
      })
      .catch(error => {
        console.error('Error fetching predictions:', error);
      });
  }, 2000);

  setTypingTimeout(newTypingTimeout);
};

const handlePredictionSelect = prediction => {
  setSearchText(prediction.description);
  setShowSuggestions(false);
  // Handle the selected prediction here
  console.log('Selected Prediction:', prediction);
  
};

useEffect(() => {
  // Clear the timeout when the component is unmounted
  return () => {
    clearTimeout(typingTimeout);
  };
}, [typingTimeout]);



  return (
    <SafeAreaView style={{flex: 1}}>
      <Animated.View>
        <Header headertext={'Location'} />
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            borderWidth: 1,
           
            alignItems:"center"
          }}>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              padding: 10,
              width: '90%',
            }}
            placeholder="Enter a place"
            value={searchText}
            onChangeText={handleSearchTextChange}
          />
          <TouchableOpacity style={{flexDirection:"row", justifyContent:"center", borderWidth:1}}>
            <Cross />
          </TouchableOpacity>
        </View>
      </Animated.View>

      <ScrollView
        style={{
          marginHorizontal: 20,
        }}>
        <View style={{padding: 10, height: 800, borderWidth: 1}}>
          <View
            style={{
              marginHorizontal: 20,
              borderWidth: 1,
              borderColor: 'red',
              height: 600,
            }}>
            {predictions?.map(prediction => {
              return (
                <TouchableOpacity
                  key={prediction.place_id}
                  onPress={() => handlePredictionSelect(prediction)}>
                  <Text>{prediction.description}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
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
    </SafeAreaView>
  );
};

export default Location;
