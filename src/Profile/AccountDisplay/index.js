import React, { Component } from "react";
import "./index.css";

class AccountDisplay extends Component {
  render() {
    const { title, data, ...rest } = this.props;
    return (
      <div className="Display">
        <div>{title}</div>
        <div>{data}</div>
      </div>
    );
  }
}

export default AccountDisplay;
