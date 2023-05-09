import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

const CompletedBtn = ({color, handlepress, text}) => {

  return (
    <Pressable style={{width: '50%'}} onPress={handlepress}>
      {color === true ? (
        <View>
          <View
            style={{
              backgroundColor: 'white',
              borderColor: '#4F565E',
              borderBottomRightRadius: 16,
              borderTopRightRadius: 16,
              borderWidth: 1,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignSelf: 'center',
                marginVertical: 11,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: 500,

                  letterSpacing: 0.32,
                  lineHeight: 18 * 1.3,
                  color: '#4F565E',
                }}>
                {text}
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <LinearGradient
          locations={[0, 1]}
          colors={['#00c96d', '#048ad7']}
          useAngle={true}
          angle={90}
          style={{
            borderBottomRightRadius: 16,
            borderTopRightRadius: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignSelf: 'center',
              marginVertical: 11,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 500,
                fontFamily: 'ProximaNova-Regular',
                letterSpacing: 0.32,
                lineHeight: 18 * 1.4,
                color: '#FFFFFF',
              }}>
              {text}
            </Text>
          </View>
        </LinearGradient>
      )}
    </Pressable>
  );
}

export default CompletedBtn

