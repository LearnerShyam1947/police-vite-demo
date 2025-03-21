import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import police from "./../assets/police.png";
import { useSearchParams } from 'react-router-dom';
import React from 'react';

import robbery from "./../assets/robbery.png";
import pirate from "./../assets/pirates.png";
import theft from "./../assets/theft.png";

import robberyClosed from "./../assets/robbery_closed.png";
import pirateClosed from "./../assets/pirates_closed.png";
import theftClosed from "./../assets/theft_closed.png";

import { data } from "./../data/Stations";


const FullMap = () => {

  const [searchParams] = useSearchParams();
  const stationParam = searchParams.get('region');
  const [key, setKey] = React.useState(0);

  React.useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [stationParam]);

  const filteredData = stationParam
    ? data.filter(station => station.region === stationParam)
    : data;

  const stationIcon = new L.Icon({
    iconUrl: police,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

  const crimeIcons = {
    T1: new L.Icon({
      iconUrl: pirate,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    }),
    T2: new L.Icon({
      iconUrl: theft,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    }),
    T3: new L.Icon({
      iconUrl: robbery,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    }),
    // Define other crime icons as needed
  };

  const crimeIconsClosed = {
    T1: new L.Icon({
      iconUrl: pirateClosed,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    }),
    T2: new L.Icon({
      iconUrl: theftClosed,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    }),
    T3: new L.Icon({
      iconUrl: robberyClosed,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    }),
    // Define other crime icons as needed
  };

  const calculateBounds = () => {
    const bounds = new L.LatLngBounds();

    filteredData.forEach(station => {
      bounds.extend([station.lat, station.long]);
    });

    return bounds;
  };


  const SetMapBounds = () => {
    const map = useMap();
    const bounds = calculateBounds();
    map.fitBounds(bounds);

    return null;
  };


  const getInitialPosition = () => {
    if (stationParam) {
      const selectedStation = data.find(station => station.name === stationParam);
      if (selectedStation) {
        return {
          center: [selectedStation.lat, selectedStation.long],
          zoom: 13
        };
      }
    }


    return {
      center: [16.5060, 80.6480],
      zoom: 10
    };
  };

  const { center, zoom } = getInitialPosition();

  return (
    <>
      <MapContainer
        key={key}
        center={center as L.LatLngExpression}
        zoom={zoom}
        style={{ width: '100%', height: '700px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        <SetMapBounds />
        {filteredData.map(station => (
          <Marker
            key={station.name}
            position={[station.lat, station.long]}
            icon={stationIcon}



          >
            <Popup>
              <strong>{station.name}</strong>
              <p>{station.description}</p>
            </Popup>
          </Marker>
        ))}
        {filteredData.flatMap(station =>
          station.crimes && station.crimes.map((crime, idx) => (
            <Marker
              key={`idx-${idx}-crime-${crime.name}-${crime.type}-${crime.lat}-${crime.long}`}
              position={[crime.lat, crime.long]}
              icon={crime.status === "Close" ? crimeIconsClosed[crime.type as keyof typeof crimeIconsClosed] : crimeIcons[crime.type as keyof typeof crimeIcons]}
            // icon={crimeIcons[crime.type as keyof typeof crimeIcons]}
            >
              <Popup>
                <strong>{crime.name}</strong><br />
                {crime.popupInfo}
              </Popup>
            </Marker>
          ))
        )}
      </MapContainer>

    </>
  );
}

export default FullMap;

