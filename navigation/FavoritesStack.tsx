import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesScreen from '../screens/favorites/FavoritesScreen';
import DetailScreen from '../screens/detail/DetailScreen';
import { Character } from '../model/Character';

export type FavoritesStackParamsList = {
  Favorites: undefined;
  Details: { character: Character };
};

const Stack = createNativeStackNavigator<FavoritesStackParamsList>();

const FavoritesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          headerLargeTitle: true,
          headerTransparent: true,
          headerBlurEffect: 'regular',
        }}
      />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default FavoritesStack;

const styles = StyleSheet.create({});
