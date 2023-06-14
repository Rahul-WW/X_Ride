import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');
import GoBackWhiteBtn from './GoBackWhiteBtn';


const Header = ({headertext}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          height: 54,
          backgroundColor: '#292F3B',
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: 28,
            marginHorizontal: 16,
            marginTop: 13,
            alignItems: 'center',
            gap: 12,
          }}>
          <View style={{padding: 8}}>
            <GoBackWhiteBtn />
          </View>

          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 18,
              fontWeight: 500,
              fontFamily: 'ProximaNova',
              letterSpacing: 0.32,

              lineHeight: 18 * 1.4,
            }}>
            {headertext}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
