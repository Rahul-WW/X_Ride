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

const XBtnWithoutArrow = ({Btnwidth, textInsideBtn, goTo, disability, }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(goTo);
   
  };
   
  return (
    <Pressable onPress={handlePress} disabled={disability}>
      <View
        style={{
          height: 48,
      
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
              textAlign: 'center',
              justifyContent: 'center',
              gap: 8,
              borderRadius: 16,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 48
              }}>
              <Text
                style={{
                  color: 'white',
                  alignItems: 'center',
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: 600,
                  fontFamily: 'ProximaNovaSemibold',
                  letterSpacing: 0.32,
                  
                }}>
                {textInsideBtn}
              </Text>
            </View>

           
          </View>
        </LinearGradient>
      </View>
    </Pressable>
  );
};

export default XBtnWithoutArrow;
