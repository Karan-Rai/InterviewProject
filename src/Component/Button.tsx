import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import {styles} from './style';

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

export default Button;
