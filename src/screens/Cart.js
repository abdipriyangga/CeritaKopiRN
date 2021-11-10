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
import CardCart from '../components/CardCart';
import Counter from '../components/Counter';
const Cart = props => {
  return (
    <ScrollView vertical={true}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name="chevron-back-outline" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.wrapText}>
          <Text style={styles.textHead}> My Cart</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.row}>
          <CardCart />
          <View style={styles.wrapTextDeliv}>
            <Text style={styles.textHead}>Name Items</Text>
            <Counter stateValue={0} />
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textBtn}>Apply Coupon Delivery</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
        <View>
          <View style={styles.row}>
            <Text style={styles.subText}>Item Total</Text>
            <Text style={styles.textHeadSec}>IDR 1500000</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.subText}>Delivery Charge</Text>
            <Text style={styles.textHeadSec}>IDR 1500000</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.subText}>Tax</Text>
            <Text style={styles.textHeadSec}>IDR 1500000</Text>
          </View>
          <View style={styles.rowVariant}>
            <Text style={styles.textHeadChoose}>Total</Text>
            <Text style={styles.textHeadChoose}>IDR 1500000</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textBtn}> CHECKOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Cart;
const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: '#dbdbdb',
  },
  rowVariant: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  priceContainer: {
    backgroundColor: '#FFBA33',
    width: '30%',
    padding: 20,
    borderRadius: 15,
    marginTop: 100,
    marginLeft: 10,
  },
  secContainer: {
    backgroundColor: '#FFFFFF',
    height: '100%',
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  wrapText: {
    top: 13,
    width: '100%',
    marginHorizontal: 100,
  },
  wrapTextDeliv: {
    top: 30,
    width: '100%',
    marginHorizontal: 100,
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
    marginLeft: 12,
  },
  textHeadSec: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    fontWeight: 'bold',
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  wrapImage: {
    borderRadius: 50,
    marginLeft: 150,
    marginTop: -120,
    width: '50%',
    height: '23%',
  },
  button: {
    width: '100%',
    height: 70,
    marginVertical: '10%',
    backgroundColor: '#FFBA33',
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
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
    fontWeight: 'bold',
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
  wrapButton: {
    flex: 0.47,
    justifyContent: 'flex-end',
  },
});
