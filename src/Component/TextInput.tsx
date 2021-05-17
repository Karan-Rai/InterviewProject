import React from 'react';
import {TextInput} from 'react-native';
import {styles} from './style';
import {COLORS} from '../Utils/colors';

const Input = ({placeholder, onChangeText}) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={COLORS.black}
      style={styles.input}
      autoCorrect={false}
      returnKeyType="next"
      onChangeText={onChangeText}
    />
  );
};

export default Input;
