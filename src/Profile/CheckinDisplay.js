import React, { Component } from "react";
import "../App.css";

class CheckinDisplay extends Component {
  render() {
    const { title, data } = this.props;
    return (
      <div className="Display">
        <div>{title}</div>
        <div>{data}</div>
      </div>
    );
  }
}

export default CheckinDisplay;
