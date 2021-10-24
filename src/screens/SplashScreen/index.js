import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {LOGIN} from '../../constatnts/NavigationConstatnts/RoutesConstants';
import NavigationService from '../../services/NavigationService';
import {addMobileNumber} from '../../database/RealmTransactions';
import {checkMobileNumber} from '../../redux/actions/MobileActions';

const SplashScreen = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('123');

  useEffect(() => {
    setTimeout(() => {
      setName('123');
      console.log('Inserted :' + name);
      // dispatch(checkMobileNumber(name));
      NavigationService.navigateAndReset(LOGIN);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.content}>Splash Screen</Text>
    </View>
  );
};

export default SplashScreen;
