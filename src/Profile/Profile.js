import React, { Component } from "react";

import AccountDisplay from "./AccountDisplay";
import BadgeField from "./BadgeField";
import CheckinDisplay from "./CheckinDisplay";

import "../App.css";

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
        <BadgeField title="Badges" data={"BADGE for each unique issue"} />
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
