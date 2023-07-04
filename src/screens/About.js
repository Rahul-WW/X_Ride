import {
  View,
  Text,
  Pressable,
  Image,
  Dimensions,
  Animated,
  Linking,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import GroupStars from '../svgImages/GroupStars.svg';
import Stars5 from '../svgImages/Stars5.svg';
import XBtnWithoutArrow from '../components/XBtnWithoutArrow';
import LinkedIn from '../svgImages/LinkedIn.svg';
import Facebook from '../svgImages/Facebook.svg';
import Instagram from '../svgImages/Instagram.svg';
import Twitter from '../svgImages/Twitter.svg';
import Youtube from '../svgImages/Youtube.svg';
import PrivacyIcon from '../svgImages/PrivacyIcon.svg';
import RefundIcon from '../svgImages/RefundIcon.svg';
import RightBlackArrow from '../svgImages/RightBlackArrow.svg';


const initialImageWidth = 335;
const initialImageHeight = 160;
const aspectRatio = initialImageHeight / initialImageWidth;
let initialWidth = Dimensions.get('window').width - 40;

const About = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Animated.View>
        <Header headertext={'About'} />
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
                and typesetting.Lorem Ipsum is simply dummy text of the printing
                and typesetting.
              </Text>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={[styles.paragraph1, styles.paragraph2]}>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting. Lorem Ipsum is simply dummy text of the printing
                and typesetting.Lorem Ipsum is simply dummy text of the printing
                and typesetting.
              </Text>
            </View>
          </View>

          {/* black box */}
          <View style={styles.rateUsBox}>
            <LinearGradient
              locations={[0, 1]}
              colors={['#4F565E', '#292F3B']}
              useAngle={true}
              angle={223.61}
              style={{borderRadius: 16}}>
              <View
                style={{
                  width: initialWidth,
                  height: 157,
                }}>
                <View
                  style={{
                    marginTop: 16,
                    marginHorizontal: 20,
                    height: 73,
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      height: 48,
                      marginTop: 12.5,
                      marginRight: 12,
                    }}>
                    <Stars5 width={48} height={48} />
                  </View>
                  <View
                    style={{
                      height: '100%',
                      width: '80%',
                    }}>
                    <View
                      style={{
                        height: 25,
                        width: '80%',
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 18,
                          fontWeight: 600,
                          letterSpacing: 0.32,
                          lineHeight: 18 * 1.4,
                          fontFamily: 'ProximaNovaSemibold',
                        }}>
                        Rate Us on Play Store
                      </Text>
                    </View>
                    <View
                      style={{
                        width: 180,
                        marginTop: 4,
                        width: '100%',
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 16,
                          fontWeight: 400,
                          letterSpacing: 0.32,
                          lineHeight: 16 * 1.4,
                          fontFamily: 'ProximaNova',
                        }}>
                        Tell others what do you thing about this app
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    marginHorizontal: 20,
                    marginTop: 12,

                    height: 40,
                  }}>
                  {/* you can Add Onpress in below button and navigate to requered page */}
                  <RateUsBtn />
                </View>
              </View>
            </LinearGradient>
          </View>
          {/* black box end */}

          {/* Social Media Box*/}

          <View style={{height: 85, marginTop: 20}}>
            <View>
              <Text style={styles.aboutCompanyText}>Get Social</Text>
            </View>
            <View
              style={{
                marginTop: 12,

                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              {/* LinkedIn */}
              <Pressable
                style={styles.socialMedSingle}
                onPress={() =>
                  Linking.openURL(
                    'https://www.linkedin.com/company/thewilsonwings',
                  )
                }>
                <LinkedIn />
              </Pressable>
              {/* fb */}
              <Pressable
                style={styles.socialMedSingle}
                onPress={() =>
                  Linking.openURL('https://www.facebook.com/thewilsonwings')
                }>
                <Facebook />
              </Pressable>

              {/* Twitter */}
              <Pressable
                style={styles.socialMedSingle}
                onPress={() =>
                  Linking.openURL('https://twitter.com/thewilsonwings')
                }>
                <Twitter />
              </Pressable>

              {/* Insta */}
              <Pressable
                style={styles.socialMedSingle}
                onPress={() =>
                  Linking.openURL('https://www.instagram.com/thewilsonwings/')
                }>
                <Instagram />
              </Pressable>

              {/*Youtube */}
              <Pressable
                style={styles.socialMedSingle}
                onPress={() =>
                  Linking.openURL('https://www.youtube.com/@wilsonwings')
                }>
                <Youtube />
              </Pressable>
            </View>
          </View>
          {/* Social Media Box Ends*/}

          <View style={styles.policyBox}>
            <View style={styles.policies}>
              <View>
                <View style={{height: 25}}>
                  <Text style={styles.aboutCompanyText}>Useful Links</Text>
                </View>

                <View style={styles.horizontalLne}></View>

                <View style={{height: 64, width: '100%'}}>
                  <Pressable
                    onPress={() => navigation.navigate('PrivacyPolicy')}>
                    <View style={styles.upperPolicyBox}>
                      <View style={{flexDirection: 'row', gap: 12}}>
                        <PrivacyIcon />

                        <Text style={styles.privacyText}>Privacy Policy</Text>
                      </View>
                      <View style={styles.righticon}>
                        <RightBlackArrow />
                      </View>
                    </View>
                  </Pressable>
                  <Pressable
                    onPress={() => navigation.navigate('RefundPolicy')}>
                    <View style={styles.lowerPolicyBox}>
                      <View style={{flexDirection: 'row', gap: 12}}>
                        <RefundIcon />

                        <Text style={styles.privacyText}>Refund Policy</Text>
                      </View>
                      <View style={styles.righticon}>
                        <RightBlackArrow />
                      </View>
                    </View>
                  </Pressable>
                </View>
              </View>
            </View>
            <View style={styles.appVersion}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: '#4F565E',
                  fontFamily: 'ProximaNova',
                }}>
                App Version 1.2
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const RateUsBtn = () => {
  return (
    <Pressable>
      <View
        style={{
          height: 40,

          width: '100%',
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
              borderRadius: 16,
              height: 40,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  alignItems: 'center',
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: 600,
                  fontFamily: 'ProximaNovaSemibold',
                  letterSpacing: 0.32,
                  lineHeight: 18,
                }}>
                RATE US
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F3F7FA',
  },
  container: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 80,
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
  aboutCompany: {
    marginTop: 20,
  },
  paragraph1: {
    fontSize: 16,
    fontWeight: 400,
    color: '#4F565E',
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
    fontFamily: 'ProximaNova',
  },

  rateUsBox: {
    marginTop: 20,
    width: initialWidth,
    height: 157,
  },
  socialMedSingle: {
    height: 48,
    width: 48,
  },
  policies: {
    width: '100%',
    height: 158,
    padding: 20,
    borderColor: '#E3E9ED',
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
  },
  policyBox: {
    width: '100%',
    height: 198,
    marginTop: 20,
  },
  aboutCompanyText: {
    fontSize: 18,
    fontWeight: 500,
    color: '#292F3B',
    letterSpacing: 0.32,
    fontFamily: 'ProximaNovaSemibold',
  },
  horizontalLne: {
    width: '100%',
    backgroundColor: '#E3E9ED',
    height: 1,
    marginTop: 12,
    marginBottom: 16,
  },
  privacyText: {
    color: '#4F565E',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 16 * 1.4,
    letterSpacing: 0.32,
    fontFamily: 'ProximaNova',
  },
  righticon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5.5,
  },
  upperPolicyBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 22,

    marginBottom: 20,
  },
  lowerPolicyBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 22,
  },
  appVersion: {
    marginTop: 20,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default About;
