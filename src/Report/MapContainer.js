import React, { Component } from "react";
import "../App.css";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

const ReportMap = withGoogleMap(props => {
  return (
    <GoogleMap
      center={{ lat: props.center.lat, lng: props.center.lng }}
      zoom={13}
    >
      <Marker position={{ lat: props.center.lat, lng: props.center.lng }} />
    </GoogleMap>
  );
});

class MapContainer extends Component {
  state = {
    lng: null,
    lat: null,
    loaded: false
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.success, this.error, options);
  }

  success = pos => {
    let crd = pos.coords;
    this.setState({
      lng: crd.longitude,
      lat: crd.latitude,
      loaded: true
    });
  };

  error = err => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  //  lat: 35.1524164, lng: -90.01367979999999

  render() {
    return (
      <div className="mapMargin">
        {this.state.loaded ? (
          <ReportMap
            center={{ lat: this.state.lat, lng: this.state.lng }}
            containerElement={
              <div style={{ height: `500px`, width: "100%" }} />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default MapContainer;
