import { StyleSheet,Image, Text, View,ImageBackground,TextInput} from 'react-native'
import React from 'react'
import Buttons from './inputs'
import Input from './inputs'
import {Icon } from 'react-native-paper'

export default function SignIn(navigation) {
  return (
    <View style={styles.container}>

<View>
<Input
label='Email'
placeholder='myname@gmail.com'
mode='offline'
style={{backgroundColor:'#1F2123'}}
textColor='white'
/>
<Input
label='Password'
placeholder='Enter your password'
mode='offline'
style={{backgroundColor:'#1F2123'}}
textColor='white'
secureTextEntry={true}
left={<TextInput.Icon icon="email-outline" color='#fff' style={{}}/>}
/>
</View>
<View>
<View>

</View>
</View>
    </View>

  )
}

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor: '#1F2123',
    justifyContent:'center',
}

})