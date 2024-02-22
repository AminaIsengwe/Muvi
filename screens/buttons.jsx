
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default function Buttons({ text, onPress, icon, color }) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      {icon && <Icon name={icon} color='white' />}
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 17,
    textAlign: 'center',
    color: 'white',
    marginLeft: 5,
  },
});
