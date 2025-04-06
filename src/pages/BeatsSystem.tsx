import { FeatureCollection } from 'geojson';
import L from 'leaflet';
import React, { useState } from 'react';
import { GeoJSON, MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { useSearchParams } from 'react-router-dom';
import police from "./../assets/police.png";

import { psRegions } from "./../data/ananthapuramu-only";
// import { sampleData } from "./../data/beats-sample";
import { useAuth } from '../contexts/AuthContext';
import { fetchData } from '../services/BeatsService';

const BeatsSystem = () => {
  const { user } = useAuth();
  const [sampleData, setSampleData] = useState<any[]>([]);

  function getFeatureByRegionId(data:any, ps:any) {
    const feature = data.features.find((f:any) => f.properties.ps === ps);
    const data1 : FeatureCollection = {
      "type": "FeatureCollection",
      "features": [
          feature
      ]
  };
    return data1;
}

  const requiredGEOData = getFeatureByRegionId(psRegions, user?.ps);

  const loadData = async () => {
      const data = await fetchData(user && user.ps);
      if (data && data.data) {
        setSampleData(data.data);
      } else {
        console.error("No records found");
      }
    };
    
    
    React.useEffect(() => {
      loadData();
    }, []);


  const getStyle = (feature: any) => {
    switch (feature.properties.regionId) {
      case 1:
        return {
          fillColor: 'red',
          weight: 3,
          opacity: 1,
          fillOpacity: 0.6
        };
      case 2:
        return {
          fillColor: 'brown',
          weight: 3,
          opacity: 1,
          fillOpacity: 0.6
        };
      case 3:
        return {
          fillColor: 'green',
          weight: 3,
          opacity: 1,
          fillOpacity: 0.6
        };
      case 4:
        return {
          fillColor: 'yellow',
          weight: 3,
          opacity: 1,
          fillOpacity: 0.6
        };
      case 5:
        return {
          fillColor: 'orange',
          weight: 3,
          opacity: 1,
          fillOpacity: 0.6
        };
      default:
        return {
          fillColor: 'gray',
          weight: 2,
          opacity: 1,
          fillOpacity: 0.4
        };
    }
  };

  const anantapurRegion: FeatureCollection = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [77.74274739149979, 14.626036335316499],
              [77.74437103863102, 14.606240439079059],
              [77.73430442637397, 14.602155349669303],
              [77.73592807351241, 14.594613446802768],
              [77.73397969694571, 14.590213884079233],
              [77.73787645007752, 14.581728764798726],
              [77.73268077923564, 14.57544328048823],
              [77.72001633155685, 14.579214592595108],
              [77.71222282529482, 14.573871881392122],
              [77.70962498987313, 14.56318607043707],
              [77.70637769559636, 14.556900057396305],
              [77.70637769559636, 14.550928179123076],
              [77.69403797734589, 14.537726611807486],
              [77.67747677653688, 14.537726611807486],
              [77.6670854348531, 14.542127221927572],
              [77.66383814057639, 14.551871118014148],
              [77.66481232885968, 14.565700425491855],
              [77.65571990488445, 14.571043334783624],
              [77.64078235121383, 14.56790046264635],
              [77.61707710299629, 14.565700425491855],
              [77.61415453814783, 14.569157616878385],
              [77.62194804440992, 14.577328944611068],
              [77.61772656186042, 14.592099421731291],
              [77.62779317411741, 14.59367069076761],
              [77.63168992724928, 14.609696993914369],
              [77.62616952697908, 14.61692416018495],
              [77.62227277384727, 14.64174609386069],
              [77.58785145451765, 14.64834385696146],
              [77.58070740710906, 14.642060277558272],
              [77.57096552428033, 14.617552598192688],
              [77.56609458286522, 14.615038835377703],
              [77.56641931229353, 14.60435502262888],
              [77.55895053545822, 14.596184697889242],
              [77.54920865262943, 14.599955654711096],
              [77.5475850054911, 14.609068533441885],
              [77.53719366380574, 14.609696993914369],
              [77.53492055781231, 14.601841108880421],
              [77.50861747417463, 14.59838443055736],
              [77.51154003902309, 14.607183141243326],
              [77.51056585073974, 14.613467719014793],
              [77.51543679215484, 14.631377779403422],
              [77.51673570986492, 14.643945370286673],
              [77.50114869733778, 14.646772978993695],
              [77.49367992050247, 14.644887910574425],
              [77.4631553543046, 14.649914723671202],
              [77.45763495403446, 14.654941421482718],
              [77.44756834177747, 14.65933968746836],
              [77.45731022460615, 14.662167097537619],
              [77.47614453141011, 14.672533955423106],
              [77.48458749652877, 14.673790510892545],
              [77.4917315439373, 14.684156818122702],
              [77.49108208508073, 14.68886861350721],
              [77.48426276710046, 14.697349589220607],
              [77.49075735565395, 14.698291899534112],
              [77.49627775592415, 14.699548306960764],
              [77.50407126218624, 14.708028868018914],
              [77.51218949787813, 14.704259770437403],
              [77.52355502784525, 14.704573864387825],
              [77.53459582838559, 14.718079476678668],
              [77.54044095808251, 14.741319735022131],
              [77.54790973491782, 14.749798671407959],
              [77.5410904169376, 14.75231088542489],
              [77.546935546636, 14.762359451399433],
              [77.56284728859004, 14.764557513315921],
              [77.57681065397884, 14.771151565711406],
              [77.58720199566261, 14.77020957047543],
              [77.59467077249792, 14.763615489501674],
              [77.59661914906457, 14.748542553523706],
              [77.61512872643868, 14.744460120336527],
              [77.61675237357707, 14.737865258866563],
              [77.6063610318933, 14.721220196927646],
              [77.61123197330846, 14.70300339011645],
              [77.61123197330846, 14.690125075123746],
              [77.61999966785385, 14.67693186799346],
              [77.64338018664466, 14.677246001223367],
              [77.65409625775675, 14.667193514188398],
              [77.65636936375017, 14.646144624655108],
              [77.65084896347992, 14.638604232137027],
              [77.65701882260521, 14.630749380962499],
              [77.66513705829556, 14.627607361770586],
              [77.67487894112583, 14.627607361770586],
              [77.6787756942561, 14.618495251832357],
              [77.68624447109289, 14.617866816521996],
              [77.69176487136156, 14.64174609386069],
              [77.69598635392168, 14.64017516862502],
              [77.69858418934336, 14.634833938666219],
              [77.71189809587565, 14.634205550122104],
              [77.71417120186902, 14.622580037526205],
              [77.73105713210634, 14.624465671064798],
              [77.73531669949395, 14.617226994457536],
              [77.7399392267384, 14.618063779439768],
              [77.74274739149979, 14.626036335316499],
            ],
          ],
        },
        id: "anantapur-region",
        properties: {},
      },
    ],
  };

  const data: any[] = [
    {
      "name": "I Town Police Station Ananthapuramu",
      "lat": 14.678235317132302,
      "long": 77.60862669834641,
      "description": "Old Town opposite Kanyakaparameswari Temple, Ananthapuramu. Phone: 9440796804. Pincode: 515001."
    },
    {
      "name": "II Town Police Station Ananthapuramu",
      "lat": 14.678253281014642,
      "long": 77.59279242533158,
      "description": "Opposite District Magistrate Court, Ananthapuramu. Phone: 9440796806. Pincode: 515001."
    },
    {
      "name": "III Town Police Station Ananthapuramu",
      "lat": 14.694443045725029,
      "long": 77.59894064622662,
      "description": "HLC Colony, Ananthapuramu. Phone: 9490618679. Pincode: 515001."
    },
    {
      "name": "IV Town Police Station Ananthapuramu",
      "lat": 14.666026021322963,
      "long": 77.58123110416724,
      "description": "Old Town Gandhi Bazar, Ananthapuramu. Phone: 9490188426. Pincode: 515001."
    },
    {
      "name": "Rural Police Station Ananthapuramu",
      "lat": 14.68244205167674,
      "long": 77.59635364411882,
      "description": "Near MRO office Clock Tower, Ananthapuramu. Phone: 9440796811. Pincode: 515001."
    }
  ];

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

  const calculateBounds = () => {
    const bounds = new L.LatLngBounds([]);

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

      <GeoJSON data={anantapurRegion} />
      <GeoJSON data={requiredGEOData} style={getStyle} />
      <SetMapBounds />

      {
        sampleData.map((value) => (
          <Marker
            position={[value.latitude, value.longitude]}
          >
            <Popup>
              <strong>{value.accusedName}</strong> <br />
              <span> <b>Phone Number :</b> {value.mobileNumber}</span> <br />
              {/* <span> <b>aadharNumber :</b> {value.aadharNumber}</span> <br /> */}
              <span> <b>Address :</b> {value.address}</span> <br />
              {/* <span> <b>No. of crimes :</b> {value.noOfCrimes}</span> */}
              {/* <img style={{ height: "150px" }} src={value.imageUrl} alt="" /> */}
            </Popup>
          </Marker>
        ))
      }

      {filteredData.map((station) => (
        <React.Fragment key={station.name}>

          <Marker
            position={[station.lat, station.long] as L.LatLngExpression}
            icon={stationIcon}
          >
            <Popup>
              <strong>{station.name}</strong>
              <p>{station.description}</p>
            </Popup>
          </Marker>
        </React.Fragment>
      ))}
    </MapContainer>
  );
};

export default BeatsSystem;
