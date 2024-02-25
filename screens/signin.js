import { StyleSheet,Image, Text, View,ImageBackground,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import Buttons from './inputs'
import Input from './inputs'
import {Icon } from 'react-native-elements'


export default function SignIn({navigation}) {
  return (
<View style={styles.container}>
<View>
<Input
label='Email'
placeholder='myname@gmail.com'
mode='outlined'
style={{backgroundColor:'#1F2123'}}
textColor='white'
/>
<Input
label='Password'
placeholder='Enter your password'
mode='outlined'
style={{backgroundColor:'#1F2123'}}
textColor='white'
secureTextEntry={true}
/>
<Text style={{color:'white',textAlign:'right'}}>
    Forgot password?
</Text>
<TouchableOpacity style={{backgroundColor:'#FCD22E',padding:10,margin:15,borderRadius:5}} onPress={()=>navigation.navigate('Watch')}>
    <Text style={{fontSize:15,textAlign:'center'}}>Sign In</Text>
   </TouchableOpacity>

<Text style={{color:'white',textAlign:'center'}}>
   Or sign In with
</Text>
</View>
<View>
<View>
<TouchableOpacity style={{backgroundColor:'#1F2123',padding:10,margin:15,borderRadius:5,borderWidth:1,borderColor:'#C8CACB',display:'flex',flexDirection:'row', justifyContent:'center',}}>
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
  google:{
    backgroundColor:'#fff',
    padding:12,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    borderRadius:5
  }

})