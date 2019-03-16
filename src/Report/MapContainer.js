import React, { Component } from 'react'
import '../App.css';

//------DEVELOPER VERSION--------//
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class MapContainer extends Component {

   render() {
     const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
          defaultCenter = { { lat: 40.956795, lng: -73.954298 } }
          defaultZoom = { 13 }
        >
        </GoogleMap>
     ));

   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};

export default MapContainer
