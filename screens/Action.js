import { StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { useScrollToTop } from '@react-navigation/native'
import { useState } from 'react'
import { useEffect } from 'react'
import { FlatList } from 'react-native'
import Actionapi from './actionapi'
import { ScrollView } from 'react-native'
import YoutubeIframe from 'react-native-youtube-iframe'
export default function Action({route}) {
  const routing=route.params
  const [movie,SetMovie] = useState([])
  const [moviekey,setMovieKey]= useState('')
  
  const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2E2MmIwYWQ1N2RlZGRmMDViMWI0MzM5NGIxZTFhNSIsInN1YiI6IjY1ZDg2YzBiZDRkNTA5MDE2MjY0OWUzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JrWzuPGsz3-eRen2TV7Luv6h1MkfPh19wjaC1et9m60'
      }
    };
    useEffect(()=>{
      Getmovies();
      getVideo();
    },[])
    const Getmovies = () =>{
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)   
      .then(response => response.json())
      .then(response => {
  SetMovie(response.results)
      })
      .catch(err => console.error(err));
    }
    const getVideo=()=>{
    fetch(`https://api.themoviedb.org/3/movie/${routing.id}/videos?language=en-US`, options)
  .then(response => response.json())
  .then(response => setMovieKey(response.results[0].key))
  .catch(err => console.error(err));
    }

  return (
    <View style={styles.container}>
      <View  style={styles.image}>
    <YoutubeIframe height={200} videoId={moviekey}/>
      
      <Text style={{fontSize:18,fontWeight:'bold',paddingVertical:10,color:'white'}}>{routing.title}</Text>
      <Text style={{fontSize:15,color:'#DCDCDC'}}>{routing.overview}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={{backgroundColor:'#FCD22E',paddingHorizontal:50,padding:5,display:'flex',borderRadius:3,flexDirection:'row'}}>
          <Icon name="play-outline" type="material-community"></Icon>
          <Text>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#202123',paddingHorizontal:50,padding:5,borderRadius:3,display:'flex',flexDirection:'row',borderWidth:1,borderColor:"grey"}}>
          <Icon name="plus" color="#FCD22E" type="material-community"></Icon>
          <Text style={{color:'white'}}> My List</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
      <Text style={{fontSize:18,fontWeight:'bold',paddingVertical:10,color:'white'}}>US Action movies</Text>
      <FlatList horizontal
data={movie}   
renderItem={({item})=> <Actionapi image={item.poster_path} title={item.title} vote_average={item.vote_average}/>}
keyExtractor={item => item.id}
/>
<Text style={{fontSize:18,fontWeight:'bold',paddingVertical:10,color:'white'}}>Muvi original Action </Text>
      <FlatList horizontal
data={movie}   
renderItem={({item})=> <Actionapi image={item.poster_path} title={item.title} vote_average={item.vote_average}/>}
keyExtractor={item => item.id}
/>
</ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        // justifyContent:'center',
        backgroundColor: '#202123',
        
    },
    image:{
// backgroundColor:'blue',
   width:'90%'
    },
    buttons:{
      display:'flex',
      flexDirection:'row',
     gap:10,
     justifyContent:'space-between',
     paddingVertical:10,
    }
})