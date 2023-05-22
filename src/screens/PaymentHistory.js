import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Animated,
  Dimensions,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Sort from '../svgImages/Sort.svg';
import PaymentHistoryIcon from '../svgImages/PaymentHistoryIcon.svg';
const TransactionArray = [
  {transactionID: '#232314', date: '12 Sept', time: '12.00 AM', price: 123},
  {transactionID: '#232315', date: '15 Sept', time: '12.00 AM', price: 123},

  {transactionID: '#232316', date: '18 Sept', time: '12.00 AM', price: 123},

  {transactionID: '#232317', date: '19 Sept', time: '12.00 AM', price: 123},

  {transactionID: '#232318', date: '12 Sept', time: '12.00 AM', price: 123},
  {transactionID: '#232314', date: '2 Sept', time: '12.00 AM', price: 123},
  {transactionID: '#232314', date: '12 Sept', time: '12.00 AM', price: 123},
  {transactionID: '#232314', date: '12 Sept', time: '12.00 AM', price: 123},

  {transactionID: '#232318', date: '12 Sept', time: '12.00 AM', price: 123},
  {transactionID: '#232314', date: '2 Sept', time: '12.00 AM', price: 123},
  {transactionID: '#232314', date: '12 Sept', time: '12.00 AM', price: 123},
  {transactionID: '#232314', date: '12 Sept', time: '12.00 AM', price: 123},
];


const PaymentHistory = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#F3F7FA'}}>
      <Animated.View>
        <Header headertext={'Payment History'} />
      </Animated.View>
      <ScrollView style={{marginHorizontal: 20}}>
        <View
          style={{
            height: 27,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 24,
          }}>
          <Text style={{fontWeight: 400, fontSize: 16, color: '#292F3B'}}>
            All Transactions
          </Text>
          <Pressable style={{width: 82, height: 27}}>
            <LinearGradient
              colors={['#00c96d', '#048ad7']}
              useAngle={true}
              angle={90}
              style={{borderRadius: 8, padding: 1}}>
              <View style={[styles.sortBtn]}>
                <View
                  style={{flexDirection: 'row', gap: 4, alignItems: 'center'}}>
                  <Text style={styles.sortText}>SORT</Text>
                  <Sort />
                </View>
              </View>
            </LinearGradient>
          </Pressable>
        </View>
        <View>
          {TransactionArray.map((e,i)=>{
            return (
              <View  key={i}>
                <SinglePayment Tid={e.transactionID} date={e.date} time={e.time} price={e.price} />
              </View>
            );
          })}
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const SinglePayment = ({Tid, date, time,price}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 72,
        borderRadius: 16,
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: '#E3E9ED',
        marginBottom:16
      }}>
      <View
        style={{
          height: 40,
          marginHorizontal: 20,
          marginVertical: 16,
          flexDirection: 'row',
          gap: 12,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            gap: 12,
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 40,
              height: 40,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <PaymentHistoryIcon />
          </View>
          <View style={{width: 113}}>
            <Text style={{fontWeight: 400, fontSize: 16, color: '#292F3B'}}>
              {Tid}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 13, fontWeight: 400, color: '#4F565E'}}>
                {date}
              </Text>
              <Text style={{fontSize: 13, fontWeight: 400, color: '#4F565E'}}>
                {time}
              </Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={{fontSize: 18, fontWeight: 500, color: '#292F3B'}}>
            {`£ ${price}`}
          </Text>
        </View>
      </View>

      {/* <Text>hii</Text>
      <TouchableOpacity
        style={{
          width: 20,
          height: 20,
          marginRight: 20,
        }}>
        <View
          style={{
            width: 20,
            height: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>hiii</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  sortBtn: {
    borderRadius: 7,
    backgroundColor: 'white',
    height: '99%',
    width: '99%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sortText: {
    fontSize: 13,
    fontWeight: 400,
    color: '#4F565E',
    letterSpacing: 0.32,
  },
});

export default PaymentHistory;
