import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import React, { useEffect, useState } from 'react'
import Bottom_nav from './bottom_nav'
import { ScrollView } from 'react-native'
import { FlatList } from 'react-native'
import Movieapi from './movieapi.jsx'
import { Icon } from 'react-native-elements'
import SearchImages from './searchimages.jsx'
import  axios  from 'axios'


export default function Search({navigation}) {
    // const [movie,SetMovie] = useState([])
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2E2MmIwYWQ1N2RlZGRmMDViMWI0MzM5NGIxZTFhNSIsInN1YiI6IjY1ZDg2YzBiZDRkNTA5MDE2MjY0OWUzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JrWzuPGsz3-eRen2TV7Luv6h1MkfPh19wjaC1et9m60'
    }
  };
//   useEffect(()=>{
//     Getmovies();
//   },[])
//   const Getmovies = () =>{
//   fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)   
//     .then(response => response.json())
//     .then(response => {
// SetMovie(response.results)
//     })
//     .catch(err => console.error(err));

//   }
  const [search,setSearch] = useState([])
  const [searchdata,setSearchdata] = useState('')
 
  React.useEffect(() => {
   if (searchdata.length > 0){
     Searchapi()
   }else{
     setSearch([])
   }
    
  }, [searchdata])

  const Searchapi = async () => {  
    axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchdata}&include_adult=false&language=en-US`,options)
     .then((data1)=>{
       console.log(data1.data.results);
      setSearch(data1.data.results)
     }).catch((err)=>{
      console.log(err)
     })
   }

  return (
<View style={styles.container}>
<Text style={{color:'#fff',fontSize:20,fontWeight:'bold',paddingLeft:20}}>Search</Text>
<TextInput
placeholder='Type categories, title, year, etc..'
style={{backgroundColor:'#2C2D31',borderWidth:1,margin:5,borderColor:'#2C2D31'}}
right={<TextInput.Icon icon="magnify" color="#FCD22E"/>}
onChangeText={(e)=>setSearchdata(e)}
value={searchdata}
>
</TextInput>
<Text style={{color:'#fff',fontSize:17,fontWeight:'bold',padding:10}} >Popular Search</Text>
<Pressable onPress={()=>navigation.navigate('Action')} >
<FlatList
data={search}   
renderItem={({item})=> <SearchImages image={item.postter_path} title={item.original_title} release_date={item.release_date} press={()=>{navigation.navigate('Action',item)}}/>}
keyExtractor={(item, index) => index.toString()}
// keyExtractor={item => item.id}
/>
</Pressable>
{/* {
movie.map((item,index)=>(
<View key={index}>
<Movieapi image={item.poster_path}/>
</View>

))
} */}
     
      {/* <Bottom_nav navigation={navigation}/> */}
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        paddingTop:30,
        flex:1,
        backgroundColor: '#1F2123',
      },

})