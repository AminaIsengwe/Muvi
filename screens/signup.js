import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import {Icon} from 'react-native-elements';

export default function SignUp({navigation}) {
  return (
  <View style={styles.container}>
    <StatusBar style="auto" />
    <View style={styles.logo}>
    <Image source={require('../assets/logo.png')} />
    </View>
    <Text style={{color:'#A5A7AB',fontSize:20,textAlign:'center'}}>Sign up to discover all our movies and enjoy our features.</Text>
<View style={styles.input}>
<TextInput
label='Email'
placeholder='myname@gmail.com'
mode='offline'
style={{backgroundColor:'#1F2123'}}
textColor='white'
right={<TextInput.Icon icon="email-outline"  color='#FCD22E'/>}
>
</TextInput>
<TextInput
label='Password'
mode='offline'
style={{backgroundColor:'#1F2123'}}
secureTextEntry={true}
textColor='white'
right={<TextInput.Icon icon="lock-outline" color='#FCD22E' />}
>
</TextInput>
<TextInput
label ='Confirm Password'
mode='offline'
style={{backgroundColor:'#1F2123'}}
secureTextEntry={true}
textColor='white'
right={<TextInput.Icon icon="lock-outline" color='#FCD22E' style={{}}/>}
>
</TextInput>

 
</View>
<View style={styles.button_container}>
<TouchableOpacity style={{backgroundColor:'#FCD22E',padding:12,marginTop:30,borderRadius:5}} onPress={()=>navigation.navigate('Watch')}>
    <Text style={{fontSize:17,textAlign:'center'}}>Sign Up</Text>
   </TouchableOpacity>

<Text style={{color:'white'}}>
   By signing up I accept <Text style={{color:'#FCD22E'}}>terms of use</Text> and <Text style={{color:'#FCD22E'}}>privacy policy</Text>
</Text>
<Text style={{color:'white',textAlign:'center'}}>
    or simply sign up with
</Text>
<TouchableOpacity style={styles.apple} onPress={()=>navigation.navigate('Watch')}>
<Icon name='apple' color='white'/>
    <Text style={{fontSize:17,textAlign:'center',color:'#fff'}}>Sign up with Apple</Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.google} onPress={()=>navigation.navigate('Watch')}>
<Icon name='google' type='font-awesome' color='green' />
    <Text style={{fontSize:17,textAlign:'center',color:'#000'}}> Sign up with Google</Text>
    </TouchableOpacity>
  <Text style={{color:'white',textAlign:'center'}}>Already have an account? 
   <Text onPress={()=>navigation.navigate('SignIn')} style={{color:'#FCD22E'}} > Sign In</Text> 
</Text>
   </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2123',
    alignItems: 'center',
    // justifyContent: 'center',
    gap:10,
  },
  logo:{
marginTop:40,
marginBottom:20,
  },
button_container:{
left:0,
right:0,
width:'90%',
gap:20,
  },
  input:{
width:"90%",

  },
apple:{
  backgroundColor:'#000',
  padding:13,
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  borderRadius:5
},
google:{
  backgroundColor:'#fff',
  padding:12,
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  borderRadius:5
}

});