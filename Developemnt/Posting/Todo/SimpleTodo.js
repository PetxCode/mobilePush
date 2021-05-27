import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {StyleSheet, Text, View} from 'react-native';
import {app} from '../../../base';
import {Button} from 'react-native';

const SimpleTodo = () => {
  const [name, setName] = useState('');

  const pushUp = async () => {
    await app.firestore().collection('simpleTask').doc().set({
      name,
    });
    setName('');
  };

  return (
    <View>
      <Text>Simple Todo Task</Text>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <Button title="Submit" onPress={pushUp} />
    </View>
  );
};

export default SimpleTodo;

const styles = StyleSheet.create({});
