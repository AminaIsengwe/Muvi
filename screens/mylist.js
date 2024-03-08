import { StyleSheet, Text,TextInput, TouchableOpacity, View,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Bottom_nav from './bottom_nav'
import { ScrollView } from 'react-native'
import { FlatList } from 'react-native'
import Movieapi from './movieapi.jsx'
import { Icon } from 'react-native-elements'
import SearchImages from './searchimages.jsx'
import Titles from './titles.jsx'


export default function Mylist(navigation) {
    const [movie,SetMovie] = useState([])
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2E2MmIwYWQ1N2RlZGRmMDViMWI0MzM5NGIxZTFhNSIsInN1YiI6IjY1ZDg2YzBiZDRkNTA5MDE2MjY0OWUzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JrWzuPGsz3-eRen2TV7Luv6h1MkfPh19wjaC1et9m60'
    }
  };
  useEffect(()=>{
    Getmovies();
  },[])
  const Getmovies = () =>{
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)   
    .then(response => response.json())
    .then(response => {
SetMovie(response.results)
    })
    .catch(err => console.error(err));

  }
  return (
<View style={styles.container}>
    <View>
<Image style={{ marginTop: 25,paddingBottom:10,height:40 }} source={require('../assets/logo.png')} />

<ScrollView horizontal showsHorizontalScrollIndicator={false}> 
    <Titles text='My list'/>
    <Titles text='Downloads'/>
    </ScrollView>
    </View>
<FlatList
data={movie}   
renderItem={({item})=> <SearchImages image={item.poster_path} title={item.title} release_date={item.release_date}/>}
keyExtractor={item => item.id}
/>
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        paddingTop:10,
        flex:1,
        backgroundColor: '#1F2123',
      },

})