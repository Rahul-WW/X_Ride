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
} from 'react-native';
import React from 'react';
import HeaderDrawerScreens from '../components/HeaderDrawerScreens';

const FAQ = ({navigation, route}) => {
  const {from} = route.params;

  
  return (
    <SafeAreaView style={{flex: 1}}>
      <Animated.View>
        <HeaderDrawerScreens
          headertext={'FAQ'}
          navigation={navigation}
          backto={from}
        />
      </Animated.View>
      <ScrollView>
        <View>
          <Text>This is chat support</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FAQ;
