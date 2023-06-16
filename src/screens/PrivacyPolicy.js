import { View, Text, ScrollView, SafeAreaView, Animated, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
const PrivacyPolicy = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Animated.View>
        <Header headertext={'Privacy Policy'} />
      </Animated.View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.aboutCompany}>
            <View>
              <Text style={styles.aboutCompanyText}>About the Company</Text>
            </View>

            <View style={{marginTop: 8}}>
              <Text style={styles.paragraph1}>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting. Lorem Ipsum is simply dummy text of the printing
                and typesetting.Lorem Ipsum is simply dummy text of the printing
                and typesetting.
              </Text>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={[styles.paragraph1]}>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting. Lorem Ipsum is simply dummy text of the printing
                and typesetting.Lorem Ipsum is simply dummy text of the printing
                and typesetting.
              </Text>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={[styles.paragraph1]}>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting. Lorem Ipsum is simply dummy text of the printing
                and typesetting.Lorem Ipsum is simply dummy text of the printing
                and typesetting.
              </Text>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={[styles.paragraph1]}>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting. Lorem Ipsum is simply dummy text of the printing
                and typesetting.Lorem Ipsum is simply dummy text of the printing
                and typesetting.
              </Text>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={[styles.paragraph1]}>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting. Lorem Ipsum is simply dummy text of the printing
                and typesetting.Lorem Ipsum is simply dummy text of the printing
                and typesetting.
              </Text>
            </View>
          </View>
          <View style={styles.termsAndCondition}>
            <View>
              <Text style={styles.aboutCompanyText}>About the Company</Text>
            </View>

            <View style={{marginTop: 8}}>
              <Text style={styles.paragraph1}>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting. Lorem Ipsum is simply dummy text of the printing
                and typesetting.Lorem Ipsum is simply dummy text of the printing
                and typesetting.
              </Text>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={[styles.paragraph1]}>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting. Lorem Ipsum is simply dummy text of the printing
                and typesetting.Lorem Ipsum is simply dummy text of the printing
                and typesetting.
              </Text>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={[styles.paragraph1]}>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting. Lorem Ipsum is simply dummy text of the printing
                and typesetting.Lorem Ipsum is simply dummy text of the printing
                and typesetting.
              </Text>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={[styles.paragraph1]}>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting. Lorem Ipsum is simply dummy text of the printing
                and typesetting.Lorem Ipsum is simply dummy text of the printing
                and typesetting.
              </Text>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={[styles.paragraph1]}>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting. Lorem Ipsum is simply dummy text of the printing
                and typesetting.Lorem Ipsum is simply dummy text of the printing
                and typesetting.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


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

  aboutCompany: {
    // borderColor: 'red',
    // borderWidth: 1,
  },
  paragraph1: {
    fontSize: 16,
    fontWeight: 400,
    color: '#4F565E',
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
    fontFamily: 'ProximaNova',
  },
  aboutCompanyText: {
    fontSize: 18,
    fontWeight: 500,
    color: '#292F3B',
    lineHeight: 18 * 1.4,
    letterSpacing: 0.32,
    fontFamily: 'ProximaNovaMedium',
  },

  termsAndCondition: {
    marginTop: 32,
  },
});

export default PrivacyPolicy


