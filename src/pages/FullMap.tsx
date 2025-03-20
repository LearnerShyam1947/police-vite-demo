// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import L from 'leaflet';
// import robbery from "./../assets/robbery.png";
// import pirate from "./../assets/pirates.png";
// import police from "./../assets/police.png";
// import theft from "./../assets/theft.png";

// // import robberyClosed from "./../assets/robbery_closed.png";
// // import pirateClosed from "./../assets/pirates_closed.png";
// // import theftClosed from "./../assets/theft_closed.png";
// import { useOutletContext } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom';
// import React from 'react';

// import { data } from "./../data/Stations";
// // const data = [
// //   {
// //     "name": "Station Vijayawada",
// //     "lat": 16.5060,
// //     "long": 80.6480,
// //     "popupInfo": "This is a police station located in Vijayawada, Andhra Pradesh.",
// //     "crimes": [
// //       {
// //         "name": "Burglary",
// //         "type": "T1",
// //         "lat": 16.5075,
// //         "long": 80.6490,
// //         "popupInfo": "Burglary incident reported in a residential area."
// //       },
// //       {
// //         "name": "Robbery",
// //         "type": "T3",
// //         "lat": 16.5085,
// //         "long": 80.6465,
// //         "popupInfo": "A robbery occurred near the main shopping street."
// //       },
// //       {
// //         "name": "Assault",
// //         "type": "T2",
// //         "lat": 16.5040,
// //         "long": 80.6470,
// //         "popupInfo": "An assault was reported in a local restaurant."
// //       },
// //       {
// //         "name": "Vandalism",
// //         "type": "T1",
// //         "lat": 16.5100,
// //         "long": 80.6505,
// //         "popupInfo": "Vandalism occurred at a public transport station."
// //       }
// //     ]
// //   },
// //   {
// //     "name": "Station Guntur",
// //     "lat": 16.3060,
// //     "long": 80.4360,
// //     "popupInfo": "This is a police station located in Guntur, Andhra Pradesh.",
// //     "crimes": [
// //       {
// //         "name": "Theft",
// //         "type": "T1",
// //         "lat": 16.3085,
// //         "long": 80.4385,
// //         "popupInfo": "A theft occurred at a local market."
// //       },
// //       {
// //         "name": "Murder",
// //         "type": "T3",
// //         "lat": 16.3025,
// //         "long": 80.4340,
// //         "popupInfo": "A tragic murder was reported near a residential neighborhood."
// //       },
// //       {
// //         "name": "Fraud",
// //         "type": "T2",
// //         "lat": 16.3070,
// //         "long": 80.4335,
// //         "popupInfo": "Fraudulent activity detected in the commercial district."
// //       },
// //       {
// //         "name": "Car Theft",
// //         "type": "T1",
// //         "lat": 16.3125,
// //         "long": 80.4305,
// //         "popupInfo": "A vehicle was stolen from a public parking area."
// //       }
// //     ]
// //   },
// //   {
// //     "name": "Station Manglagiri",
// //     "lat": 16.4400,
// //     "long": 80.5700,
// //     "popupInfo": "This is a police station located in Manglagiri, Andhra Pradesh.",
// //     "crimes": [
// //       {
// //         "name": "Pickpocketing",
// //         "type": "T1",
// //         "lat": 16.4415,
// //         "long": 80.5720,
// //         "popupInfo": "Pickpocketing incident reported in a busy shopping district."
// //       },
// //       {
// //         "name": "Drug Possession",
// //         "type": "T3",
// //         "lat": 16.4425,
// //         "long": 80.5750,
// //         "popupInfo": "Illegal drug possession discovered in a local park."
// //       },
// //       {
// //         "name": "Vandalism",
// //         "type": "T2",
// //         "lat": 16.4385,
// //         "long": 80.5685,
// //         "popupInfo": "Graffiti vandalism reported on public property near the station."
// //       },
// //       {
// //         "name": "Domestic Violence",
// //         "type": "T1",
// //         "lat": 16.4435,
// //         "long": 80.5745,
// //         "popupInfo": "A case of domestic violence was reported in a residential area."
// //       }
// //     ]
// //   }
// // ];

// const FullMap = () => {
//   const { setSelectedStation } = useOutletContext<{
//     setSelectedStation: (station: { name: string; crimes: any[] } | null) => void;
//   }>();

//   const [searchParams] = useSearchParams();
//   const stationParam = searchParams.get('station');
//   const [key, setKey] = React.useState(0);

//   React.useEffect(() => {
//     setKey(prevKey => prevKey + 1);
//   }, [stationParam]);

//   const filteredData = stationParam
//     ? data.filter(station => station.name === stationParam)
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

//   // const crimeIconsClosed = {
//   //   T1: new L.Icon({
//   //     iconUrl: pirateClosed,
//   //     iconSize: [32, 32],
//   //     iconAnchor: [16, 32],
//   //     popupAnchor: [0, -32]
//   //   }),
//   //   T2: new L.Icon({
//   //     iconUrl: theftClosed,
//   //     iconSize: [32, 32],
//   //     iconAnchor: [16, 32],
//   //     popupAnchor: [0, -32]
//   //   }),
//   //   T3: new L.Icon({
//   //     iconUrl: robberyClosed,
//   //     iconSize: [32, 32],
//   //     iconAnchor: [16, 32],
//   //     popupAnchor: [0, -32]
//   //   }),
//   //   // Define other crime icons as needed
//   // };

//   const handleStationClick = (station: { name: string; crimes: any[] }) => {
//     console.log(`${station.name} has ${station.crimes.length} reported crimes`);
//     setSelectedStation(station);
//   };

//   const calculateBounds = () => {
//     const bounds = new L.LatLngBounds();

//     data.forEach(station => {
//       bounds.extend([station.lat, station.long]);
//       station.crimes.forEach(crime => {
//         bounds.extend([crime.lat, crime.long]);
//       });
//     });

//     return bounds;
//   };

//   // Custom component to adjust the map view based on the bounds
//   const SetMapBounds = () => {
//     const map = useMap();
//     const bounds = calculateBounds();
//     map.fitBounds(bounds);
//     // map.setZoom(10);
//     return null;
//   };

//   // Calculate initial center and zoom
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

//     // Fallback to default values if no station is selected
//     return {
//       center: [16.5060, 80.6480],
//       zoom: 10
//     };
//   };

//   const { center, zoom } = getInitialPosition();

//   return (
//     <MapContainer
//       key={key}
//       center={center as L.LatLngExpression}
//       zoom={zoom}
//       style={{ width: '100%', height: '700px' }}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; OpenStreetMap contributors'
//       />
//       <SetMapBounds />
//       {filteredData.map(station => (
//         <Marker
//           key={station.name}
//           position={[station.lat, station.long]}
//           icon={stationIcon}
//         eventHandlers={{
//           click: () => handleStationClick(station),
//         }}
//         >
//           <Popup>
//             <strong>{station.name}</strong><br />
//             Number of crimes: {station.crimes ? station.crimes.length : 0}
//           </Popup>
//         </Marker>
//       ))}
//       {filteredData.flatMap(station =>
//         station.crimes.map((crime, idx) => (
//           <Marker
//             key={`idx-${idx}-crime-${crime.name}-${crime.type}-${crime.lat}-${crime.long}`}
//             position={[crime.lat, crime.long]}
//             icon={crimeIcons[crime.type as keyof typeof crimeIcons]}
//           >
//             <Popup>
//               <strong>{crime.name}</strong><br />
//               {crime.popupInfo}
//             </Popup>
//           </Marker>
//         ) )
//       )}
//     </MapContainer>
//   );
// }

// export default FullMap;

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
    );
}

export default FullMap;

