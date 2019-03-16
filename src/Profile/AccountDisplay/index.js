import React, { Component } from "react";
import localStorage from "local-storage";
import "./index.css";

class AccountDisplay extends Component {
  state = {
    edit: false,
    address: "text"
  };

  componentDidMount() {
    localStorage("address")
      ? this.setState({ address: localStorage("address") })
      : this.setState({ address: "0xohhh" });
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const { title, data, ...rest } = this.props;
    return (
      <div className="Display">
        <div>{title}</div>
        <input
          id="address"
          value={this.state.address}
          onChange={this.state.edit === true ? e => this.onChange(e) : null}
        />
        <button
          onClick={() => {
            if (this.state.edit === true) {
              localStorage("address", this.state.address);
              this.setState({ address: localStorage("address") });
            }
            this.setState({ edit: !this.state.edit });
          }}
        >
          {!this.state.edit ? "edit" : "save"}
        </button>
      </div>
    );
  }
}

export default AccountDisplay;
