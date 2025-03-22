// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import L from 'leaflet';
// import { motion } from 'framer-motion';
// import police from "./../assets/police.png";
// import { useSearchParams } from 'react-router-dom';
// import React from 'react';

// import robbery from "./../assets/robbery.png";
// import pirate from "./../assets/pirates.png";
// import theft from "./../assets/theft.png";

// import robberyClosed from "./../assets/robbery_closed.png";
// import pirateClosed from "./../assets/pirates_closed.png";
// import theftClosed from "./../assets/theft_closed.png";

// import { data } from "./../data/Stations";
// import { ArrowUpRight, PiIcon } from 'lucide-react';


// const FullMap = () => {

//   const [searchParams] = useSearchParams();
//   const stationParam = searchParams.get('region');
//   const [key, setKey] = React.useState(0);

//   React.useEffect(() => {
//     setKey(prevKey => prevKey + 1);
//   }, [stationParam]);

//   const filteredData = stationParam
//     ? data.filter(station => station.region === stationParam)
//     : data;

//   const stationIcon = new L.Icon({
//     iconUrl: police,
//     iconSize: [32, 32],
//     iconAnchor: [16, 32],
//     popupAnchor: [0, -32]
//   });

//   const crimeIcons = {
//     T1: new L.Icon({
//       iconUrl: pirate,
//       iconSize: [32, 32],
//       iconAnchor: [16, 32],
//       popupAnchor: [0, -32]
//     }),
//     T2: new L.Icon({
//       iconUrl: theft,
//       iconSize: [32, 32],
//       iconAnchor: [16, 32],
//       popupAnchor: [0, -32]
//     }),
//     T3: new L.Icon({
//       iconUrl: robbery,
//       iconSize: [32, 32],
//       iconAnchor: [16, 32],
//       popupAnchor: [0, -32]
//     }),
//     // Define other crime icons as needed
//   };

//   const crimeIconsClosed = {
//     T1: new L.Icon({
//       iconUrl: pirateClosed,
//       iconSize: [32, 32],
//       iconAnchor: [16, 32],
//       popupAnchor: [0, -32]
//     }),
//     T2: new L.Icon({
//       iconUrl: theftClosed,
//       iconSize: [32, 32],
//       iconAnchor: [16, 32],
//       popupAnchor: [0, -32]
//     }),
//     T3: new L.Icon({
//       iconUrl: robberyClosed,
//       iconSize: [32, 32],
//       iconAnchor: [16, 32],
//       popupAnchor: [0, -32]
//     }),
//     // Define other crime icons as needed
//   };

//   const calculateBounds = () => {
//     const bounds = new L.LatLngBounds();

//     filteredData.forEach(station => {
//       bounds.extend([station.lat, station.long]);
//     });

//     return bounds;
//   };


//   const SetMapBounds = () => {
//     const map = useMap();
//     const bounds = calculateBounds();
//     map.fitBounds(bounds);

//     return null;
//   };


//   const getInitialPosition = () => {
//     if (stationParam) {
//       const selectedStation = data.find(station => station.name === stationParam);
//       if (selectedStation) {
//         return {
//           center: [selectedStation.lat, selectedStation.long],
//           zoom: 13
//         };
//       }
//     }


//     return {
//       center: [16.5060, 80.6480],
//       zoom: 10
//     };
//   };

//   const { center, zoom } = getInitialPosition();

//   return (
//     <>
//       <MapContainer
//         key={key}
//         center={center as L.LatLngExpression}
//         zoom={zoom}
//         style={{ width: '100%', height: '700px' }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; OpenStreetMap contributors'
//         />
//         <SetMapBounds />
//         {filteredData.map(station => (
//           <Marker
//             key={station.name}
//             position={[station.lat, station.long]}
//             icon={stationIcon}



//           >
//             <Popup>
//               <strong>{station.name}</strong>
//               <p>{station.description}</p>
//             </Popup>
//           </Marker>
//         ))}
//         {filteredData.flatMap(station =>
//           station.crimes && station.crimes.map((crime, idx) => (
//             <Marker
//               key={`idx-${idx}-crime-${crime.name}-${crime.type}-${crime.lat}-${crime.long}`}
//               position={[crime.lat, crime.long]}
//               icon={crime.status === "Close" ? crimeIconsClosed[crime.type as keyof typeof crimeIconsClosed] : crimeIcons[crime.type as keyof typeof crimeIcons]}
//             // icon={crimeIcons[crime.type as keyof typeof crimeIcons]}
//             >
//               <Popup>
//                 <strong>{crime.name}</strong><br />
//                 {crime.popupInfo}
//               </Popup>
//             </Marker>
//           ))
//         )}
//       </MapContainer>

//       <motion.div
//         key={"label"}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="bg-white rounded-xl shadow-sm p-6"
//       >
//         <div className="flex items-center justify-between">
//           <div className="p-2 bg-blue-100 rounded-lg">
//             <PiIcon className="text-blue-600" size={24} />
//           </div>
//           <span className="flex items-center text-green-500">
//             trend
//             <ArrowUpRight size={16} />
//           </span>
//         </div>
//         <h3 className="text-xl font-semibold mt-4">value</h3>
//         <p className="text-gray-600">label</p>
//       </motion.div>

//       <motion.div
//         key={"label"}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="bg-white rounded-xl shadow-sm p-6"
//       >
//         <div className="flex items-center justify-between">
//           <div className="p-2 bg-blue-100 rounded-lg">
//             <PiIcon className="text-blue-600" size={24} />
//           </div>
//           <span className="flex items-center text-green-500">
//             trend
//             <ArrowUpRight size={16} />
//           </span>
//         </div>
//         <h3 className="text-xl font-semibold mt-4">value</h3>
//         <p className="text-gray-600">label</p>
//       </motion.div>
//     </>
//   );
// }

// export default FullMap;

import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

import { motion } from 'framer-motion';
import L from 'leaflet';
import { AlertCircle, MapPin, Skull } from 'lucide-react';
import React from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import police from './../assets/police.png';

import pirate from './../assets/pirates.png';
import robbery from './../assets/robbery.png';
import theft from './../assets/theft.png';

import pirateClosed from './../assets/pirates_closed.png';
import robberyClosed from './../assets/robbery_closed.png';
import theftClosed from './../assets/theft_closed.png';

import { data } from './../data/Stations';

const FullMap = () => {
  const [searchParams] = useSearchParams();
  const stationParam = searchParams.get('region');
  const [key, setKey] = React.useState(0);

  React.useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [stationParam]);

  const filteredData = stationParam
    ? data.filter((station) => station.region === stationParam)
    : data;

  const stationIcon = new L.Icon({
    iconUrl: police,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const crimeIcons = {
    T1: new L.Icon({
      iconUrl: pirate,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    }),
    T2: new L.Icon({
      iconUrl: theft,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    }),
    T3: new L.Icon({
      iconUrl: robbery,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    }),
  };

  const crimeIconsClosed = {
    T1: new L.Icon({
      iconUrl: pirateClosed,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    }),
    T2: new L.Icon({
      iconUrl: theftClosed,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    }),
    T3: new L.Icon({
      iconUrl: robberyClosed,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    }),
  };

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
  const totalStations = filteredData.length;
  const totalCrimes = filteredData.reduce((total, station) => total + (station.crimes?.length || 0), 0);

  const crimeTypes = {
    assault: 0,
    theft: 0,
    robbery: 0,
  };

  filteredData.forEach((station) => {
    station.crimes?.forEach((crime) => {
      if (crime.type === 'T1') crimeTypes.assault++;
      if (crime.type === 'T2') crimeTypes.theft++;
      if (crime.type === 'T3') crimeTypes.robbery++;
    });
  });

  const { setSelectedStation } = useOutletContext<{
    setSelectedStation: (station: { name: string; crimes: any[] } | null) => void;
  }>();

  const handleStationClick = (station: { name: string; crimes: any[] }) => {
    console.log(`${station.name} has ${station.crimes.length} reported crimes`);
    setSelectedStation(station);
  };

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
            eventHandlers={{
              click: () => handleStationClick(station),
            }}
          >
            <Popup>
              <strong>{station.name}</strong>
              <p>{station.description}</p>
            </Popup>
          </Marker>
        ))}
        {filteredData.flatMap((station) =>
          station.crimes?.map((crime, idx) => (
            <Marker
              key={`idx-${idx}-crime-${crime.name}-${crime.type}-${crime.lat}-${crime.long}`}
              position={[crime.lat, crime.long]}
              icon={crime.status === 'Close' ? crimeIconsClosed[crime.type as keyof typeof crimeIconsClosed] : crimeIcons[crime.type as keyof typeof crimeIcons]}
            >
              <Popup>
                <strong>{crime.name}</strong><br />
                {crime.popupInfo}
              </Popup>
            </Marker>
          ))
        )}
      </MapContainer>

      {/* Stats Cards Below Map */}

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
      </div>

    </>
  );
};

export default FullMap;

