import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CoffeeImage } from '../assets';
import ButtonSize from '../components/ButtonSize';
const ProductDetail = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="cart-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.textHead}>30.000</Text>
      </View>
      <View style={styles.secContainer}>
        <View style={styles.wrapImage}>
          <Image source={CoffeeImage} borderRadius={100} />
        </View>
        <View style={styles.wrapText}>
          <Text style={styles.textHeadSec}>Cold Brew</Text>
        </View>
        <View style={styles.wrapTextDeliv}>
          <Text style={styles.textSubHead}>
            Delivery only on Monday to friday at 1 - 7 pm
          </Text>
        </View>
        <View style={styles.wrapTextDesc}>
          <Text style={styles.textDesc}>
            Cold brewing is a method of brewing that combines ground coffee and
            cool water and uses time instead of heat to extract the flavor. It
            is brewed in small batches and steeped for as long as 48 hours.
          </Text>
        </View>
        <View style={styles.wrapChooseSize}>
          <Text style={styles.textHeadChoose}>Choose a size</Text>
          <View style={styles.row}>
            <ButtonSize name="L" />
            <ButtonSize name="L" />
            <ButtonSize name="L" />
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textBtn}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#362115',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  priceContainer: {
    backgroundColor: '#FFBA33',
    width: '30%',
    padding: 20,
    borderRadius: 15,
    marginTop: 130,
    marginLeft: 10,
  },
  secContainer: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  wrapText: {
    top: 10,
    width: '100%',
    marginHorizontal: 0,
  },
  wrapTextDeliv: {
    top: 30,
    width: '100%',
    marginHorizontal: 0,
    padding: 15,
  },
  wrapTextDesc: {
    top: 30,
    width: '100%',
    marginHorizontal: 0,
    padding: 15,
    textAlign: 'justify',
  },
  wrapChooseSize: {
    top: 30,
    width: '100%',
    padding: 15,
  },
  textHead: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -10,
  },
  textHeadSec: {
    fontFamily: 'Poppins-Bold',
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 180,
  },
  textSubHead: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#6A4029',
  },
  textDesc: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'justify',
    color: '#6A4029',
  },
  textHeadChoose: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  wrapImage: {
    borderRadius: 50,
    marginLeft: 150,
    marginTop: -120,
  },
  button: {
    marginLeft: 0,
    width: '100%',
    height: 70,
    backgroundColor: '#6A4029',
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 57,
  },
  textBtn: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    fontWeight: 'bold',
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
    width: 300,
    top: 20,
    marginHorizontal: 40,
  },
  textInput: {
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 20,
  },
  subType: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  subText: {
    fontSize: 20,
    color: '#9A9A9D',
  },
  wrapItems: {
    marginTop: 15,
    flex: 1,
    flexDirection: 'row',
  },
  wrapCategory: {
    marginTop: 40,
    flex: 1,
    flexDirection: 'row',
  },
});
