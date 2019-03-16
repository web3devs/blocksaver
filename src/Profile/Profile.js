import React, { Component } from "react";

import AccountDisplay from "./AccountDisplay";
import BadgeField from "./BadgeField";
import CheckinDisplay from "./CheckinDisplay";

import "../App.css";

import badge from './assets/badge.png'
import badge2 from './assets/badge2.png'
import diamond from './assets/diamond.png'
import first from './assets/first.png'
import medal from './assets/medal.png'
import medal2 from './assets/medal2.png'

const badges = [first, badge, badge2, medal, medal2, diamond]

class Profile extends Component {
  render() {
    return (
      <div className="Map">
        {this.renderLifetimeCheckins()}
        {this.renderLastCheckin()}
        {this.renderBadges()}
        {this.renderAccount()}
      </div>
    );
  }

  renderLifetimeCheckins = () => {
    return (
      <div>
        <CheckinDisplay title="Lifetime Checkins" data={"# of checkins"} />
      </div>
    );
  };

  renderLastCheckin = () => {
    return (
      <div>
        <CheckinDisplay title="Last Checkin" data={"Issue @ GPS loc"} />
      </div>
    );
  };

  renderBadges = () => {
    return (
      <div>
        <BadgeField title="Badges" data={badges} />
      </div>
    );
  };

  renderAccount = () => {
    return (
      <div>
        <CheckinDisplay
          title="Account"
          data={"0x123456789abcdef"}
          onClick={() => {
            alert("onClick - Edit Account Address, not implimented yet");
          }}
        />
      </div>
    );
  };
}

export default Profile;
