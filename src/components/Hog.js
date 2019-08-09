import React, { Component } from 'react';

class Hog extends Component {
  constructor() {
    super();
    this.state={
      clicked: false
    }
  }

  getUrl = () => {
    const name = this.props.hog.name.replace(/ /g, '_').split(' ').join('_').toLowerCase()
    // console.log(`../hog-imgs/${name}.jpg`)
    let img = require(`../hog-imgs/${name}.jpg`)
    return img
  }

  handleClick = () => {
    this.setState({
      clicked: this.state.clicked? false : true
    })
  }

  handleHideClick = () => {

  }

  render() {
    return (
      <div className='ui eight wide column'>
        <h4>{this.props.hog.name}</h4>
        <img src={this.getUrl()} /><br/>
        <button onClick={this.handleClick} >Details</button>
        <button onClick={this.handleHideClick}>hide</button>
        {this.state.clicked ? 
        (<div>
        <h4>specialty: {this.props.hog.specialty}</h4>
        <h4>greased: {this.props.hog.greased}</h4>
        <h4>weight: {this.props.hog.weight}</h4>
        <h4>highest medal achieved: {this.props.hog['highest medal achieved']}</h4>
        </div>) : null}
      </div>
    )
  }
}

export default Hog