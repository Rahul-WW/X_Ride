import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
const {width} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import OnboardArrow1 from "../svgImages/OnboardArrow1.svg"
import OnboardArrow2 from '../svgImages/OnboardArrow2.svg';

const XBtn = ({Btnwidth, textInsideBtn, goTo, disability}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(goTo);
  };
  return (
    <Pressable onPress={handlePress} disabled={disability}>
      <View
        style={{
          height: 48,
          borderRadius: 16,
          width: Btnwidth,
        }}>
        <LinearGradient
          locations={[0, 1]}
          colors={['#00c96d', '#048ad7']}
          useAngle={true}
          angle={90}
          style={{borderRadius: 16}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 8,
              borderRadius: 16,
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 48,
              }}>
              <Text
                style={{
                  color: 'white',
                  alignItems: 'center',
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: 600,
                  fontFamily: 'ProximaNova3',
                  letterSpacing: 0.32,
                  lineHeight: 16,
                }}>
                {textInsideBtn}
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                gap: 10,
                lineHeight: 16,
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <OnboardArrow1 />
              <OnboardArrow2 />
            </View>
          </View>
        </LinearGradient>
      </View>
    </Pressable>
  );
};


export default XBtn;
