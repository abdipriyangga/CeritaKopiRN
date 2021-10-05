import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
const Input = ({
  label,
  secureTextEntry,
  placeholder,
  onChangeText,
  value,
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
      />
    </View>
  );
};

export default Input;
const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: '500',
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#9F9F9F',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 2,
  },
});
