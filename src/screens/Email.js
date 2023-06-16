import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Pressable,
  Dimensions,
  Animated,
  Modal,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import MaskedView from '@react-native-community/masked-view';
import Header from '../components/Header';
import HeaderDrawerScreens from '../components/HeaderDrawerScreens';
import LinearGradient from 'react-native-linear-gradient';
import InputField from '../components/InputField';
import MobileIcon from '../svgImages/MobileIcon.svg';
import WhatsWrong from '../svgImages/WhatsWrong.svg';
import Issue from '../svgImages/Issue.svg';
import InputFieldWithCross from '../components/InputFieldWithCross';
import DownArrow from '../svgImages/DownArrow.svg';
import UpArrow from '../svgImages/UpArrow.svg';
import Attachment from '../svgImages/Attachment.svg';
import GradientText from '../components/GradientText';
import DocumentPicker from 'react-native-document-picker';
const Email = ({navigation, route}) => {
  const {from} = route.params;
  console.log(from)
  const [contactnumber, setContactnumber]= useState("")
  const [issue, setIssue] = useState('');
  const [whatsWrong, setWhatsWrong] = useState('');
  const [dropdownOption, setDropdownOption] = useState(false);
  const [file, setFile] = useState(null);
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  const handleDropdown = () => {
    setDropdownOption(!dropdownOption);
  };

  const handleSelectOption = option => {
    setWhatsWrong(option);
    setDropdownOption(false);
  };

    const handleAttachFile = async () => {
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.allFiles],
        });
        setFile(res);
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          // User cancelled the picker
        } else {
          throw err;
        }
      }
    };
  const handleSubmit = () => {
        Alert.alert(
          'Submitted',
          `Input: ${whatsWrong}\nSelected option: ${whatsWrong}\nFile: ${
            file ? file.name : 'No file attached'
          }`,
        );
  };
  return (
    <SafeAreaView
      style={{backgroundColor: '#F3F7FA', flex: 1, position: 'relative'}}>
      <Animated.View>
        <HeaderDrawerScreens
          headertext={'Email'}
          backto={from}
          navigation={navigation}
        />
      </Animated.View>
      <ScrollView style={{marginHorizontal: 20}}>
        <View style={styles.container}>
          <View style={{height: 84}}>
            <View style={{marginBottom: 12}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: '#292F3B',
                  lineHeight: 20 * 1.4,
                  letterSpacing: 0.32,
                  fontFamily: 'ProximaNovaSemibold',
                }}>
                Tell us how can we help you ?
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  color: '#4F565E',
                  lineHeight: 16 * 1.4,
                  letterSpacing: 0.32,
                  fontFamily: 'ProximaNova',
                }}>
                Please let us know the necessary details as requested below
              </Text>
            </View>
          </View>

          <View style={{height: 302, marginTop: 24}}>
            <View style={{height: 56, marginBottom: 20}}>
              <View style={styles.inputContainer1}>
                <View style={{marginTop: 16, marginLeft: 20}}>
                  <MobileIcon />
                </View>

                <TextInput
                  style={styles.inputBox}
                  multiline={true}
                  scrollEnabled={true}
                  numberOfLines={4}
                  placeholder={'Contact Number'}
                  value={contactnumber}
                  keyboardType="numeric"
                  onChangeText={value => setContactnumber(value)}></TextInput>
              </View>
            </View>
            <View style={{height: 56, marginBottom: 20}}>
              {/* <InputField Icon={<WhatsWrong />} placeholder={"What's wrong?"} /> */}
              <TouchableOpacity onPress={handleDropdown}>
                <InputFieldWithCross
                  Icon={<WhatsWrong />}
                  Icon2={dropdownOption ? <UpArrow /> : <DownArrow />}
                  value={whatsWrong}
                  handleGoToLocation={handleDropdown}
                  placeholder={"What's wrong?"}
                />
              </TouchableOpacity>
            </View>

            {dropdownOption ? (
              <View
                style={{
                  height: 176,
                  marginBottom: 20,
                  backgroundColor: 'white',
                  borderRadius: 16,
                  borderColor: '#E3E9ED',
                  borderWidth: 1,
                  flexDirection: 'column',
                  gap: 16,
                  paddingLeft: 20,
                  paddingTop: 20,
                  
                }} // choose options
              >
                {options.map((e, i) => {
                  return (
                    <TouchableOpacity
                      onPress={() => handleSelectOption(e)}
                      key={i}>
                      <Text style={styles.optionText}>{e}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}

            <View style={{height: 150, marginBottom: 20}}>
              <View style={styles.inputContainer}>
                <View style={{marginTop: 16, marginLeft: 20}}>
                  <Issue />
                </View>

                <TextInput
                  style={styles.inputBox}
                  multiline={true}
                  scrollEnabled={true}
                  numberOfLines={4}
                  placeholder="Issue Details"
                  value={issue}
                  onChangeText={value => setIssue(value)}></TextInput>
              </View>
            </View>

            <View>
              <TouchableOpacity
                onPress={handleAttachFile}
                style={styles.attachment}>
                <Attachment />
                <GradientText style={styles.attachmentText}>
                  Add Attachment
                </GradientText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.submitBtn}>
        <SubmitBtn
          Btnwidth={'100%'}
          textInsideBtn="SUBMIT"
          handleSubmit={handleSubmit}
        />
      </View>
    </SafeAreaView>
  );
};
const SubmitBtn = ({Btnwidth, textInsideBtn, handleSubmit}) => {
  return (
    <Pressable onPress={handleSubmit}>
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
          style={{borderRadius: 20}}>
          <View
            style={{
              flexDirection: 'row',
              textAlign: 'center',
              justifyContent: 'center',
              gap: 8,
              borderRadius: 20,
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
                  fontFamily: 'ProximaNovaSemibold',
                  letterSpacing: 0.32,
                  lineHeight: 18,
                }}>
                {textInsideBtn}
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </Pressable>
  );
};



const styles = StyleSheet.create({
  optionText: {
    fontSize: 16,
    fontWeight: 400,
    color: '#4F565E',
    lineHeight: 16 * 1.4,
    letterSpacing: 0.32,
    fontFamily: 'ProximaNova',
  },
  maskedView: {
    flexDirection: 'row',
    textAlign: 'center',
  },
  attachmentText: {
    fontSize: 16,
    fontWeight: 400,

    lineHeight: 16 * 1.4,
    letterSpacing: 0.32,
    fontFamily: 'ProximaNova',
  },
  transparentText: {
    opacity: 0,
  },
  attachment: {
    marginHorizontal: '30%',

    height: 22,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  inputContainer: {
    height: 150,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: 'white',
    textAlignVertical: 'top',
    borderColor: '#E3E9ED',

    flexDirection: 'row',
  },
  inputContainer1: {
    height: 56,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: 'white',
    textAlignVertical: 'top',
    borderColor: '#E3E9ED',

    flexDirection: 'row',
  },

  inputBox: {
    textAlignVertical: 'top',
    paddingTop: 16,
    paddingLeft: 16,
    fontSize: 16,
    fontFamily: 'ProximaNova',
    flex: 1,
    lineHeight: 16 * 1.4,
    color: '#4F565E',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  submitBtn: {
    width: '100%',
    backgroundColor: 'white',
    height: 72,

    paddingTop: 12,
    paddingHorizontal: 20,

    paddingBottom: 12,
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  container: {
    marginTop: 20,

    width: '100%',
    marginBottom: 209,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 72,
    backgroundColor: 'white',
  },
  footerContainer: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 12,
    justifyContent: 'space-between',
  },
});

export default Email;
