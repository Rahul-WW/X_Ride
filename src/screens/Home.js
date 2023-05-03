

import React from "react"

import { SafeAreaView, View, Text, TextInput, StyleSheet , Button} from "react-native"


const Home=({navigation})=>{
    return (
      <SafeAreaView style={styles.backGround}>
        <Text>Home</Text>
        <Button
          onPress={() => navigation.navigate('SignUp')}
          title={'Go back'}
        />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  backGround: {
    backgroundColor: '#F3F7FA',

  },
});

export default Home