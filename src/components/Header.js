import React, { Component } from 'react';

class Header extends Component {
  
  handleCheckboxChange = () => {
    this.props.check();
  }

  handleOptionChange = (event) => {
    if (event.target.value === 'sort by name') {
      this.props.sortByName();
    } else if (event.target.value === 'sort by weight') {
      this.props.sortByWeight();
    }
 
  }

  render() {
    // console.log('hello')
    return (
      <div>
        <input checked = {this.props.checked} type='checkbox' onChange={this.handleCheckboxChange}/>
        <span>only show greased?</span><br/>
        <select onChange={this.handleOptionChange}>
          <option name="name">sort by name</option>
          <option name="weight">sort by weight</option>
        </select>
      </div>
    )
  }
}

export default Header