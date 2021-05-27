import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';
import {app} from '../../base';
import {AuthContext} from '../AuthPath/AuthState';
import firebase from 'firebase';
import PostImage from './PostImage';

const studio = app.firestore().collection('studio');

const Post = () => {
  const {mgs, currentUser} = useContext(AuthContext);

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [cost, setCost] = useState('');
  const [desc, setDesc] = useState('');

  const pushOnline = async () => {
    await studio.doc().set({
      location,
      name,
      cost,
      desc,
      // createdAt: new Date().toString(),
      // createdAt: firebase.firestore.FieldValue.serverTimestamp().toString(),
      // createdBy: presentUser.uid,
    });
    setLocation('');
    setName('');
    setCost('');
    setDesc('');
  };
  const pushOnline1 = async () => {
    const presentUser = app.auth().currentUser;

    if (presentUser) {
      await studio.doc().add({
        location,
        name,
        cost,
        desc,
        // createdAt: firebase.firestore.FieldValue.serverTimestamp().toString(),
        createdBy: presentUser.uid,
      });
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Hello, Let's Code again: {mgs}</Text>
        </View>
        <PostImage />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            placeholder="Item Name"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder="Location"
            style={styles.input}
            value={location}
            onChangeText={setLocation}
          />
          <TextInput
            placeholder="Cost"
            style={styles.input}
            value={cost}
            onChangeText={setCost}
          />
          <TextInput
            placeholder="Description"
            style={styles.input}
            value={desc}
            onChangeText={setDesc}
          />

          <TouchableOpacity
            style={{
              margin: 10,
              backgroundColor: 'red',
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              backgroundColor: '#651d32',
              width: 350,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              pushOnline1();
              console.log('Push Online');
            }}>
            <Text
              style={{
                color: 'white',
                textTransform: 'uppercase',
              }}>
              Push Online
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    marginVertical: 24,
    marginHorizontal: 24,
  },
  image: {
    marginVertical: 24,
    alignItems: 'center',
  },
  response: {
    marginVertical: 16,
    marginHorizontal: 8,
  },
  input: {
    marginHorizontal: 10,
    marginVertical: 5,
    height: 50,
    width: 350,
    backgroundColor: '#C8AFB6',
    borderRadius: 3,

    fontSize: 13,
  },
});
