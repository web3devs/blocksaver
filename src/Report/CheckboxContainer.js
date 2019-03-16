import React from 'react';
import PropTypes from 'prop-types';
import checkboxes from './Checkboxes';
import Checkbox from './Checkbox';

class CheckboxContainer extends React.Component {

  render() {
    return (
      <div className="issues">
        {
          checkboxes.map(item => (
              <div className="issue">
                <label key={item.key}>
                  <Checkbox
                    name={item.name}
                    checked={this.props.checkedItems.get(item.name)}
                    onChange={(e) => this.props.handleChange(e)} />
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
