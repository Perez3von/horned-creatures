import React, { Component } from 'react';
import './App.css';
import ImageList from './ImageList.js';
import images from './data/data.js';
import Dropdown from './Dropdown';



class App extends Component {
  state = {
      keyword: 'All',
      horns: 'All'
  };
  options = ['All', 'narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'mouflon', 'addax', 'chameleon', 'lizard', 'dragon' ];
  hornsNum = ['All', '1', '2', '3', '100'];

  handleChange = (event) => {
      this.setState({ keyword: event.target.value });
  };
  handleChangeHorns = (event) => {
    const numOfHorns = event.target.value; 
    this.setState({ horns: numOfHorns });
};
  render() {
      const filteredCreatures = images.filter(
          (item) => this.state.keyword === 'All' || item.keyword=== this.state.keyword
      );
      const filteredHorns = filteredCreatures.filter(
        (horn) => this.state.horns === 'All' || horn.horns=== Number(this.state.horns)
    );
    

      return (
        <>
          <Dropdown options = { this.options} changeEvent = {this.handleChange} />
          <Dropdown options = { this.hornsNum} changeEvent = {this.handleChangeHorns} />
          <ImageList
        
                  arrayC = {filteredHorns}
              />
        </>
      );
  }
}

export default App;