import { StyleSheet,Image, Text, View,ImageBackground,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import Buttons from './inputs'
import Input from './inputs'
import {Icon } from 'react-native-elements'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'


export default function SignIn({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

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
  };
  const isValidEmail = (email) => {
    // email validation regex
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

  return (
<View style={styles.container}>
<View>
<Input
label='Email'
placeholder='myname@gmail.com'
mode='outlined'
style={{backgroundColor:'#1F2123'}}
textColor='white'
iconname='email'
iconname2='check'
error={!!emailError}
value={email}
onChangeText={setEmail}
/>
{emailError ? <Text style={styles.error}>{emailError}</Text> : null}
<Input
label='Password'
placeholder='Enter your password'
mode='outlined'
style={{backgroundColor:'#1F2123'}}
textColor='white'
secureTextEntry={isPasswordSecure} 
onPress={() => setIsPasswordSecure(!isPasswordSecure)}
iconname='lock'
iconname2={isPasswordSecure?'eye-off' : 'eye'}
error={!!passwordError}
value={password}
onChangeText={setPassword}
/>
{passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
<Text style={{color:'white',textAlign:'right'}}>
    Forgot password?
</Text>
<TouchableOpacity onPress={handleSubmit} style={{backgroundColor:'#FCD22E',padding:10,margin:15,borderRadius:5}} >
    <Text style={{fontSize:15,textAlign:'center'}}>Sign In</Text>
   </TouchableOpacity>

<Text style={{color:'white',textAlign:'center'}}>
   Or sign In with
</Text>
</View>
<View>
<View>
<TouchableOpacity onPress={()=>navigation.navigate('Watch')} style={{backgroundColor:'#1F2123',padding:10,margin:15,borderRadius:5,borderWidth:1,borderColor:'#C8CACB',display:'flex',flexDirection:'row', justifyContent:'center',}}>
    <Icon name='google' type='font-awesome' color='green' />
    <Text style={{fontSize:15,textAlign:'center',color:'white'}}> Google</Text>
   </TouchableOpacity>
   <TouchableOpacity style={{backgroundColor:'#1F2123',padding:10,margin:15,borderRadius:5,borderWidth:1,borderColor:'#C8CACB',display:'flex',flexDirection:'row', justifyContent:'center'}} onPress={()=>navigation.navigate('Home')}>
    <Icon name='movie-open-outline' color='white' type="material-community"></Icon>
    <Text style={{fontSize:15,textAlign:'center',color:'white'}} > Watch movie</Text>
   </TouchableOpacity>
</View>
<Text style={{color:'white',textAlign:'center'}}>Don't have an account <Text onPress={()=>navigation.navigate('SignUp')}  style={{color:'#FCD22E'}} >sign up</Text></Text>

</View>
    </View>

  )
}

const styles = StyleSheet.create({
container:{
  paddingTop:20,
  flex:1,
    backgroundColor: '#1F2123',
},
button_container:{
  gap:20,
    },
  apple:{
    padding:13,

    justifyContent:'center',
    borderRadius:5
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginTop: 5
  },
  
  google:{
    backgroundColor:'#fff',
    padding:12,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    borderRadius:5
  }

})