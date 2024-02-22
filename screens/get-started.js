import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, ImageBackground, TouchableOpacity, ScrollView, Dimensions } from 'react-native';


export default function Start({navigation}) {
  return (
    
  <View style={styles.container}>
       <StatusBar style="auto" />
    <ImageBackground 
    style={styles.image}  
    source={{uri: 'https://hips.hearstapps.com/hmg-prod/images/joker-03-1572350098.jpg?crop=0.670xw:1.00xh;0.166xw,0&resize=1200:*'}}>
<View style={styles.overlay}>
    <View  style={{gap:10}}>
    <Text style={{fontSize:30,color:'#fff',fontWeight:'bold',marginRight:50}}>Enjoy your favorite movie everywhere</Text>
    <Text style={{fontSize:15,color:'#fff'}}>Browse through our collections and discover hundreds of movies and series that you'll love!</Text>
    </View>
    <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Watch')}>
    <Text style={{fontSize:15,textAlign:'center'}}>Get started</Text>
   </TouchableOpacity>
   </View>
    </View>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0ca0c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width:"100%",
    height:"100%",
    alignItems:'center',
    justifyContent: 'center',
    // opacity:0.3
  },
  overlay: {
    flex:1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    width:"100%", 
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

button:{
backgroundColor:'#FCD22E',
padding:10,
margin:15,
borderRadius:5
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  }
});
