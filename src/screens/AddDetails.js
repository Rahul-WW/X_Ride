import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  Animated,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';

import CheckBox from 'react-native-check-box';
import DownArrow from '../svgImages/DownArrow.svg';
import Header from '../components/Header';
import CheckedRadio from '../svgImages/CheckedRadio.svg';
import LinearGradient from 'react-native-linear-gradient';
import XBtnWithoutArrow from '../components/XBtnWithoutArrow';
import CheckedCB from '../svgImages/CheckedCB.svg';
import {useSelector} from 'react-redux';
const PriceList = [
  {name: 'Ride-Id', value: '#4502500121'},
  {name: 'Miles', value: 10.5},
  {name: 'Base Fare', value: 440},
  {name: 'Airport Charges', value: 30},
  {name: 'Service Charges', value: 19},
  {name: 'Taxes', value: 34},
  {name: 'Coupon', value: -5},
];

const AddDetails = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [dropdownHidden, setDropdownHidden] = useState(false);
  const [radio1, setRadio1] = useState(false);
  const [radio2, setRadio2] = useState(false);
  const [radio3, setRadio3] = useState(false);
  const [data, setData] = useState([]); // data willl come from API response as of now PriceList is used Hard Coded.
  const [totalPrice, setTotalPrice] = useState(0);
  const [isAirportPickup, setIsAirportPickup] = useState(false);
   const [fields, setFields] = useState({
     name: '',
     email: '',
     contact: '',
     company: '',
     crn: '',
     flightOrigin: '',
     flightNumber: '',
   });
   const [errors, setErrors] = useState({});
  const pickupFromStore = useSelector(store => store.form.pickupLocation);

   useEffect(() => {
     validate();
     console.log(errors)
   }, [fields]);


     const validate = () => {
       let tempErrors = {};
       // validation rules
       tempErrors.name = fields.name
         ? /[A-Za-z ]+/.test(fields.name)
           ? ''
           : 'Name should only contain alphabets'
         : 'This field is required';
       tempErrors.email = fields.email
         ? /\S+@\S+\.\S+/.test(fields.email)
           ? ''
           : 'Email is not valid'
         : 'This field is required';
       tempErrors.contact = fields.contact
         ? fields.contact.length === 10
           ? ''
           : 'Contact Number should have 10 digits'
         : 'This field is required';

       if (isChecked) {
         tempErrors.company = fields.company ? '' : 'This field is required';
         tempErrors.crn = fields.crn
           ? /^[0-9]{8}$|^[A-Za-z]{2}[0-9]{6}$/.test(fields.crn)
             ? ''
             : 'CRN should be 8 digits or two letters followed by 6 digits'
           : 'This field is required';
       }

        if (isAirportPickup) {
          tempErrors.flightOrigin = fields.flightOrigin
            ? ''
            : 'This field is required';
          tempErrors.flightNumber = fields.flightNumber
            ? /^[A-Za-z]{2}[0-9]{3}$/.test(fields.flightNumber)
              ? ''
              : 'It should be 5 characters, first 2 letters followed by 3 digits'
            : 'This field is required';
        }

       setErrors({...tempErrors});
     };

      const handleChange = (name, value) => {
        setFields({
          ...fields,
          [name]: value,
        });
      };

  //console.log(pickupFromStore);
  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  const openDropDown = () => {
    setDropdownHidden(!dropdownHidden);
  };

  const handlePressRadio1 = () => {
    setRadio1(!radio1);
  };

  const handlePressRadio2 = () => {
    setRadio2(!radio2);
  };

  const handlePressRadio3 = () => {
    setRadio3(!radio3);
  };

  const handleApplyBtnPressed = () => {
    //Alert.alert('yes pressed');
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [data]);

  const calculateTotalPrice = () => {
    const total = PriceList.slice(2).reduce(
      (accumulator, item) => accumulator + item.value,
      0,
    );
    setTotalPrice(total);
  };


  const handlePressPayNow=()=>{
     if (Object.values(errors).some(error => error !== '')) {
      //  Alert.alert(
      //    'Validation error',
      //    'Please fix the errors before submitting',
      //  );
     } else {
       //Alert.alert('Form data', JSON.stringify(fields));
       navigation.navigate("Payment")
       
     }
  }
  useEffect(() => {
    const string = pickupFromStore;
    const searchTerm = 'airport';
    const containsTerm = string
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    
    if (containsTerm === true) {
      setIsAirportPickup(true);
    } else {
      setIsAirportPickup(false);
    }
  }, []);
  return (
    <SafeAreaView style={{backgroundColor: '#F3F7FA', flex: 1}}>
      <Animated.View>
        <Header headertext={'Add Details'} />
      </Animated.View>
      <View style={styles.container}>
        <ScrollView
          automaticallyAdjustKeyboardInsets={true}
          showsVerticalScrollIndicator={false}>
          <View style={styles.contactInfo}>
            <View style={styles.upperTextBox}>
              <View style={{height: 25, marginBottom: 8}}>
                <Text style={styles.contactText}>Contact Information</Text>
              </View>

              <View style={{height: 22}}>
                <Text style={styles.secondText}>
                  Booking Details will be shared here
                </Text>
              </View>
            </View>
            <View style={styles.inputBoxContainer}>
              <View style={styles.inputDivs}>
                <InputFeildForDetails
                  placeholder="Name"
                  value={fields.name}
                  onChangeText={value => handleChange('name', value)}
                  onBlur={validate}
                  error={errors.name}
                />
                <Text style={styles.errorText}>{errors.name}</Text>
              </View>
              <View style={styles.inputDivs}>
                <InputFeildForDetails
                  placeholder="Email Id"
                  keyboardType="email-address"
                  value={fields.email}
                  onChangeText={value => handleChange('email', value)}
                  onBlur={validate}
                  error={errors.email}
                />
                <Text style={styles.errorText}>{errors.email}</Text>
              </View>
              <View style={styles.inputDivs}>
                <InputFeildForDetails
                  placeholder="Contact No."
                  keyboardType="numeric"
                  maxLength={10}
                  value={fields.contact}
                  onChangeText={value => handleChange('contact', value)}
                  onBlur={validate}
                  error={errors.contact}
                />
                <Text style={styles.errorText}>{errors.contact}</Text>
              </View>

              {isAirportPickup && (
                <View style={styles.inputDivs}>
                  <InputFeildForDetails
                    placeholder="Flight Origin "
                    value={fields.flightOrigin}
                    onChangeText={value => handleChange('flightOrigin', value)}
                    onBlur={validate}
                    error={errors.flightOrigin}
                  />
                  <Text style={styles.errorText}>{errors.flightOrigin}</Text>
                </View>
              )}

              {isAirportPickup && (
                <View style={styles.inputDivs}>
                  <InputFeildForDetails
                    placeholder="Flight Number"
                    value={fields.flightNumber}
                    onChangeText={value => handleChange('flightNumber', value)}
                    onBlur={validate}
                    error={errors.flightNumber}
                  />
                  <Text style={styles.errorText}>{errors.flightNumber}</Text>
                </View>
              )}

              <View style={styles.checkBoxDiv}>
                <View>
                  {/* <CheckBox
                    style={{width: 18}}
                    isChecked={isChecked}
                    onClick={handleCheckBox}
                    checkedImage={
                      // <Image source={require('../images/checkedCheckBox.png')} />
                      <CheckedCB width={20} height={20} />
                    }
                  /> */}
                  {!isChecked ? (
                    <TouchableOpacity
                      onPress={handleCheckBox}
                      style={{
                        borderWidth: 1,
                        width: 18,
                        height: 18,
                        borderColor: '#4F565E',
                      }}></TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={handleCheckBox}>
                      <CheckedCB width={20} height={20} />
                    </TouchableOpacity>
                  )}
                </View>

                <View>
                  <Text style={styles.checkboxText}>Have CRN Details</Text>
                </View>
              </View>

              {isChecked && (
                <View>
                  <View style={styles.inputDivs}>
                    <InputFeildForDetails
                      placeholder="Company Name"
                      value={fields.company}
                      onChangeText={value => handleChange('company', value)}
                      onBlur={validate}
                      error={errors.company}
                    />
                    <Text style={styles.errorText}>{errors.company}</Text>
                  </View>
                  <View style={styles.inputDivs}>
                    <InputFeildForDetails
                      placeholder="CRN"
                      maxLength={8}
                      value={fields.crn}
                      onChangeText={value => handleChange('crn', value)}
                      onBlur={validate}
                      error={errors.crn}
                    />
                    <Text style={styles.errorText}>{errors.crn}</Text>
                  </View>
                </View>
              )}
            </View>
          </View>
          <View style={styles.ViewAndOffers}>
            <View>
              <View
                style={[
                  styles.dropDownBox,
                  {height: dropdownHidden === false ? 56 : 636},
                ]}>
                <View style={styles.offerAndIconBox}>
                  <TouchableOpacity
                    style={{width: '100%'}}
                    onPress={openDropDown}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%',
                        alignItems: 'center',
                        height: 56,
                      }}>
                      <View>
                        <Text style={styles.viewAndOfferText}>
                          View & Apply Offers
                        </Text>
                      </View>

                      <View
                        style={{
                          width: 20,
                          height: 20,
                          padding: 4,
                        }}>
                        <DownArrow />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                {dropdownHidden && (
                  <View style={styles.horizontalLinebelowApplyOffers}></View>
                )}

                {dropdownHidden && (
                  <View style={styles.boxcontainingApplyBtn}>
                    <View style={styles.couponRelatedBox}>
                      <View
                        style={{
                          height: 22,
                        }}>
                        <Text
                          style={[
                            styles.haveCouponText,
                            {
                              transform: [{translateY: -1}],
                            },
                          ]}>
                          Have coupon? Enter here
                        </Text>
                      </View>

                      <KeyboardAvoidingView
                        style={{height: 56, marginTop: 8, marginBottom: 16}}
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                        <InputFeildForDetails placeholder={'COM12W1'} />
                      </KeyboardAvoidingView>

                      <ApplyBtn
                        Btnwidth={'100%'}
                        textInsideBtn={'APPLY'}
                        handleApplyBtnPressed={handleApplyBtnPressed}
                      />
                    </View>
                  </View>
                )}

                {dropdownHidden && (
                  <View style={styles.promoCodeBox}>
                    <View style={{height: 66}}>
                      <Text
                        style={[
                          styles.promoText,
                          {
                            transform: [{translateY: -1}],
                          },
                        ]}>
                        Yippee! Promo COM12W1 applied successfully, You got
                        instant discount of worth £5 on your booking.
                      </Text>
                    </View>
                    <View // this is horizontal line
                      style={{
                        borderTopWidth: 1,
                        marginTop: 16,

                        borderColor: '#E3E9ED',
                        marginBottom: 16,
                      }}></View>
                    <View // this box is containing 3 children boxes
                      style={{height: 237}}>
                      <View // first child box
                        style={{
                          marginBottom: 20,
                          height: 73,
                        }}>
                        <View style={styles.radioBox}>
                          <Pressable onPress={handlePressRadio1}>
                            {radio1 === false ? (
                              <View style={styles.unChecked}></View>
                            ) : (
                              <CheckedRadio width={20} height={20} />
                            )}
                          </Pressable>

                          <Text
                            style={[
                              styles.radioLabel,
                              {
                                transform: [{translateY: -2}],
                              },
                            ]}>
                            NEW
                          </Text>
                        </View>
                        <View style={{marginTop: 4}}>
                          <Text
                            style={[
                              styles.offerDetails,
                              {
                                transform: [{translateY: -1}],
                              },
                            ]}>
                            Get 15% off on booking, valid for new users only
                          </Text>
                        </View>
                      </View>
                      <View //second child
                        style={{
                          marginBottom: 20,
                          height: 73,
                        }}>
                        <View style={styles.radioBox}>
                          <Pressable onPress={handlePressRadio2}>
                            {radio2 === false ? (
                              <View style={styles.unChecked}></View>
                            ) : (
                              <CheckedRadio width={20} height={20} />
                            )}
                          </Pressable>

                          <Text
                            style={[
                              styles.radioLabel,
                              {
                                transform: [{translateY: -2}],
                              },
                            ]}>
                            COM10
                          </Text>
                        </View>
                        <View style={{marginTop: 4}}>
                          <Text
                            style={[
                              styles.offerDetails,
                              {
                                transform: [{translateY: -1}],
                              },
                            ]}>
                            Get 10% off on booking, valid for new users only
                          </Text>
                        </View>
                      </View>
                      <View //third child
                        style={{
                          marginBottom: 20,

                          height: 73,
                        }}>
                        <View style={styles.radioBox}>
                          <Pressable onPress={handlePressRadio3}>
                            {radio3 === false ? (
                              <View style={styles.unChecked}></View>
                            ) : (
                              <CheckedRadio width={20} height={20} />
                            )}
                          </Pressable>

                          <Text
                            style={[
                              styles.radioLabel,
                              {
                                transform: [{translateY: -2}],
                              },
                            ]}>
                            SBM10
                          </Text>
                        </View>
                        <View style={{marginTop: 4}}>
                          <Text
                            style={[
                              styles.offerDetails,
                              {
                                transform: [{translateY: -1}],
                              },
                            ]}>
                            Get 10% off on using SBM Credit card.
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                )}
              </View>

              <View style={[styles.orderSummaryBox]}>
                <View style={styles.orderTextBox}>
                  <Text style={styles.orderSummaryText}>Order Summary</Text>
                </View>
                <View // this is horizontal line
                  style={{
                    borderTopWidth: 1,
                    marginTop: 12,
                    marginHorizontal: 20,
                    borderColor: '#E3E9ED',
                    marginBottom: 20,
                  }}></View>

                <View style={styles.totalCostDetails}>
                  {PriceList.map((e, i) => {
                    return (
                      <View key={i} style={styles.nameAndPriceBox}>
                        <Text style={styles.priceName}>{e.name}</Text>
                        <Text style={styles.priceValue}>
                          {e.name === 'Coupon'
                            ? `- £ ${e.value}`
                            : e.name === 'Ride-Id'
                            ? e.value
                            : `£ ${e.value}`}
                        </Text>
                      </View>
                    );
                  })}

                  <View // this is horizontal line
                    style={{
                      borderTopWidth: 1,
                      borderColor: '#E3E9ED',
                      marginBottom: 12,
                    }}></View>

                  <View style={styles.totalFairbox}>
                    <Text style={styles.totalFairText}>Total Fair</Text>
                    <Text
                      style={styles.totalFairText}>{`£ ${totalPrice}`}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerContainer}>
          <View
            style={{
              width: '50%',
              paddingLeft: 8,
              flexDirection: 'row',
              alignSelf: 'center',
              gap: 8,
            }}>
            <View style={{alignSelf: 'center'}}>
              <Text
                style={{
                  color: '#4F565E',
                  fontWeight: 600,
                  fontSize: 16,
                  lineHeight: 16 * 1.4,
                }}>
                Total
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 600,
                  fontSize: 23,
                  color: '#048AD7',
                  lineHeight: 23 * 1.4,
                }}>
                {`£ ${totalPrice}`}
              </Text>
            </View>
          </View>
          <View style={{width: '50%'}}>
            {/* <XBtnWithoutArrow
              Btnwidth={'100%'}
              textInsideBtn={'PAY NOW'}
              goTo={'Payment'}
            /> */}
            <PayBtn handlePressPayNow={handlePressPayNow} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const InputFeildForDetails = ({
  keyboardType,
  placeholder,
  value,
  onChangeText,
  onBlur,
  error,
  maxLength,
}) => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        borderRadius: 16,
        borderWidth: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#E3E9ED',
      }}>
      <TextInput
        style={{
          marginLeft: 20,
          fontSize: 16,
          fontFamily: 'ProximaNova',
          flex: 1,
          lineHeight: 16 * 1.4,
          letterSpacing: 0.32,
        }}
        multiline={true}
        numberOfLines={4}
        scrollEnabled={true}
        keyboardType={keyboardType}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        maxLength={maxLength}
        error={error}></TextInput>
    </View>
  );
};

const ApplyBtn = ({textInsideBtn, Btnwidth, handleApplyBtnPressed}) => {
  return (
    <Pressable onPress={handleApplyBtnPressed}>
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
                  fontFamily: 'ProximaNova',
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
const PayBtn = ({handlePressPayNow}) => {
  return (
    <Pressable onPress={handlePressPayNow}>
      <View
        style={{
          height: 48,

          width: '100%',
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
                height: 48,
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
                }}>
                PAY NOW
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  errorText: {
    fontSize: 12,
    color: 'red',
    fontWeight: 400,
    fontFamily: 'ProximaNova',
    marginLeft: 25,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 72,
    backgroundColor: 'white',
  },
  footerContainer: {
    height: 48,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 12,
  },
  container: {
    marginBottom: 40,
  },
  contactInfo: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  upperTextBox: {
    height: 55,
  },
  contactText: {
    color: '#292F3B',
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 18 * 1.4,
    letterSpacing: 0.32,
    fontFamily: 'ProximaNovaSemibold',
  },
  secondText: {
    fontSize: 16,
    color: '#4F565E',
    fontWeight: 400,
    lineHeight: 16 * 1.4,
    letterSpacing: 0.32,
    fontFamily: 'ProximaNova',
  },
  inputBoxContainer: {
    marginTop: 16,
  },

  inputDivs: {
    height: 56,
    marginBottom: 20,
  },
  checkBoxDiv: {
    height: 22,
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  checkboxText: {
    fontFamily: 'ProximaNova',
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
  },
  ViewAndOffers: {
    marginHorizontal: 20,

    marginTop: 20,
    marginBottom: 40,
    marginBottom: 118,
  },

  dropDownBox: {
    width: '100%',
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#E3E9ED',
    borderWidth: 1,
  },
  offerAndIconBox: {
    height: 56 - 24,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    justifyContent: 'space-between',
  },
  viewAndOfferText: {
    fontWeight: 600,
    color: '#292F3B',
    fontSize: 18,
    letterSpacing: 0.32,
    // fontFamily: 'ProximaNova',
    fontFamily: 'ProximaNovaSemibold',
  },

  unChecked: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderRadius: 20,
  },
  radioBox: {
    flexDirection: 'row',
    gap: 12,
    height: 25,
    paddingTop: 1,
    alignItems: 'center',
  },

  orderSummaryBox: {
    height: 395,
    marginTop: 20,
    borderRadius: 16,
    backgroundColor: 'white',
    marginBottom: 85,
  },

  radioLabel: {
    color: '#4F565E',
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 18 * 1.4,
    letterSpacing: 0.32,
    fontFamily: 'ProximaNova',
  },
  offerDetails: {
    fontWeight: 400,
    fontSize: 16,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
    color: '#4F565E',
    fontFamily: 'ProximaNova',
  },

  orderSummaryText: {
    fontWeight: 500,
    fontSize: 18,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
    color: '#292F3B',
    fontFamily: 'ProximaNovaMedium',
  },

  totalCostDetails: {
    height: 297,
    marginHorizontal: 20,
  },

  priceValue: {
    fontWeight: 500,
    fontSize: 18,
    color: '#4F565E',
    lineHeight: 18 * 1.4,
    letterSpacing: 0.32,
    fontFamily: 'ProximaNova',
  },
  priceName: {
    fontSize: 16,
    fontWeight: 400,
    color: '#4F565E',
    lineHeight: 16 * 1.4,
    letterSpacing: 0.32,
    fontFamily: 'ProximaNova',
  },
  totalFairText: {
    fontSize: 18,
    color: '#292F3B',
    fontWeight: 600,
    lineHeight: 18 * 1.4,
    letterSpacing: 0.32,
    fontFamily: 'ProximaNovaSemibold',
  },

  horizontalLinebelowApplyOffers: {
    borderTopWidth: 1,
    marginTop: 12,
    marginHorizontal: 20,
    borderColor: '#E3E9ED',
    marginBottom: 20,
  },
  boxcontainingApplyBtn: {
    backgroundColor: '#F3F7FA',
    marginHorizontal: 20,
    borderRadius: 12,
  },
  haveCouponText: {
    fontWeight: 400,
    fontSize: 16,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
    color: '#4F565E',
    fontFamily: 'ProximaNova',
  },
  couponRelatedBox: {
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 16,
  },

  promoCodeBox: {
    height: 336,
    marginHorizontal: 20,
    marginTop: 16,
  },
  promoText: {
    fontWeight: 400,
    fontSize: 16,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
    color: '#4F565E',
    fontFamily: 'ProximaNova',
  },

  orderTextBox: {
    marginTop: 20,
    marginHorizontal: 20,
    height: 25,
  },
  nameAndPriceBox: {
    height: 25,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  totalFairbox: {
    height: 25,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default AddDetails;
