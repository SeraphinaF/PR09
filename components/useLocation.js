// useLocation.js
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export const useLocation = () => {
    const [location, setLocation] = useState(null);
    const [latitude, setLatitude] = useState(51.921399);
    const [longitude, setLongitude] = useState(4.508377);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let userLocation = await Location.getCurrentPositionAsync({});
            setLatitude(userLocation.coords.latitude);
            setLongitude(userLocation.coords.longitude);
            setLocation(userLocation);
            
        })();
    }, []);

    return { location, latitude, longitude, errorMsg };
};
