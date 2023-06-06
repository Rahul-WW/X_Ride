import {View, Text, ScrollView, SafeAreaView, Animated} from 'react-native';
import React from 'react';
import BadScreenComponent from '../components/BadScreenComponent';
import NoInternetImage from '../svgImages/NoInternetImage.svg';
import PageError from "../svgImages/PageError.svg"
import XBtnWithoutArrow from '../components/XBtnWithoutArrow';

const PageNotFound = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <ScrollView>
        <BadScreenComponent
          svgImage={<PageError />}
          text1={'Page Not Found!'}
          text2={
            'The page you are looking for seems to have wandered off somewhere '
          }
        />
        <View style={{marginTop: 32, alignItems:"center"}}>
            <XBtnWithoutArrow goTo={"Home"} Btnwidth={220} textInsideBtn={"BACK TO HOME"}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PageNotFound;
