import React, { Component } from 'react'
import '../App.css';

//------DEVELOPER VERSION--------//
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

class MapContainer extends Component {
    state = {
      lng: null,
      lat: 33.1524164,
      loaded: false
    }

    componentDidMount() {
      navigator.geolocation.getCurrentPosition(this.success, this.error, options);
    }

    success = (pos) => {
      let crd = pos.coords;
      console.log("Latitude: ", crd.latitude, "Longitute: ", crd.longitude );
      this.setState({
        lng: crd.latitude,
        lat: crd.longitude,
        loaded: true,
      })
      console.log(this.state)
    }

    error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

  //  lat: 33.1524164, lng: -94.01367979999999

   render() {
     const ReportMap = withGoogleMap(props => (
        <GoogleMap
          center = { { lat: 35.1524164, lng: -90.01367979999999 } }
          defaultZoom = { 13 }
        >
          <Marker position={{ lat: 35.1524164, lng: -90.01367979999999 }} />
        </GoogleMap>
     ));

   return(

      <div>
        {this.state.loaded ?
          <ReportMap
            containerElement={ <div style={{ height: `500px`, width: '100%' }} /> }
            mapElement={ <div style={{ height: `100%` }} /> }
          />
          : <p>Loading...</p>
        }

      </div>
   );
   }
};

export default MapContainer
