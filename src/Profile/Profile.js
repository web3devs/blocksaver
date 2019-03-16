import React, { Component } from "react";

import CheckinDisplay from "./CheckinDisplay";
import BadgeField from "./BadgeField";

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
        <div>Account</div>
        <div>- Editable address field</div>
        <div>- This value is passed to web3</div>
      </div>
    );
  };
}

export default Profile;
