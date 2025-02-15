import { FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import LoadingIndicator from '../../components/LoadingIndicator';
import CharacterItem from './CharacterItem';
import LocationItem from './LocationItem';
import { getLocationsAndCharacters } from './getLocationsAndCharacters';
import { Character } from '../../model/Character';
import { useNavigation } from '@react-navigation/native';
import { HomeStackParamsList } from '../../navigation/HomeStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackParamsList, 'Home'>;
const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const {
    isFetchingLocations,
    isLoadingLocations,
    isLoadingCharacters,
    allLocations,
    characters,
    selectedLocation,
    handleLocationSelection,
    loadMoreLocations,
  } = getLocationsAndCharacters();

  const onCharacterPress = (character: Character) => {
    navigation.navigate('Details', { character });
  };

  if (isLoadingLocations && allLocations.length === 0) {
    return <LoadingIndicator size="large" />;
  }

  return (
    <View>
      <FlatList
        data={allLocations}
        renderItem={(dataItem) => (
          <LocationItem
            location={dataItem.item}
            selectedLocation={selectedLocation}
            setSelectedLocation={handleLocationSelection.bind(this, dataItem.item)}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onEndReached={loadMoreLocations}
        onEndReachedThreshold={0.01}
        ListFooterComponent={isFetchingLocations ? <LoadingIndicator size="small" /> : null}
      ></FlatList>

      {isLoadingCharacters ? (
        <LoadingIndicator size="large" />
      ) : (
        <FlatList
          data={characters}
          numColumns={2}
          renderItem={({ item }) => <CharacterItem character={item} onPress={onCharacterPress} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 64 }}
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
