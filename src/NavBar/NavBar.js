import React, { Component } from "react";
import Web3 from "web3";

import { Link, withRouter } from "react-router-dom";

import "../App.css";
import back from "./left-arrow.png";
import profile from "./user.png";
import ABI from "../ABI/ABI";

let tokenAddress = "0xf1d4d34d7a16d5b1f9dc19e9ea9675ab0b838661";
let walletAddress = window.web3.eth.defaultAccount;

let contract = window.web3.eth.contract(ABI).at(tokenAddress);
// let value = Web3.eth.toBigNumber(4042625);
// let blockNumber = window.web3.getBlockNumber();

class NavBar extends Component {
  componentDidMount() {
    console.log(contract);
    // console.log(value);
    // console.log(blockNumber);
    console.log(
      contract.balanceOf(walletAddress, 4042625, err => {
        alert(err);
      })
    );

    // @dev: this returns INVALID NUMBER OF ARGUMENTS TO SOLIDITY FUNCTION
    // console.log(contract.balanceOf(walletAddress));
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

        <h1>${`test`}</h1>
      </div>
    );
  }
}

export default withRouter(NavBar);
