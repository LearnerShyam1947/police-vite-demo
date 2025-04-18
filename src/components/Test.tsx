import React, { useEffect, useState } from 'react';

// Define type for a location
type Location = {
  id: string;
  latitude: number;
  longitude: number;
  status: string;
};

// Utility to calculate distance using Haversine formula
const getDistanceInMeters = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const R = 6371e3; // Radius of Earth in meters
  const toRadians = (deg: number) => (deg * Math.PI) / 180;

  const φ1 = toRadians(lat1);
  const φ2 = toRadians(lat2);
  const Δφ = toRadians(lat2 - lat1);
  const Δλ = toRadians(lon2 - lon1);

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

type Props = {
  locations: Location[];
};

const Test: React.FC<Props> = ({ locations: initialLocations }) => {
  const [locations, setLocations] = useState<Location[]>(initialLocations);
  const [currentPosition, setCurrentPosition] = useState<GeolocationCoordinates | null>(null);

  useEffect(() => {
    const updateLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition(position.coords);

          const updatedLocations = locations.map((loc) => {
            if (loc.status === 'visited') return loc;

            const distance = getDistanceInMeters(
              loc.latitude,
              loc.longitude,
              position.coords.latitude,
              position.coords.longitude
            );
            console.log("update distance : ", distance);
            
            if (distance <= 5) {
              console.log(`You are within 5 meters of location ${loc.id}`);
              // alert("Done");
              console.log("api calling......................", new Date());
              
              return { ...loc, status: 'visited' };
            }
            return loc;
          });

          setLocations(updatedLocations);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    };

    updateLocation(); // Initial check
    setInterval(updateLocation, 5000);

    // return () => clearInterval(interval);
  }, [locations]);

  return (
    <div>
      <h2>Location Tracker</h2>
      <ul>
        {locations.map((loc) => (
          <li key={loc.id}>
            ID: {loc.id} - Status: {loc.status}
          </li>
        ))}
      </ul>
      {currentPosition && (
        <p>
          Your location: Lat {currentPosition.latitude.toFixed(5)}, Long {currentPosition.longitude.toFixed(5)}
        </p>
      )}
    </div>
  );
};

export default Test;