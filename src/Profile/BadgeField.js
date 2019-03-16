import React, { Component } from "react";
import "../App.css";

class BadgeField extends Component {

    showBadges = (data) => {
      // query to see how many tokens user has
      return data.map(badge => (
        <img className="Badge" src={badge} alt="" />
      ))
    }

    render() {
      const { title, data, ...rest } = this.props;

      return (
        <div className="Display">
          <div className="BadgeTitle">{title}</div>
          {this.showBadges(data)}
        </div>
      );
    }
  }

export default BadgeField;
