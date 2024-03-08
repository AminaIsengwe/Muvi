import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const Movieapi2=({image,title,vote_average})=> {
  return (
      <View style={{width:"100%",height:200,padding:5,paddingTop:20}} >
        <ImageBackground
        resizeMode='cover'
        borderRadius={5}
        source={{uri:`https://image.tmdb.org/t/p/w500${image}` }}
        style={{height:150,width:'100%'}}>
          {/* <Text>{title}</Text> */}
          <View style={{display:'flex',alignItems:'flex-end'}}>
          <Text style={{backgroundColor:'#FED230',width:'15%'}}>{vote_average}</Text>
          </View>
        </ImageBackground>

        </View>
  )
};
export default Movieapi2;



const styles = StyleSheet.create({})