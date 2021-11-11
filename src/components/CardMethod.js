import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';
const CardMethod = ({ onPress, address, phone }) => {
  const [checked, setChecked] = React.useState('first');
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.card}>
          <View style={styles.row}>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
              color="#f26900"
            />
            <Text style={styles.textHead}> Door Delivery {address} </Text>
          </View>
          <Text style={styles.textSec}> {phone} </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardMethod;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    marginRight: 0,
    padding: 10,
  },
  textHead: {
    width: '100%',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'left',
    lineHeight: 30,
    padding: 15,
  },
  textSec: {
    padding: 10,
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'left',
    color: '#000',
  },
  card: {
    width: '100%',
    height: 200,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  wrapText: {
    width: '100%',
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
