import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TextInput,
  Button,
} from 'react-native';
import GoBackBtn from '../components/GoBackBtn';

import {
  FontSize,
  FontWeight,
  Color,
  FontFamily,
  LetterSpacing,
  LineHeight,
} from '../../GlobalStyles';

const {width, height} = Dimensions.get('window');

import InputFieldWithoutIcon from '../components/InputFieldWithoutIcon';
import XBtn from '../components/XBtn';

const CreatNewPass = ({navigation}) => {
  return (
    <SafeAreaView style={styles.backGround}>
      <View style={styles.container}>
        <View>
          <GoBackBtn />
        </View>
        <View style={styles.creatPasswordBox}>
          <Text style={styles.creatPasswordTextTitle}>Create New Password</Text>
          <Text style={styles.creatPasswordTextCaption}>
            Password must be combination of uppercase, lowercase, number and
            characters.
          </Text>
        </View>
        <View style={styles.inputDivs}>
          <InputFieldWithoutIcon placeholder="New Password" />
        </View>
        <View style={styles.inputDivs}>
          <InputFieldWithoutIcon placeholder="Confirm Password" />
        </View>
        <View>
          <XBtn Btnwidth={'100%'} textInsideBtn="RESET PASSWORD" goTo="Home" />
        </View>
      </View>

      {/* <Button onPress={() => navigation.navigate('SignUp')} title={'Go back'} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backGround: {
    backgroundColor: '#F3F7FA',
    height,
  },
  container: {
    marginHorizontal: 20,
  },
  creatPasswordBox: {
    marginTop: 58,
    height: 84,

    marginBottom: 32,
  },
  creatPasswordTextTitle: {
    fontSize: FontSize.for_title,
    color: Color.for_title,
    fontFamily: FontFamily.fontFamily,
    fontWeight: FontWeight.for_title,

    letterSpacing: LetterSpacing.letterSpacing,
    lineHeight: LineHeight.lineHeight,
  },
  creatPasswordTextCaption: {
    marginTop: 12,
    fontFamily: 'ProximaNova-Regular',
    fontSize: FontSize.for_caption,
    fontWeight: FontWeight.for_caption,
    color: Color.for_caption,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
  },

  inputDivs: {
    height: 56,
    marginBottom: 20,
  },
});

export default CreatNewPass;
