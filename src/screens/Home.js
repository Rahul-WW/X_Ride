import React, {useState, useContext, createContext } from 'react';

import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Button,
  Image,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Alert
} from 'react-native';

import CheckBox from 'react-native-check-box';

import {FontSize, Color, FontWeight} from '../../GlobalStyles';
import InputField from '../components/InputField';
import InputFieldWithCross from '../components/InputFieldWithCross';
const {width, height} = Dimensions.get('window');
import {NavigationContainer, NavigationContext} from '@react-navigation/native';

const DrawerNavigationContext = createContext();


import XBtnWithoutArrow from '../components/XBtnWithoutArrow';





const Home = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [showViaRouteInput, setShowViaRouteInput] = useState(true);

  const handleHideRouteInput = () => {
    setShowViaRouteInput(false);
  };


  
 

  return (
    <ScrollView style={{backgroundColor: '#F3F7FA'}}>
      <SafeAreaView
        style={{
          position: 'relative',
          height,
          backgroundColor: '#F3F7FA',
          flex: 1,
        }}>
        <View style={styles.backGround}>
          <View style={styles.logoBox}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Image
                style={styles.menulogo}
                source={require('../images/menuIcon.png')}
              />
            </TouchableOpacity>

            <Image
              style={styles.xlogo}
              source={require('../images/xLogo.png')}
            />
            <Image
              style={styles.belllogo}
              source={require('../images/bellIcon.png')}
            />
          </View>
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <ImageBackground
                style={styles.imageOnHome}
                resizeMode="cover"
                source={require('../images/imageOnHome.png')}>
                <Text style={styles.textOnImage}>Book Your Ride!</Text>
              </ImageBackground>
            </View>
            <View style={styles.lowercontainer}>
              <View style={styles.inputDivs}>
                <Pressable onPress={() => navigation.navigate('Location')}>
                  <InputField
                    placeholder="Pickup Location"
                    source={require('../images/pickupIcon.png')}
                  />
                </Pressable>
              </View>

              <View style={styles.line}></View>

              <View style={styles.viaRouteBox}>
                <View style={styles.viaSmallbox}>
                  <TouchableOpacity onPress={() => setShowViaRouteInput(true)}>
                    <Image source={require('../images/viaIcon.png')} />
                  </TouchableOpacity>

                  <Text style={styles.viaText}>Via</Text>
                </View>

                {showViaRouteInput && (
                  <View style={[styles.inputDivs, styles.inputDiv2]}>
                    <InputFieldWithCross
                      placeholder="Via Route"
                      source={require('../images/viaRouteIcon.png')}
                      source2={require('../images/crossIcon.png')}
                      handleHideRouteInput={handleHideRouteInput}
                    />
                  </View>
                )}
              </View>
              {showViaRouteInput && <View style={styles.line2}></View>}

              <View style={[styles.inputDivs, styles.inputDiv3]}>
                <InputField
                  placeholder="Drop Location"
                  source={require('../images/dropIcon.png')}
                />
              </View>
              <View style={[styles.inputDivs, styles.inputDiv4]}>
                <InputField
                  placeholder="Pickup Date and Time"
                  source={require('../images/dobInputIcon.png')}
                />
              </View>
              <View style={[styles.inputDivs, styles.inputDiv5]}>
                <InputField
                  placeholder="Passengers"
                  source={require('../images/nameInputIcon.png')}
                />
              </View>
              <View style={styles.checkBoxDiv}>
                <CheckBox
                  style={{width: 18}}
                  isChecked={isChecked}
                  onClick={() => setIsChecked(!isChecked)}
                  checkedImage={
                    <Image source={require('../images/checkedCheckBox.png')} />
                  }
                />
                <View style={styles.checkboxTextDiv}>
                  <Text style={styles.checkboxText}>Need Return Booking</Text>
                </View>
              </View>
              {isChecked && (
                <View style={[styles.inputDivs, styles.inputDiv6]}>
                  <InputField
                    placeholder="Return Date and Time"
                    source={require('../images/dobInputIcon.png')}
                  />
                </View>
              )}
            </View>
          </View>
        </View>
        <Button
          onPress={() => navigation.navigate('Mybookings')}
          title="Go to my bookings"
        />
        <Button
          onPress={() => navigation.navigate('Profile')}
          title="go to profile"
        />
        <View style={styles.getQuotesDiv}>
          <XBtnWithoutArrow
            Btnwidth={'100%'}
            textInsideBtn="GET QUOTES"
            goTo="Quotes"
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backGround: {
    backgroundColor: '#F3F7FA',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  viaText: {
    fontWeight: 400,
    fontSize: 16,
  },
  logoBox: {
    width,
    height: 54,
    backgroundColor: '#292F3B',
    position: 'relative',
  },
  xlogo: {
    position: 'absolute',
    height: 28,
    width: 84,
    left: 60,
    top: 13,
  },
  menulogo: {
    position: 'absolute',
    left: 20,
    top: 15,
    width: 24,
    height: 24,
  },
  belllogo: {
    position: 'absolute',
    top: 15,
    bottom: 15,
    right: 20,
  },
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  lowercontainer: {
    marginTop: 20,

    position: 'relative',
  },
  imageContainer: {
    borderRadius: 16,
    position: 'relative',
  },
  imageOnHome: {
    width: '100%',
    overflow: 'hidden',
    borderRadius: 16,
    height: 154,
    resizeMode: 'contain',
  },
  textOnImage: {
    position: 'absolute',
    left: '4.78%',
    top: '77.87%',
    fontSize: 18,
    color: 'white',
    fontFamily: 'ProximaNova-Regular',
    letterSpacing: 0.32,
    lineHeight: 18 * 1.4,
    fontWeight: 600,
  },
  inputDivs: {
    height: 56,
  },
  viaRouteBox: {
    marginTop: 12,
    position: 'relative',
  },
  viaSmallbox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
  },
  inputDiv2: {
    marginTop: 12,
    marginBottom: 8,
  },
  inputDiv3: {
    marginTop: 12,
  },
  inputDiv4: {
    marginTop: 20,
  },
  inputDiv5: {
    marginTop: 20,
  },
  inputDiv6: {
    marginBottom: 20,
  },

  line: {
    height: 70,
    width: 0,
    borderColor: 'black',
    borderStyle: 'dashed',
    borderLeftWidth: 1,
    position: 'absolute',
    left: 32,
    color: '#4F565E',
    top: 44,
    zIndex: 1,
  },
  line2: {
    height: 44,
    width: 0,
    borderColor: 'black',
    borderStyle: 'dashed',
    borderLeftWidth: 1,
    zIndex: 1,
    left: 32,
    color: '#4F565E',
    position: 'absolute',
    top: 132,
    zIndex: 1,
  },

  checkBoxDiv: {
    height: 22,
    marginTop: 20,

    flexDirection: 'row',
    marginBottom: 20,
  },
  checkboxText: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: FontSize.for_caption,
    fontWeight: FontWeight.for_caption,
    color: Color.for_caption,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
  },
  checkboxTextDiv: {
    marginLeft: 8,
  },
  getQuotesDiv: {
    width,
    backgroundColor: 'white',
    height: 72,

    paddingTop: 12,
    paddingHorizontal: 20,

    paddingBottom: 12,
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
});

export default Home;
