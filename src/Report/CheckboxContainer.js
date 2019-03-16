import React from 'react';
import PropTypes from 'prop-types';
import checkboxes from './Checkboxes';
import Checkbox from './Checkbox';

class CheckboxContainer extends React.Component {
  state = {
    checkedItems: new Map(),
  }

  handleChange = (e) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }

  render() {
    return (
      <div className="issues">
        {
          checkboxes.map(item => (
              <div className="issue">
                <label key={item.key}>
                  <Checkbox
                    name={item.name}
                    checked={this.state.checkedItems.get(item.name)}
                    onChange={this.handleChange} />
                    {item.label}
                </label>
              </div>
          ))
        }
      </div>
    );
  }
}

export default CheckboxContainer;
