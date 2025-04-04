import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

// import { motion } from 'framer-motion';
import L from 'leaflet';
// import { AlertCircle, MapPin, Skull } from 'lucide-react';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import male from './../assets/male.png';

import { data } from '../data/criminals';

const criminals = () => {
  const [searchParams] = useSearchParams();
  const stationParam = searchParams.get('region');
  const [key, setKey] = React.useState(0);

  React.useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [stationParam]);

  // const filteredData = stationParam
  //   ? data.filter((station) => station.region === stationParam)
  //   : data;

  const filteredData = data;

  const stationIcon = new L.Icon({
    iconUrl: male,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const calculateBounds = () => {
    const bounds = new L.LatLngBounds();

    filteredData.forEach((station) => {
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
      const selectedStation = data.find((station) => station.name === stationParam);
      if (selectedStation) {
        return {
          center: [selectedStation.lat, selectedStation.long],
          zoom: 13,
        };
      }
    }

    return {
      center: [16.5060, 80.6480],
      zoom: 10,
    };
  };

  const { center, zoom } = getInitialPosition();

  // Stats calculations
  // const totalStations = filteredData.length;
  // const totalCrimes = filteredData.reduce((total, station) => total + (station.crimes?.length || 0), 0);

  // const crimeTypes = {
  //   assault: 0,
  //   theft: 0,
  //   robbery: 0,
  // };

  // filteredData.forEach((station) => {
  //   station.crimes?.forEach((crime) => {
  //     if (crime.type === 'T1') crimeTypes.assault++;
  //     if (crime.type === 'T2') crimeTypes.theft++;
  //     if (crime.type === 'T3') crimeTypes.robbery++;
  //   });
  // });

  // const { setSelectedStation } = useOutletContext<{
  //   setSelectedStation: (station: { name: string; crimes: any[] } | null) => void;
  // }>();

  // const handleStationClick = (station: { name: string; crimes: any[] }) => {
  //   console.log(`${station.name} has ${station.crimes.length} reported crimes`);
  //   setSelectedStation(station);
  // };

  return (
    <>
      <MapContainer
        key={key}
        center={center as L.LatLngExpression}
        zoom={zoom}
        style={{ width: '100%', height: '600px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        <SetMapBounds />
        {filteredData.map((station) => (
          <Marker 
            key={station.name} 
            position={[station.lat, station.long]} 
            icon={stationIcon}
          >
            <Popup>
              <strong>{station.name}</strong> <br />
              <span> <b>Phone Number :</b> {station.phoneNumber}</span> <br />
              <span> <b>Address :</b> {station.address}</span> <br />
              <span> <b>No. of crimes :</b> {station.noOfCrimes}</span>
              <img style={{height: "150px"}} src={station.imageUrl} alt="" />
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Stats Cards Below Map */}
{/* 
      <h1 className="text-3xl font-bold mt-3">Crime Status</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-2">
        <motion.div
          key={"total-stations"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm p-6 w-full"
        >
          <div className="flex items-center">
            <MapPin className="text-blue-600" size={24} />
            <h3 className="text-xl font-semibold ml-2">Total Stations</h3>
          </div>
          <p className="text-gray-600">{totalStations}</p>
        </motion.div>

        <motion.div
          key={"total-crimes"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm p-6 w-full"
        >
          <div className="flex items-center">
            <AlertCircle className="text-red-600" size={24} />
            <h3 className="text-xl font-semibold ml-2">Total Crimes</h3>
          </div>
          <p className="text-gray-600">{totalCrimes}</p>
        </motion.div>

        <motion.div
          key={"crime-types"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm p-6 w-full"
        >
          <div className="flex items-center">
            <Skull className="text-yellow-600" size={24} />
            <h3 className="text-xl font-semibold ml-2">Crime Types</h3>
          </div>
          <p className="text-gray-600">Assault: {crimeTypes.assault}</p>
          <p className="text-gray-600">Theft: {crimeTypes.theft}</p>
          <p className="text-gray-600">Robbery: {crimeTypes.robbery}</p>
        </motion.div>
      </div> */}

    </>
  );
};

export default criminals;

