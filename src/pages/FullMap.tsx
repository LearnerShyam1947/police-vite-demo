// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import robbery  from "./../assets/robbery.png";
// import pirate  from "./../assets/pirates.png";
// import police  from "./../assets/police.png";
// import theft  from "./../assets/theft.png";

// const data = [
//     {
//         "name": "Station Vijayawada",
//         "lat": 16.5060,
//         "long": 80.6480,
//         "popupInfo": "This is a police station located in Vijayawada, Andhra Pradesh.",
//         "crimes": [
//             {
//                 "name": "Burglary",
//                 "type": "T1",
//                 "lat": 16.5075,
//                 "long": 80.6490,
//                 "popupInfo": "Burglary incident reported in a residential area."
//             },
//             {
//                 "name": "Robbery",
//                 "type": "T3",
//                 "lat": 16.5085,
//                 "long": 80.6465,
//                 "popupInfo": "A robbery occurred near the main shopping street."
//             },
//             {
//                 "name": "Assault",
//                 "type": "T2",
//                 "lat": 16.5040,
//                 "long": 80.6470,
//                 "popupInfo": "An assault was reported in a local restaurant."
//             },
//             {
//                 "name": "Vandalism",
//                 "type": "T1",
//                 "lat": 16.5100,
//                 "long": 80.6505,
//                 "popupInfo": "Vandalism occurred at a public transport station."
//             }
//         ]
//     },
//     {
//         "name": "Station Guntur",
//         "lat": 16.3060,
//         "long": 80.4360,
//         "popupInfo": "This is a police station located in Guntur, Andhra Pradesh.",
//         "crimes": [
//             {
//                 "name": "Theft",
//                 "type": "T1",
//                 "lat": 16.3085,
//                 "long": 80.4385,
//                 "popupInfo": "A theft occurred at a local market."
//             },
//             {
//                 "name": "Murder",
//                 "type": "T3",
//                 "lat": 16.3025,
//                 "long": 80.4340,
//                 "popupInfo": "A tragic murder was reported near a residential neighborhood."
//             },
//             {
//                 "name": "Fraud",
//                 "type": "T2",
//                 "lat": 16.3070,
//                 "long": 80.4335,
//                 "popupInfo": "Fraudulent activity detected in the commercial district."
//             },
//             {
//                 "name": "Car Theft",
//                 "type": "T1",
//                 "lat": 16.3125,
//                 "long": 80.4305,
//                 "popupInfo": "A vehicle was stolen from a public parking area."
//             }
//         ]
//     },
//     {
//         "name": "Station Manglagiri",
//         "lat": 16.4400,
//         "long": 80.5700,
//         "popupInfo": "This is a police station located in Manglagiri, Andhra Pradesh.",
//         "crimes": [
//             {
//                 "name": "Pickpocketing",
//                 "type": "T1",
//                 "lat": 16.4415,
//                 "long": 80.5720,
//                 "popupInfo": "Pickpocketing incident reported in a busy shopping district."
//             },
//             {
//                 "name": "Drug Possession",
//                 "type": "T3",
//                 "lat": 16.4425,
//                 "long": 80.5750,
//                 "popupInfo": "Illegal drug possession discovered in a local park."
//             },
//             {
//                 "name": "Vandalism",
//                 "type": "T2",
//                 "lat": 16.4385,
//                 "long": 80.5685,
//                 "popupInfo": "Graffiti vandalism reported on public property near the station."
//             },
//             {
//                 "name": "Domestic Violence",
//                 "type": "T1",
//                 "lat": 16.4435,
//                 "long": 80.5745,
//                 "popupInfo": "A case of domestic violence was reported in a residential area."
//             }
//         ]
//     }
// ]

  

// const FullMap = () => {
//     const stationIcon = new L.Icon({
//         iconUrl: police,
//         iconSize: [32, 32],
//         iconAnchor: [16, 32],
//         popupAnchor: [0, -32]
//       });
      
//       const crimeIcons = {
//         T1: new L.Icon({
//           iconUrl: pirate,
//           iconSize: [32, 32],
//           iconAnchor: [16, 32],
//           popupAnchor: [0, -32]
//         }),
//         T2: new L.Icon({
//           iconUrl: theft,
//           iconSize: [32, 32],
//           iconAnchor: [16, 32],
//           popupAnchor: [0, -32]
//         }),
//         T3: new L.Icon({
//           iconUrl: robbery,
//           iconSize: [32, 32],
//           iconAnchor: [16, 32],
//           popupAnchor: [0, -32]
//         }),
//         // Define other crime icons as needed
//       };

      
//     return (
//         <MapContainer center={[51.5074, -0.1278]} zoom={13} style={{ width: '100%', height: '500px' }}>
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution='&copy; OpenStreetMap contributors'
//           />
//           {data.map(station => (
//             <Marker key={station.name} position={[station.lat, station.long]} icon={stationIcon}>
//               <Popup>{station.name}</Popup>
//             </Marker>
//           ))}
//           {data.flatMap(station =>
//             station.crimes.map((crime : any, idx) => (
//               <Marker
//               key={`idx-${idx}-crime-${crime.name}-${crime.type}-${crime.lat}-${crime.long}`}
//                 position={[crime.lat, crime.long]}
//                 icon={crimeIcons[crime.type]}
//               >
//                 <Popup>
//                   <strong>{crime.name}</strong><br />
//                   {crime.description}
//                 </Popup>
//               </Marker>
//             ))
//           )}
//         </MapContainer>
//       );
      
// }

// export default FullMap


import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import robbery from "./../assets/robbery.png";
import pirate from "./../assets/pirates.png";
import police from "./../assets/police.png";
import theft from "./../assets/theft.png";

const data = [
  {
    "name": "Station Vijayawada",
    "lat": 16.5060,
    "long": 80.6480,
    "popupInfo": "This is a police station located in Vijayawada, Andhra Pradesh.",
    "crimes": [
      {
        "name": "Burglary",
        "type": "T1",
        "lat": 16.5075,
        "long": 80.6490,
        "popupInfo": "Burglary incident reported in a residential area."
      },
      {
        "name": "Robbery",
        "type": "T3",
        "lat": 16.5085,
        "long": 80.6465,
        "popupInfo": "A robbery occurred near the main shopping street."
      },
      {
        "name": "Assault",
        "type": "T2",
        "lat": 16.5040,
        "long": 80.6470,
        "popupInfo": "An assault was reported in a local restaurant."
      },
      {
        "name": "Vandalism",
        "type": "T1",
        "lat": 16.5100,
        "long": 80.6505,
        "popupInfo": "Vandalism occurred at a public transport station."
      }
    ]
  },
  {
    "name": "Station Guntur",
    "lat": 16.3060,
    "long": 80.4360,
    "popupInfo": "This is a police station located in Guntur, Andhra Pradesh.",
    "crimes": [
      {
        "name": "Theft",
        "type": "T1",
        "lat": 16.3085,
        "long": 80.4385,
        "popupInfo": "A theft occurred at a local market."
      },
      {
        "name": "Murder",
        "type": "T3",
        "lat": 16.3025,
        "long": 80.4340,
        "popupInfo": "A tragic murder was reported near a residential neighborhood."
      },
      {
        "name": "Fraud",
        "type": "T2",
        "lat": 16.3070,
        "long": 80.4335,
        "popupInfo": "Fraudulent activity detected in the commercial district."
      },
      {
        "name": "Car Theft",
        "type": "T1",
        "lat": 16.3125,
        "long": 80.4305,
        "popupInfo": "A vehicle was stolen from a public parking area."
      }
    ]
  },
  {
    "name": "Station Manglagiri",
    "lat": 16.4400,
    "long": 80.5700,
    "popupInfo": "This is a police station located in Manglagiri, Andhra Pradesh.",
    "crimes": [
      {
        "name": "Pickpocketing",
        "type": "T1",
        "lat": 16.4415,
        "long": 80.5720,
        "popupInfo": "Pickpocketing incident reported in a busy shopping district."
      },
      {
        "name": "Drug Possession",
        "type": "T3",
        "lat": 16.4425,
        "long": 80.5750,
        "popupInfo": "Illegal drug possession discovered in a local park."
      },
      {
        "name": "Vandalism",
        "type": "T2",
        "lat": 16.4385,
        "long": 80.5685,
        "popupInfo": "Graffiti vandalism reported on public property near the station."
      },
      {
        "name": "Domestic Violence",
        "type": "T1",
        "lat": 16.4435,
        "long": 80.5745,
        "popupInfo": "A case of domestic violence was reported in a residential area."
      }
    ]
  }
];

const FullMap = () => {
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

  // Calculate bounds based on all markers
  const calculateBounds = () => {
    const bounds = new L.LatLngBounds();

    data.forEach(station => {
      bounds.extend([station.lat, station.long]);
      station.crimes.forEach(crime => {
        bounds.extend([crime.lat, crime.long]);
      });
    });

    return bounds;
  };

  // Custom component to adjust the map view based on the bounds
  const SetMapBounds = () => {
    const map = useMap();
    const bounds = calculateBounds();
    map.fitBounds(bounds);
    return null;
  };

  return (
    <MapContainer center={[16.5060, 80.6480]} zoom={13} style={{ width: '100%', height: '700px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      {/* Add the SetMapBounds component to adjust the map bounds */}
      <SetMapBounds />
      {data.map(station => (
        <Marker key={station.name} position={[station.lat, station.long]} icon={stationIcon}>
          <Popup>{station.name}</Popup>
        </Marker>
      ))}
      {data.flatMap(station =>
        station.crimes.map((crime, idx) => (
          <Marker
            key={`idx-${idx}-crime-${crime.name}-${crime.type}-${crime.lat}-${crime.long}`}
            position={[crime.lat, crime.long]}
            icon={crimeIcons[crime.type]}
          >
            <Popup>
              <strong>{crime.name}</strong><br />
              {crime.popupInfo}
            </Popup>
          </Marker>
        ))
      )}
    </MapContainer>
  );
}

export default FullMap;
