import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from './Welcome';
import SignedUp from './SignedUp';
import SignedInToday from './SignedIn';

const Stack = createStackNavigator();
const FirstRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Sign Up" component={SignedUp} />
      <Stack.Screen name="Sign In" component={SignedInToday} />
    </Stack.Navigator>
  );
};

export default FirstRoute;
