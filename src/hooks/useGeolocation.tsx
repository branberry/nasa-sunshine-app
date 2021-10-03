import { useEffect, useState } from 'react';

const useGeolocaton = () => {

  const [coords, setCoords] = useState<GeolocationCoordinates | undefined>();

  const onLocationSuccess: PositionCallback = (position: GeolocationPosition) => {
    console.log(`Successfully retrieved location data! Longitude: ${position.coords.longitude}`);
    setCoords(position.coords);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onLocationSuccess);
    }
  }, [setCoords]);

  return { lat: coords?.latitude, lng: coords?.longitude };
};

export default useGeolocaton;