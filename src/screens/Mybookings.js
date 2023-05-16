import { View, Text, ScrollView,StyleSheet, SafeAreaView, Alert, Pressable, Dimensions, Animated } from 'react-native'
import React, {useState, useEffect, useRef} from 'react'
import UpcomingBookings from '../components/UpcomingBookings';
import CompletedBookings from '../components/CompletedBookings';
import Header from '../components/Header'
import UpcomingBtn from '../components/UpcomingBtns';
import CompletedBtn from '../components/CompletedBtn';

const {height}= Dimensions.get("window")

const Mybookings = () => {

  const [bg, setBg]= useState(true)
  const handlepress=()=>{
    
    setBg(!bg)
  }

  return (
    <SafeAreaView>
      <Animated.View>
        <Header headertext={'My Bookings'} />
      </Animated.View>
      <ScrollView style={{backgroundColor: '#F3F7FA'}}>
        <View style={{backgroundColor: '#F3F7FA'}}>
          <View>
            <View style={styles.container}>
              <View style={styles.togglingBtnsDiv}>
                <UpcomingBtn
                  handlepress={handlepress}
                  color={bg}
                  text={'Upcoming'}
                />
                <CompletedBtn
                  handlepress={handlepress}
                  color={bg}
                  text={'Completed'}
                />
              </View>

              <View>
                {bg === true ? (
                  <View>
                    <View>
                      <UpcomingBookings />
                    </View>
                    <View>
                      <UpcomingBookings />
                    </View>
                    <View>
                      <UpcomingBookings />
                    </View>
                    <View>
                      <UpcomingBookings />
                    </View>
                    <View>
                      <UpcomingBookings />
                    </View>
                    <View>
                      <UpcomingBookings />
                    </View>
                  </View>
                ) : (
                  <View>
                    <View>
                      <CompletedBookings />
                    </View>
                    <View>
                      <CompletedBookings />
                    </View>
                    <View>
                      <CompletedBookings />
                    </View>
                    <View>
                      <CompletedBookings />
                    </View>
                  </View>
                )}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   
    marginHorizontal: 20,
    marginTop: 20,
  },
  togglingBtnsDiv: {
    height: 48,
    marginBottom: 20,
    flexDirection: 'row',
    
  },
});

export default Mybookings