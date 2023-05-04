

import React from "react"

import {View, SafeAreaView, Text, Button, StyleSheet} from "react-native"


const Quotes=({navigation})=>{
    return (
      <SafeAreaView>
        <View>
          <Text>Quotes page</Text>
        </View>
        <Button
          onPress={() => navigation.navigate('Home')}
          title={'Go back'}
        />
      </SafeAreaView>
    );
}


export default Quotes