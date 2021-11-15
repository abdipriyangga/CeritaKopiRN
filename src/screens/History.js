import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CardHistory from '../components/CardHistory';

const History = props => {
  return (
    <ScrollView>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name="chevron-back-outline" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.wrapText}>
          <Text style={styles.textHead}> My History</Text>
        </View>
      </View>
      <View style={styles.wrapTextDeliv}>
        <Text style={styles.textHeadSec}>Order History</Text>
      </View>
      <View>
        <CardHistory />
      </View>
    </ScrollView>
  );
};

export default History;
const styles = StyleSheet.create({
  container: {
    padding: 25,
    top: -120,
  },
  inputBorder: {
    width: '30%',
    borderRadius: 8,
    borderColor: '#cacaca',
    borderWidth: 1,
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  rowTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 0,
  },
  line: {
    width: '65%',
    height: 2,
    backgroundColor: '#dbdbdb',
    marginHorizontal: 65,
    marginTop: 3,
  },
  rowVariant: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 40,
    marginVertical: 10,
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
    top: -10,
    width: '100%',
    marginHorizontal: 10,
    padding: 10,
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
  label: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'justify',
    color: '#9F9F9F',
    marginBottom: 5,
  },
  textHeadChoose: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  wrapImage: {
    borderRadius: 50,
    marginLeft: 130,
    marginTop: 50,
    width: '50%',
    height: '23%',
  },
  button: {
    width: '100%',
    height: 70,
    marginVertical: '3%',
    backgroundColor: '#6A4029',
    borderRadius: 15,
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
    color: '#fff',
  },
  textSave: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonSave: {
    marginLeft: 10,
    width: 340,
    height: 70,
    backgroundColor: '#6A4029',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
  formInput: {
    padding: 0,
    width: '100%',
    height: 40,
    top: 0,
    marginHorizontal: 0,
    borderColor: '#9F9F9F',
    borderBottomWidth: 1,
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
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    top: 120,
    marginLeft: 210,
    backgroundColor: '#895537',
    borderRadius: 25,
    position: 'absolute',
  },
  wrapBankImage: {
    backgroundColor: '#895537',
    width: 40,
    height: 40,
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 5,
  },
  wrapCardImage: {
    backgroundColor: '#F47B0A',
    width: 40,
    height: 40,
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 5,
  },
  wrapCodImage: {
    backgroundColor: '#FFBA33',
    width: '100%',
    height: 40,
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  textRadio: {
    marginTop: 5,
    color: '#9F9F9F',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    justifyContent: 'flex-end',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000000a0',
  },
  wrapperModal: {
    backgroundColor: '#fff',
    height: 130,
    justifyContent: 'center',
    paddingLeft: 30,
  },
});
