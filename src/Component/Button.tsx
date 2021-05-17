import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLORS} from '../Utils/colors';

const Button = ({title, onPress, disabled}) => {
  return (
    <View style={styles.button}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={styles.submitButton}>
        <Text style={styles.submitText}> {title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    fontSize: 20,
    color: '#fff',
  },
  submitButton: {
    marginTop: 30,
    backgroundColor: COLORS.buttonColor,
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});

export default Button;
