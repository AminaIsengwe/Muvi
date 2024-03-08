import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react'
import { StyleSheet, Text, View,Image,TouchableWithoutFeedback,Dimensions, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import {Icon} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function SignUp({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')

  const validateForm = () => {
      let valid = true
     // Validate email
      if (!email.trim()) {
          setEmailError('Email is required')
          valid = false
      } else if (!isValidEmail(email)) {
          setEmailError('Invalid email format')
          valid = false
      } else {
          setEmailError('')
      }
      // Validate password
      if (!password.trim()) {
          setPasswordError('Password is required')
          valid = false
      } else {
          setPasswordError('')
      }

      // Validate confirm password
      if (!confirmPassword.trim()) {
        setConfirmPasswordError('Confirm Password is required');
        valid = false;
      } else if (password !== confirmPassword) {
        setConfirmPasswordError('Passwords do not match');
        valid = false;
      } else {
        setConfirmPasswordError('');
      }
      return valid;
    };

 
  const isValidEmail = (email) => {
      // Basic email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
  };
  const handleSubmit = async () => {
    if (validateForm()) {
        // Perform form submission
        console.log('Submitted:', email, password)
        await AsyncStorage.setItem('data','name')
    }
}
const getData= async ()=>{
  let user_data=await AsyncStorage.getItem('data')
  console.log (user_data)
}
  return (
  <View style={styles.container}>
    <StatusBar style="auto" />
    <View style={styles.logo}>
    <Image source={require('../assets/logo.png')} />
    </View>
    <Text style={{color:'#A5A7AB',fontSize:17,textAlign:'center'}}>Sign up to discover all our movies and enjoy our features.</Text>
<View style={styles.input}>
<TextInput
label='Email'
autoCompleteType="email"
autoCorrect={false}
value={email}
onChangeText={setEmail}
error={!!emailError}
placeholder='myname@gmail.com'
mode='offline'
style={{backgroundColor:'#1F2123'}}
textColor='white'
right={<TextInput.Icon icon="email-outline"  color='#FCD22E'/>}
>
</TextInput>
{emailError ? <Text style={styles.error}>{emailError}</Text> : null}
<TextInput
label='Password'
value={password}
onChangeText={setPassword}
error={!!passwordError}
mode='offline'
style={{backgroundColor:'#1F2123'}}
secureTextEntry={true}
textColor='white'
right={<TextInput.Icon icon="lock-outline" color='#FCD22E' />}
>
</TextInput>
{passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
<TextInput
label ='Confirm Password'
mode='offline'
style={{backgroundColor:'#1F2123'}}
secureTextEntry={true}
textColor='white'
right={<TextInput.Icon icon="lock-outline" color='#FCD22E' style={{}}/>}
value={confirmPassword}
onChangeText={setConfirmPassword}
error={!!confirmPasswordError}
>
</TextInput>
{confirmPasswordError ? <Text style={styles.error}>{confirmPasswordError}</Text> : null}
 
</View>
<View style={styles.button_container}>
<TouchableOpacity  onPress={handleSubmit} style={{backgroundColor:'#FCD22E',padding:12,marginTop:30,borderRadius:5}}>
    <Text style={{fontSize:15,textAlign:'center'}}>Sign Up</Text>
   </TouchableOpacity>

<Text style={{color:'white'}}>
   By signing up I accept <Text style={{color:'#FCD22E'}}>terms of use</Text> and <Text style={{color:'#FCD22E'}}>privacy policy</Text>
</Text>
<Text style={{color:'white',textAlign:'center'}}>
    or simply sign up with
</Text>
<TouchableOpacity style={styles.apple} onPress={()=>navigation.navigate('Watch')}>
<Icon name='apple' color='white'/>
    <Text style={{fontSize:15,textAlign:'center',color:'#fff'}}>Sign up with Apple</Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.google} onPress={()=>navigation.navigate('Watch')}>
<Icon name='google' type='font-awesome' color='green' />
    <Text style={{fontSize:15,textAlign:'center',color:'#000'}}> Sign up with Google</Text>
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
marginTop:20,
marginBottom:15,
  },
button_container:{
left:0,
right:0,
width:'90%',
gap:20,
  },
  input:{
width:"90%",
gap:5,
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
},
error: {
  color: 'red',
  fontSize: 14,
  marginTop: 5
}

});