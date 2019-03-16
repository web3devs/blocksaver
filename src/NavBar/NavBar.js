import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';

import '../App.css';
import back from './left-arrow.png'
import profile from './user.png'

class NavBar extends Component {

  render() {
    console.log(this.props.history.location.pathname)
    return (
      <div className="NavBar">

        {(this.props.history.location.pathname === "/") ?

          <Link to="/profile"><img src={profile} alt=""/></Link>
          :
          <Link to="/"><img src={back} alt=""/></Link>

        }

        Points
      </div>
    );
  }
}

export default withRouter(NavBar);
