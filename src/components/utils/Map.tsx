'use client';
import Leaflet from 'leaflet';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

type MyProps = {
  location: any;
  address: any;
};
export const myIcon = new Leaflet.Icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl:
    'https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/12/marker-icon.png',
  shadowUrl:
    'https://savemaxheadlessdemo.csoft.ca/wp-content/uploads/2023/12/marker-shadow.png',
});
const MapComponent = (props: MyProps) => {
  const { location, address } = props;

  return (
    <>
      <div className='container'>
        <MapContainer
          center={[location.lat, location.lng]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: '400px' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={[location.lat, location.lng]} icon={myIcon}>
            <Popup>{address}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default MapComponent;
