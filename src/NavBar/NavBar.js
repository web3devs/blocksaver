import React, { Component } from 'react';

import { withRouter } from 'react-router';

import '../App.css';
import back from './left-arrow.png'
import profile from './user.png'

class NavBar extends Component {
  state = {
    report: true
  }



  render() {
    return (
      <div className="NavBar">
        {this.state.report ?
          <a href="/profile"><img src={profile} alt=""/></a>
          :<a href="/"><img src={back} alt=""/></a>
        }

        Points
      </div>
    );
  }
}

export default NavBar;
