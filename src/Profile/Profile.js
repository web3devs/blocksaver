import React, { Component } from "react";
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
        <div>Lifetime Checkins</div>
        <div>- Query contract for number of checkins</div>
      </div>
    );
  };

  renderLastCheckin = () => {
    return (
      <div>
        <div>Last Checkin</div>
        <div>- Most recent issue reported</div>
        <div>- Most recent GPS recorded</div>
      </div>
    );
  };

  renderBadges = () => {
    return (
      <div>
        <div>Badges</div>
        <div>- Render wrapping flex box</div>
        <div>- Badges are individual components</div>
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
