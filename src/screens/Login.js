import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Input from '../components/Input';
import { Login as loginAction } from '../redux/actions/auth';
import { loginImage } from '../assets';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const form = {
    email,
    password,
  };
  const onSubmit = () => {
    dispatch(loginAction(form));
  };
  return (
    <ScrollView vertical={true}>
      <View style={styles.container}>
        <View style={styles.wrapText}>
          <Text style={styles.textHead}> Login </Text>
        </View>
        <View style={styles.boxImage}>
          <Image source={loginImage} style={styles.wrapImage} />
        </View>
        <View style={styles.formInput}>
          <Input
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder="enter your email address"
            variant="underlined"
          />
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder="enter your password"
            variant="underlined"
            color="#000"
            secureTextEntry
          />
        </View>
        <TouchableOpacity onPress={onSubmit} style={styles.button}>
          <Text style={styles.textBtn}>Login </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  wrapText: {
    position: 'absolute',
    width: '50%',
    left: 150,
    top: 150,
  },
  textHead: {
    fontFamily: 'Poppins-Bold',
    fontSize: 70,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textSubHead: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  boxImage: {
    left: 20,
    marginTop: 40,
    marginBottom: 20,
  },
  wrapImage: {
    width: 200,
    height: 350,
  },
  button: {
    top: 20,
    marginHorizontal: 30,
    width: 340,
    height: 80,
    backgroundColor: '#6A4029',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },
  textBtn: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#FFFFFF',
  },
  buttonLogin: {
    marginLeft: 10,
    width: 340,
    height: 70,
    backgroundColor: '#FFBA33',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formInput: {
    padding: 10,
    width: 352,
    top: 10,
    marginHorizontal: 15,
  },
  textInput: {
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    borderColor: '#000',
    marginLeft: 10,
  },
});
