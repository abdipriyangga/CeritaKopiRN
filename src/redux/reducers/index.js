import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import authReducer from './authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistAuth = {
  storage: AsyncStorage,
  key: 'auth',
};

const reducers = combineReducers({
  auth: persistReducer(persistAuth, authReducer),
});

export default reducers;
