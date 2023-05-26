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
  Modal,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Sort from '../svgImages/Sort.svg';
import PaymentHistoryIcon from '../svgImages/PaymentHistoryIcon.svg';
import RadioUnchecked from '../svgImages/RadioUnchecked.svg';
import RadioChecked from '../svgImages/RadioChecked.svg';
import CheckBox from 'react-native-check-box';
import DrawerCross from '../svgImages/DrawerCross.svg';
const TransactionArray = [
  {transactionId: '#232314', date: '12 Sept', time: '12.00 AM', price: 121},
  {transactionId: '#232315', date: '15 Sept', time: '12.00 AM', price: 122},
  {transactionId: '#232314', date: '2 Sept', time: '12.00 AM', price: 126},
  {transactionId: '#232314', date: '12 Sept', time: '12.00 AM', price: 127},
  {transactionId: '#232314', date: '12 Sept', time: '12.00 AM', price: 128},

  {transactionId: '#232316', date: '18 Sept', time: '12.00 AM', price: 123},

  {transactionId: '#232317', date: '19 Sept', time: '12.00 AM', price: 124},

  {transactionId: '#232318', date: '12 Sept', time: '12.00 AM', price: 125},

  {transactionId: '#232318', date: '12 Sept', time: '12.00 AM', price: 129},
  {transactionId: '#232314', date: '2 Sept', time: '12.00 AM', price: 130},
  {transactionId: '#232314', date: '12 Sept', time: '12.00 AM', price: 143},
  {transactionId: '#232314', date: '12 Sept', time: '12.00 AM', price: 153},
];

const DataSortBasis = [
  {
    value: 'Date',
  },
  {
    value: 'Price',
  },
  {
    value: 'TransactionId',
  },
];

const PaymentHistory = ({navigation}) => {
  const [data, setData] = useState(TransactionArray);
  const [modalVisible, setModalVisible] = useState(false);
  const [option, setOption] = useState(null);

  useEffect(() => {
    if (option === 'Price') {
      setData([...data].sort((a, b) => b.price - a.price));
    } else if(option === null){
      setData(TransactionArray);
    }
    //similarlly sort according to the option selected
    //keep in mind for the Date formate before sorting
  }, [option]);

 // console.log(option);

  return (
    <SafeAreaView style={{backgroundColor: '#F3F7FA'}}>
      <Animated.View>
        <Header headertext={'Payment History'} />
      </Animated.View>
      <ScrollView style={{marginHorizontal: 20, marginBottom: 55}}>
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
          <Pressable
            style={{width: 82, height: 27}}
            onPress={() => setModalVisible(!modalVisible)}>
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
          {data.map((e, i) => {
            return (
              <View key={i}>
              
                  <SinglePayment
                    Tid={e.transactionId}
                    date={e.date}
                    time={e.time}
                    price={e.price}
                    navigation={navigation}
                  />
              
              </View>
            );
          })}
        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <TouchableOpacity
              style={styles.centeredView2}
              activeOpacity={1}
              onPressOut={() => setModalVisible(false)}>
              <View style={styles.modalView}>
                <View style={styles.headerBox}>
                  <View style={styles.headerContent}>
                    <View style={{width: 84, height: 28}}>
                      <Text
                        style={{
                          color: '#FFFFFF',
                          fontSize: 18,
                          fontWeight: 500,
                          letterSpacing: 0.32,
                          lineHeight: 18 * 1.4,
                        }}>
                        SORT
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
                <View style={styles.sortBox}>
                  <View style={styles.sortingList}>
                    <RadioButton
                      data={DataSortBasis}
                      onSelect={value => setOption(value)}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const SinglePayment = ({Tid, date, time, price, navigation}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 72,
        borderRadius: 16,
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: '#E3E9ED',
        marginBottom: 16,
      }}>
      <TouchableOpacity
       
        onPress={() => navigation.navigate('PaymentHistoryDetails')}>
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
              <Text
                style={{
                  fontWeight: 400,
                  fontSize: 16,
                  color: '#292F3B',
                  lineHeight: 16 * 1.4,
                }}>
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
      </TouchableOpacity>
    </View>
  );
};

const RadioButton = ({data, onSelect}) => {
  const [userOption, setUserOption] = useState(null);
  const selectHandler = value => {
    if (userOption === value) {
      setUserOption(null); // uncheck the radio button
      onSelect(null); // notify parent component
    } else {
      setUserOption(value); // set the selected radio button
      onSelect(value); // notify parent component
    }
  };

  return (
    <View>
      {data.map((basis, i) => {
        return (
          <View style={styles.singleSortBox1} key={i}>
            <Pressable onPress={() => selectHandler(basis.value)}>
              {basis.value === userOption ? (
                <RadioChecked width={22} height={22} />
              ) : (
                <RadioUnchecked width={22} height={22} />
              )}
            </Pressable>
            <Text style={styles.sortText}>{basis.value}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  singleSortBox1: {
    height: 22,
    width: '100%',
    marginBottom: 20,

    flexDirection: 'row',
    gap: 8,
  },

  sortText: {
    fontSize: 16,
    fontWeight: 400,
    color: '#4F565E',
  },
  sortBox: {
    width: '100%',
    height: 106,

    marginTop: 20,
  },
  sortingList: {
    height: 106,
    width: 130,
    marginLeft: 20,
  },
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
    fontSize: 16,
    fontWeight: 400,
    color: '#4F565E',
    letterSpacing: 0.32,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  centeredView2: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  modalView: {
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    elevation: 5,
    height: 210,

    borderColor: 'red',
    
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

export default PaymentHistory;
