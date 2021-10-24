import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';

const CustomButton = props => {
  const {title, onPress, style,textStyle} = props;
  return (
    <TouchableOpacity
      onPress={onPress ? onPress : () => {}}
      style={[styles.container,style]}>
      <Text style={[styles.content,textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
