/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
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
import { getDetailProducts } from '../redux/actions/items';
import { connect } from 'react-redux';
import { addProducts } from '../redux/actions/cart';
const ProductDetail = props => {
  const { id } = props.route.params;
  const { detail } = props.items;
  const [price, setPrice] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [variant, setVariant] = useState(null);
  const { token } = props.auth;
  useEffect(() => {
    if (detail?.variants) {
      console.log('changing');
      const data = detail?.variants.map(variant => {
        return { ...variant, amount: 0 };
      });
      setVariant(data);
      console.log('data', data);
    }
  }, [detail.variants]);

  useEffect(() => {
    if (detail?.base_price) {
      setPrice(detail?.base_price);
    }
  }, [detail]);
  console.log(`product dettail ${id}:`, detail);
  useEffect(() => {
    props.getDetailProducts(id);
    return () => {
      setVariant(null);
    };
  }, []);

  const getPrice = idx => {
    const getPrice = detail.variants[idx].price;
    setPrice(getPrice);
    setSelectedVariant(getPrice);
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name="chevron-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="cart-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.textHead}>{price.toLocaleString('en')}</Text>
      </View>
      <View style={styles.secContainer}>
        <View style={styles.wrapImage}>
          <Image
            style={{ width: '100%', height: '100%' }}
            source={{ uri: detail.images }}
            borderRadius={100}
          />
        </View>
        <View style={styles.wrapText}>
          <Text style={styles.textHeadSec}>{detail?.name}</Text>
        </View>
        <View style={styles.wrapTextDeliv}>
          <Text style={styles.textSubHead}>{detail.delivery_on}</Text>
        </View>
        <View style={styles.wrapTextDesc}>
          <Text style={styles.textDesc}>{detail.detail}</Text>
        </View>
        <View style={styles.wrapChooseSize}>
          <Text style={styles.textHeadChoose}>Choose a size</Text>
          <View style={styles.rowVariant}>
            {detail?.variants?.map((variant, idx) => {
              return (
                <ButtonSize
                  key={variant.id}
                  name={variant.code}
                  onPress={() => getPrice(idx)}
                />
              );
            })}
          </View>
        </View>
        <View style={styles.wrapButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.addProducts(variant)}>
            <Text style={styles.textBtn}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const mapStateToProps = state => ({
  items: state.items,
  auth: state.auth,
});
const mapDispatchToProps = {
  getDetailProducts,
  addProducts,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
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
  rowVariant: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
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
    width: '50%',
    height: '23%',
  },
  button: {
    marginLeft: 0,
    width: '100%',
    height: 70,
    backgroundColor: '#6A4029',
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
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
  wrapButton: {
    flex: 0.47,
    justifyContent: 'flex-end',
  },
});
