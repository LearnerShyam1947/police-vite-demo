import React, { useState, useEffect } from 'react';
import { getCurrentLocation } from './../services/GeoLocationService';

const LocationComponent: React.FC = () => {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    
    getCurrentLocation()
      .then((location : any) => {
        setLocation(location);
        setError(null);  
      })
      .catch((err : any) => {
        setLocation(null);  
        setError(err.message);  
      });
  }, []);

  return (
    <div>
      <h1>Current Location</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : location ? (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      ) : (
        <p>Loading your location...</p>
      )}
    </div>
  );
};

export default LocationComponent;
