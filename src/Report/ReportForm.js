import React, { Component } from "react";
import "../App.css";
import CheckboxContainer from "./CheckboxContainer";
import Web3 from "web3";

import ABI from "../ABI/crowdsaleABI";

let tokenAddress = "0x0B723E44CEC6EDB8883F61b9cB1650D341f99604";

class ReportForm extends Component {
  async checkIn(data1, data2) {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const crowdsaleContract = new web3.eth.Contract(ABI, tokenAddress);
    this.setState({ crowdsaleContract });
    let checkin = await crowdsaleContract.methods.checkIn(data1, data2).call();
    this.setState({ checkin });
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      checkin: "",
      lastCheckin: "",
      checkedItems: new Map()
    };
  }

  handleChange = e => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(item, isChecked)
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.checkedItems, window.sessionStorage.location);
    let data1 = this.state.checkedItems;
    let data2 = JSON.stringify(window.sessionStorage.location);
    console.log(data1);
    console.log(data2);
    this.checkIn(data1, data2);
  };

  render() {
    return (
      <form className="ReportForm" onSubmit={this.handleSubmit}>
        <CheckboxContainer
          handleChange={e => this.handleChange(e)}
          checkedItems={this.state.checkedItems}
        />
        <button onClick={this.handleSubmit}>Submit Report</button>
      </form>
    );
  }
}

export default ReportForm;
