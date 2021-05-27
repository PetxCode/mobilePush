import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from './Component/Welcome';
import {AuthProvider} from './Developemnt/AuthPath/AuthState';

import SignedUp from './Component/SignedUp';
import SignedInToday from './Component/SignedIn';
import FirstRoute from './Component/FirstRoute';

import Post from './Developemnt/Posting/Post';
import HomeScreen from './Developemnt/MainScreen/HomeScreen';
import SimpleTodo from './Developemnt/Posting/Todo/SimpleTodo';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Post />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
// <View>
// <Text>Hello Fellow Developers</Text>
// </View>
