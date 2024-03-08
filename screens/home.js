import { StyleSheet, Text, View, StatusBar, Image, FlatList, ScrollView,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon } from 'react-native-elements'
import Movies1 from './Movies1'
import Titles from './titles'
import Bottom_nav from './bottom_nav';
import Movieapi from './movieapi.jsx'
import Movieapi2 from './movieapi2.jsx'
import Titles2 from './titles2.jsx'
import MenuItems from './Menu.jsx'
export default function Home({ navigation }) {
    // const url= require('../assets/spiderman.jpeg')
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
  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)   
    .then(response => response.json())
    .then(response => {
SetMovie(response.results)
    })
    .catch(err => console.error(err));
  }
const [movies,setMovies]= useState([])
useEffect(()=>{
  Rendermovies();
},[])
const Rendermovies = () =>{
fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)   
  .then(response => response.json())
  .then(response => {
setMovies(response.results)
  })
  .catch(err => console.error(err));
}
    const images1=[
        { id: 1, uri: require('../assets/moana.jpeg') },
        { id: 2, uri: require('../assets/spiderman.jpeg') },
        { id: 3, uri: require('../assets/barbie.jpg') },
      ];
      const images2=[
        { id: 1, uri: require('../assets/creed.jpg') },
        { id: 2, uri: require('../assets/grey.jpg') },
        { id: 3, uri: require('../assets/moana.jpeg') },
        { id: 4, uri: require('../assets/barbie.jpg') },
      ];
 return (
  <View style={styles.contents}>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.top}>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <Image style={{ marginTop: 10,marginBottom:10,height:50 }} source={require('../assets/logo.png')} />
        <View style={{display:'flex',flexDirection:'row',gap:10}}>
        <Icon name='bookmark-outline' color='white' ></Icon>
        <Icon name="bell-outline" type="material-community" color='white'></Icon>
        </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Titles text='Featured'/>
            <Titles text='Seasons'/>
            <Titles text='Action'/>
            <Titles text='Thriller'/>
            <Titles text='Movies'/>
            <Titles text='Featured'/>

        </ScrollView>
      </View >  
            <View  style={{paddingLeft:5}}   >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Titles2 text=' Popular Today'/>
            <Titles2 text='Marvel'/>
            <Titles2 text='Fans choice'/>
            <Titles2 text='Star wars'/>
            <Titles2 text='Movies'/>
            <Titles2 text='Fans choice'/>
            <Titles2 text='Star wars'/>
            <Titles2 text='Movies'/>
        </ScrollView>
        <ScrollView>
                  <Text style={{color:'#fff',fontSize:20,fontWeight:'bold',paddingLeft:10,paddingTop:10}}>
                New Releases
            </Text>
            <FlatList horizontal
data={movie}   
renderItem={({item})=> <Movieapi image={item.poster_path} title={item.title} vote_average={item.vote_average}/>}
keyExtractor={item => item.id}
/>
{/* <ScrollView horizontal>
        {images1.map(image => (
          <Movies1 key={image.id} uri={image.uri} />
        ))}
      </ScrollView> */}

      <Text style={{color:'#fff',fontSize:20,fontWeight:'bold',paddingLeft:10}}>
                Made for you
            </Text>
            <FlatList horizontal
data={movie}   
renderItem={({item})=> <Movieapi image={item.poster_path} title={item.title} vote_average={item.vote_average}/>}
keyExtractor={item => item.id}
/>


      {/* <ScrollView horizontal>
        {images2.map(image => (
          <Movies1 key={image.id} uri={image.uri} />
        ))}
      </ScrollView> */}
      <Text style={{color:'#fff',fontSize:20,fontWeight:'bold',paddingLeft:10}}>
              Popular on Muvi
            </Text>
            <FlatList
           data={movies}   
          renderItem={({item})=> <Movieapi2 image={item.poster_path} title={item.title} vote_average={item.vote_average}/>}
          keyExtractor={item => item.id}
         />
         </ScrollView>
        </View>
        {/* <ScrollView horizontal>
        {images2.map(image => (
          <Movies1 key={image.id} uri={image.uri} />
        ))}
      </ScrollView> */}
    </View>
    {/* <Bottom_nav navigation={navigation}/> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#26282C',
  },
  top: {
    backgroundColor: '#1F2123',
    padding: 10,
  },
contents:{
height:'100%'
}
})
