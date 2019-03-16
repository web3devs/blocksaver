import React, { Component } from 'react'
import '../App.css';

import { GoogleMap, Marker } from 'react-google-maps'

class MapContainer extends Component {

  render() {
    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      >
        {this.props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
      </GoogleMap>
      )
  }
}


export default MapContainer
