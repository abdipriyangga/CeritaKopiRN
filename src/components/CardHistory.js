import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import { CoffeeImage } from '../assets';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/Ionicons';
const rightSwipeActions = () => {
  return (
    <View
      style={{
        backgroundColor: '#6A4029',
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 0,
        borderRadius: 25,
        height: 50,
        width: 50,
        marginTop: 50,
        marginHorizontal: 30,
      }}>
      <Icon
        name="trash-outline"
        size={30}
        style={{ left: -10 }}
        color={'#fff'}
      />
    </View>
  );
};

const CardHistory = ({ onPress, name, img, price, deliv, action }) => {
  return (
    <Swipeable
      renderRightActions={rightSwipeActions}
      onSwipeableRightOpen={action}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.card}>
            <View style={styles.row}>
              <View>
                <Image
                  source={img ? img : CoffeeImage}
                  style={styles.wrapImage}
                />
              </View>
              <View>
                <Text style={styles.textHead}>{name} </Text>
                <Text style={styles.textSecPrice}>{price} </Text>
                <Text style={styles.textSec}> {deliv} </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </Swipeable>
  );
};

export default CardHistory;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 0,
    padding: 20,
    marginVertical: -8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  textHead: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 4,
  },
  textSec: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: 2,
    color: '#895537',
  },
  textSecPrice: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: 2,
    color: '#895537',
  },
  card: {
    width: '100%',
    height: 130,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 10,
  },
  wrapImage: {
    width: 85,
    height: 85,
    marginLeft: 0,
    top: 0,
    borderRadius: 50,
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
