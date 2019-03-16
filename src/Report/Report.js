import React, { Component } from 'react';

import MapContainer from './MapContainer'

import '../App.css';

class Report extends Component {
  render() {
    return (
      <div className="Map">
        <MapContainer isMarkerShown />
        <button>Report</button>
      </div>
    );
  }
}

export default Report;
