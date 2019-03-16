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
    return <div>Lifetime Checkins</div>;
  };

  renderLastCheckin = () => {
    return <div>Last Checkin</div>;
  };

  renderBadges = () => {
    return <div>Badges</div>;
  };

  renderAccount = () => {
    return <div>Account</div>;
  };
}

export default Profile;
