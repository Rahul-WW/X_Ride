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
  Dimensions, Modal, Pressable, Alert
} from 'react-native';
import React, {useState, useEffect} from 'react';
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
import LinearGradient from 'react-native-linear-gradient';
import LinkedIn from '../svgImages/LinkedIn.svg';
import Facebook from '../svgImages/Facebook.svg';
import Instagram from '../svgImages/Instagram.svg';
import Twitter from '../svgImages/Twitter.svg';
import Youtube from '../svgImages/Youtube.svg';
import LoaderIndicator from '../components/LoaderIndicator';

const CustomDrawer = props => {
   const [isloading, setIsloading] = useState(false);
   const [modalVisible, setModalVisible] = useState(false);
   const translateY = useState(new Animated.Value(300))[0]; // this is to slide the modal slowly

   const openModalPopup=()=>{
     setModalVisible(true)
     Animated.timing(translateY, {
       toValue: 0,
       duration: 600, // Animation duration (1000 ms = 1 sec)
       useNativeDriver: true,
     }).start();
   }
   
    const handlePressLogoutBtn = () => {  
      Animated.timing(translateY, {
        toValue: 300,
        duration: 600, // Animation duration (1000 ms = 1 sec)
        useNativeDriver: true,
      }).start(() => setModalVisible(false)); // Hide the modal in the end of the animation

      Alert.alert('You are logged out ');
    };
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
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            <View style={styles.iconRouteBox}>
              <Home />
              <Text style={styles.title}>Home</Text>
            </View>
          </TouchableOpacity>

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
          <TouchableOpacity onPress={() => props.navigation.navigate('About')}>
            <View style={styles.screenBox2}>
              <View
                style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
                <About />
                <Text style={styles.title}>About</Text>
              </View>
              <View style={styles.arrowBox}>
                <ArrowSidebar />
              </View>
            </View>
          </TouchableOpacity>

          {/* Logout route */}
          <TouchableOpacity onPress={openModalPopup}>
            <View style={styles.screenBox2}>
              <View
                style={{flexDirection: 'row', gap: 12, alignItems: 'center'}}>
                <Logout />
                <Text style={styles.title}>Logout</Text>
              </View>
              <View style={styles.arrowBox}>
                <ArrowSidebar />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.horizontalLine2}></View>
        <View style={styles.followUsBox}>
          <View style={{height: 25}}>
            <Text style={styles.followText}>Follow Us</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 12,
            }}>
            <Pressable
              style={styles.socialMedSingle}
              onPress={() =>
                Linking.openURL(
                  'https://www.linkedin.com/company/thewilsonwings',  // change the url with the websites respective url
                )
              }>
              <LinkedIn width={40} height={40} />
            </Pressable>
            {/* fb */}
            <Pressable
              style={styles.socialMedSingle}
              onPress={() =>
                Linking.openURL('https://www.facebook.com/thewilsonwings')
              }>
              <Facebook width={40} height={40} />
            </Pressable>

            {/* Twitter */}
            <Pressable
              style={styles.socialMedSingle}
              onPress={() =>
                Linking.openURL('https://twitter.com/thewilsonwings')
              }>
              <Twitter width={40} height={40} />
            </Pressable>

            {/* Insta */}
            <Pressable
              style={styles.socialMedSingle}
              onPress={() =>
                Linking.openURL('https://www.instagram.com/thewilsonwings/')
              }>
              <Instagram width={40} height={40} />
            </Pressable>

            {/*Youtube */}
            <Pressable
              style={styles.socialMedSingle}
              onPress={() =>
                Linking.openURL('https://www.youtube.com/@wilsonwings')
              }>
              <Youtube width={40} height={40} />
            </Pressable>
          </View>
        </View>

        {/* logoutPopup */}
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <TouchableOpacity style={styles.centeredView2} activeOpacity={1}>
              <Animated.View
                style={{
                  transform: [
                    {
                      translateY,
                    },
                  ],
                }}>
                <View style={styles.modalView}>
                  <View
                    style={styles.headerBox2} // header of the popup
                  >
                    <View style={styles.headerContent}>
                      <View style={{width: 200, height: 28}}>
                        <Text
                          style={{
                            color: '#FFFFFF',
                            fontSize: 18,
                            fontWeight: 500,
                            letterSpacing: 0.32,
                            lineHeight: 18 * 1.4,
                          }}>
                          Logout
                        </Text>
                      </View>
                      <View style={{height: 24, width: 24}}>
                        <TouchableOpacity
                          onPress={() => setModalVisible(!modalVisible)}>
                          <DrawerCross />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>

                  <View //main container of popup with width 100%
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'relative',
                      flex: 1,
                    }}>
                    <View
                      style={styles.popupContainer} // container with marginHorizontal 20
                    >
                      <Text
                        style={{
                          fontWeight: 500,
                          fontSize: 16,
                          color: '#4F565E',
                          letterSpacing: 0.32,
                          lineHeight: 18 * 1.4,
                        }}>
                        Are you sure you want to logout?
                      </Text>
                    </View>

                    <View
                      style={styles.resetBox} //bottom part containing buttons
                    >
                      <View
                        style={{
                          marginHorizontal: 20,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          gap: 16,
                          height: 48,
                        }}>
                        <Pressable style={{width: 124}}>
                          <LinearGradient
                            colors={['#00c96d', '#048ad7']}
                            useAngle={true}
                            angle={90}
                            style={{borderRadius: 16, padding: 1}}>
                            <TouchableOpacity
                              onPress={() => setModalVisible(!modalVisible)}>
                              <View style={[styles.resetBtn]}>
                                <View>
                                  <Text style={styles.resetText}>CANCEL</Text>
                                </View>
                              </View>
                            </TouchableOpacity>
                          </LinearGradient>
                        </Pressable>
                        <Pressable style={{width: 195}}>
                          <LinearGradient
                            colors={['#00c96d', '#048ad7']}
                            useAngle={true}
                            angle={90}
                            style={{borderRadius: 16}}>
                            <TouchableOpacity onPress={handlePressLogoutBtn}>
                              <View style={styles.applyFilter}>
                                <Text style={styles.applyText}>LOGOUT</Text>
                              </View>
                            </TouchableOpacity>
                          </LinearGradient>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </View>
              </Animated.View>
            </TouchableOpacity>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  followUsBox: {
   
    marginTop: 193,
    height: 77,
    marginHorizontal: 20,
  },
  followText: {
    fontSize: 18,
    fontWeight: 500,
    color: '#292F3B',
    letterSpacing: 0.32,
    lineHeight: 18 * 1.4,
  },
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
  horizontalLine2: {
    backgroundColor: '#E3E9ED',

    height: 1,

    marginTop: 24,
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
  resetBox: {
    width: '100%',
    backgroundColor: 'white',
    height: 72,
    paddingTop: 12,
    position: 'absolute',
    bottom: 0,
  },
  resetBtn: {
    borderRadius: 15,
    backgroundColor: 'white',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetText: {
    fontSize: 16,
    fontWeight: 600,
    color: '#4F565E',
    letterSpacing: 0.32,
  },
  applyFilter: {
    width: '100%',
    height: '100%',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyText: {
    fontSize: 16,
    fontWeight: 600,
    color: '#FFFFFF',
    letterSpacing: 0.32,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  centeredView2: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  modalView: {
    width: Dimensions.get('window').width,
    backgroundColor: '#F3F7FA',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    elevation: 5,
    height: 197,
    borderRadius: 16,
  },
  headerBox2: {
    height: 54,
    backgroundColor: '#292F3B',
    width: '100%',

    paddingVertical: 13,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  headerContent: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cancelPrice: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  popupContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  socialMedSingle: {
    height: 40,
    width: 40,
    
  },
});

export default CustomDrawer;
