import { ToastAndroid } from 'react-native';
import FlashMessage from '../../components/FlashMessage';

const addProducts = data => {
  return async dispatch => {
    dispatch({
      type: 'SET_CARTS_ADD_ITEM',
      payload: data,
    });
    ToastAndroid.show('add to cart', ToastAndroid.LONG);
  };
};

export { addProducts };
