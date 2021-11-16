/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CardItem from '../components/CardItem';
import Input from '../components/Input';
import { connect, useDispatch } from 'react-redux';
import { getProducts, searchProducts } from '../redux/actions/items';
import { getCategory, getProductCategory } from '../redux/actions/category';
import { CoffeeImage } from '../assets';
import { API_URL } from '@env';
import { SearchBar } from 'react-native-elements';
const Home = props => {
  const { data } = props.items;
  const { data: dataCategory } = props.category;
  const { productCategory } = props.category;
  const { search, setSearch } = useState('');
  useEffect(() => {
    // console.log("ini getProducts action: ", getProducts());
    props.getProducts();
    props.getCategory();
    console.log('==============================');
    console.log('data categroy: ', dataCategory);
    // getItemByCategory(id);
  }, []);
  const dispatch = useDispatch();
  const onSearch = () => {
    dispatch(searchProducts(search));
  };


  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          <Icon name="menu-outline" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Cart')}>
          <Icon name="cart-outline" size={30} />
        </TouchableOpacity>
      </View>
      <ScrollView vertical={true}>
        <View style={styles.wrapText}>
          <Text style={styles.textHead}> A good coffee is </Text>
          <Text style={styles.textHeadSec}>a good day</Text>
        </View>
        <View style={styles.formInput}>
          {/* <Input placeholder="Search" /> */}
          {/* <SearchBar
            containerStyle={{ flex: 1, borderRadius: 25 }}
            lightTheme
            placeholder="Type Here..."
            platform="android"
            clearButtonMode="always"
            value={search}
          /> */}
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.wrapCategory}>
            {dataCategory.map(dc => {
              return (
                <TouchableOpacity onPress={() => props.getProductCategory(dc?.id)}>
                  <Text style={{ fontSize: 20, color: dc?.name ? '#6A4029' : '#9A9A9D', fontWeight: 'bold' }}> {dc?.name} </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.wrapItems}>
            {props.category.productCategory < 1 ? data.map(items => {
              return (
                <CardItem
                  key={items.id}
                  name={items.name}
                  price={items.price}
                  img={
                    items.images === null || undefined
                      ? CoffeeImage
                      : { uri: `${API_URL}${items.images}` }
                  }
                  onPress={() => props.navigation.navigate('ProductDetail', { id: items.id })}
                />
              );
            }) : productCategory.map((prod) => {

              if (props.category.productCategory === 0) {
                return (
                  <>
                    <Text>sdlfadl</Text>
                  </>
                );
              } else {
                return (
                  <CardItem key={prod.id} name={prod.name} price={prod.price} img={
                    prod.images === null || undefined
                      ? CoffeeImage
                      : { uri: `${API_URL}${prod.images}` }
                  } onPress={() => props.navigation.navigate('ProductDetail', { id: prod.id })} />
                );
              }
            })
            }
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({
  items: state.items,
  category: state.category,
  auth: state.auth,
});
const mapDispatchToProps = {
  getProducts,
  getCategory,
  getProductCategory,
  searchProducts,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    marginTop: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapText: {
    top: 10,
    width: '80%',
    marginHorizontal: '5%',
  },
  textHead: {
    fontFamily: 'Poppins-Bold',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  textHeadSec: {
    fontFamily: 'Poppins-Bold',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'justify',
    left: 10,
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
    marginLeft: 10,
    width: 340,
    height: 70,
    backgroundColor: '#6A4029',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  textBtn: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
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
    marginHorizontal: '4%',
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
