import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const Actionapi=({image})=> {
  return (
      <View style={{width:100,height:200,padding:5,paddingTop:20}} >
        <ImageBackground
        resizeMode='contain'
        borderRadius={5}
        source={{uri:`https://image.tmdb.org/t/p/w500${image}` }}
        style={{height:150,width:'100%'}}>
        </ImageBackground>
        </View>
  )
};
export default Actionapi;



const styles = StyleSheet.create({})