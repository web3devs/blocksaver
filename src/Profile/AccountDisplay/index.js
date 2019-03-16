import React, { Component } from "react";
import "./index.css";

class AccountDisplay extends Component {
  state = {
    edit: false
  };
  render() {
    const { title, data, ...rest } = this.props;
    return (
      <div className="Display">
        <div>{title}</div>
        <div>{data}</div>
        <button
          onClick={() => {
            this.setState({ edit: !this.state.edit });
          }}
        >
          {this.state.edit ? "edit" : "save"}
        </button>
      </div>
    );
  }
}

export default AccountDisplay;
