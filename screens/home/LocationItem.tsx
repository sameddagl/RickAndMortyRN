import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Location } from '../../model/LocationResult';

type LocationItemProps = {
  location: Location;
  selectedLocation: Location | null;
  setSelectedLocation: (location: Location) => void;
};

const LocationItem = ({ location, selectedLocation, setSelectedLocation }: LocationItemProps) => {
  return (
    <TouchableOpacity onPress={setSelectedLocation.bind(null, location)} activeOpacity={0.8}>
      <View
        style={[
          styles.locationItem,
          selectedLocation?.id === location.id && styles.selectedLocation,
        ]}
      >
        <Text style={styles.locationText}>{location.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LocationItem;

const styles = StyleSheet.create({
  locationItem: {
    height: 44,
    paddingHorizontal: 24,
    margin: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    opacity: 0.6,
    justifyContent: 'center',
  },
  locationText: {
    color: 'white',
    fontWeight: 'bold',
  },
  selectedLocation: {
    opacity: 1,
    backgroundColor: 'blue',
  },
});
