import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';

export default function Watch({navigation}) {
  return (
    
  <View style={styles.container}>
    <StatusBar style="auto" />
    <View style={styles.logo}>
    <Image style={{margin:30}}source={require('../assets/logo.png')} />
    </View>
    <View style={styles.welcome}>
    <Image source={require('../assets/welcome.png')} />
    <Text style={{color:'white',fontWeight:'bold',fontSize:25,padding:10}}>Welcome to Muvi</Text>
    <Text style={{color:'white',fontSize:15,color:'gray'}}>Free movie streaming all your needs everytime </Text>
    <Text style={{textAlign:'center',color:'white',fontSize:15,color:'gray'}}>and everywhere</Text>
    </View>
    <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Home')} >
    <Text style={{fontSize:15,textAlign:'center'}} >Watch movie</Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
    <Text style={{fontSize:15,color:'white',textAlign:'center'}}>Sign Up</Text>
   </TouchableOpacity>
   </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,   
    backgroundColor: '#26282C',
    alignItems: 'center',
  },
 logo: {
marginTop:30,
  },
  welcome:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#26282C',
  },
button:{
    backgroundColor:'#FCD22E',
    padding:10,
    margin:15,
    borderRadius:5
      },
      buttonContainer: {
        position: 'absolute',
        bottom: 40,
        left: 0,
        right: 0,
      }
});
