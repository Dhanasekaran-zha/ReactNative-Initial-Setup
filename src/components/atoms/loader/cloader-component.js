import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {styles} from './commonLoaderStyle';
const CommonLoader = props => {
  return (
    <View style={[styles.container]}>
      <View style={styles.loader} >
        <ActivityIndicator size="large"style={{padding:10}} />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    </View>
  );
};
export default CommonLoader;
