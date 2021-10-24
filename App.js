import React, {useEffect} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {OutlinedTextField} from 'rn-material-ui-textfield';
import CustomButton from './src/components/atoms/CustomButton';
import AppNavigationContainer from './src/navigations';
import AuthNavigator from './src/navigations/AuthNavigator';
import SplashScreen from './src/screens/SplashScreen';
import {useSelector} from 'react-redux';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CommonLoader from './src/components/atoms/loader/cloader-component';

const App = () => {
  const isLoading = useSelector(state => state.CommonReducer.isLoading);
  useEffect(() => {
    console.log('isLoading', isLoading);
  }, [isLoading]);

  return (
    <View
      style={{
        width: wp(100),
        height: hp(100),
      }}>
      <AppNavigationContainer />
      {isLoading && <CommonLoader />}
    </View>
  );
};

export default App;
