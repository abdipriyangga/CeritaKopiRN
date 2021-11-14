import http from '../../helpers/http';
import { ToastAndroid } from 'react-native';
import { API_URL } from '@env';

const createTransaction = (data, payment, token, navigation) => {
  console.log('ini transaksi loh!', data);
  return async dispatch => {
    const form = new URLSearchParams();
    data.forEach(item => {
      form.append('id_item', item.id);
      form.append('item_amount', item.amount);
      form.append('item_variant', item.id_variant);
    });
    form.append('payment_method', payment);
    console.log('pm: ', payment);
    try {
      const { data: finalData } = await http(token).post(
        `${API_URL}/transactions`,
        form.toString(),
      );
      console.log('transaction proses: ', finalData);
      dispatch({
        type: 'SET_CREATE_TRANSACTION',
        payload: finalData,
      });
      dispatch({
        type: 'SET_TRANSACTION_SUCCESS',
        payload: ToastAndroid.show('Transaction Success!', ToastAndroid.SHORT),
      });
      dispatch({
        type: 'SET_CLEAR_PRODUCTS',
      });
      navigation.navigate('myDrawer');
    } catch (error) {
      dispatch({
        type: 'SET_TRANSACTION_FAILED',
        payload: ToastAndroid.show('Transaction Failed!', ToastAndroid.SHORT),
      });
      console.log('Error tau: ', error);
    }
  };
};

const getHistory = token => {
  return async dispatch => {
    console.log('token user: ', token);
    const { data } = await http(token).get(`${API_URL}/transactions`);
    console.log('data history: ', data.results);
    dispatch({
      type: 'GET_HISTORY_TRANSACTIONS',
      payload: data.results,
    });
  };
};
export { createTransaction, getHistory };
