import React, { Component } from 'react';
import './App.css';
import ImageItem from './ImageItem.js';
import ImageList from './ImageList.js';
import images from './data/data.js';
console.log(images);


class App extends Component {
  state = {
      keyword: 'All',
  };
  handleChange = (event) => {
      this.setState({ keyword: event.target.value });
  };
  render() {
      const filteredCreatures = images.filter(
          (item) => this.state.keyword === 'All' || item.keyword=== this.state.keyword
      );

      return (
          <div className="App">
              <h1>Horned Creatures</h1>
              <select onChange={this.handleChange}>
                  <option value="All">All</option>
                  <option value="rhino">rhino</option>
                  <option value="lizard">lizard</option>
                  <option value="dragon">dragon</option>
                  <option value="chameleon">chameleon</option>
                  <option value="mouflon">mouflon</option>
                  <option value="addax">addax</option>
                  <option value="markhor">markhor</option>
                  <option value="unicorn">unicorn</option>
                  <option value="triceratops">triceratops</option>
                  <option value="unilego">unilego</option>
              </select>
              <ImageList
                  
                  images={filteredCreatures}
              />
          </div>
      );
  }
}

export default App;