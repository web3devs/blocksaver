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
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.success, this.error, options);
    } else {
      alert("Geolocation not supported")
    }
  }

  success = pos => {
    let crd = pos.coords;
    this.setState({
      lng: crd.longitude,
      lat: crd.latitude,
      loaded: true
    });
    let location = {}
    location["latitude"] = this.state.lat
    location["longitude"] = this.state.lng
    window.sessionStorage.setItem("location", JSON.stringify(location))
  };

  error = err => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  render() {
    return (
      <div className="mapMargin">
        {this.state.loaded ? (
          <ReportMap
            center={{ lat: this.state.lat, lng: this.state.lng }}
            containerElement={
              <div className="mapSize" />
            }
            mapElement={<div className="mapElement"/>}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default MapContainer;
