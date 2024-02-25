import { StyleSheet, Text, View, Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import Bottom_nav from './bottom_nav'

export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{color:'#fff',fontSize:20,fontWeight:'bold',paddingLeft:30}}>More</Text>
    <View  style={styles.photo}>
  <Image source= {require('../assets/moana.jpeg') } style={{ width:50,height:50,borderRadius:10,}}/>
  <View>
<Text style={{fontSize:15,color:'white'}}>Jonathan Doe</Text>
<Text style={{fontSize:13,color:'#C3BCAF'}}>doe.jonathan@gmail.com</Text>
</View>
<View style={{display:'flex',flexDirection:'row'}}>
<Icon name="pencil-outline" type="material-community" color='#C5A22D'></Icon>
<Text name="inbox" color='white'/>
<Text style={{fontSize:13,color:'#C5A22D'}}	> Edit</Text>
</View>
  </View>
<View style={styles.menu}>
<View style={{padding:20,borderRadius:5,display:'flex',flexDirection:'row'}} >
<Icon name="inbox" color='white'/>
<Text style={{fontSize:15,textAlign:'center',color:'white'}} > Inbox</Text>
</View>
<View style={{padding:20,borderRadius:5,display:'flex',flexDirection:'row'}} >
<Icon name="account-outline" type="material-community" color='white'/>
<Text style={{fontSize:15,textAlign:'center',color:'white'}} > Account Settings</Text>
</View>
<View style={{padding:20,borderRadius:5,display:'flex',flexDirection:'row'}} >
<Icon name="settings" color='white'/>
<Text style={{fontSize:15,textAlign:'center',color:'white'}} > App Settings</Text>
</View>
<View style={{padding:20,borderRadius:5,display:'flex',flexDirection:'row'}} >
<Icon name="language" color='white'/>
<Text style={{fontSize:15,textAlign:'center',color:'white'}} > Language</Text>
</View>
<View style={{padding:20,borderRadius:5,display:'flex',flexDirection:'row'}} >
<Icon name="help" color='white'/>
<Text style={{fontSize:15,textAlign:'center',color:'white'}} > Help</Text>
</View>

<View style={{padding:20,marginBottom:120}}>
<Text style={{padding:10,color:'#70706E'}}>Terms & Conditions</Text>
<Text style={{padding:10,color:'#70706E'}}>Privacy & Policy </Text>
</View>

<TouchableOpacity style={{padding:10,margin:15,borderRadius:5,borderWidth:1,borderColor:'#C8CACB',display:'flex',flexDirection:'row', justifyContent:'center'}}>
    <Text style={{fontSize:15,textAlign:'center',color:'#7C5144'}} > Log Out</Text>
   </TouchableOpacity>
   <Bottom_nav navigation={navigation}/>
   </View>
    </View>
  )
}
const styles = StyleSheet.create({
container:{
flex:1,
backgroundColor: '#202123',
paddingTop:50,

},
photo:{
display:'flex',
flexDirection:'row',
paddingLeft:30,
gap:20,
paddingVertical:15,
},
menu:{
    backgroundColor: '#25272A',
    width:'100%',
    height:'100%',
    borderRadius:5,
    
}

})