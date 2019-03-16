import React, { Component } from 'react';
import '../App.css';
import CheckboxContainer from './CheckboxContainer'

class ReportForm extends Component {
  state = {
    location: {},
    issue: null
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <form className="ReportForm" onSubmit={this.handleSubmit}>
        <CheckboxContainer />
        <button onClick={this.handleSubmit}>Submit Report
        </button>
      </form>
    );
  }
}

export default ReportForm;
