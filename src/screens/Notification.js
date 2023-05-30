import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Dimensions,
  Animated,
  Button,
  StyleSheet,
} from 'react-native';
import React from 'react';
import HeaderDrawerScreens from '../components/HeaderDrawerScreens';
import Header from '../components/Header';
import SingleNotification from '../svgImages/SingleNotification.svg';

const notification = [
  {text1: 'Booking Confirmed', text2: 'Vendor approved your booking'},
  {text1: 'Payment', text2: 'Your transaction is complete'},
  {text1: 'Booking Cancelled', text2: 'Vendor cancelled your booking'},
  {text1: 'Promotion', text2: 'You received voucher worth 20. '},
  {text1: 'Booking Confirmed', text2: 'Vendor approved your booking'},
  {text1: 'Payment', text2: 'Your transaction is complete'},
  {text1: 'Booking Cancelled', text2: 'Vendor cancelled your booking'},
  {text1: 'Promotion', text2: 'You received voucher worth 20. '},
  {text1: 'Payment', text2: 'Your transaction is complete'},
  {text1: 'Booking Cancelled', text2: 'Vendor cancelled your booking'},
  {text1: 'Promotion', text2: 'You received voucher worth 20. '},
];

const Notification = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Animated.View>
        <Header headertext={'Notification'} />
      </Animated.View>
      <ScrollView>
        <View style={styles.container}>
            {
                notification.map((e,i)=>{
                    return (
                      <View style={styles.singleContainer} key={i}>
                        <View style={{marginLeft: 20}}>
                          <SingleNotification />
                        </View>
                        <View style={styles.rightPartOfSingleContainer}>
                          <Text
                            style={styles.text1}>
                            {e.text1}
                          </Text>
                          <Text
                            style={styles.text2}>
                            {e.text2}
                          </Text>
                        </View>
                      </View>
                    );
                })
            }
         
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    
    marginHorizontal: 20,
    marginTop: 20,
  },
  singleContainer: {
    height: 81,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E3E9ED',
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  rightPartOfSingleContainer: {
    
  },
  text1: {
    fontSize: 18,
    fontWeight: 500,
    color: '#292F3B',
    letterSpacing: 0.32,
    lineHeight: 18 * 1.4,
  },
  text2: {
    fontSize: 16,
    fontWeight: 400,
    color: '#4F565E',
    letterSpacing: 0.32,
    lineHeight: 18 * 1.4,
  },
});

export default Notification;
