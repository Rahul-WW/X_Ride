import { View, Text, SafeAreaView, ScrollView, TouchableOpacity,  StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import GradientText from './GradientText';
const BadScreenComponent = ({svgImage, text1, text2}) => {
  return (
    <View style={{marginTop: 68, alignItems: 'center'}}>
      <View style={{width: '100%', alignItems: 'center'}}>{svgImage}</View>
      
      <View
        style={{
          marginTop: 32,
          width: '100%',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 8,
        }}>
        <GradientText
          style={{
            fontSize: 29,
            fontWeight: 600,
            lineHeight: 29 * 1.4,
            letterSpacing: 0.32,
          }}>
          {text1}
        </GradientText>

        <Text
          style={{
            fontSize: 20,
            fontWeight: 400,
            color: '#4F565E',
            textAlign: 'center',
            lineHeight: 20 * 1.4,
            letterSpacing: 0.32,
          }}>
          {text2}
        </Text>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  maskedView: {
    flexDirection: 'row',
    textAlign: 'center',
  },
  text: {
    fontSize: 29,
    fontWeight: 600,
   
    lineHeight: 29 * 1.4,
    letterSpacing: 0.32,
  },
  transparentText: {
    opacity: 0,
  },
});
export default BadScreenComponent 