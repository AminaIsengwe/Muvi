import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TextInput,Icon } from 'react-native-paper'

export default function Input({ id, label, placeholder, mode, style, textColor,secureTextEntry,iconname,iconname2,onChangeText,value,error,onPress}) {
  return (
    <View style={styles.container}>
      <TextInput
        label={label}
        placeholder={placeholder}
        mode={mode}
        style={[styles.input, style]} 
        secureTextEntry={secureTextEntry}
        theme={{ colors: { primary: '#fff' } }} 
        textColor={textColor}
        value={value}
        onChangeText={onChangeText}
        error={error}
        onChange={onChangeText}
        left={<TextInput.Icon icon={iconname}  color='#FCD22E'/>}
        right={<TextInput.Icon icon={iconname2} onPress={onPress}  color='#FCD22E'/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', 
    marginBottom: 20, 
  },
  input: {
    width: '90%', 
    height:40
  },
  logo:{
    marginTop:40,
    marginBottom:20,
      },
})
