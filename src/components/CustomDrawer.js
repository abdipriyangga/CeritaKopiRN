/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { defaultUser } from '../assets';
import { connect } from 'react-redux';
import { authLogout } from '../redux/actions/auth';
import { getProfile } from '../redux/actions/profile';

const CustomDrawer = (props) => {
  const { profile } = props.profile;
  console.log('this isi proile  data: ', profile);
  useEffect(() => {
    props.getProfile(props.auth.token);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.wrapperProfile}>
        <Image
          style={styles.pictureDrawer}
          source={
            profile[0]?.images === null
              ? defaultUser
              : { uri: profile[0]?.images }
            // defaultUser
          }
        />
        <Text style={styles.title}>{profile[0]?.name}</Text>
        <Text style={[styles.title, styles.subTitle]}>{profile[0]?.email}</Text>
      </View>
      <ScrollView >
        <View style={styles.wrapperContent}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              props.navigation.navigate('EditProfile');
            }}
            style={styles.wrapperDrawer}>
            <Icon
              name="user"
              size={35}
              color="#6A4029"
              style={styles.drawerIcon}
            />
            <Text style={styles.drawerText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              props.navigation.navigate('Cart');
            }}
            style={styles.wrapperDrawer}>
            <Icon
              name="cart"
              size={35}
              color="#6A4029"
              style={styles.drawerIcon}
            />
            <Text style={styles.drawerText}>Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => { }}
            style={styles.wrapperDrawer}>
            <IconIon
              name="newspaper-outline"
              size={35}
              color="#6A4029"
              style={styles.drawerIcon}
            />
            <Text style={styles.drawerText}>All menu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => { }}
            style={styles.wrapperDrawer}>
            <IconIon
              name="md-newspaper"
              size={35}
              color="#6A4029"
              style={styles.drawerIcon}
            />
            <Text style={styles.drawerText}>Privacy policy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => { }}
            style={styles.wrapperDrawer}>
            <IconMaterial
              name="security"
              size={35}
              color="#6A4029"
              style={styles.drawerIcon}
            />
            <Text style={styles.drawerText}>Security</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={props.authLogout}
          activeOpacity={0.7}
          style={styles.wrapperDrawerSignout}>
          <Text style={styles.drawerTextSignout}>Sign-Out</Text>
          <IconMaterial name="arrow-right-alt" size={35} color="#6A4029" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});
const mapDispatchToProps = {
  authLogout,
  getProfile,
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
const styles = StyleSheet.create({
  container: { borderTopRightRadius: 30, flex: 1 },
  wrapperProfile: {
    backgroundColor: '#6A4029',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    height: 288,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pictureDrawer: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    marginBottom: 10,
    resizeMode: 'cover',
    backgroundColor: '#fff',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontWeight: '500',
  },
  wrapperDrawer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 40,
    marginVertical: 10,
  },
  drawerText: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    flex: 1,
    fontSize: 17,
    fontWeight: '700',
    paddingBottom: 10,
    color: '#6A4029',
  },
  drawerIcon: { paddingBottom: 10, marginRight: 10 },
  wrapperContent: { marginTop: 30, flex: 1 },
  wrapperDrawerSignout: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
    marginVertical: 10,
  },
  drawerTextSignout: {
    fontSize: 17,
    color: '#6A4029',
    fontWeight: '700',
  },
});
