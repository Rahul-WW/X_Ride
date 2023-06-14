import {
  View,
  Text,
  Pressable,
  Image,
  Dimensions,
  Animated,
  Linking,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import CustomCheckBox from '../components/CustomCheckBox';
import CheckBox from 'react-native-check-box';
import FilterUncheckedCB from '../svgImages/FilterUncheckedCB.svg';
import FilterCheckedCB from '../svgImages/FilterCheckedCB.svg';
import RadioUnchecked from '../svgImages/RadioUnchecked.svg';
import RadioChecked from '../svgImages/RadioChecked.svg';

const DataToBefiltered = [{}];
const DataSort = [
  {
    value: 'Highest Rating',
  },
  {
    value: 'Price Low to High',
  },
  {
    value: 'Popularity',
  },
];

const Filter = ({navigation}) => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [option, setOption] = useState(null);

  const handlePressReset=()=>{
    navigation.goBack();
  }

  const handlePressApplyFilter=()=>{
    navigation.goBack();
  }

  console.log(option);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Animated.View>
        <Header headertext={'Filters'} />
      </Animated.View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.filterBox}>
            <View style={{height: 25, marginBottom: 12}}>
              <Text style={styles.carTypeText}>Car type</Text>
            </View>
            <View style={styles.singleContainerCB1}>
              <View style={styles.cabName}>
                <Text style={{fontSize: 16, fontWeight: 400, color: '#292F3B'}}>
                  Saloon
                </Text>
                <View style={{marginTop: 5}}>
                  <CheckBox
                    isChecked={isChecked1}
                    onClick={() => setIsChecked1(!isChecked1)}
                    checkedImage={<FilterCheckedCB width={16} height={16} />}
                    unCheckedImage={
                      <FilterUncheckedCB width={16} height={16} />
                    }
                  />
                </View>
              </View>
              <View
                style={{
                  height: 34,
                  width: '100%',
                  flexDirection: 'row',
                  gap: 10,
                }}>
                <Text style={styles.cabDetails}>4 Passengers, </Text>
                <Text style={styles.cabDetails}>1 Suitcase, </Text>
                <Text style={styles.cabDetails}>1 Cabin bag</Text>
              </View>
            </View>
            <View style={styles.singleContainerCB2}>
              <View style={styles.cabName}>
                <Text style={{fontSize: 16, fontWeight: 400, color: '#292F3B'}}>
                  Estate
                </Text>
                <View style={{marginTop: 5}}>
                  <CheckBox
                    isChecked={isChecked2}
                    onClick={() => setIsChecked2(!isChecked2)}
                    checkedImage={<FilterCheckedCB width={16} height={16} />}
                    unCheckedImage={
                      <FilterUncheckedCB width={16} height={16} />
                    }
                  />
                </View>
              </View>
              <View
                style={{
                  height: 34,
                  width: '100%',
                  flexDirection: 'row',
                  gap: 10,
                }}>
                <Text style={styles.cabDetails}>4 Passengers, </Text>
                <Text style={styles.cabDetails}>2 Suitcase, </Text>
                <Text style={styles.cabDetails}>2 Hand Luggage</Text>
              </View>
            </View>
            <View style={styles.singleContainerCB2}>
              <View style={styles.cabName}>
                <Text style={{fontSize: 16, fontWeight: 400, color: '#292F3B'}}>
                  Saloon
                </Text>
                <View style={{marginTop: 5}}>
                  <CheckBox
                    isChecked={isChecked3}
                    onClick={() => setIsChecked3(!isChecked3)}
                    checkedImage={<FilterCheckedCB width={16} height={16} />}
                    unCheckedImage={
                      <FilterUncheckedCB width={16} height={16} />
                    }
                  />
                </View>
              </View>
              <View
                style={{
                  height: 34,
                  width: '100%',
                  flexDirection: 'row',
                  gap: 10,
                }}>
                <Text style={styles.cabDetails}>6 Passengers, </Text>
                <Text style={styles.cabDetails}>4 Suitcase, </Text>
                <Text style={styles.cabDetails}>2 Hand Luggage</Text>
              </View>
            </View>
            <View style={styles.singleContainerCB2}>
              <View style={styles.cabName}>
                <Text style={{fontSize: 16, fontWeight: 400, color: '#292F3B'}}>
                  Executive
                </Text>
                <View style={{marginTop: 5}}>
                  <CheckBox
                    isChecked={isChecked4}
                    onClick={() => setIsChecked4(!isChecked4)}
                    checkedImage={<FilterCheckedCB width={16} height={16} />}
                    unCheckedImage={
                      <FilterUncheckedCB width={16} height={16} />
                    }
                  />
                </View>
              </View>
              <View
                style={{
                  height: 34,
                  width: '100%',
                  flexDirection: 'row',
                  gap: 10,
                }}>
                <Text style={styles.cabDetails}>4 Passengers, </Text>
                <Text style={styles.cabDetails}>2 Suitcase, </Text>
                <Text style={styles.cabDetails}>1 Hand Luggage</Text>
              </View>
            </View>
            <View style={styles.singleContainerCB2}>
              <View style={styles.cabName}>
                <Text style={{fontSize: 16, fontWeight: 400, color: '#292F3B'}}>
                  Transporter
                </Text>
                <View style={{marginTop: 5}}>
                  <CheckBox
                    isChecked={isChecked5}
                    onClick={() => setIsChecked5(!isChecked5)}
                    checkedImage={<FilterCheckedCB width={16} height={16} />}
                    unCheckedImage={
                      <FilterUncheckedCB width={16} height={16} />
                    }
                  />
                </View>
              </View>
              <View
                style={{
                  height: 34,
                  width: '100%',
                  flexDirection: 'row',
                  gap: 10,
                }}>
                <Text style={styles.cabDetails}>8 Passengers, </Text>
                <Text style={styles.cabDetails}>7 Suitcase, </Text>
                <Text style={styles.cabDetails}>4 Hand Luggage</Text>
              </View>
            </View>
          </View>
          <View style={styles.horizontalLine}></View>
          <View style={styles.sortBox}>
            <View style={{height: 25, marginBottom: 12}}>
              <Text style={styles.carTypeText}>Sort</Text>
            </View>

            <View style={styles.sortingList}>
              <RadioButton
                data={DataSort}
                onSelect={value => setOption(value)}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.resetBox}>
        <View
          style={{
            // marginHorizontal: 20,
            flexDirection: 'row',
             justifyContent: 'space-between',
            height: 48,
          }}>
          <Pressable style={{width: '37%'}} onPress={handlePressReset}>
            <LinearGradient
              colors={['#00c96d', '#048ad7']}
              useAngle={true}
              angle={90}
              style={{borderRadius: 16, padding: 1}}>
              <View style={[styles.resetBtn]}>
                <View>
                  <Text style={styles.resetText}>RESET</Text>
                </View>
              </View>
            </LinearGradient>
          </Pressable>
          <Pressable style={{width: '58%'}} onPress={handlePressApplyFilter}>
            <LinearGradient
              colors={['#00c96d', '#048ad7']}
              useAngle={true}
              angle={90}
              style={{borderRadius: 16}}>
              <View style={styles.applyFilter}>
                <Text style={styles.applyText}>APPLY FILTERS</Text>
              </View>
            </LinearGradient>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

function RadioButton({data, onSelect}) {
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
            <Text style={styles.sortText}>{basis.value}</Text>

            <Pressable onPress={() => selectHandler(basis.value)}>
              {basis.value === userOption ? (
                <RadioChecked />
              ) : (
                <RadioUnchecked />
              )}
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F3F7FA',
    borderWidth: 1,
    position: 'relative',
  },
  container: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 80,
  },
  filterBox: {
    height: 417,
    width: '100%',
    marginBottom: 24,
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#DCE2E9',
  },
  sortBox: {
    width: '100%',
    height: 144,

    marginTop: 24,
  },
  carTypeText: {
    fontSize: 18,
    fontWeight: 600,
    color: '#292F3B',
  },
  singleContainerCB1: {
    height: 60,
    width: '100%',
  },
  singleContainerCB2: {
    height: 60,
    width: '100%',

    marginTop: 20,
  },
  cabName: {
    height: 22,

    marginBottom: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cabDetails: {
    fontSize: 12,
    fontWeight: 400,
    color: '#4F565E',
  },
  sortingList: {
    height: 106,
    width: '100%',
  },
  singleSortBox1: {
    height: 22,
    width: '100%',
    marginBottom: 20,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  sortText: {
    fontSize: 16,
    fontWeight: 400,
    color: '#4F565E',
  },
  resetBox: {
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
  resetBtn: {
    borderRadius: 16,
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
});

export default Filter;
