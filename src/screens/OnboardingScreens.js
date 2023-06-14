//  DONT DELET THIS PART AS THIS WILL BE HELPFULL IN MAKEING ONBOARDING SCREENS BETTER IN FUTURE

import React, {useState, useRef, useEffect} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  StatusBar,
  Pressable,
  Alert,
  Image,
  ImageBackground,
  Button,
  
} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');
import OnboardArrow1 from '../svgImages/OnboardArrow1.svg';
import OnboardArrow2 from '../svgImages/OnboardArrow2.svg';
const COLORS = {primary: '#282534', white: '#fff'};
import XBtn from '../components/XBtn';
import LinearGradient from 'react-native-linear-gradient';
const slides = [
  {
    id: 1,
    image: require('../images/OnboardingImage1.png'),
    title: 'Search budget - friendly cabs for your travel destinations',
    subtitle:
      'Find the convenient and budget friendly cabs to travel around your destinations.',
    slidImg: require('../images/slide1.png'),
    nextbutton: require('../images/NextBtn.png'),
    buttonWidth: 127,
    textInsideBtn: 'Next',
    navigateTo: 'OnboardingScreen2',
    skipNavigateTo: 'SignIn',
  },
  {
    id: 2,
    image: require('../images/OnboardingImage2.png'),
    title: 'Compare cabs to find the most preferable options',
    subtitle:
      'Choose from the best cabs service providers based on rates, reviews, types and discounts.',
    slidImg: require('../images/slide2.png'),
    nextbutton: require('../images/NextBtn.png'),
    buttonWidth: 127,
    textInsideBtn: 'Next',
    navigateTo: 'OnboardingScreen3',
    skipNavigateTo: 'SignUp',
  },
  {
    id: 3,
    image: require('../images/OnboardingImage3.png'),
    title: 'Schedule and enjoy a hassle free travel experience',
    subtitle:
      'Plan your trip via XRide for a stress-free journey & support every step of the way.',
    slidImg: require('../images/slide3.png'),
    nextbutton: require('../images/getStartedBtn.png'),
    buttonWidth: 177,
    textInsideBtn: 'Get Started',
    navigateTo: 'SignUp',
    skipNavigateTo: 'SignUp',
  },
];

//<XBtn Btnwidth={177} textInsideBtn="Get Started" goTo="SignUp" />;

const Slide = ({item, navigation, onSlidePress}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Pressable onPress={onSlidePress}>
        <ImageBackground
          source={item.image}
          style={{resizeMode: 'cover', width, height, position: 'relative'}}>
          {/* main container strts */}
          <View style={styles.container}>
            <View style={styles.titleBox}>
              <Text style={styles.titleText}>{item.title}</Text>
            </View>

            <View style={styles.CaptionBox}>
              <Text style={styles.CaptionText}>{item.subtitle}</Text>
            </View>
          </View>

          {/* main container ends */}
        </ImageBackground>
      </Pressable>
    </View>
  );
};

const OnboardingScreens = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);
  const [initailBtnWidth, setInitialBtnWidth] = useState(127);
  const [initaiTextInsideBtn, setInitialTextInsideBtn] = useState('Next');

  const Footer = ({currentSlideIndex}) => {
    
    
    return (
      <View
        style={{
          position: 'absolute',

          height: 48 + 36 + 8,
          right: 20,
          left: 20,
          bottom: 48,
        }}>
        <View
          style={{flexDirection: 'row', justifyContent: 'flex-start', gap: 12}}>
          {slides.map((e, i) => {
            return (
              <View key={i}>

                {currentSlideIndex == i ? (
                  <GradientIndicator />
                ) : (
                  <View
                    style={[
                      styles.indicator
                    ]}></View>
                )}
              </View>
            );
          })}
        </View>

        <View
          style={{
            marginTop: 36,
            flexDirection: 'row',
            justifyContent: 'space-between',
            textAlign: 'center',

            alignItems: 'center',
            height: 48,
          }}>
          <Pressable style={[styles.skip, styles.skipPosition]} onPress={handlePressSkip}>
            <Text style={styles.nextTypo}>Skip</Text>
          </Pressable>
          <Pressable
            style={[styles.skip, styles.skipPosition]}
            onPress={handlePressNextBtn}>
            <View>
              {/* <XBtn Btnwidth={127} textInsideBtn={'Next'} goTo={'SignUp'} /> */}
              <NextBtn
                Btnwidth={initailBtnWidth}
                textInsideBtn={initaiTextInsideBtn}
              />
            </View>
          </Pressable>
        </View>
      </View>
    );
  };

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    //  console.log(currentIndex)
     if (currentIndex === 0 || currentIndex === 1) {
       setInitialBtnWidth(127);
        setInitialTextInsideBtn('Next');
     } else {
       setInitialBtnWidth(177);
       setInitialTextInsideBtn('Get Started');
     }

    setCurrentSlideIndex(currentIndex);
  };

  const handlePressNextBtn = () => {
     const nextSlideIndex = currentSlideIndex + 1;
     if (nextSlideIndex != slides.length) {
       const offset = nextSlideIndex * width;
       ref?.current?.scrollToOffset({offset});
       setCurrentSlideIndex(nextSlideIndex);
        
         if(nextSlideIndex === 2){
            setInitialBtnWidth(177);
            setInitialTextInsideBtn('Get Started');
            // navigation.navigate("SignUp")
         }else{
             setInitialBtnWidth(127);
             setInitialTextInsideBtn('Next');
         }
     }else if(nextSlideIndex === slides.length){
         navigation.navigate('SignUp');
     }
  };

  const handlePressSkip=()=>{
    if(currentSlideIndex==0){
         navigation.navigate('SignIn');
    }else if(currentSlideIndex==1 || currentSlideIndex==2){
         navigation.navigate('SignUp');
    }
  }


const handleSlidePress = slideIndex => {
  if (slideIndex === currentSlideIndex) {
    // Perform action when the current slide is clicked
    console.log('Current slide clicked:', slideIndex);
  } else if (slideIndex > currentSlideIndex) {
    // Go to the next slide
    const nextSlideIndex = Math.min(slideIndex, slides.length - 1);
    const offset = nextSlideIndex * width;
    ref?.current?.scrollToOffset({offset, animated: true});
    setCurrentSlideIndex(nextSlideIndex);
  } else if (slideIndex < currentSlideIndex) {
    // Go to the previous slide
    const prevSlideIndex = Math.max(slideIndex, 0);
    const offset = prevSlideIndex * width;
    ref?.current?.scrollToOffset({offset, animated: true});
    setCurrentSlideIndex(prevSlideIndex);
  }
};

console.log(currentSlideIndex)
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <StatusBar backgroundColor={COLORS.white} /> */}
      <FlatList
        ref={ref}
        data={slides}
        pagingEnabled
        horizontal
        onMomentumScrollEnd={updateCurrentSlideIndex}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <Slide
            item={item}
            navigation={navigation}
            onSlidePress={() => handleSlidePress(index)}
          />
        )}
      />

      <Footer currentSlideIndex={currentSlideIndex} />
    </SafeAreaView>
  );
};

const NextBtn = ({textInsideBtn, Btnwidth}) => {
  return (
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
  );
};


const GradientIndicator=()=>{
    return (
      <View
        style={{
          height: 8,
          borderRadius: 4,
          width: 32,
        }}>
        <LinearGradient
          locations={[0, 1]}
          colors={['#00c96d', '#048ad7']}
          useAngle={true}
          angle={90}
          style={{borderRadius: 4}}>
          <View
            style={{
              width: 32,
              borderRadius: 4,
              height: 8,
            }}></View>
        </LinearGradient>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 172,
    left: 20,
    right: 20,
    marginBottom: 32,
  },

  lowerContainer: {
    marginTop: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',

    alignItems: 'center',
    height: 48,
  },
  nextTypo: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'ProximaNova',
  },

  
  indicator: {
   
    height: 8,
    backgroundColor: '#4F565E',
    width: 8,
    borderRadius: 4,
  },

  titleText: {
    color: 'white',
    fontSize: 23,
    letterSpacing: 0.32,
    lineHeight: 32.2,
    fontWeight: 600,
    fontFamily: 'ProximaNova',
  },

  CaptionBox: {
    top: 12,
  },

  CaptionText: {
    fontWeight: 400,
    color: 'white',
    fontSize: 16,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
    fontFamily: 'ProximaNova',
  },
});

export default OnboardingScreens;
