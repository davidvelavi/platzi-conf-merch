import React from 'react'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import config from '../config'

const Maps = ({location}) => {
  const mapStyle = {
    height: '50vh',
    width:'100%'
  }
  const defaulCenter = {
    lat: location.lat,
    lng: location.lng
  }
  return (
    <div>
      <LoadScript googleMapsApiKey={config.googleMapsApiKey}>
        <GoogleMap
          mapContainerStyle={mapStyle}
          zoom={9}
          center={defaulCenter}
        >
          <Marker position={defaulCenter} />
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default Maps
