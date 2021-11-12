import http from '../../helpers/http';
import FlashMessage from '../../components/FlashMessage';
import { ToastAndroid } from 'react-native';
import { API_URL } from '@env';
// const URL = 'http://localhost:8090';

export const Register = (data, navigation) => {
  return async dispatch => {
    dispatch({ type: 'SET_REGISTER', payload: true });
    const form = new URLSearchParams();
    form.append('email', data.email);
    form.append('password', data.password);
    form.append('phone_number', data.phone_number);
    try {
      const { data: newData } = await http().post(`${API_URL}/auth/signup`, form);
      dispatch({ type: 'SET_REGISTER', payload: false });
      console.log('Ini data  form: ', newData);
      // FlashMessage('Register Success!', 'success');
      ToastAndroid.show('Register Success!', ToastAndroid.SHORT);
      navigation.navigate('Login');
    } catch (err) {
      // FlashMessage(err?.response?.newData?.message, 'danger');
      ToastAndroid.show(err?.response?.data?.message, ToastAndroid.SHORT);
      dispatch({ type: 'SET_REGISTER', payload: false });
    }
  };
};

export const Login = data => {
  return async dispatch => {
    dispatch({ type: 'SET_LOGIN', payload: true });
    const form = new URLSearchParams();
    form.append('email', data.email);
    form.append('password', data.password);
    try {
      const { data: newData } = await http().post(`${API_URL}/auth/login`, form);
      console.log('====================================');
      console.log(URL);
      console.log('====================================');
      dispatch({ type: 'GET_TOKEN', payload: newData.results.token });
      dispatch({ type: 'SET_LOGIN', payload: false });
      console.log(newData);
      ToastAndroid.show('Login Success!', ToastAndroid.SHORT);
    } catch (err) {
      // FlashMessage(err?.response?.data?.message);
      ToastAndroid.show(err?.response?.data?.message, ToastAndroid.SHORT);
      dispatch({ type: 'SET_LOGIN', payload: false });
    }
  };
};

export const authLogout = () => {
  return async dispatch => {
    dispatch({ type: 'SET_AUTH_LOGOUT' });
    dispatch({ type: 'SET_CLEAR_HISTORY' });
    dispatch({ type: 'CLEAR_CHAT' });
  };
};
