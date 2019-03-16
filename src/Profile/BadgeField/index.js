import React, { Component } from "react";
import "./index.css";

class BadgeField extends Component {

    showBadges = (data) => {
      // query to see how many tokens user has
      data.map(badge => (
        <img className="Badge" src={badge} alt="" />
      ))
    }

    render() {
      const { title, data, ...rest } = this.props;

      return (
        <div className="BadgeDisplay">
          <div className="BadgeTitle">{title}</div>
          {this.showBadges(data)}
        </div>
      );
    }
  }

export default BadgeField;
