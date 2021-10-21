import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
const ButtonSize = ({ onPress, name }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.textBtn}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonSize;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: '#FFBA33',
    width: '60%',
    padding: 20,
    borderRadius: 100,
    marginTop: 20,
    marginHorizontal: 25,
  },
  textBtn: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
