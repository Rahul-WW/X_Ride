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
  PermissionsAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import HeaderDrawerScreens from '../components/HeaderDrawerScreens';
import UpcomingTripComponent from '../components/UpcomingTripComponent';
import LinearGradient from 'react-native-linear-gradient';

//https://drive.google.com/file/d/1VBatDrtZYI8OuWObLZisymF-fiVO8e_Y/view?usp=share_link
const PaymentTransactionDetails = [
  {name: 'Customer Name', value: 'James Walton'},
  {name: 'Customer Phone', value: '#44 1252511556'},
  {name: 'Invoice No.', value: 'IN125213'},
  {name: 'Invoice Date', value: '27/03/2023'},
  {name: 'Payment Mode', value: 'Card'},
  {name: 'Transaction Ref No', value: '#ITR050220'},
];

const OrderSummary = [
  {name: 'Ride-Id', value: '#4502500121'},
  {name: 'Miles', value: 10.5},
  {name: 'Base Fare', value: 440},
  {name: 'Airport Charges', value: 30},
  {name: 'Service Charges', value: 19},
  {name: 'Taxes', value: 34},
  {name: 'Coupon', value: -5},
];

const PaymentHistoryDetails = ({navigation}) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [data, setData] = useState([]); // data willl come from API response as of now OrderSummary is used Hard Coded.
  
  
  
  
  useEffect(() => {
    calculateTotalPrice();
  }, [data]);

  const calculateTotalPrice = () => {
    const total = OrderSummary.slice(2).reduce(
      (accumulator, item) => accumulator + item.value,
      0,
    );
    setTotalPrice(total);
  };







  const handleDownload =  () => {
  
 
  };
  return (
    <SafeAreaView
      style={{backgroundColor: '#F3F7FA', flex: 1, position: 'relative'}}>
      <Animated.View>
        <HeaderDrawerScreens
          headertext={'Payment History Details'}
          backto={'PaymentHistory'}
          navigation={navigation}
        />
      </Animated.View>
      <ScrollView
        style={{marginHorizontal: 20}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <UpcomingTripComponent
            // pickupLocation={selectedfromList.pickupLocation}
            // pickupDate={selectedfromList.pickupDate}
            // pickupTime={selectedfromList.pickupTime}
            // dropLocation={selectedfromList.dropLocation}
            // dropTime={selectedfromList.dropTime}
            // dropDate={selectedfromList.dropDate}
            // passengerCount={selectedfromList.passengerCount}
            // price={selectedfromList.price}
            widthEditBtn={false}
            isInpayment={true}
          />

          <View style={styles.transactionDetails}>
            {PaymentTransactionDetails.map((e, i) => {
              return (
                <View style={styles.singleList} key={i}>
                  <Text style={styles.singleListText}>{e.name}</Text>
                  <Text style={styles.singleListText}>{e.value}</Text>
                </View>
              );
            })}
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
              {OrderSummary.map((e, i) => {
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
                <Text style={styles.totalFairText}>{`£ ${totalPrice}`}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.downloadBtn}>
        <DownloadInvoiceBtn
          Btnwidth={'100%'}
          textInsideBtn="DOWNLOAD INVOICE"
          handleDownload={handleDownload}
        />
      </View>
    </SafeAreaView>
  );
};

const DownloadInvoiceBtn = ({Btnwidth, textInsideBtn, handleDownload}) => {
  return (
    <Pressable onPress={handleDownload}>
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
                  fontFamily: 'ProximaNova-Regular',
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
  container: {
    marginTop: 20,

    width: '100%',
    marginBottom: 80,
  },

  singleList: {
    height: 22,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  singleListText: {
    fontSize: 16,
    fontWeight: 400,
    color: '#4F565E',
    lineHeight: 16 * 1.4,
    letterSpacing: 0.32,
  },
  transactionDetails: {
    borderWidth: 1,
    height: 252,
    borderColor: '#E3E9ED',
    borderRadius: 16,
    backgroundColor: 'white',
    padding: 20,
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
  },
  offerDetails: {
    fontWeight: 400,
    fontSize: 16,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
    color: '#4F565E',
  },

  orderSummaryText: {
    fontWeight: 500,
    fontSize: 18,
    letterSpacing: 0.32,
    lineHeight: 16 * 1.4,
    color: '#292F3B',
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
  },
  priceName: {
    fontSize: 16,
    fontWeight: 400,
    color: '#4F565E',
    lineHeight: 16 * 1.4,
    letterSpacing: 0.32,
  },
  totalFairText: {
    fontSize: 18,
    color: '#292F3B',
    fontWeight: 600,
    lineHeight: 18 * 1.4,
    letterSpacing: 0.32,
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

  downloadBtn: {
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
});

export default PaymentHistoryDetails;
