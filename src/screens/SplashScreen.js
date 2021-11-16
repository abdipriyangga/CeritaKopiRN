/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { IconCoffee } from '../assets';
import { useSelector } from 'react-redux';
const SplashScreen = props => {
  const token = useSelector(state => state.auth.token);
  useEffect(() => {
    setTimeout(() => {
      if (token !== null) {
        props.navigation.reset({ index: 0, routes: [{ name: 'myDrawer' }] });
      } else {
        props.navigation.replace('Welcome');
      }
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#6A4029" animated={true} />
      <Image source={IconCoffee} />
      <Text style={styles.textHead}>Cerita Kopi Shop</Text>
    </View>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    marginRight: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHead: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    top: 0,
  },
  textSec: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    top: 170,
  },
  card: {
    width: 220,
    height: 270,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
  wrapImage: {
    position: 'absolute',
    width: 168,
    height: 189,
    marginLeft: 25,
    top: -30,
    borderRadius: 20,
  },
  button: {
    marginLeft: 10,
    width: 340,
    height: 70,
    backgroundColor: '#6A4029',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#FFFFFF',
  },
});
