import React, { Component } from "react";
import "./index.css";

class BadgeField extends Component {

  render() {
    const { title, data, ...rest } = this.props;

    return (
      <div className="BadgeDisplay">
        <div className="BadgeTitle">{title}</div>
        {data.map(badge => (
          <img className="Badge" src={badge} alt="" />
        ))}
      </div>
    );
  }
}

export default BadgeField;
