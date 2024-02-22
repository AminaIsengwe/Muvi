import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableWithoutFeedback } from 'react-native';

export default function Splash({navigation}) {
  return (
  <View style={styles.container}>
    <StatusBar style="auto" />
    <TouchableWithoutFeedback onPress={()=>navigation.navigate('Start')}>
  <Image source={require('../assets/logo.png')}/>
  </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2123',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width:50,
    height:50,
  }
});
