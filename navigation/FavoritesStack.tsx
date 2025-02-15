import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesScreen from '../screens/favorites/FavoritesScreen';
import DetailScreen from '../screens/detail/DetailScreen';

export type FavoritesStackParamsList = {
  Favorites: undefined;
  Details: undefined;
};

const Stack = createNativeStackNavigator<FavoritesStackParamsList>();

const FavoritesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default FavoritesStack;

const styles = StyleSheet.create({});
