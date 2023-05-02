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
} from 'react-native';

const {width, height} = Dimensions.get('window');

const COLORS = {primary: '#282534', white: '#fff'};

const OnboardingScreen3 = ({navigation}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <ImageBackground
        source={require('../images/OnboardingImage3.png')}
        style={{resizeMode: 'cover', width, height, position: 'relative'}}>
        {/* main container strts */}
        <View style={styles.container}>
          <View style={styles.titleBox}>
            <Text style={styles.titleText}>
              Search budget-friendly cabs for your travel destinations
            </Text>
          </View>

          <View style={styles.CaptionBox}>
            <Text style={styles.CaptionText}>
              find theh convenient and budget friendly cabs to travel around
              your destinations.
            </Text>
          </View>

          <Image
            style={styles.slideBtn}
            source={require('../images/slide3.png')}
          />

          <View style={styles.lowerContainer}>
            <Pressable
              style={[styles.skip, styles.skipPosition]}
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.nextTypo}>Skip</Text>
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('SignUp')}
              style={[styles.skip, styles.skipPosition]}>
              <Image source={require('../images/getStartedBtn.png')} />
            </Pressable>
          </View>
        </View>

        {/* main container ends */}
      </ImageBackground>
    </View>
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
  },
  nextTypo: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'ProximaNova-Regular',
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
    fontFamily: 'ProximaNova-Regular',
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
    fontFamily: 'ProximaNova-Regular',
  },
});

export default OnboardingScreen3;
