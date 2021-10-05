import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { chooseAuthImage } from '../assets';

const ChooseAuth = props => {
  return (
    <ScrollView vertical={true}>
      <View style={styles.container}>
        <View>
          <Text style={styles.textHead}>Welcome!</Text>
          <Text style={styles.textSubHead}>
            Get a cup of coffee for free only for new user
          </Text>
        </View>
        <Image source={chooseAuthImage} style={styles.wrapImage} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Register')}>
          <Text style={styles.textBtn}> Create New Account </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.textBtn}> Login </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  textHead: {
    fontFamily: 'Poppins-Bold',
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textSubHead: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  wrapImage: {
    width: 368,
    height: 321,
    marginLeft: -5,
    marginTop: 50,
    marginBottom: 20,
  },
  button: {
    marginLeft: '8%',
    width: 340,
    height: 70,
    backgroundColor: '#6A4029',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 7,
  },
  textBtn: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#FFFFFF',
  },
  buttonLogin: {
    marginLeft: '8%',
    marginVertical: 10,
    width: 340,
    height: 70,
    backgroundColor: '#FFBA33',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ChooseAuth;
