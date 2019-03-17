import React, { Component } from 'react';
import checkboxes from './Checkboxes';
import Checkbox from './Checkbox';

class CheckboxContainer extends Component {

  render() {
    return (
      <div className="Issues">
        {
          checkboxes.map((item, i)=> (
              <div key={i} className="Issue">
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
