import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar'
import Map from './Report/Map'

class App extends Component {


  render() {
    return (
      <div className="App">
        <NavBar />
        <Map />
      </div>
    );
  }
}

export default App;
