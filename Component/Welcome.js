// import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Welcome = ({navigation}) => {
  // const nav = useNavigation();
  return (
    <View
      style={{
        // flex: 1,
        backgroundColor: '#651E32',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={require('../asset/logo21.png')} style={styles.logo} />
      <View>
        <Image source={require('../asset/title.png')} style={styles.title} />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          width: 300,
          height: 35,
          borderRadius: 2,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}
        onPress={() => {
          navigation.navigate('Sign Up');
        }}>
        <Text
          style={{
            color: '#651E32',
            fontSize: 13,
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}>
          Click Here to Register Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#651E32',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginTop: 80,
    width: 300,
    height: 300,
    marginBottom: 100,
  },
  title: {
    fontSize: 24,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
    width: 250,
    height: 50,
    marginBottom: 20,
  },
  desc: {
    // fontWeight: "bold",
    color: 'white',
  },
});

export default Welcome;
