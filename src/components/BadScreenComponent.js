import { View, Text, SafeAreaView, ScrollView, TouchableOpacity,  StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import MaskedView from '@react-native-community/masked-view';

const BadScreenComponent = ({svgImage, text1, text2}) => {
  return (
    <View style={{ marginTop: 68, alignItems: 'center'}}>
      <View >{svgImage}</View>
      <View
        style={{
          marginTop: 32,
          width: '80%',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 8,
        }}>
        <GradientText>{text1}</GradientText>
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
const GradientText = ({children}) => {
  return (
    <MaskedView
      style={styles.maskedView}
      maskElement={<Text style={styles.text}>{children}</Text>}>
      <LinearGradient
        locations={[0, 1]}
        colors={['#00C96D', '#048AD7']}
        useAngle={true}
        angle={90}>
        <Text style={[styles.text, styles.transparentText]}>{children}</Text>
      </LinearGradient>
    </MaskedView>
  );
};


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