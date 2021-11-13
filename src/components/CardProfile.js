import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import { defaultUser } from '../assets';
const CardProfile = ({ onPress, address, phone, email, name, img }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.card}>
          <View style={styles.row}>
            <View>
              <Image
                source={img ? img : defaultUser}
                style={styles.wrapImage}
              />
            </View>
            <View style={{ padding: 10 }}>
              <View style={styles.wrapText}>
                <Text
                  style={
                    (styles.textSec, { fontWeight: 'bold', fontSize: 20 })
                  }>
                  {' '}
                  {name}{' '}
                </Text>
              </View>
              <View style={styles.wrapText}>
                <Text style={styles.textSec}> {email} </Text>
                <View style={styles.line} />
              </View>
              <View style={styles.wrapText}>
                <Text style={styles.textSec}> {phone} </Text>
                <View style={styles.line} />
              </View>
              <View style={styles.wrapText}>
                <Text style={styles.textSec}> {address} </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardProfile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    marginRight: 0,
    padding: 10,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#6A4029',
    marginHorizontal: 0,
    marginTop: 0,
  },
  textHead: {
    width: '100%',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'left',
    lineHeight: 30,
    padding: 0,
  },
  textSec: {
    padding: 0,
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'left',
    color: '#b17e2d',
  },
  card: {
    width: '100%',
    height: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  wrapText: {
    width: '100%',
    padding: 2,
    top: 10,
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
  wrapImage: {
    width: 80,
    height: 80,
    marginHorizontal: 0,
    top: 30,
    left: 0,
    borderRadius: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 0,
  },
});
