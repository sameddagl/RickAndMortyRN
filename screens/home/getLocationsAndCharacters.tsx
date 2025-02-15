import { useEffect, useState } from 'react';
import { useGetAllLocationsQuery } from '../../store/api/locationsApiSlice';
import { useGetCharactersQuery } from '../../store/api/charactersApiSlice';
import { Location } from '../../model/LocationResult';

export const getLocationsAndCharacters = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [residentIds, setResidentIds] = useState<number[]>([]);
  const [locationPage, setLocationPage] = useState(1);
  const [allLocations, setAllLocations] = useState<Location[]>([]);
  const {
    data: locationResult,
    isLoading: isLoadingLocations,
    isFetching: isFetchingLocations,
  } = useGetAllLocationsQuery({ page: locationPage });

  const { data: characters, isLoading: isLoadingCharacters } = useGetCharactersQuery(
    { ids: residentIds },
    { skip: residentIds.length === 0 }
  );

  useEffect(() => {
    if (locationResult) {
      setAllLocations([...allLocations, ...locationResult.results]);
      if (!selectedLocation) {
        setSelectedLocation(locationResult.results[0]);
      }
    }
  }, [locationResult]);

  useEffect(() => {
    if (selectedLocation) {
      setResidentIds(selectedLocation.residents.map((url) => parseInt(url.split('/').pop() || '')));
    }
  }, [selectedLocation]);

  const loadMoreLocations = () => {
    if (locationResult?.info.next && !isFetchingLocations) {
      setLocationPage(locationPage + 1);
    }
  };

  const handleLocationSelection = (location: Location) => {
    setSelectedLocation(location);
  };

  return {
    isFetchingLocations,
    isLoadingLocations,
    isLoadingCharacters,
    allLocations,
    characters,
    selectedLocation,
    handleLocationSelection,
    loadMoreLocations,
  };
};
