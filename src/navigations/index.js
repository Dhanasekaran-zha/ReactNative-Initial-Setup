import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import { navigationRef } from '../services/NavigationService';

const AppNavigationContainer = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
