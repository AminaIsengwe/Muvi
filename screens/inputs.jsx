import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TextInput,Icon } from 'react-native-paper'

export default function Input({ id, label, placeholder, mode, style, textColor, left,secureTextEntry}) {
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
        left={left} 
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
