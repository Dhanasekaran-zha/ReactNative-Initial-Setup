import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import mobileReducer from '../reducers/MobileReducers';
import ApiReducer from '../reducers/ApiReducers';
import CommonReducer from '../reducers/CommonReducer';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({mobileReducer, ApiReducer, CommonReducer});

const middlewares = [thunk];
const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancers = [];
enhancers.push(applyMiddleware(...middlewares));

export default () => {
  let store = createStore(persistedReducer, compose(...enhancers));
  let persistor = persistStore(store);

  return {store, persistor};
};
