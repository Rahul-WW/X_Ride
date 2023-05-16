import { View, Text,ScrollView, StyleSheet, SafeAreaView, Image, Dimensions, Pressable , Animated } from 'react-native'
import React, {useState, useRef} from 'react'
import Header from '../components/Header'
import InputField from '../components/InputField';
import InputFieldWithCross from '../components/InputFieldWithCross';
import XBtnWithoutArrow from '../components/XBtnWithoutArrow';


const {width, height}= Dimensions.get("window")
import Name2 from '../svgImages/Name2.svg';
import TimePicker from '../svgImages/TimePicker.svg';
import EmailIcon from '../svgImages/EmailIcon.svg';
import MobileIcon from '../svgImages/MobileIcon.svg';
import PasswordIcon from '../svgImages/PasswordIcon.svg';
import Pencil2 from "../svgImages/Pencil2.svg"

const Profile = () => {

    const [cantEditEmail, setCantEditEmail] = useState(false)
    const [cantEditPassword, setCantEditPassword] = useState(false);
    const handleHideRouteInput = () => {
        
      setCantEditEmail(!cantEditEmail);

     
    };




  return (
    <SafeAreaView>
      <Animated.View>
        <Header headertext={'Profile'} />
      </Animated.View>
      <ScrollView style={{backgroundColor: '#F3F7FA'}}>
        <View style={styles.safeArea}>
          <View style={styles.container}>
            <View style={styles.imageBox}>
              <Image
                style={{width: 100, height: 100, borderRadius: 16}}
                source={{
                  uri: 'https://images.unsplash.com/photo-1595290293434-555d42427e84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXw5NDUyNDk0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                }}
              />
              <View style={styles.profileIcon}>
                <Image source={require('../images/ProfileimageIcon.png')} />
              </View>
            </View>
            <View style={styles.inputDivs}>
              <InputField
                placeholder="Name"
                Icon={<Name2 width={20} height={20} />}
              />
            </View>
            <View style={styles.inputDivs2}>
              <InputField
                placeholder="Date of Birth"
                Icon={<TimePicker width={24} height={24} />}
              />
            </View>

            <View style={[styles.inputDivs2]}>
              <InputFieldWithCross
                placeholder="jaslin@gmail.com"
                Icon={<EmailIcon width={20} height={24} />}
                Icon2={<Pencil2 width={16} height={16} />}
                editablity={cantEditEmail}
                handleHideRouteInput={handleHideRouteInput} // this  function called to make the input enable
                //
              />
            </View>
            <View style={styles.inputDivs2}>
              <InputField
                placeholder="62004489454"
                Icon={<MobileIcon width={24} height={24} />}
              />
            </View>
            <View style={[styles.inputDivs2]}>
              <InputFieldWithCross
                placeholder="**********"
                Icon={<PasswordIcon width={24} height={14} />}
                Icon2={<Pencil2 width={16} height={16} />}
              />
            </View>
          </View>
          <View style={styles.getQuotesDiv}>
            <XBtnWithoutArrow
              Btnwidth={'100%'}
              textInsideBtn="SAVE DETAILS "
              goTo="Home"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    position: 'relative',
    height,
    backgroundColor: '#F3F7FA',
    flex: 1,
  },
  container: {
    
    marginHorizontal: 20,
    position: 'relative',
  },
  imageBox: {
    position: 'relative',
    marginTop: 40,
    marginLeft: 137,
    
    height: 116,
    width: 116,
  },
  profileIcon: {
    position: 'absolute',
    left: 84,
    top: 84,
  },
  inputDivs: {
    marginTop: 32,
    height: 56,
  },
  inputDivs2: {
    marginTop: 20,
    height: 56,
  },
  getQuotesDiv: {
    width,
    backgroundColor: 'white',
    height: 72,

    paddingTop: 12,
    paddingHorizontal: 20,

    paddingBottom: 12,
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
});
export default Profile