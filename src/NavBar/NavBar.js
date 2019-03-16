import React, { Component } from 'react';
import '../App.css';
import back from './left-arrow.png'
import profile from './user.png'

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        NavBar
        <img src={back} alt=""/>
        <img src={profile} alt=""/>
      </div>
    );
  }
}

export default NavBar;
