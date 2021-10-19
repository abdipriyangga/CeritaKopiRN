import http from '../../helpers/http';
import { ToastAndroid } from 'react-native';
const API_URL = 'http://localhost:8090';

export const getProfile = token => {
  console.log('url', API_URL);
  return async dispatch => {
    dispatch({ type: 'SET_GET_PROFILE', payload: true });
    try {
      const { data } = await http(token).get(`${API_URL}/profile`);
      console.log('newedata: ', data);
      dispatch({ type: 'SET_GET_PROFILE', payload: data.results });
      // FlashMessage('Register Success!', 'success');
    } catch (err) {
      dispatch({ type: 'SET_GET_PROFILE', payload: false });
    }
  };
};
