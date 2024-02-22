import {Text, View,Image, ImageBackground} from 'react-native';
export default function Movies1({uri})
{

  return (
    <View style={{width:250,height:200,padding:5,paddingTop:20}} >
        <Image
        source={ uri }
        resizeMode="cover"
        style={{ borderRadius:5,height:150,width:'100%'}}/>  
    </View>
  )
}