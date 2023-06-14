import {View, Text, ScrollView, SafeAreaView, Animated} from 'react-native';
import React from 'react';
import BadScreenComponent from '../components/BadScreenComponent';
import NoInternetImage from '../svgImages/NoInternetImage.svg';
import PageError from "../svgImages/PageError.svg"
import XBtnWithoutArrow from '../components/XBtnWithoutArrow';
import GoBackBtn from '../components/GoBackBtn';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';

const PageNotFound = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <Animated.View style={{marginHorizontal: 20}}>
        <GoBackBtn />
      </Animated.View>
      <ScrollView style={{marginHorizontal: 20}}>
        <BadScreenComponent
          svgImage={<PageError />}
          text1={'Page Not Found!'}
          text2={
            'The page you are looking for seems to have wandered off somewhere '
          }
        />
        <View style={{marginTop: 32, alignItems: 'center'}}>
          <XBtnWithoutArrow
            goTo={'Home'}
            Btnwidth={220}
            textInsideBtn={'BACK TO HOME'}
          />
        </View>

        {/* <GradientText
          style={{
            fontSize: 29,
            fontWeight: 600,
            lineHeight: 29 * 1.4,
            letterSpacing: 0.32,
          }}>
          'Page Not Found!'
        </GradientText> */}
      </ScrollView>
    </SafeAreaView>
  );
};


// const GradientText = props => {
//   return (
//     <MaskedView
//       style={{flexDirection: 'row', height: '100%'}}
//       maskElement={
//         <Text
//           style={{
//             fontSize: 15,
//             color: 'black',
//             textAlignVertical: 'center',
//             ...props.style,
//           }}>
//           {props.children}
//         </Text>
//       }>
//       <LinearGradient
//         colors={['#00C96D', '#048AD7']} // Add your gradient colors
//         start={{x: 0, y: 0}}
//         end={{x: 1, y: 0}}>
//         <Text
//           style={{
//             flex: 1,
//             opacity: 0,
//             backgroundColor: 'transparent',
//             fontSize: 15,
//             textAlignVertical: 'center',
//             ...props.style,
//           }}>
//           {props.children}
//         </Text>
//       </LinearGradient>
//     </MaskedView>
//   );
// };

export default PageNotFound;
