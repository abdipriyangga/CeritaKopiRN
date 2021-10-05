import http from '../../helpers/http';
// import { API_URL } from 'react-native-dotenv';
import FlashMessage from '../../components/FlashMessage';
const API_URL = 'http://localhost:8080';

export const Register = (data, navigation) => {
  return async dispatch => {
    dispatch({ type: 'SET_REGISTER', payload: true });
    const form = new URLSearchParams();
    form.append('email', data.email);
    form.append('password', data.password);
    form.append('phone_number', data.phone_number);
    try {
      const { data: newData } = await http().post(
        `${API_URL}/auth/register`,
        form,
      );
      dispatch({ type: 'SET_REGISTER', payload: false });
      console.log('Ini data  form: ', newData);
      navigation.navigate('Login');
      FlashMessage('Register Success!', 'success');
    } catch (err) {
      FlashMessage(err.response.data.message);
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
      const { data: newData } = await http().post(
        `${API_URL}/auth/login`,
        form,
      );
      console.log('====================================');
      console.log(API_URL);
      console.log('====================================');
      dispatch({ type: 'GET_TOKEN', payload: newData.results.token });
      dispatch({ type: 'SET_LOGIN', payload: false });
      console.log(newData);
      FlashMessage('Login Success', 'success');
    } catch (err) {
      FlashMessage(err.response.data.message);
      dispatch({ type: 'SET_LOGIN', payload: false });
    }
  };
};
