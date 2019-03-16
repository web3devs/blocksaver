import React, { Component } from 'react';
import '../App.css';
import Dropdown from './Dropdown'

class ReportForm extends Component {
  state = {
      value: 'Enter the pedestrian safety issue.'
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Dropdown />
        <button onClick={this.handleSubmit}>Submit Report
        </button>
      </form>
    );
  }
}

export default ReportForm;
