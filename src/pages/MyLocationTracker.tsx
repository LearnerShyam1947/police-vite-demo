
import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer, Polyline } from 'react-leaflet';


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
    const [pos, setPos] = useState<any[]>([]);

    useEffect(() => {
        let interval: any = null;


        if (tracking) {
            console.log("Tracking started...");


            interval = setInterval(() => {
                getCurrentLocation()
                    .then((coords) => {
                        setLocation(coords);
                        
                        if (!startLocation) {
                            setStartLocation(coords);
                        }
                        
                        setPos((prevPos) => [...prevPos, [coords.latitude, coords.longitude]]);
                        
                        if (!startLocation) {
                            setStartLocation(coords);
                        }
                    })
                    .catch((error) => {
                        console.error("Error getting location:", error);
                    });
            }, 5000);
        } else {
            console.log("Tracking stopped...");

            if (interval) {
                clearInterval(interval);
            }
        }


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
                center={[16.515072, 80.6322176]}
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
                            ...pos
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

