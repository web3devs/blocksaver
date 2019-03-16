import React, { Component } from 'react';

import MapContainer from './MapContainer'

import '../App.css';

class Report extends Component {
  render() {
    return (
      <div className="Map">
        <MapContainer
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <button>Report</button>
      </div>
    );
  }
}

export default Report;
