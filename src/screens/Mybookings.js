import { View, Text, ScrollView,StyleSheet, SafeAreaView, Alert, Pressable, Dimensions, Animated } from 'react-native'
import React, {useState, useEffect, useRef} from 'react'
import UpcomingBookings from '../components/UpcomingBookings';
import CompletedBookings from '../components/CompletedBookings';
import Header from '../components/Header'
import UpcomingBtn from '../components/UpcomingBtns';
import CompletedBtn from '../components/CompletedBtn';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {height}= Dimensions.get("window")


const UpcomingArray = [
  {
    id: 1,
    pickupLocation: 'Manchester1 Club1 Stadium (M16)',
    pickupTime: '12 PM',
    pickupDate: 'Wed 24 Feb',
    passengerCount: 1,
    price: 1432,
    dropLocation: 'Elland1 Road Stadium, Leed United',
    dropTime: '12 PM',
    dropDate: 'Wed 25 Feb',
  },
  {
    id: 2,
    pickupLocation: 'Manchester2 Club1 Stadium (M16)',
    pickupTime: '12 PM',
    pickupDate: 'Wed 24 Feb',
    passengerCount: 3,
    price: 1432,
    dropLocation: 'Elland1 Road Stadium, Leed United',
    dropTime: '12 PM',
    dropDate: 'Wed 25 Feb',
  },
  {
    id: 3,
    pickupLocation: 'Manchester3 Club1 Stadium (M16)',
    pickupTime: '12 PM',
    pickupDate: 'Wed 24 Feb',
    passengerCount: 1,
    price: 1432,
    dropLocation: 'Elland1 Road Stadium, Leed United',
    dropTime: '12 PM',
    dropDate: 'Wed 25 Feb',
  },
  {
    id: 4,
    pickupLocation: 'Manchester4 Club1 Stadium (M16)',
    pickupTime: '12 PM',
    pickupDate: 'Wed 24 Feb',
    passengerCount: 3,
    price: 1432,
    dropLocation: 'Elland1 Road Stadium, Leed United',
    dropTime: '12 PM',
    dropDate: 'Wed 25 Feb',
  },
  {
    id: 5,
    pickupLocation: 'Manchester5 Club1 Stadium (M16)',
    pickupTime: '12 PM',
    pickupDate: 'Wed 24 Feb',
    passengerCount: 3,
    price: 1432,
    dropLocation: 'Elland1 Road Stadium, Leed United',
    dropTime: '12 PM',
    dropDate: 'Wed 25 Feb',
  },
  {
    id: 6,
    pickupLocation: 'Manchester6 Club1 Stadium (M16)',
    pickupTime: '12 PM',
    pickupDate: 'Wed 24 Feb',
    passengerCount: 3,
    price: 1432,
    dropLocation: 'Elland1 Road Stadium, Leed United',
    dropTime: '12 PM',
    dropDate: 'Wed 25 Feb',
  },
];

const CompletedArray = [
  {
    id: 1,
    pickupLocation: 'Elland1 Road Stadium, Leed United',
    pickupTime: '12 PM',
    pickupDate: 'Wed 25 Feb',
    passengerCount: 3,
    price: 1432,
  },
  {
    id: 2,
    pickupLocation: 'Elland2 Road Stadium, Leed United',
    pickupTime: '12 PM',
    pickupDate: 'Wed 25 Feb',
    passengerCount: 3,
    price: 1432,
  },
  {
    id: 3,
    pickupLocation: 'Elland3 Road Stadium, Leed United',
    pickupTime: '12 PM',
    pickupDate: 'Wed 25 Feb',
    passengerCount: 3,
    price: 1432,
  },
  {
    id: 4,
    pickupLocation: 'Elland4 Road Stadium, Leed United',
    pickupTime: '12 PM',
    pickupDate: 'Wed 25 Feb',
    passengerCount: 3,
    price: 1432,
  },
  {
    id: 5,
    pickupLocation: 'Elland5 Road Stadium, Leed United',
    pickupTime: '12 PM',
    pickupDate: 'Wed 25 Feb',
    passengerCount: 3,
    price: 1432,
  },

];



const Mybookings = ({navigation}) => {
  
  const [bg, setBg]= useState(true)
  const handlepress=()=>{
    
    setBg(!bg)
  }

 




  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F3F7FA'}}>
      <Animated.View>
        <Header headertext={'My Bookings'} />
      </Animated.View>
      <ScrollView style={{backgroundColor: '#F3F7FA'}}>
        <View >
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
                    {
                      UpcomingArray.map((e)=>{
                        return (
                          <View key={e.id}>
                            <UpcomingBookings
                              handleGoToUpcoming={() =>
                                navigation.navigate('UpcomingTrip', {
                                  selectedfromList: e,
                                })
                              }
                              pickupLocation={e.pickupLocation}
                              pickupDate={e.pickupDate}
                              pickupTime={e.pickupTime}
                              dropLocation={e.dropLocation}
                              dropDate={e.dropDate}
                              dropTime={e.dropTime}
                              passengerCount={e.passengerCount}
                              price={e.price}
                              id={e.id}
                            />
                          </View>
                        );
                      })
                    }


                    {/* <View>
                      <UpcomingBookings handleGoToUpcoming={handleGoToUpcoming}/>
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
                    </View> */}
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