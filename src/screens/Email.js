import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Pressable,
  Dimensions,
  Animated,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import HeaderDrawerScreens from '../components/HeaderDrawerScreens';
import LinearGradient from 'react-native-linear-gradient';
import InputField from '../components/InputField';
import MobileIcon from '../svgImages/MobileIcon.svg';
import WhatsWrong from "../svgImages/WhatsWrong.svg"
import Issue from "../svgImages/Issue.svg"
const Email = ({navigation, route}) => {

  const {from} = route.params;

  const handleSubmit=()=>{

  }
  return (
    <SafeAreaView
      style={{backgroundColor: '#F3F7FA', flex: 1, position: 'relative'}}>
      <Animated.View>
        <HeaderDrawerScreens
          headertext={'Email'}
          backto={from}
          navigation={navigation}
        />
      </Animated.View>
      <ScrollView style={{marginHorizontal: 20}}>
        <View style={styles.container}>
          <View style={{height: 84, }}>
            <View style={{marginBottom: 12}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: '#292F3B',
                  lineHeight: 20 * 1.4,
                  letterSpacing: 0.32,
                }}>
                Tell us how can we help you ?
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  color: '#4F565E',
                  lineHeight: 16 * 1.4,
                  letterSpacing: 0.32,
                }}>
                Please let us know the necessary details as requested below
              </Text>
            </View>
          </View>

          <View style={{height: 302,  marginTop: 24}}>
            <View style={{height: 56, marginBottom: 20}}>
              <InputField
                Icon={<MobileIcon />}
                placeholder={'Contact Number'}
              />
            </View>
            <View style={{height: 56, marginBottom: 20}}>
              <InputField Icon={<WhatsWrong />} placeholder={"What's wrong?"} />
            </View>
            <View style={{height: 150, marginBottom: 20}}>
              <InputField Icon={<Issue />} placeholder={"Issue Details"} />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* <View style={styles.footer}>
        <View style={styles.footerContainer}>
          <View
            style={{
              paddingLeft: 8,
              flexDirection: 'row',
              alignSelf: 'center',
              gap: 8,
            }}></View>
        </View>
      </View> */}
      <View style={styles.submitBtn}>
        <SubmitBtn
          Btnwidth={'100%'}
          textInsideBtn="SUBMIT"
          handleSubmit={handleSubmit}
        />
      </View>
    </SafeAreaView>
  );
};
const SubmitBtn = ({Btnwidth, textInsideBtn, handleSubmit}) => {
  return (
    <Pressable onPress={handleSubmit}>
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
          style={{borderRadius: 20}}>
          <View
            style={{
              flexDirection: 'row',
              textAlign: 'center',
              justifyContent: 'center',
              gap: 8,
              borderRadius: 20,
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
    </Pressable>
  );
};

const styles = StyleSheet.create({
  submitBtn: {
    width: '100%',
    backgroundColor: 'white',
    height: 72,

    paddingTop: 12,
    paddingHorizontal: 20,

    paddingBottom: 12,
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  container: {
    marginTop: 20,

    width: '100%',
    marginBottom: 209,
   

  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 72,
    backgroundColor: 'white',
  },
  footerContainer: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 12,
    justifyContent: 'space-between',
  },
});

export default Email;
