import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import { Character } from '../../model/Character';
import DetailItem from './DetailItem';
import { HomeScreenNavigationProp } from '../home/HomeScreen';
import { formatDate } from '../../utils/formatDate';

type DetailScreenProps = {
  navigation: HomeScreenNavigationProp;
  route: {
    params: {
      character: Character;
    };
  };
};

const DetailScreen = ({ navigation, route }: DetailScreenProps) => {
  const { character } = route.params;
  const episodes = character.episode.map((episode) => episode.split('/').pop()).join(',');
  const createdDateText = formatDate(character.created);

  useEffect(() => {
    navigation.setOptions({ title: character.name });
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <View style={styles.characterDetailsContainer}>
        <DetailItem title="Status:" value={character.status} />
        <DetailItem title="Species:" value={character.species} />
        <DetailItem title="Gender:" value={character.gender} />
        <DetailItem title="Episodes:" value={episodes} />
        <DetailItem title="Created at(in API):" value={createdDateText} />
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 280,
    borderRadius: 12,
  },
  characterDetailsContainer: {
    marginTop: 20,
    gap: 12,
  },
});
