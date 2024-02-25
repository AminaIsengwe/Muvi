import React from 'react';
import { View,StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const Bottom_nav = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Icon
        name="home-outline"
        type="material-community"
        size={30}
        color="white"
        onPress={() => navigation.navigate('Home')}
        containerStyle={{ flex: 1, alignItems: 'center', padding: 10 }}
      />
      <Icon
        name="search"
        type="material"
        size={30}
        color="white"
        containerStyle={{ flex: 1, alignItems: 'center', padding: 10 }}
      />
      <Icon
        name="folder-outline"
        type="material-community"
        size={30}
        color="white"
        containerStyle={{ flex: 1, alignItems: 'center', padding: 10 }}
      />
      <Icon
        name="person"
        type="material"
        size={30}
        color="white"
        onPress={()=>navigation.navigate('Profile')}
        containerStyle={{ flex: 1, alignItems: 'center', padding: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#202123',
      padding:10
    },
});   
export default Bottom_nav;
