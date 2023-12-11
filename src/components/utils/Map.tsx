'use client';
import React, { useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

type MyProps = {
  location: any;
  address: any;
};

const MapComponent = (props: MyProps) => {
  const [center, setCenter] = useState({ lat: -4.043477, lng: 39.668205 });
  const { location, address } = props;
  const ZOOM_LEVEL = 9;
  const mapRef = useRef(null);
  console.log(location);
  return (
    <>
      <div className='container'>
        <div className='container'>
          <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            {location && (
              <Marker position={[location?.lat, location?.lng]}>
                <Popup>{address}</Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default MapComponent;
