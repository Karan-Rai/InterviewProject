import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = ({placeholder, keyboardType, maxLength, onChangeText}) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#283747"
      style={styles.input}
      autoCorrect={false}
      keyboardType={keyboardType}
      maxLength={maxLength}
      returnKeyType="next"
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
});

export default Input;
