import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import { CoffeeImage } from '../assets';

const CardItem = ({ onPress, name, img, price, id }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.card}>
          <Image source={img ? img : CoffeeImage} style={styles.wrapImage} />
          <Text style={styles.textHead}> {name} </Text>
          <Text style={styles.textSec}> IDR {price} </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardItem;
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
