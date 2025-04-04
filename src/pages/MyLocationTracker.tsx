// import React, { useEffect, useState } from 'react';
// import { MapContainer, Marker, TileLayer } from 'react-leaflet';


// const MyLocationTracker = () => {

//     const [tracking, setTracking] = useState<boolean>(false);

//     useEffect(() => {
//         if (tracking) {
//             console.log("tracking started............");
//         }
//         else {
//             console.log("tracking stoped............");
//         }
//     }, [tracking])

//     const toggleStete = () => {
//         setTracking(!tracking);
//     }

//     return (
//         <React.Fragment>
//             <MapContainer
//                 key="123"
//                 center={[16.515072, 80.6322176]}
//                 zoom={10}
//                 style={{ width: '100%', height: '700px' }}
//             >
//                 <TileLayer
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     attribution='&copy; OpenStreetMap contributors'
//                 />

//                 <Marker position={[16.515072, 80.6322176]} />

//             </MapContainer>
//             <div>
//                 <button onClick={toggleStete} className='px-4 py-2 bg-gray-400'>{tracking ? 'stop' : 'start'}</button>
//             </div>
//         </React.Fragment>


//     );
// };

// export default MyLocationTracker;

import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer, Polyline } from 'react-leaflet';

// Function to get the current location
export const getCurrentLocation = (): Promise<{ latitude: number, longitude: number }> => {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error("Your browser doesn't support geolocation."));
        } else {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    resolve({ latitude, longitude });
                },
                (error) => {
                    reject(new Error(error.message));
                }
            );
        }
    });
};

const MyLocationTracker = () => {
    const [tracking, setTracking] = useState<boolean>(false);
    const [location, setLocation] = useState<{ latitude: number, longitude: number } | null>(null);
    const [startLocation, setStartLocation] = useState<{ latitude: number, longitude: number } | null>(null);

    useEffect(() => {
        let interval: any = null;

        // Start tracking when tracking is true
        if (tracking) {
            console.log("Tracking started...");

            // Fetch the current location every 5 seconds
            interval = setInterval(() => {
                getCurrentLocation()
                    .then((coords) => {
                        setLocation(coords);
                        console.log(coords);
                        
                        // Set the start location when tracking is first started
                        if (!startLocation) {
                            setStartLocation(coords);
                        }
                    })
                    .catch((error) => {
                        console.error("Error getting location:", error);
                    });
            }, 5000); // 5 seconds interval
        } else {
            console.log("Tracking stopped...");
            // Clear the interval if tracking is stopped
            if (interval) {
                clearInterval(interval);
            }
        }

        // Cleanup on component unmount or when tracking changes
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [tracking, startLocation]);

    const toggleState = () => {
        setTracking((prevState) => !prevState);
    };

    return (
        <React.Fragment>
            <MapContainer
                key="123"
                center={[16.515072, 80.6322176]} // Default center
                zoom={10}
                style={{ width: '100%', height: '700px' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; OpenStreetMap contributors'
                />

                {/* Render the start location marker */}
                {startLocation && (
                    <Marker position={[startLocation.latitude, startLocation.longitude]} />
                )}

                {/* Render the current location marker */}
                {location && (
                    <Marker position={[location.latitude, location.longitude]} />
                )}

                {/* Draw a red line from start location to current location */}
                {startLocation && location && (
                    <Polyline
                        positions={[
                            [startLocation.latitude, startLocation.longitude],
                            [location.latitude, location.longitude],
                        ]}
                        color="red"
                    />
                )}
            </MapContainer>

            <div>
                <button onClick={toggleState} className="px-4 py-2 bg-gray-400">
                    {tracking ? 'Stop' : 'Start'}
                </button>
            </div>
        </React.Fragment>
    );
};

export default MyLocationTracker;

