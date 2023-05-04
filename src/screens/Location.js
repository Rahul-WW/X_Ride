import {View, SafeAreaView, Text, Button, StyleSheet} from 'react-native';
import GoBackBtn from '../components/GoBackBtn';
const Location = ({navigation}) => {
  return (
    <SafeAreaView>
        <GoBackBtn/>
      <View>
        <Text>Quotes page</Text>
      </View>
      <Button onPress={() => navigation.navigate('Home')} title={'Go back'} />
    </SafeAreaView>
  );
};

export default Location;
