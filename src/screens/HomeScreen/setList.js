import {Text, View, ToastAndroid, Platform, AlertIOS} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import customAlert from '../../utils/Dialogs';



const setList = (data,click) => {


  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={()=>{
        click()
      }}
      >
      <Text style={styles.textView}>{data.item.name}</Text>
      <Text style={styles.subTextView}>{data.item.email}</Text>
    </TouchableOpacity>

  );
};

export default setList;
