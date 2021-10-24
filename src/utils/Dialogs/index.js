import React, {useEffect} from 'react';
import {Modal, View, Text, Pressable, TouchableOpacity} from 'react-native';

import styles from './styles';

export const CustomAlert = ({
  visible,
  title,
  description,
  onYesClick,
  onNoClick,
}) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true} style={styles.modal}>
      <View style={styles.container}>
        <Text style={styles.title}>APP NAME</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => onYesClick()}>
            <Text style={styles.button}>Okay</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onNoClick()}>
            <Text style={styles.button}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
