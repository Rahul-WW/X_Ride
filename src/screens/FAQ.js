import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Dimensions,
  Animated,
  Button,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import HeaderDrawerScreens from '../components/HeaderDrawerScreens';
import {TextInput} from 'react-native-gesture-handler';
import Search from '../svgImages/Search.svg';
import DownArrow from '../svgImages/DownArrow.svg';
import UpArrow from '../svgImages/UpArrow.svg';

const FAQ = ({navigation, route}) => {
  const {from} = route.params;
  const [selectedView, setSelectedView] = useState(null);

  const faqs = [
    'Summary',
    'Password',
    'Accounts',
    'System',
    'Service',
    'Security',
  ];

  const tabsContent = () => {
    switch (selectedView) {
      case 'Summary':
        return <SummaryContent />;
      case 'Password':
        return <PasswordContent />;
      case 'Accounts':
        return <AccountsContent />;
      case 'System':
        return <SystemContent />;
      case 'Service':
        return <ServiceContent />;
      case 'Security':
        return <SecurityContent />;
      default:
        return <SummaryContent />;
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F3F7FA'}}>
      <Animated.View>
        <HeaderDrawerScreens
          headertext={'FAQ'}
          navigation={navigation}
          backto={from}
        />
      </Animated.View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.searchBox}>
            <TextInput style={styles.searchInputStyle} />
            <View style={{marginRight: 20}}>
              <Search width={20} height={20} />
            </View>
          </View>

          <View style={styles.tabs}>
            {faqs.map(view => (
              <TouchableOpacity
                key={view}
                style={[
                  styles.singleTab,
                  selectedView === view ? styles.selectedView : null,
                ]}
                onPress={() => setSelectedView(view)}>
                <Text
                  style={[
                    styles.tabText,
                    selectedView === view ? styles.selectedViewText : null,
                  ]}>
                  {view}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View
            style={{           
              width: '100%',
              marginTop: 24,
            }}>
            {tabsContent()}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const SummaryContent = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [forth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);
 

  return (
    <View>
      <Text>Summary content</Text>
      <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>
            Can I book a cab from you without paying online?
          </Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setFirst(!first)}>
            {first ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {first ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>
            Do I need to register on your site to book tickets?
          </Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setSecond(!second)}>
            {second ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {second ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>
            When will I receive the vehicle and driver details?
          </Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setThird(!third)}>
            {third ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {third ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>
            What all payment options I have online?
          </Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setFourth(!forth)}>
            {forth ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {forth ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>What if the car doesn't show up?</Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setFifth(!fifth)}>
            {fifth ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {fifth ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};
const PasswordContent = () => {
   const [first, setFirst] = useState(false);
   const [second, setSecond] = useState(false);
   const [third, setThird] = useState(false);
   const [forth, setFourth] = useState(false);
   const [fifth, setFifth] = useState(false);
  return (
   
     <View>
      <Text>Password content</Text>
      <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>
            Can I book a cab from you without paying online?
          </Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setFirst(!first)}>
            {first ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {first ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>
            Do I need to register on your site to book tickets?
          </Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setSecond(!second)}>
            {second ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {second ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>
            When will I receive the vehicle and driver details?
          </Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setThird(!third)}>
            {third ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {third ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>
            What all payment options I have online?
          </Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setFourth(!forth)}>
            {forth ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {forth ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>
            Can I book a cab from you without paying online?
          </Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setFifth(!fifth)}>
            {fifth ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {fifth ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View>
    
    </View>
  );
};
const AccountsContent = () => {
     const [first, setFirst] = useState(false);
     const [second, setSecond] = useState(false);
     const [third, setThird] = useState(false);
     const [forth, setFourth] = useState(false);
     const [fifth, setFifth] = useState(false);
  return (
    <View>
      <Text>Accounts content</Text>
     
      <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>
            Can I book a cab from you without paying online?
          </Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setFirst(!first)}>
            {first ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {first ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>
            Do I need to register on your site to book tickets?
          </Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setSecond(!second)}>
            {second ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {second ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>
            When will I receive the vehicle and driver details?
          </Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setThird(!third)}>
            {third ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {third ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>
            What all payment options I have online?
          </Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setFourth(!forth)}>
            {forth ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {forth ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>
            Can I book a cab from you without paying online?
          </Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setFifth(!fifth)}>
            {fifth ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {fifth ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};
const SystemContent = () => {
   const [first, setFirst] = useState(false);
   const [second, setSecond] = useState(false);
   const [third, setThird] = useState(false);
   const [forth, setFourth] = useState(false);
   const [fifth, setFifth] = useState(false);
  return (
    <View>
      <Text>System content</Text>

      <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>
            Can I book a cab from you without paying online?
          </Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setFirst(!first)}>
            {first ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {first ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>
            Do I need to register on your site to book tickets?
          </Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setSecond(!second)}>
            {second ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {second ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>
            When will I receive the vehicle and driver details?
          </Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setThird(!third)}>
            {third ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {third ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>
            What all payment options I have online?
          </Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setFourth(!forth)}>
            {forth ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {forth ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View>
      {/* <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>
            Can I book a cab from you without paying online?
          </Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setFifth(!fifth)}>
            {fifth ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {fifth ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View> */}
    </View>
  );
};
const ServiceContent = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [forth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);
  return (
    <View>
      <Text>Services content</Text>

      <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>
            Can I book a cab from you without paying online?
          </Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setFirst(!first)}>
            {first ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {first ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>
            Do I need to register on your site to book tickets?
          </Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setSecond(!second)}>
            {second ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {second ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>
            When will I receive the vehicle and driver details?
          </Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setThird(!third)}>
            {third ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {third ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>
            What all payment options I have online?
          </Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setFourth(!forth)}>
            {forth ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {forth ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>
            Can I book a cab from you without paying online?
          </Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setFifth(!fifth)}>
            {fifth ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {fifth ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};
const SecurityContent = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [forth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);
  return (
    <View>
      <Text>Security content</Text>

      <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>
            Can I book a cab from you without paying online?
          </Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setFirst(!first)}>
            {first ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {first ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>
            Do I need to register on your site to book tickets?
          </Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setSecond(!second)}>
            {second ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {second ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>
            When will I receive the vehicle and driver details?
          </Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setThird(!third)}>
            {third ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {third ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>
            What all payment options I have online?
          </Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setFourth(!forth)}>
            {forth ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {forth ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.singleFaq}>
        <View style={styles.singleFaqContentBox}>
          <Text style={styles.question}>
            Can I book a cab from you without paying online?
          </Text>

          <TouchableOpacity
            style={{marginTop: 7}}
            onPress={() => setFifth(!fifth)}>
            {fifth ? <UpArrow /> : <DownArrow />}
          </TouchableOpacity>
        </View>
        {fifth ? (
          <View style={{marginHorizontal: 20, marginTop: 12}}>
            <Text style={styles.answer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. But also the leap into electronic typesetting, remaining
              essentially unchanged Ipsum is simply dummy text of the printing
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  question:{fontWeight: 500, fontSize: 18, color: '#292F3B'},
 answer:{fontSize: 16, fontWeight: 400, color: '#4F565E', lineHeight: 16 * 1.4, letterSpacing: 0.32},
  singleFaqContentBox: {
    marginHorizontal: 20,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth:1,
    borderColor:"transparent"
  },
  tabText: {
    fontSize: 16,
    color: '#4F565E',
  },
  selectedView: {
    backgroundColor: '#048AD7',
    color: 'white',
  },
  selectedViewText: {
    color: 'white',
  },
  container: {
    
    marginHorizontal: 20,
    marginTop: 20,
  },
  searchBox: {
    height: 48,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E3E9ED',

    marginBottom: 24,
    justifyContent: 'space-between',
  },
  singleFaq: {
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#E3E9ED',
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 12,
  },
  searchInputStyle: {
    width: '80%',
    marginLeft: 20,
    fontSize: 16,
    lineHeight: 16 * 1.4,
    color: '#4F565E',
  },
  tabs: {
    height: 80,
  
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  singleTab: {
    paddingHorizontal: 16,
    // paddingTop:  5,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E3E9ED',
    height: 32,
  },
});

export default FAQ;
