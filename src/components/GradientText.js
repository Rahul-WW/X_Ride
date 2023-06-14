import React from 'react';
import {Text} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';

const GradientText = props => {
  // <GradientText style={{fontSize: 24}}>Hello, World!</GradientText>;
  // this is how  you have to add styling in the Gradient texts that are used in various pages
  return (
    <MaskedView
      style={{flexDirection: 'row'}}
      maskElement={
        <Text
          style={{
            fontSize: 16,
            color: 'black',
            fontFamily: 'ProximaNova',
            textAlignVertical: 'center',
            ...props.style,
          }}>
          {props.children}
        </Text>
      }>
      <LinearGradient
        colors={['#00C96D', '#048AD7']} // Add your gradient colors
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text
          style={{
            flex: 1,
            opacity: 0,
            backgroundColor: 'transparent',
            fontFamily: 'ProximaNova',
            fontSize: 16,
            textAlignVertical: 'center',
            ...props.style,
          }}>
          {props.children}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;