import React, { Component } from 'react';
import '../App.css';
import CheckboxContainer from './CheckboxContainer'
import { withRouter } from 'react-router-dom'

class ReportForm extends Component {
  state = {
    checkedItems: new Map(),
  }

  handleChange = (e) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));

  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.checkedItems, window.sessionStorage.location)
    this.props.history.push('/profile')
  }

  render() {
    return (
      <form className="ReportForm" onSubmit={this.handleSubmit}>
        <CheckboxContainer handleChange={(e) => this.handleChange(e)} checkedItems={this.state.checkedItems}/>
        <button type="submit">
          Submit Report
        </button>
      </form>
    );
  }
}

export default withRouter(ReportForm);
