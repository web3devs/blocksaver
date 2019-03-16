import React from 'react';
import '../App.css';


class Dropdown extends React.Component {
  state = {
    displayMenu: false,
    selectedIssue: null
  };

  showDropdownMenu = (event) => {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu = () => {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown" >
         <button onClick={this.showDropdownMenu}>Select Issue</button>

          { this.state.displayMenu ? (
          <ul>
           <li>Pothole</li>
           <li>Crosswalk Needed</li>
           <li>Sidewalk Repair Needed</li>
           <li>Bike Lane Needed</li>
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default Dropdown;
