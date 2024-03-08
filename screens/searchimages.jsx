import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const SearchImages=({image,title,vote_average,release_date,press})=> {
  return (
      <Pressable onPress={press}  style={{width:250,height:200,padding:5,paddingTop:20,display:'flex',flexDirection:'row'}} >
        
        <ImageBackground 
        resizeMode='cover'
        borderRadius={5}
        source={{uri:`https://image.tmdb.org/t/p/w500${image}` }}
        style={{height:150,width:'100%'}}>
          <View style={{display:'flex',alignItems:'flex-end'}}>
          {/* <Text style={{backgroundColor:'#FED230',width:'15%'}}>{vote_average}</Text> */}
          </View>
        </ImageBackground>
        <View >
           <Text  style={{color:'#fff',fontSize:17,fontWeight:'bold',padding:10}}>{title}</Text>
           <Text style={{color:'grey',fontSize:17,fontWeight:'bold',padding:10}}>{release_date}</Text>
           </View>
        </Pressable>
  )
};
export default SearchImages;



const styles = StyleSheet.create({})