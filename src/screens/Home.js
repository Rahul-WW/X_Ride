import React, {
  useState,
  useContext,
  createContext,
  useRef,
  useEffect,
} from 'react';

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
  Alert,
  Animated,
} from 'react-native';

import CheckBox from 'react-native-check-box';
import LinearGradient from 'react-native-linear-gradient';
import {FontSize, Color, FontWeight} from '../../GlobalStyles';
import InputField from '../components/InputField';
import InputFieldWithCross from '../components/InputFieldWithCross';
const {width, height} = Dimensions.get('window');
import {NavigationContainer, NavigationContext} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PickupIcon from '../svgImages/PickupIcon.svg';
import DropIcon from '../svgImages/DropIcon.svg';
import ViaRouteIcon from '../svgImages/ViaRouteIcon.svg';
import Name2 from '../svgImages/Name2.svg';
import TimePicker from '../svgImages/TimePicker.svg';
import Cross from '../svgImages/Cross.svg';
import CheckedCB from '../svgImages/CheckedCB.svg';
import UncheckBox from '../svgImages/UncheckBox.svg';
import Via from '../svgImages/Via.svg';
import MenuIcon from '../svgImages/MenuIcon.svg';
import Xlogo from '../svgImages/Xlogo.svg';
import Bell from '../svgImages/Bell.svg';

const DrawerNavigationContext = createContext();

import XBtnWithoutArrow from '../components/XBtnWithoutArrow';

const Home = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);
  // const [showViaRouteInput, setShowViaRouteInput] = useState(true);

  const [count, setCount] = useState(0);

  //this function is for increasing the Via Routes
  const incrementCount = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  // this function is used to decrease the Via Routes
  const handleHideRouteInput = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  //this is for checkbox
  const handleCheckBox = () => {
    setIsChecked(!isChecked);
    
  };




  return (
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      <Animated.View>
        <View style={styles.logoBox}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <View style={styles.menulogo}>
              <MenuIcon width={24} height={24} />
            </View>
          </TouchableOpacity>
          <View style={styles.xlogo}>
            <Xlogo width={84} height={28} />
          </View>
          <View style={styles.belllogo}>
            <Bell width={24} height={24} />
          </View>
        </View>
      </Animated.View>
      <ScrollView style={{backgroundColor: '#F3F7FA'}}>
        <View
          style={{
            backgroundColor: '#F3F7FA',
          }}>
          <View style={styles.backGround}>
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
                      Icon={<PickupIcon width={20} height={24} />}
                    />
                  </Pressable>
                </View>

                <View style={styles.line}></View>

                <View style={styles.viaRouteBox}>
                  <View style={styles.viaSmallbox}>
                    <TouchableOpacity onPress={incrementCount}>
                      <Via width={16} height={16} />
                    </TouchableOpacity>

                    <Text style={styles.viaText}>Via</Text>
                  </View>

                  {Array(count)
                    .fill()
                    .map((_, i) => (
                      <View
                        key={i}
                        style={[styles.inputDivs, styles.inputDiv2]}>
                        <InputFieldWithCross
                          placeholder="Via Route"
                          Icon={<ViaRouteIcon width={20} height={24} />}
                          Icon2={<Cross width={11} height={11} />}
                          handleHideRouteInput={handleHideRouteInput}
                        />
                      </View>
                    ))}
                </View>

                {Array(count)
                  .fill()
                  .map((_, i) => (
                    <View key={i} style={styles.line2}></View>
                  ))}
                {/* {showViaRouteInput && <View style={styles.line2}></View>} */}
                {count !== 0 ? <View style={styles.line2}></View> : null}

                <View style={[styles.inputDivs, styles.inputDiv3]}>
                  <InputField
                    placeholder="Drop Location"
                    Icon={<DropIcon width={20} height={24} />}
                  />
                </View>
                <View style={[styles.inputDivs, styles.inputDiv4]}>
                  <InputField
                    placeholder="Pickup Date and Time"
                    Icon={<TimePicker width={24} height={24} />}
                  />
                </View>
                <View style={[styles.inputDivs, styles.inputDiv5]}>
                  <InputField
                    placeholder="Passengers"
                    Icon={<Name2 width={20} height={20} />}
                  />
                </View>

                <View style={styles.checkBoxDiv}>
                  <CheckBox
                    style={{
                      width: 20,
                      height: 20,
                      borderColor: 'red',
                      marginTop: 2,
                      marginLeft: 2,
                    }}
                    isChecked={isChecked}
                    onClick={handleCheckBox}
                    // onClick={setIsChecked}
                    checkedImage={<CheckedCB width={18} height={18} />}
                    unCheckedImage={<UncheckBox width={19} height={19} />}
                  />
                  <View style={styles.checkboxTextDiv}>
                    <Text style={styles.checkboxText}>Need Return Booking</Text>
                  </View>
                </View>
                {isChecked && (
                  <View style={[styles.inputDivs, styles.inputDiv6]}>
                    <InputField
                      placeholder="Return Date and Time"
                      Icon={<TimePicker width={24} height={24} />}
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
          {/* <View style={{height:500, width:100, borderWidth:1, marginHorizontal:40 }}></View> */}
        </View>
      </ScrollView>
      <View style={styles.getQuotesDiv}>
        <Pressable
          onPress={() => {
            if (isChecked) {
              navigation.navigate('Quotes', {showReturnJourney: isChecked});
            } else {
              navigation.navigate('QuotesForPickupOnly', {
                showReturnJourney: isChecked,
              });
            }
          }}>
          <GetQuotesBtn Btnwidth={'100%'} textInsideBtn="GET QUOTES" />
        </Pressable>
      
      </View>
    </SafeAreaView>
  );
};


const GetQuotesBtn=({Btnwidth, textInsideBtn})=>{
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
}
const styles = StyleSheet.create({
  backGround: {
    backgroundColor: '#F3F7FA',
    // borderColor: 'red',
    //  borderWidth: 1,
    marginBottom: 80,
  },
  viaText: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 16 * 1.4,
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

    height: 23,
    alignItems: 'center',
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
    top: 133,
    zIndex: 1,
  },

  checkBoxDiv: {
    height: 22,
    marginTop: 22,
    width: 186,
    flexDirection: 'row',
    marginBottom: 20,

    alignContent: 'center',
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
