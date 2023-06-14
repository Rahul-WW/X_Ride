import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');
import Xmark from '../svgImages/Xmark.svg';

const HeaderForPopUps = ({headertitle}) => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.sortText}>{headertitle} </Text>
      </View>
      <View>
        <View>
          <Xmark />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: 56,
    width,
    backgroundColor: '#292F3B',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    paddingHorizontal: 20,

    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sortText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 500,
    letterSpacing: 0.32,
    lineHeight: 18 * 1.4,
    fontFamily: 'ProximaNova',
  },
});
export default HeaderForPopUps;
