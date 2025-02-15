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
      <View style={styles.locationItem}>
        <Text
          style={[
            styles.locationText,
            selectedLocation?.id === location.id && styles.selectedLocationText,
          ]}
        >
          {location.name}
        </Text>
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
    backgroundColor: 'lightgray',
    borderRadius: 8,
    justifyContent: 'center',
  },
  locationText: {
    color: 'black',
    fontWeight: 'bold',
  },
  selectedLocationText: {
    color: 'green',
  },
});
