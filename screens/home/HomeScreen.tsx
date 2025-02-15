import { FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import LoadingIndicator from '../../components/LoadingIndicator';
import CharacterItem from './CharacterItem';
import LocationItem from './LocationItem';
import { getLocationsAndCharacters } from './getLocationsAndCharacters';

const HomeScreen = () => {
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
          renderItem={({ item }) => <CharacterItem character={item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 64 }}
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
