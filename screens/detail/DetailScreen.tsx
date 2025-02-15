import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { Character } from '../../model/Character';
import DetailItem from './DetailItem';
import { HomeScreenNavigationProp } from '../home/HomeScreen';
import { formatDate } from '../../utils/formatDate';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/slices/favoritesSlice';
import { RootState } from '../../store/store';

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
  const dispatch = useDispatch();
  const favoriteCharacters = useSelector((state: RootState) => state.favorites.favoriteCharacters);

  const episodes = character.episode.map((episode) => episode.split('/').pop()).join(',');
  const createdDateText = formatDate(character.created);
  const isCharacterFavorite = favoriteCharacters.includes(character);

  const handleFavoritePress = () => {
    isCharacterFavorite ? dispatch(removeFavorite(character)) : dispatch(addFavorite(character));
  };

  useEffect(() => {
    navigation.setOptions({ title: character.name });
    navigation.setOptions({
      headerRight: () => {
        const imageName = isCharacterFavorite ? 'heart' : 'heart-outline';
        return (
          <TouchableOpacity onPress={handleFavoritePress}>
            <Ionicons name={imageName} size={24} color="red" style={{ marginRight: 12 }} />
          </TouchableOpacity>
        );
      },
    });
  }, [navigation, isCharacterFavorite]);

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
