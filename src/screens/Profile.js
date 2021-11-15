/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CardProfile from '../components/CardProfile';
import { connect } from 'react-redux';
import { getProfile } from '../redux/actions/profile';
import { defaultUser } from '../assets';
const Profile = props => {
  const { profile } = props.profile;
  console.log('this isi proile  data: ', profile);
  useEffect(() => {
    props.getProfile(props.auth.token);
  }, []);
  return (
    <ScrollView>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name="chevron-back-outline" size={30} color="black" />
        </TouchableOpacity>
        <View style={styles.wrapText}>
          <Text style={styles.textHead}> My Profile</Text>
        </View>
      </View>
      <View style={styles.wrapTextDeliv}>
        <Text style={styles.textHeadSec}>My Profile</Text>
      </View>
      <View style={styles.rowVariant}>
        <Text style={styles.textDesc}>your information</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('EditProfile')}>
          <Text style={styles.textBtn}>edit</Text>
        </TouchableOpacity>
      </View>
      <View>
        <CardProfile
          name={profile.name}
          email={profile.email}
          phone={profile.phone_number}
          address={profile.address}
          img={profile.images === null ? defaultUser : { uri: profile.images }}
        />
      </View>
      <View style={styles.wrapButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('History')}>
          <Text style={styles.textProcess}>Order History</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapButton}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textProcess}>Edit Password</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapButton}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textProcess}>FAQ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapButton}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textProcess}>Help</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapButton}>
        <TouchableOpacity style={styles.buttonSave}>
          <Text style={styles.textSave}>Save Change</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
});
const mapDispatchToProps = {
  getProfile,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    marginTop: 20,
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
    paddingHorizontal: 20,
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
    top: 0,
    width: '100%',
    marginHorizontal: 0,
    padding: 20,
  },
  wrapTextDesc: {
    top: 30,
    width: '100%',
    marginHorizontal: 0,
    padding: 10,
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
  textDesc: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'justify',
    color: '#000',
  },
  textHeadChoose: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
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
    width: '100%',
    height: 70,
    marginVertical: '3%',
    backgroundColor: '#fff',
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
    color: '#000',
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
    flex: 0.47,
    justifyContent: 'center',
    top: 0,
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
    width: 40,
    height: 40,
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 5,
  },
});
