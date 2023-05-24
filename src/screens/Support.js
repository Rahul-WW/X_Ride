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
import HeaderDrawerScreens from "../components/HeaderDrawerScreens"

const Support = ({navigation}) => {
    // const {selectedfromList} = route.params;
    // console.log(selectedfromList)
  return (
    <SafeAreaView
      style={{backgroundColor: '#F3F7FA', flex: 1, position: 'relative'}}>
      <Animated.View>
        <HeaderDrawerScreens
          headertext={'Support'}
          backto={'UpcomingTrip'}
          navigation={navigation}
        />
        
      </Animated.View>
      <ScrollView style={{marginHorizontal: 20}}>
        <View style={styles.container}></View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.footerContainer}>
          <View
            style={{
              paddingLeft: 8,
              flexDirection: 'row',
              alignSelf: 'center',
              gap: 8,
            }}></View>
        </View>
      </View>
      {/*First model  popup*/}
      {/* <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <TouchableOpacity style={styles.centeredView2} activeOpacity={1}>
            <View style={styles.modalView}>
              <View
                style={styles.headerBox} // header of the popup
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
                      Cancellation Policy
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
                  <View style={styles.cancellationtimeBox}>
                    <Text style={styles.cancellationText}>
                      Cancellation Time
                    </Text>
                    <Text style={styles.cancellationText}>Refund Amount</Text>
                  </View>
                  <View style={styles.horizontal3}></View>
                  <View style={styles.cancellationTimingAndPriceBox}>
                    <View style={styles.timingAndPriceBox}>
                      <View style={{width: '30%'}}>
                        <Text style={styles.detailsListText}>
                          Befor 6 hours of travel
                        </Text>
                      </View>
                      <View style={styles.cancelPrice}>
                        <Text style={styles.detailsListText}>£ 40</Text>
                      </View>
                    </View>
                    <View style={styles.timingAndPriceBox}>
                      <View style={{width: '35%'}}>
                        <Text style={styles.detailsListText}>
                          Befor 48 hours
                        </Text>
                      </View>
                      <View style={styles.cancelPrice}>
                        <Text style={styles.detailsListText}>£ 80</Text>
                      </View>
                    </View>
                    <View style={styles.timingAndPriceBox2}>
                      <View style={{width: '35%'}}>
                        <Text style={styles.detailsListText}>
                          Befor 5.30 hours of travel
                        </Text>
                      </View>
                      <View style={styles.cancelPrice}>
                        <Text style={styles.detailsListText}>No Refund</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.horizontal3}></View>
                  <View style={styles.note}>
                    <Text style={styles.noteText}>
                      Note: You will get your refund in 5 business days.
                    </Text>
                  </View>
                  <View style={styles.surityBox}>
                    <View
                      style={{
                        borderColor: 'white',
                        height: 44,
                      }}>
                      <Text style={styles.surityText}>
                        Are you sure you want to cancel your ride?
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={styles.resetBox} //bottom part containing buttons
                >
                  <View
                    style={{
                      marginHorizontal: 20,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      height: 48,
                    }}>
                    <Pressable style={{width: 124}}>
                      <LinearGradient
                        colors={['#00c96d', '#048ad7']}
                        useAngle={true}
                        angle={90}
                        style={{borderRadius: 16, padding: 2}}>
                        <TouchableOpacity
                          onPress={() => setModalVisible(!modalVisible)}>
                          <View style={[styles.resetBtn]}>
                            <View>
                              <Text style={styles.resetText}>NO</Text>
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
                        <TouchableOpacity onPress={handlePressConfirmCancel}>
                          <View style={styles.applyFilter}>
                            <Text style={styles.applyText}>Yes, Cancel</Text>
                          </View>
                        </TouchableOpacity>
                      </LinearGradient>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View> */}

      {/*second model  popup*/}
      {/* <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            setModalVisible2(!modalVisible2);
          }}>
          <TouchableOpacity style={styles.centeredView2} activeOpacity={1}>
            <View style={styles.modalView2}>
              <View
                style={styles.headerBox} // header of the popup
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
                      Cancelled Successfully
                    </Text>
                  </View>
                  <View style={{height: 24, width: 24}}>
                    <TouchableOpacity
                      onPress={() => setModalVisible2(!modalVisible2)}>
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
                  <View style={{width: '100%', height: 22}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 400,
                        color: '#4F565E',
                        lineHeight: 16 * 1.4,
                        letterSpacing: 0.32,
                      }}>
                      Hey! Your ride has been cancelled{' '}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      height: 44,

                      marginTop: 12,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 400,
                        color: '#4F565E',
                        lineHeight: 16 * 1.4,
                        letterSpacing: 0.32,
                      }}>
                      £ 40 has been deducted for cancelling too late
                    </Text>
                  </View>
                </View>

                <View
                  style={styles.resetBox} //bottom part containing buttons
                >
                  <View
                    style={{
                      marginHorizontal: 20,
                      height: 48,
                    }}>
                    <CallBtn
                      Btnwidth={'100%'}
                      textInsideBtn={'GET NEW QUOTES'}
                      handleCallBtnPressed={handlePressGetNewQuotes}
                    />
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default Support;
