import * as React from 'react';
import { CommonActions, StackActions } from '@react-navigation/native';

// NavigationConatiner is refered here - Check NavigationStack
export const navigationRef = React.createRef();

function navigate(name, params) {
  navigationRef.current && navigationRef.current.navigate(name, params);
}

function replace(name, params) {
  navigationRef.current && navigationRef.current.dispatch(StackActions.replace(name, params))
}

function goBack() {
  navigationRef.current && navigationRef.current.goBack();
}

/**
 * Call this function when you want to navigate to a specific route AND reset the navigation history.
 *
 * That means the user cannot go back. This is useful for example to redirect from a splashscreen to
 * the main screen: the user should not be able to go back to the splashscreen.
 *
 * @param {String} routeName The name of the route to navigate to.
 * @param {any} params Route parameters.
 */
function navigateAndReset(name, params) {
  navigationRef.current && navigationRef.current.dispatch(
    CommonActions.reset({
      index: 0,
      key: null,
      routes: [
        { name, params }
      ]
    })
  )
}

export default {
  navigate,
  goBack,
  navigateAndReset,
  replace
};
