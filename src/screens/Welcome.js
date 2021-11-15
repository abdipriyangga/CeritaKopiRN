import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { welcomeImage } from '../assets';

const Welcome = ({ navigation }) => {
  return (
    <ScrollView vertical={true}>
      <View style={styles.container}>
        <Text style={styles.textHead}> Coffee for Everyone </Text>
        <Image source={welcomeImage} style={styles.wrapImage} />
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ChooseAuth')}>
            <Text style={styles.textBtn}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  textHead: {
    fontFamily: 'Poppins-Bold',
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  wrapImage: {
    width: 430,
    height: 490,
    marginLeft: -40,
  },
  button: {
    marginHorizontal: '3%',
    marginVertical: '8%',
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

export default Welcome;
