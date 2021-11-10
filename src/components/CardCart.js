import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import { CoffeeImage } from '../assets';
const CardCart = ({ onPress, name, img, price }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.card}>
          <Image source={img ? img : CoffeeImage} style={styles.wrapImage} />
          <Text style={styles.textSec}> IDR {price} </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardCart;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginRight: 20,
  },
  textHead: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    top: 170,
  },
  textSec: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    top: 60,
  },
  card: {
    width: 102,
    height: 102,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
  },
  wrapImage: {
    position: 'absolute',
    width: 85,
    height: 85,
    marginLeft: 10,
    top: -30,
    borderRadius: 50,
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
