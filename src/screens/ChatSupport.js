import { View, Text, SafeAreaView, ScrollView, Pressable, TouchableOpacity, Dimensions, Animated, Button } from 'react-native'
import React from 'react'
import HeaderDrawerScreens from '../components/HeaderDrawerScreens'
import BugTracking from '@ruttl/bug-tracking';
const ChatSupport = ({navigation, route}) => {

    const {from}= route.params

    console.log(from)
  return (
    <SafeAreaView>
      <View />
      <BugTracking
        projectID="z96WXSe5gZldiInebqKp"
        token="MrJEAODnvQaebscVuCanG4pAmNX2"
      />
    </SafeAreaView>
  );
}





// const ExistingComponent = () => {
//   return (
//     <SafeAreaView>
//       <View />
//       <BugTracking
//         projectID="z96WXSe5gZldiInebqKp"
//         token="MrJEAODnvQaebscVuCanG4pAmNX2"
//       />
//     </SafeAreaView>
//   );
// }



export default ChatSupport