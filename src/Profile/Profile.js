import React, { Component } from "react";

import AccountDisplay from "./AccountDisplay.js";
import BadgeField from "./BadgeField.js";
import CheckinDisplay from "./CheckinDisplay.js";
import badges from './Badges.js'
import Web3 from "web3";
import ABI from "../ABI/tokenAbi";

import "../App.css";

let crowdSaleAddress = "0x0B723E44CEC6EDB8883F61b9cB1650D341f99604"

class Profile extends Component {

  state = {
    account: "",
    balance: 0,
    events: null
  }

  componentWillMount() {
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const tokenContract = new web3.eth.Contract(ABI, crowdSaleAddress);
    this.setState({ tokenContract });
    let events = tokenContract.givenProvider._eventsCount
    this.setState({events: events})
    debugger
  }

  render() {
    return (
      <div className="Profile">
        <div className="Displays">
          {this.renderAccount()}
          {this.renderBadges()}
          {this.renderLastCheckin()}
          {this.renderLifetimeCheckins()}
        </div>
      </div>
    );
  }

  renderLifetimeCheckins = () => {
    return (
      <div>
        <CheckinDisplay title="Lifetime Checkins" data={this.state.events} />
      </div>
    );
  };

  renderLastCheckin = () => {
    return (
      <div>
        <CheckinDisplay title="Last Checkin" data={window.sessionStorage.time ? window.sessionStorage.time : null} />
      </div>
    );
  };

  renderBadges = () => {
    return (
      <div>
        <BadgeField title="Badges" data={badges} />
      </div>
    );
  };

  renderAccount = () => {
    return (
      <div>
        <AccountDisplay
          title="Account"
          data={"0x123456789abcdef"}
          onClick={() => {
            alert("onClick - Edit Account Address, not implimented yet");
          }}
        />
      </div>
    );
  };
}

export default Profile;
