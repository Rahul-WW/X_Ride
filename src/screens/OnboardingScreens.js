
//  DONT DELET THIS PART AS THIS WILL BE HELPFULL IN MAKEING ONBOARDING SCREENS BETTER IN FUTURE



// import React, { useState } from 'react';

// import {SafeAreaView, StyleSheet, Dimensions, View, Text, StatusBar,Pressable, Alert, Image, ImageBackground, Button} from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';

// const {width, height} = Dimensions.get('window');

// const COLORS= {primary:"#282534", white:"#fff"}

// const slides = [
//   {
//     id: 1,
//     image: require('../images/OnboardingImage1.png'),
//     title: 'Search budget-friendly cabs for your travel destinations',
//     subtitle:
//       'find theh convenient and budget friendly cabs to travel your destinations',
//     slidImg: require('../images/slide1.png'),
//     nextbutton: require('../images/NextBtn.png'),
//   },
//   {
//     id: 2,
//     image: require('../images/OnboardingImage2.png'),
//     title: 'Search budget-friendly cabs for your travel destinations',
//     subtitle:
//       'find theh convenient and budget friendly cabs to travel your destinations',
//     slidImg: require('../images/slide2.png'),
//     nextbutton: require('../images/NextBtn.png'),
//   },
//   {
//     id: 3,
//     image: require('../images/OnboardingImage3.png'),
//     title: 'Search budget-friendly cabs for your travel destinations',
//     subtitle:
//       'find theh convenient and budget friendly cabs to travel your destinations',
//     slidImg: require('../images/slide3.png'),
//     nextbutton: require('../images/getStartedBtn.png'),
//   },
// ];

// const Slide = ({item,navigation}) => {
//   const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

//   return (
//     <View style={{alignItems: 'center'}}>
//       <ImageBackground
//         source={item.image}
//         style={{resizeMode: 'cover', width, height, position: 'relative'}}>
//         {/* main container strts */}
//         <View style={styles.container}>
//           <View style={styles.titleBox}>
//             <Text style={styles.titleText}>
//               Search budget-friendly cabs for your travel destinations
//             </Text>
//           </View>

//           <View style={styles.CaptionBox}>
//             <Text style={styles.CaptionText}>
//               find theh convenient and budget friendly cabs to travel around
//               your destinations.
//             </Text>
//           </View>

//           <Image style={styles.slideBtn} source={item.slidImg} />

//           <View style={styles.lowerContainer}>
//             <Pressable
//               style={[styles.skip, styles.skipPosition]}
//               onPress={() => navigation.navigate('Login')}>
//               <Text style={styles.nextTypo}>Skip</Text>
//             </Pressable>
//             <Pressable
//               onPress={() => Alert.alert('image clicked')}
//               style={[styles.skip, styles.skipPosition]}>
//               <Image source={item.nextbutton} />
//             </Pressable>
//           </View>
//         </View>

//         {/* main container ends */}
//       </ImageBackground>
//     </View>
//   );
// };

// const OnboardingScreens = ({navigation}) => {


// const updateCurrentSlideIndex=(e)=>{
//   const contentOffsetX= e.nativeEvent.contentOffset.x
//   const currentIndex= Math.round(contentOffsetX/width)
  
// }

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <StatusBar backgroundColor={COLORS.primary} />
//       <FlatList
//         data={slides}
//         pagingEnabled
//         horizontal
//         onMomentumScrollEnd={updateCurrentSlideIndex}
//         showsHorizontalScrollIndicator={false}
//         renderItem={({item}) => <Slide item={item} navigation={navigation} />}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container:{
//   position:"absolute",
//   bottom:48,
//   left:20,
//   right:20,

//   },

//   lowerContainer:{
//   marginTop: 36,
//   flexDirection: "row",
//   justifyContent:"space-between",
//   textAlign:"center"
//   }
//    ,

//    nextTypo:{
//    color:"white",
//    fontSize:16
//    },

//    slideBtn:{
//     marginTop: 32
//    },

//    indicator:{
//    height: 2.5,
//    width:10,
//    backgroundColor:"green",
//    marginHorizontal: 3,
//    borderRadius: 3,
//    },
  


//   titleText: {
//     color: 'white',
//     fontSize: 23,
//     letterSpacing: 0.32,
//     lineHeight: 32.2,
//     fontWeight: 600,
//   },

//   CaptionBox: {
//     top: 12,
    
//   },

//   CaptionText: {
//     fontWeight: 400,
//     color: 'white',
//     fontSize: 16,
//     letterSpacing: 0.32,
//     lineHeight: 22.4,
//   },





 
// });

// export default OnboardingScreens









