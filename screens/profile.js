import { StyleSheet, Text, View, Image ,TouchableOpacity} from 'react-native'
import React, { useContext } from 'react'
import { Icon, ThemeContext } from 'react-native-elements'
import Bottom_nav from './bottom_nav'
import { useNavigation } from '@react-navigation/native'
import { changeIntoDark } from './context/themecontext'

export default function Profile({navigation}) {
  const{dark,changeMode}=useContext(changeIntoDark)
  const usenav=useNavigation();
  const handleDrwawer=()=>{
    usenav.openDrawer()
  }
  return(
    <View style={{backgroundColor:dark?'#202123':'white' ,flex:1,
    paddingTop:50,}}>
      <Text style={{color:dark?'white':'black',fontSize:20,fontWeight:'bold',paddingLeft:30}} 
      onPress={ handleDrwawer}
      >More</Text>
    <View  style={styles.photo}>
  <Image source= {require('../assets/moana.jpeg') } style={{ width:50,height:50,borderRadius:10,}}/>
  <View>
<Text style={{fontSize:15,color:dark?'white':'black'}}>Jonathan Doe</Text>
<Text style={{fontSize:13,color:'#C3BCAF'}}>doe.jonathan@gmail.com</Text>
</View>
<View style={{display:'flex',flexDirection:'row'}} >
<Icon name="pencil-outline" type="material-community" color='#C5A22D'></Icon>
<Text name="inbox" color='white'/>
<Text style={{fontSize:13,color:'#C5A22D'}}	> Edit</Text>
</View>
<Icon name="theme-light-dark" type="material-community" color='#C5A22D' onPress={()=>{changeMode()}}></Icon>
  </View>
<View style={[styles.menu,{backgroundColor:dark?'#25272A':'white'}]}>
<View style={{padding:20,display:'flex',flexDirection:'row'}} >
<Icon name="inbox" color='white'/>
<Text style={{fontSize:15,textAlign:'center',color:dark?'white':'black'}} > Inbox</Text>
</View>
<View style={{padding:20,display:'flex',flexDirection:'row'}} >
<Icon name="account-outline" type="material-community" color='white'/>
<Text style={{fontSize:15,textAlign:'center',color:dark?'white':'black'}} > Account Settings</Text>
</View>
<View style={{padding:20,display:'flex',flexDirection:'row'}} >
<Icon name="settings" color='white'/>
<Text style={{fontSize:15,textAlign:'center',color:dark?'white':'black'}} > App Settings</Text>
</View>
<View style={{padding:20,display:'flex',flexDirection:'row'}} >
<Icon name="language" color='white'/>
<Text style={{fontSize:15,textAlign:'center',color:dark?'white':'black'}} > Language</Text>
</View>
<View style={{padding:20,display:'flex',flexDirection:'row'}} >
<Icon name="help" color='white'/>
<Text style={{fontSize:15,textAlign:'center',color:dark?'white':'black'}} > Help</Text>
</View>

<View style={{padding:20,marginBottom:100}}>
<Text style={{padding:10,color:'#70706E'}}>Terms & Conditions</Text>
<Text style={{padding:10,color:'#70706E'}}>Privacy & Policy </Text>
</View>
<TouchableOpacity style={{padding:10,margin:15,borderRadius:5,borderWidth:1,borderColor:'#C8CACB',display:'flex',flexDirection:'row', justifyContent:'center'}}>
    <Text style={{fontSize:15,textAlign:'center',color:'#7C5144'}} > Log Out</Text>
   </TouchableOpacity>
   </View>
    </View>
  )
}
const styles = StyleSheet.create({
container:{


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