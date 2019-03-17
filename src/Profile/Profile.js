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
          {this.renderAccount()}
          {this.renderBadges()}
          {this.renderLastCheckin()}
          {this.renderLifetimeCheckins()}
        </div>
      </div>
    );
  }

  renderLifetimeCheckins = () => {
    return (
      <div>
        <CheckinDisplay title="Lifetime Checkins" data={window.sessionStorage.tokens} />
      </div>
    );
  };

  renderLastCheckin = () => {
    return (
      <div>
        <CheckinDisplay title="Last Checkin" data={window.sessionStorage.time ? window.sessionStorage.time : null} />
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
