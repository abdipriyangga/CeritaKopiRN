import http from '../../helpers/http';
import FlashMessage from '../../components/FlashMessage';
import { ToastAndroid } from 'react-native';
import { API_URL } from '@env';

export const getHistory = token => {
  return async dispatch => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const { data: newData } = await http().get(`${API_URL}/transactions`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('newedata: ', newData);
      dispatch({ type: 'SET_HISTORY', payload: newData.results });
    } catch (err) {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };
};

export const getDetailHistory = (token, id) => {
  return async dispatch => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      const { data } = await http(token).get(`${API_URL}/transactions/${id}`);
      dispatch({
        type: 'SET_GET_DETAILS_HISTORY',
        payload: { results: data.results, invoice: data.invoice },
      });
      dispatch({ type: 'SET_LOADING', payload: false });
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  };
};

export const deleteHistory = (token, id) => {
  return async dispatch => {
    try {
      const { data } = await http(token).delete(
        `${API_URL}/transactions/${id}`,
      );
      dispatch(getHistory(token));
      ToastAndroid('Delete successfully', 'success');
      dispatch({
        type: 'SET_HISTORY',
        payload: data.results,
      });
    } catch (err) {
      ToastAndroid(err?.response?.data?.message);
    }
  };
};
