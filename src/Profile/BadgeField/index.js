import React, { Component } from "react";
import "./index.css";

class BadgeField extends Component {

  render() {
    const { title, data, ...rest } = this.props;
    return (
      <div className="Display">
        <div>{title}</div>
        <img src={data[0]} alt="" />
      </div>
    );
  }
}

export default BadgeField;
