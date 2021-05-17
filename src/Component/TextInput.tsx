import React from 'react';
import {TextInput} from 'react-native';
import {styles} from './style';

const Input = ({
  placeholder,
  onBlur,
  keyboardType,
  maxLength,
  onChangeText,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#283747"
      style={styles.input}
      onBlur={onBlur}
      autoCorrect={false}
      keyboardType={keyboardType}
      maxLength={maxLength}
      returnKeyType="next"
      onChangeText={onChangeText}
    />
  );
};

export default Input;
