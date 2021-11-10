/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { ToastAndroid } from 'react-native';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
const Counter = ({ stateValue, max, counterPlus, counterMinus }) => {
  const [counter, setCounter] = useState(stateValue);
  const onCount = type => {
    let result = counter;
    if (type === 'plus') {
      if (counter === max) {
        ToastAndroid.show(
          `There are only have ${max} of items`,
          ToastAndroid.SHORT,
        );
      } else {
        counterPlus();
        result = counter + 1;
      }
    }
    if (type === 'minus') {
      if (counter <= 0) {
        ToastAndroid.show('Minimum 0 of items', ToastAndroid.SHORT);
      } else {
        counterMinus();
        result = counter - 1;
      }
    }
    setCounter(result);
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => onCount('minus')}
          style={styles.button}>
          <Text>-</Text>
        </TouchableOpacity>
        <View style={styles.wrapText}>
          <Text style={styles.textSubHead}>{counter}</Text>
        </View>
        <TouchableOpacity onPress={() => onCount('plus')} style={styles.button}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
Counter.defaultProps = {
  counterPlus: () => { },
  counterMinus: () => { },
};
export default Counter;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
    padding: 0,
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
    top: 5,
    padding: 0,
    width: '6%',
    marginRight: 0,
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
    width: '10%',
    height: 30,
    backgroundColor: '#FFBA33',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
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
