import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  HOME,
  LOGIN,
  SPLASH,
} from '../constatnts/NavigationConstatnts/RoutesConstants';
import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
      <AuthStack.Navigator>
        <AuthStack.Screen name={SPLASH} component={SplashScreen} />
        <AuthStack.Screen name={LOGIN} component={LoginScreen} />
        <AuthStack.Screen name={HOME} component={HomeScreen} />
      </AuthStack.Navigator>
  );
};

export default AuthNavigator;
