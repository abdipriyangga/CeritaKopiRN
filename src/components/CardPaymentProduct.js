import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import { CoffeeImage } from '../assets';
const CardPaymentProduct = ({
  onPress,
  name,
  img,
  itemName,
  price,
  amount,
  variant,
}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.row}>
          <View style={styles.wrapImage}>
            <Image source={img ? img : CoffeeImage} style={styles.Image} />
          </View>
          <View>
            <Text style={styles.textSec}> Hazelnut {itemName} </Text>
            <Text style={styles.textSec}> x1 {amount} </Text>
            <Text style={styles.textSec}> Regular {variant} </Text>
          </View>
          <View>
            <Text style={styles.textHead}>IDR 24300 {price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardPaymentProduct;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    marginRight: 0,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 0,
  },
  textHead: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
    top: 40,
  },
  textSec: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    top: 20,
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
  },
  wrapImage: {
    width: 100,
    height: 100,
    marginLeft: 0,
    top: 0,
    padding: 10,
  },
  Image: {
    width: 85,
    height: 85,
    marginLeft: 0,
    top: 0,
    borderRadius: 25,
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
