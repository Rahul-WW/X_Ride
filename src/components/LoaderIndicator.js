import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const LoaderIndicator = () => {
  return (
    <View style={{ flexDirection:"row", justifyContent:"center", height: 400, alignItems:"center"}}>
      <Image
        source={require("../loader/LoaderActivity.gif")}
        style={styles.gif}
      />
    </View>
  );
}

const styles= StyleSheet.create({
    gif:{
        width: 100, height: 100
    }
})

export default LoaderIndicator