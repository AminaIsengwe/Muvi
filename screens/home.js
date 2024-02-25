import { StyleSheet, Text, View, StatusBar, Image, FlatList, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react';
import { Icon } from 'react-native-elements'
import Movies1 from './Movies1'
import Titles from './titles'
import Bottom_nav from './bottom_nav';
export default function Home({ navigation }) {
    // const url= require('../assets/spiderman.jpeg')
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
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.top}>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <Image style={{ marginTop: 20,marginBottom:10,height:50 }} source={require('../assets/logo.png')} />
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
      
      
            <View  style={{paddingLeft:20,gap:10}}   >
            <Text style={{color:'#fff',fontSize:20,fontWeight:'bold',paddingTop:15}}>
                Hi,Username
            </Text>
            <Text style={{color:'#C8CACB',fontSize:15}}>
                I have recommended movie for you,enjoy it :)
            </Text>
        </View>
<ScrollView horizontal>
        {images1.map(image => (
          <Movies1 key={image.id} uri={image.uri} />
        ))}
      </ScrollView>
      <Text style={{color:'#fff',fontSize:20,fontWeight:'bold',paddingLeft:10}}>
                Popular on Muvi
            </Text>
      <ScrollView horizontal>
        {images2.map(image => (
          <Movies1 key={image.id} uri={image.uri} />
        ))}
      </ScrollView>
      <Text style={{color:'#fff',fontSize:20,fontWeight:'bold',paddingLeft:10}}>
                Editor's choice
            </Text>
        <ScrollView horizontal>
        {images2.map(image => (
          <Movies1 key={image.id} uri={image.uri} />
        ))}
      </ScrollView>
    </ScrollView>
    <Bottom_nav navigation={navigation}/>
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
    padding: 30,
  },
contents:{
  paddingBottom: 50

}
})
