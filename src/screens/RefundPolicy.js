import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Animated,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';

const RefundPolicy = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Animated.View>
        <Header headertext={'Refund Policy'} />
      </Animated.View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.aboutCompany}>
            <View>
              <Text style={styles.aboutCompanyText}>Refund Policy</Text>
            </View>

            <View style={{marginTop: 8}}>
              <Text style={styles.paragraph1}>100% refund guarantee</Text>
            </View>
            <View style={{marginTop: 32}}>
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
            <View style={{marginTop: 32}}>
              <Text style={[styles.paragraph1]}>Booking cancellations</Text>
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
            <View style={{marginTop: 32}}>
              <Text style={[styles.paragraph1]}>Fee and refunds on bookin cancellations</Text>
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
    letterSpacing: 0.32,
    fontFamily: 'ProximaNovaMedium',
    lineHeight: 18* 1.4,
  },

  termsAndCondition: {
    marginTop: 32,
  },
});
export default RefundPolicy;
