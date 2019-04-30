import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => (
    <MapViewDirections
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey='AIzaSyAdN7wkTjl6hE5ey6CxOiL433x9Dt7LCME'
        strokeWidth={3}
        strokeColor='#222'
    />
);

export default Directions;
