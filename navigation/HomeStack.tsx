import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import DetailScreen from '../screens/detail/DetailScreen';
import { Character } from '../model/Character';

export type HomeStackParamsList = {
  Home: undefined;
  Details: { character: Character };
};

const Stack = createNativeStackNavigator<HomeStackParamsList>();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Rick & Morty',
        }}
      />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
