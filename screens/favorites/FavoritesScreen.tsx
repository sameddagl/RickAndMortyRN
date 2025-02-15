import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import CharacterItem from '../home/CharacterItem';
import { Character } from '../../model/Character';
import { FavoritesStackParamsList } from '../../navigation/FavoritesStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

export type FavoritesScreenNavigationProp = NativeStackNavigationProp<
  FavoritesStackParamsList,
  'Favorites'
>;

const FavoritesScreen = () => {
  const navigation = useNavigation<FavoritesScreenNavigationProp>();
  const favoriteCharacters = useSelector((state: RootState) => state.favorites.favoriteCharacters);

  const onCharacterPress = (character: Character) => {
    navigation.navigate('Details', { character });
  };

  return (
    <FlatList
      data={favoriteCharacters}
      numColumns={2}
      renderItem={({ item }) => <CharacterItem character={item} onPress={onCharacterPress} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ paddingBottom: 64 }}
      contentInsetAdjustmentBehavior="automatic"
    />
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({});
