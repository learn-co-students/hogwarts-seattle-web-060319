import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsContainer from './HogsContainer';
import Header from './Header'

class App extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      sortName: false,
      sortWeight: false
    }
  }
  
  changeCheckState = () => {
    this.setState({
      checked: !this.state.checked
    })
  }

  displayHogs = () => {
    if(this.state.checked) {
      return hogs.filter(hog => {
        return hog.greased === false
      }) 
    } else if (this.state.sortName) {
      return this.sortByName();
    } else if (this.state.sortWeight) {
      return this.sortByWeight();
    }
    return hogs 
  }

  compare = (a, b) => {
    let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
    if (nameA < nameB) return -1
    if (nameA > nameB) return 1
    return 0 
  }

  compare1 = (a, b) => {
    let weightA = a.weight, weightB = b.weight
    if (weightA < weightB) return -1
    if (weightA > weightB) return 1
    return 0
  }

  sortByName = () => {
    this.setState({
      sortName: !this.state.sortName
    })
    // console.log(hogs.sort(this.compare))
    return hogs.sort(this.compare)
  }

  sortByWeight = () => {
    this.setState({
      sortWeight: !this.state.sortWeight
    })
    return hogs.sort(this.compare1)
  }

  render() {  
    
    return (
      <div className="App">
          < Nav />
          <Header check={this.changeCheckState} checked={this.state.checked} sortByName={this.sortByName} sortByWeight={this.sortByWeight}/>
          <HogsContainer hogs={this.displayHogs()} />
      </div>
    )
  }
}

export default App;
