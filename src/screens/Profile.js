import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  Pressable,
  Alert,
  Animated,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef} from 'react';
import Header from '../components/Header';
import InputField from '../components/InputField';
import InputFieldWithCross from '../components/InputFieldWithCross';
import XBtnWithoutArrow from '../components/XBtnWithoutArrow';

const {width, height} = Dimensions.get('window');
import Name2 from '../svgImages/Name2.svg';
import TimePicker from '../svgImages/TimePicker.svg';
import EmailIcon from '../svgImages/EmailIcon.svg';
import MobileIcon from '../svgImages/MobileIcon.svg';
import PasswordIcon from '../svgImages/PasswordIcon.svg';
import Pencil2 from '../svgImages/Pencil2.svg';
import DrawerCross from '../svgImages/DrawerCross.svg';
import LinearGradient from 'react-native-linear-gradient';

const Profile = ({navigation}) => {
  const [cantEditEmail, setCantEditEmail] = useState(false);
  const [cantEditPassword, setCantEditPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);


  const handleHideRouteInput = () => {
    setCantEditEmail(!cantEditEmail);
    setModalVisible(!modalVisible);
  };

  const handlePressUpdate = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView
      style={{position: 'relative', flex: 1, backgroundColor: '#F3F7FA'}}>
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
                handleHideRouteInput={handleHideRouteInput}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.getQuotesDiv}>
        <Pressable onPress={()=> navigation.navigate("Home")}>
          <SaveBtn Btnwidth={'100%'} textInsideBtn="SAVE DETAILS " />
        </Pressable>
      </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <TouchableOpacity style={styles.centeredView2} activeOpacity={1}>
            <View style={styles.modalView}>
              <View
                style={styles.headerBox} // header of the popup
              >
                <View style={styles.headerContent}>
                  <View style={{width: 200, height: 28}}>
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontSize: 18,
                        fontWeight: 500,
                        letterSpacing: 0.32,
                        lineHeight: 18 * 1.4,
                      }}>
                      Update Password
                    </Text>
                  </View>
                  <View style={{height: 24, width: 24}}>
                    <TouchableOpacity
                      onPress={() => setModalVisible(!modalVisible)}>
                      <DrawerCross />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View //main container of popup with width 100%
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  flex: 1,
                }}>
                <View
                  style={styles.popupContainer} // container with marginHorizontal 20
                >
                  {/* add here two input boxes */}
                  <View style={[styles.inputDivs2]}>
                    <InputField
                      placeholder="Current Password"
                      Icon={<PasswordIcon width={24} height={14} />}
                    />
                  </View>
                  <View style={[styles.inputDivs2]}>
                    <InputField
                      placeholder="New Password"
                      Icon={<PasswordIcon width={24} height={14} />}
                    />
                  </View>
                </View>

                <View
                  style={styles.resetBox} //bottom part containing buttons
                >
                  <View
                    style={{
                      marginHorizontal: 20,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      height: 48,
                    }}>
                    <Pressable style={{width: 124}}>
                      <LinearGradient
                        colors={['#00c96d', '#048ad7']}
                        useAngle={true}
                        angle={90}
                        style={{borderRadius: 16, padding: 2}}>
                        <TouchableOpacity
                          onPress={() => setModalVisible(!modalVisible)}>
                          <View style={[styles.resetBtn]}>
                            <View>
                              <Text style={styles.resetText}>CANCEL</Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </LinearGradient>
                    </Pressable>
                    <Pressable style={{width: 195}}>
                      <LinearGradient
                        colors={['#00c96d', '#048ad7']}
                        useAngle={true}
                        angle={90}
                        style={{borderRadius: 16}}>
                        <TouchableOpacity onPress={handlePressUpdate}>
                          <View style={styles.applyFilter}>
                            <Text style={styles.applyText}>UPDATE</Text>
                          </View>
                        </TouchableOpacity>
                      </LinearGradient>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const SaveBtn = ({Btnwidth, textInsideBtn}) => {
  return (
    <View
      style={{
        height: 48,
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
            textAlign: 'center',
            justifyContent: 'center',
            gap: 8,
            borderRadius: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 14,
            }}>
            <Text
              style={{
                color: 'white',
                alignItems: 'center',
                textAlign: 'center',
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: 0.32,
                lineHeight: 18,
              }}>
              {textInsideBtn}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    position: 'relative',

    backgroundColor: '#F3F7FA',
  },
  container: {
    marginHorizontal: 20,
    position: 'relative',

    marginBottom: 40,
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
  resetBox: {
    width: '100%',
    backgroundColor: 'white',
    height: 72,
    paddingTop: 12,
    position: 'absolute',
    bottom: 0,
  },
  resetBtn: {
    borderRadius: 15,
    backgroundColor: 'white',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetText: {
    fontSize: 16,
    fontWeight: 600,
    color: '#4F565E',
    letterSpacing: 0.32,
  },
  applyFilter: {
    width: '100%',
    height: '100%',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyText: {
    fontSize: 16,
    fontWeight: 600,
    color: '#FFFFFF',
    letterSpacing: 0.32,
  },
 
 

  cancellationTimingAndPriceBox: {
    width: '100%',
    borderWidth:1
  },
 
  
  popupContainer: {
   marginTop: 12,
    marginHorizontal: 20,
    
  },
  
  centeredView: { 
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  centeredView2: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  modalView: {
    width: Dimensions.get('window').width,
    backgroundColor: '#F3F7FA',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    elevation: 5,
    height: 324,
  },
  modalView2: {
    width: Dimensions.get('window').width,
    backgroundColor: '#F3F7FA',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    elevation: 5,
    height: 250,
  },
  headerBox: {
    height: 54,
    backgroundColor: '#292F3B',
    width: '100%',

    paddingVertical: 13,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  headerContent: {
    flexDirection: 'row',

    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default Profile;
