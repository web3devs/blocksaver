import React, { Component } from "react";

import AccountDisplay from "./AccountDisplay.js";
import BadgeField from "./BadgeField.js";
import CheckinDisplay from "./CheckinDisplay.js";
import badges from './Badges.js'

import "../App.css";

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <div className="Displays">
          {this.renderLifetimeCheckins()}
          {this.renderLastCheckin()}
          {this.renderBadges()}
          {this.renderAccount()}
        </div>
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
        <AccountDisplay
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
