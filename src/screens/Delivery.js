import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CardAddress from '../components/CardAddress';
import CardMethod from '../components/CardMethod';
import { RadioButton } from 'react-native-paper';
import { connect } from 'react-redux';
import { getProfile } from '../redux/actions/profile';
const Delivery = props => {
  const [checked, setChecked] = React.useState('Door delivery');
  const { profile } = props.profile;
  const { amount, itemTotal, tax, totalPrice, deliveryCharge } =
    props.route.params;
  console.log('data profile: ', profile);
  const onPayment = () => {
    props.navigation.navigate('Payment', {
      checked: checked,
      amount: amount,
      itemTotal: itemTotal,
      deliveryCharge: deliveryCharge,
      tax: tax,
      totalPrice: totalPrice,
    });
  };
  return (
    <ScrollView>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name="chevron-back-outline" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.wrapText}>
          <Text style={styles.textHead}> Checkout</Text>
        </View>
      </View>
      <View style={styles.wrapTextDeliv}>
        <Text style={styles.textHeadSec}>Delivery</Text>
      </View>
      <View style={styles.rowVariant}>
        <Text style={styles.textDesc}>Address Detail</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('EditProfile')}>
          <Text style={styles.textBtn}>change</Text>
        </TouchableOpacity>
      </View>
      <View>
        <CardAddress address={profile.address} phone={profile.phone_number} />
      </View>
      <View style={styles.rowVariant}>
        <Text style={styles.textDesc}>Delivery Methods</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <View>
            <View style={styles.rowDelivery}>
              <RadioButton
                value="Door delivery"
                status={checked === 'Door delivery' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Door delivery')}
                color="#6A4029"
              />
              <Text style={styles.textSubHead}>Door Delivery</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.rowDelivery}>
              <RadioButton
                value="Pick up at store"
                status={
                  checked === 'Pick up at store' ? 'checked' : 'unchecked'
                }
                onPress={() => setChecked('Pick up at store')}
                color="#6A4029"
              />
              <Text style={styles.textSubHead}>Pick up at store</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.rowDelivery}>
              <RadioButton
                value="Dine in"
                status={checked === 'Dine in' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('Dine in')}
                color="#6A4029"
              />
              <Text style={styles.textSubHead}>Dine in</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.wrapTextDesc}>
        <View style={styles.row}>
          <Text style={styles.subText}>Total</Text>
          <Text style={styles.subTotal}>
            IDR {totalPrice.toLocaleString('en')}
          </Text>
        </View>
      </View>
      <View style={styles.wrapButton}>
        <TouchableOpacity style={styles.button} onPress={onPayment}>
          <Text style={styles.textProcess}>Proceed to Payment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  cart: state.cart,
  items: state.items,
});
const mapDispatchToProps = {
  getProfile,
};
export default connect(mapStateToProps, mapDispatchToProps)(Delivery);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 17,
  },
  card: {
    width: '100%',
    height: 200,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  line: {
    width: '65%',
    height: 2,
    backgroundColor: '#dbdbdb',
    marginHorizontal: 65,
  },
  rowVariant: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  rowDelivery: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    paddingHorizontal: 30,
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
    top: 5,
    width: '100%',
    marginHorizontal: 0,
    padding: 20,
  },
  wrapTextDesc: {
    top: 0,
    width: '100%',
    marginHorizontal: 0,
    padding: 20,
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
    fontSize: 32,
    fontWeight: 'bold',
    padding: 0,
  },
  textSubHead: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'left',
    color: '#000',
    marginTop: 5,
  },
  textDesc: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'justify',
    color: '#000',
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
    backgroundColor: '#6A4029',
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6A4029',
  },
  textProcess: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
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
    fontSize: 24,
    color: '#9A9A9D',
    fontWeight: 'bold',
  },
  subTotal: {
    fontSize: 26,
    color: '#000',
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
