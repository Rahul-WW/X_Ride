import React, {useState}from 'react';

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
 
} from 'react-native';

import CheckBox from 'react-native-check-box';

import {FontSize, Color, FontWeight} from '../../GlobalStyles';
import InputField from '../components/InputField';
import InputFieldWithCross from '../components/InputFieldWithCross';
const {width, height} = Dimensions.get('window');
import XBtn from '../components/XBtn';

const Home = ({navigation}) => {

  const [isChecked, setIsChecked] = useState(false);

  const [showViaRouteInput, setShowViaRouteInput]= useState(true)

  


  const handleHideRouteInput=()=>{
    setShowViaRouteInput(false)
  }




  return (
    <SafeAreaView
      style={{
        position: 'relative',

        height,
        backgroundColor: '#F3F7FA',
        flex: 1,
      }}>
      <View style={styles.backGround}>
        <View style={styles.logoBox}>
          <Image
            style={styles.menulogo}
            source={require('../images/menuIcon.png')}
          />
          <Image style={styles.xlogo} source={require('../images/xLogo.png')} />
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
              <Pressable onPress={()=> navigation.navigate("Location")}>
                <InputField
                  placeholder="Pickup Location"
                  source={require('../images/pickupIcon.png')}
                />
              </Pressable>
            </View>
            <View style={styles.line}></View>
            <View style={styles.viaBox}>
              <TouchableOpacity onPress={() => setShowViaRouteInput(true)}>
                <Image source={require('../images/viaIcon.png')} />
              </TouchableOpacity>

              <Text>Via</Text>
            </View>
            <View style={[styles.inputDivs, styles.inputDivs2]}>
              {showViaRouteInput && (
                <InputFieldWithCross
                  placeholder="Via Route"
                  source={require('../images/viaRouteIcon.png')}
                  source2={require('../images/crossIcon.png')}
                  handleHideRouteInput={handleHideRouteInput}
                />
              )}
            </View>
            <View style={styles.line2}></View>
            <View style={[styles.inputDivs, styles.inputDivs3]}>
              <InputField
                placeholder="Drop Location"
                source={require('../images/dropIcon.png')}
              />
            </View>
            <View style={[styles.inputDivs, styles.inputDivs4]}>
              <InputField
                placeholder="Pickup Date and Time"
                source={require('../images/dobInputIcon.png')}
              />
            </View>
            <View style={[styles.inputDivs, styles.inputDivs5]}>
              <InputField
                placeholder="Passengers"
                source={require('../images/nameInputIcon.png')}
              />
            </View>
            <View style={styles.checkBoxDiv}>
              <CheckBox
                style={{borderColor: 'red', width: 18}}
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
              <View style={[styles.inputDivs]}>
                <InputField
                  placeholder="Return Date and Time"
                  source={require('../images/dobInputIcon.png')}
                />
              </View>
            )}
          </View>
        </View>
      </View>
      <View style={styles.getQuotesDiv}>
        <XBtn Btnwidth={'100%'} textInsideBtn="GET QUOTES" goTo="Quotes" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backGround: {
    backgroundColor: '#F3F7FA',
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
    // fontFamily: 'ProximaNova',
    letterSpacing: 0.32,
    lineHeight: 18 * 1.4,
    fontWeight: 600,
  },
  inputDivs: {
    margintop: 20,
    height: 56,
  },
  inputDivs2: {
    top: 12 + 12 + 22,
    zIndex: -1,
  },
  inputDivs3: {
    top: 12 + 8,
    zIndex: -1,
  },
  inputDivs4: {
    top: 12 + 8 + 20,
  },
  inputDivs5: {
    top: 12 + 8 + 22 + 20,
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
    top: 32,
    position:"relative"
  },
  viaBox: {
    height: 22,
    position: 'absolute',
    right: 0,
    flexDirection: 'row',
    gap: 8,
    top: 68,
  },
  checkBoxDiv: {
    height: 22,
    top: 20,

    marginTop: 20 + 44,
    flexDirection: 'row',
    marginBottom: 32,
    // borderColor:"red",
    // borderWidth:1
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
    position:"absolute",
    left: 0,
    bottom: 0,
  },
});

export default Home;
