import {
  View,
  Text,
  Image,
  Button,
  Linking,
  StatusBar,
  Animated,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';
import React from 'react';
import Xlogo from '../svgImages/Xlogo.svg';
import DrawerCross from '../svgImages/DrawerCross.svg';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProfileEdit from '../svgImages/ProfileEdit.svg';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
const {width}= Dimensions.get("window")
import Home from "../svgImages/Home.svg"
import Mybooking from "../svgImages/Mybooking.svg"
import PaymentHistory from "../svgImages/PaymentHistory.svg"
import Support from "../svgImages/Support.svg"
import About from "../svgImages/About.svg"
import Logout from "../svgImages/Logout.svg"
import ArrowSidebar from "../svgImages/ArrowSidebar.svg"


const CustomDrawer = props => {
  return (
    <SafeAreaView style={{flex: 1, width: '100%'}}>
      <Animated.View>
        <View style={styles.headerBox}>
          <View style={styles.headerContent}>
            <View>
              <Xlogo width={84} height={28} />
            </View>
            <View style={{height: 24, width: 24}}>
              <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
                <DrawerCross />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Animated.View>
      <ScrollView>
        <View style={styles.profileContainer}>
          <View style={styles.profileBox}>
            <View>
              <Image
                style={styles.profileImage}
                source={{
                  uri: 'https://images.unsplash.com/photo-1595290293434-555d42427e84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXw5NDUyNDk0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                }}
              />
            </View>

            <TouchableOpacity
              onPress={() => props.navigation.navigate('Profile')}>
              <View style={styles.nameAndCross}>
                <View style={{width: '64%'}}>
                  <ScrollView vertical>
                    <Text style={styles.text1}>Jaslin Jay</Text>
                    <Text style={styles.text2}>jaslin@gmail.com</Text>
                    <Text style={styles.text3}>9738025545</Text>
                  </ScrollView>
                </View>
                <View>
                  <ProfileEdit />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.horizontalLine}></View>

        <View style={styles.srceensBox}>
          {/* home route */}
          <View style={styles.iconRouteBox}>
            <Home />
            <Text style={styles.title}>Home</Text>
          </View>

          {/* mybooking route */}

          <TouchableOpacity
            onPress={() => props.navigation.navigate('Mybookings')}>
            <View style={styles.screenBox2}>
              <View
                style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
                <Mybooking />
                <Text style={styles.title}>My Bookings</Text>
              </View>
              <View style={styles.arrowBox}>
                <ArrowSidebar />
              </View>
            </View>
          </TouchableOpacity>

          {/* Payment history route */}
          <TouchableOpacity
            onPress={() => props.navigation.navigate('PaymentHistory')}>
            <View style={styles.screenBox2}>
              <View
                style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
                <PaymentHistory />
                <Text style={styles.title}>Payment History</Text>
              </View>
              <View style={styles.arrowBox}>
                <ArrowSidebar />
              </View>
            </View>
          </TouchableOpacity>

          {/* support route */}
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Support')}>
            <View style={styles.screenBox2}>
              <View
                style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
                <Support />
                <Text style={styles.title}>Suppport</Text>
              </View>
              <View style={styles.arrowBox}>
                <ArrowSidebar />
              </View>
            </View>
          </TouchableOpacity>

          {/* About route */}
          <View style={styles.screenBox2}>
            <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
              <About />
              <Text style={styles.title}>About</Text>
            </View>
            <View style={styles.arrowBox}>
              <ArrowSidebar />
            </View>
          </View>
          {/* Logout route */}
          <View style={styles.screenBox2}>
            <View style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
              <Logout />
              <Text style={styles.title}>Logout</Text>
            </View>
            <View style={styles.arrowBox}>
              <ArrowSidebar />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  xlogo: {
    marginTop: 13,
    marginBottom: 13,
  },
  horizontalLine: {
    backgroundColor: '#E3E9ED',
    marginTop: 20,
    height: 1,
    marginBottom: 24,
  },
  profileContainer: {
    
    marginRight: 20,
    marginLeft: 20,
  },
  profileBox: {
    width: '100%',
    height: 66,

    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  profileImage: {width: 60, height: 60, borderRadius: 40},
  nameAndCross: {
    height: '100%',
    width: '72%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text1: {
    fontSize: 16,
    fontWeight: 400,
    color: '#292F3B',
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
  },
  text2: {
    fontWeight: 400,
    fontSize: 14,
    color: '#4F565E',
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
  },
  text3: {
    fontWeight: 400,
    fontSize: 14,
    color: '#4F565E',
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
  },
  headerBox: {
    height: 54,
    backgroundColor: '#292F3B',
    width: '100%',

    paddingVertical: 13,
  },
  headerContent: {
    flexDirection: 'row',

    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  srceensBox: {
    
    marginHorizontal: 20,
    height: 264,
  },
  iconRouteBox: {
    height: 24,
    
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  title: {fontSize: 16, fontWeight: 400, color: '#4F565E'},
  screenBox2: {
    marginTop: 24,
    height: 24,
   
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrowBox: {
    height: 24,
    width: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomDrawer;
