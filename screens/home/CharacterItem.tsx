import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Character } from '../../model/CharacterResult';
import { Image } from 'react-native';

type CharacterItemProps = {
  character: Character;
};

const CharacterItem = ({ character }: CharacterItemProps) => {
  return (
    <View style={styles.characterItem}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.characterName}>{character.name}</Text>
        <Text>Species: {character.species}</Text>
        <Text>Gender: {character.gender}</Text>
      </View>
    </View>
  );
};

export default CharacterItem;

const styles = StyleSheet.create({
  characterItem: {
    flex: 1,
    backgroundColor: 'lightgray',
    margin: 8,
    borderRadius: 8,
    maxWidth: Dimensions.get('window').width / 2 - 16,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 8,
  },
  detailsContainer: {
    padding: 12,
  },
  characterName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
