import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

export default function DrawerScreen({navigation}) {
  return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Button onPress={() => navigation.goBack()} title="Go back home" />
  </View>

  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#202123',
        paddingTop:50,
        
        },
})