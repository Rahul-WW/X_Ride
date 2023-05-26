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
import ChatSupport from "../svgImages/ChatSupport.svg"
import EmailSupport from "../svgImages/EmailSupport.svg"
import FAQ from "../svgImages/FAQ.svg"



const initialImageWidth = 335;
const initialImageHeight = 160;
const aspectRatio = initialImageHeight / initialImageWidth;
let initialWidth = Dimensions.get('window').width - 40;

const Support = ({navigation}) => {
  return (
    <SafeAreaView
      style={{backgroundColor: '#F3F7FA', flex: 1, position: 'relative'}}>
      <Animated.View>
        <HeaderDrawerScreens
          headertext={'Support'}
          backto={'Home'}
          navigation={navigation}
        />
      </Animated.View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../images/AboutImage.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.aboutCompany}>
            <Text style={styles.aboutCompanyText}>About the Company</Text>
            <View style={{marginTop: 8}}>
              <Text style={styles.paragraph1}>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting. Lorem Ipsum is simply dummy text of the printing
                and typesetting.
              </Text>
            </View>
          </View>

          <View style={styles.threeSections}>
            {/* Chat section */}
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ChatSupport', {from: 'Support'})
              }>
              <View style={styles.singleSection}>
                <View>
                  <ChatSupport />
                </View>
                <View>
                  <Text style={styles.text1}>Chats</Text>
                  <Text style={styles.text2}>Start a conversation now!</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* FAQ section */}
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('FAQ', {from: 'Support'})
              }></TouchableOpacity>
            <View style={styles.singleSection}>
              <View>
                <FAQ />
              </View>
              <View>
                <Text style={styles.text1}>FAQ's</Text>
                <Text style={styles.text2}>
                  Find inteliigent answers instantly
                </Text>
              </View>
            </View>
            {/* Email section */}
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Email', {from: 'Support'})
              }></TouchableOpacity>
            <View style={styles.singleSection}>
              <View>
                <EmailSupport />
              </View>
              <View>
                <Text style={styles.text1}>Email</Text>
                <Text style={styles.text2}>Get solutions to your inbox</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 209,
    marginHorizontal: 20,
  },

  imageContainer: {
    width: initialWidth,
    height: initialWidth * aspectRatio,
    borderRadius: 12,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  aboutCompanyText: {
    fontSize: 18,
    fontWeight: 500,
    color: '#292F3B',
    letterSpacing: 0.32,
    lineHeight: 18 * 1.4,
  },
  aboutCompany: {
    marginTop: 20,
  },
  paragraph1: {
    fontSize: 16,
    fontWeight: 400,
    color: '#4F565E',
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
  },
  threeSections: {
    marginTop: 16,
  },
  singleSection: {
    width: '100%',
    height: '100%',
    borderRadius: 16,

    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E3E9ED',
    borderWidth: 1,
    height: 81,
    gap: 16,
    marginBottom: 16,
    paddingLeft: 20,
  },
  text1: {
    fontSize: 18,
    fontWeight: 500,
    color: '#292F3B',
    letterSpacing: 0.32,
    lineHeight: 18 * 1.4,
  },
  text2: {
    color: '#4F565E',
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
  },
});

export default Support;
