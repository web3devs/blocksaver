import React, { Component } from "react";
import Web3 from "web3";

import { Link, withRouter } from "react-router-dom";

import "../App.css";
import back from "./left-arrow.png";
import profile from "./user.png";

import ABI from "../ABI/tokenAbi";

let tokenAddress = "0x9aA9D3FefFE93D4a9e51b567B9ed5412dE75a59D";
let walletAddress = window.web3.eth.defaultAccount;

let contract = window.web3.eth.contract(ABI).at(tokenAddress);

class NavBar extends Component {

  state = {
    tokens: null,
    account: "",
    balance: 0
  }

  componentWillMount() {
    this.loadBlockchainData();
  }

  componentDidMount(){
    this.setTokens()
  }

  setTokens = () => {
    if (window.sessionStorage.tokens) {
      this.setState({tokens: window.sessionStorage.tokens})
    } else {
      this.setState({tokens: 0})
      window.sessionStorage.setItem("tokens", 0)
    }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const tokenContract = new web3.eth.Contract(ABI, tokenAddress);
    this.setState({ tokenContract });
    let balance = await tokenContract.methods
      .balanceOf(this.state.account)
      .call();
    this.setState({ balance });
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
        <h2>BlockSaver</h2>
        <h2>{window.sessionStorage.tokens ?
        window.sessionStorage.tokens
        : "Loading..."} Tokens</h2>
        <h2>${this.state.balance / 1000000000000000000} Balance</h2>

      </div>
    );
  }
}

export default withRouter(NavBar);
