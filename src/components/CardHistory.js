import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import { CoffeeImage } from '../assets';
const CardHistory = ({ onPress, name, img, price }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.card}>
          <View style={styles.row}>
            <View>
              <Image
                source={img ? img : CoffeeImage}
                style={styles.wrapImage}
              />
            </View>
            <View>
              <Text style={styles.textHead}>Veggie tomato mix{name} </Text>
              <Text style={styles.textSecPrice}>IDR 23400 {price} </Text>
              <Text style={styles.textSec}>Picked up at store {price} </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardHistory;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 0,
    padding: 20,
    marginVertical: -8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  textHead: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 4,
  },
  textSec: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: 2,
    color: '#895537',
  },
  textSecPrice: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: 2,
    color: '#895537',
  },
  card: {
    width: '100%',
    height: 130,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 10,
  },
  wrapImage: {
    width: 85,
    height: 85,
    marginLeft: 0,
    top: 0,
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
