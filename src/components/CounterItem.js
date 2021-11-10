import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Counter from './Counter';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
const CounterItem = ({ stateValue, max, price, variant }) => {
  const [item, setItem] = useState(variant);
  useEffect(() => {
    if (variant.length) {
      setItem(variant);
    }
  }, [variant]);

  const counterPlus = idx => {
    const data = [...item];
    data[idx].amount = data[idx].amount + 1;
    // data[idx].price = data[idx].price + price;
    console.log('Counter Plus', data);
    setItem(data);
  };
  const counterMinus = idx => {
    const data = [...item];
    data[idx].amount = data[idx].amount - 1;
    setItem(data);
  };
  return (
    <View>
      {item.map((res, idx) => {
        return (
          <Counter
            key={res.name}
            counterPlus={() => counterPlus(idx)}
            counterMinus={() => counterMinus(idx)}
            stateValue={stateValue}
            max={max}
          />
        );
      })}
    </View>
  );
};
CounterItem.defaultProps = {
  variants: [],
};
export default CounterItem;
