import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import CustomButton from '../../components/atoms/CustomButton';
import CustomEditText from '../../components/atoms/CustomEditText';
import {useNavigation} from '@react-navigation/core';
import {HOME} from '../../constatnts/NavigationConstatnts/RoutesConstants';
import {ToastAndroid, Platform, AlertIOS} from 'react-native';
import {useEffect} from 'react';
import {
  checkStoragePermissions,
  getStoragePermission,
} from '../../utils/Permissions';
import {getMobileNumber} from '../../database/RealmTransactions';
import {checkMobileNumber} from '../../redux/actions/MobileActions';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [mobile, setMobile] = useState('');
  const stord = useSelector(state => state.mobileReducer.data);
  console.log(stord)
  const {navigate} = useNavigation();

  useEffect(() => {
    getStoragePermission();
    // dispatch(checkMobileNumber('123'));
  }, []);

  const validateMobile = () => {
    // const mobileNumber = JSON.stringify(getMobileNumber());
    // if (mobile === mobileNumber) {
    //   navigate(HOME);
    // } else {
    //   ToastAndroid.show('Invalid Number', ToastAndroid.SHORT);
    // }
    ToastAndroid.show(stord.mobileNumber, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <View style={styles.blackContainer} />
      <View style={styles.loginCOntainer}>
        <Text style={styles.titleContent}>HAVE FUN LEARNING</Text>
        <Text style={styles.subtitleContent}>
          We offer a unique service where you can easily assign,monitor and
          check work.
        </Text>
        <View style={styles.mobileContainer}>
          <Text style={[styles.subtitleContent, {color: 'black'}]}>
            ENTER MOBILE NUMBER
          </Text>
          <CustomEditText
            title={'Mobile Number'}
            maxLength={10}
            keyboardType={'numeric'}
            onChange={setMobile}
          />
          <CustomButton
            title={'Next'}
            style={styles.button}
            onPress={validateMobile}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
