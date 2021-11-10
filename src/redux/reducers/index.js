import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import auth from './auth';
import profile from './profile';
import history from './history';
import items from './items';
import category from './category';
import cart from './cart';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistAuth = {
  storage: AsyncStorage,
  key: 'auth',
};
const reducers = combineReducers({
  auth: persistReducer(persistAuth, auth),
  profile,
  history,
  items,
  category,
  cart,
});

export default reducers;
