import React, { Component } from "react";
import Web3 from "web3";

import { Link, withRouter } from "react-router-dom";

import "../App.css";
import back from "./left-arrow.png";
import profile from "./user.png";
import ABI from '../ABI/ABI'

let tokenAddress = "0xF1D4d34D7A16D5b1F9dC19E9ea9675AB0B838661"
let walletAddress = window.web3.eth.defaultAccount
let contract = window.web3.eth.contract(ABI).at(tokenAddress)
let blockNumber = window.web3.eth.getBlockNumber
let balance, error;

class NavBar extends Component {

  callback = (error, balance) => {
    if(!error) {
      console.log(JSON.stringify(balance))
    } else {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="NavBar">
        {this.props.history.location.pathname === "/" ? (
          <Link to="/profile">
            <img src={profile} alt="" />
          </Link>
        ) : (
          <Link to="/">
            <img src={back} alt="" />
          </Link>
        )}
        <h1>
        {contract.balanceOf(walletAddress, () => this.callback())}
        Points</h1>
      </div>
    );
  }
}

export default withRouter(NavBar);
