import React, { Component }from 'react';
import Hog from './Hog';

class HogsContainer extends Component {
  

  render () {
    // console.log('hello')
    return (
      <div className='ui grid container'>
        {this.props.hogs.map((hog, idx) => {
          return <Hog hog={hog} key={idx}/>
        })}
      </div>
    )
  }
}

export default HogsContainer