import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  StatusBar,
  Pressable,
  Alert,
  Image,
  ImageBackground,
  Button,
  ScrollView
} from 'react-native';


const {width, height} = Dimensions.get('window');

const COLORS = {primary: '#282534', white: '#fff'};
import XBtn from '../components/XBtn';
import Slider1 from "../svgImages/Slider1.svg"

const OnboardingScreen1 = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        position: 'relative',
      }}>
      <ScrollView>
        <View
          style={{
            height,
            width
          }}>
          <ImageBackground
            source={require('../images/OnboardingImage1.png')}
            style={{resizeMode: 'contain', width, height}}>
            {/* main container strts */}
            <View style={styles.container}>
              <View style={styles.titleBox}>
                <Text style={styles.titleText}>
                  Search budget - friendly cabs for your travel destinations
                </Text>
              </View>

              <View style={styles.CaptionBox}>
                <Text style={styles.CaptionText}>
                  Find the convenient and budget friendly cabs to travel around
                  your destinations.
                </Text>
              </View>

              <View style={styles.slideBtn}>
                <Slider1 />
              </View>

              <View style={styles.lowerContainer}>
                <Pressable
                  style={[styles.skip, styles.skipPosition]}
                  onPress={() => navigation.navigate('SignIn')}>
                  <Text style={styles.nextTypo}>Skip</Text>
                </Pressable>
                <Pressable
                  onPress={() => navigation.navigate('OnboardingScreen2')}
                  style={[styles.skip, styles.skipPosition]}>
                  <View>
                    <XBtn
                      Btnwidth={127}
                      textInsideBtn="Next"
                      goTo="OnboardingScreen2"
                    />
                  </View>
                </Pressable>
              </View>
            </View>

            {/* main container ends */}
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 48,
    left: 20,
    right: 20,
  },

  lowerContainer: {
    marginTop: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    alignItems: 'center',
    height: 48,
  },
  nextTypo: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'ProximaNova',
  },

  slideBtn: {
    marginTop: 32,
  },

  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'green',
    marginHorizontal: 3,
    borderRadius: 3,
  },

  titleText: {
    color: 'white',
    fontSize: 23,
    letterSpacing: 0.32,
    lineHeight: 32.2,
    fontWeight: 600,
    fontFamily: 'ProximaNova',
  },

  CaptionBox: {
    top: 12,
  },

  CaptionText: {
    fontWeight: 400,
    color: 'white',
    fontSize: 16,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
    fontFamily: 'ProximaNova',
  },
});


export default OnboardingScreen1