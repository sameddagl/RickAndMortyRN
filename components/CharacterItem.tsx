import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Character } from '../../model/Character';
import { Image } from 'react-native';

type CharacterItemProps = {
  character: Character;
  onPress: (character: Character) => void;
};

const CharacterItem = ({ character, onPress }: CharacterItemProps) => {
  const genderStyle = () => {
    let colorStyle = {};
    switch (character.gender) {
      case 'Male':
        colorStyle = { backgroundColor: 'blue' };
        break;
      case 'Female':
        colorStyle = { backgroundColor: 'pink' };
        break;
      default:
        colorStyle = { backgroundColor: 'gray' };
    }

    return { ...colorStyle, width: 10, height: 10, borderRadius: 5 };
  };

  return (
    <TouchableOpacity onPress={onPress.bind(this, character)} style={styles.characterItem}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.characterName}>{character.name}</Text>
        <View style={styles.genderContainer}>
          <View style={genderStyle()}></View>
          <Text>{character.gender}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
    height: 170,
    borderRadius: 8,
  },
  detailsContainer: {
    padding: 12,
  },
  characterName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
});
