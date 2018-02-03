import React, { Component } from 'react';
import './App.css';
import data from './data.js';
import List from './List'

class App extends Component {
  state = {
    test: "hey hey hey",
    showMovies: true,
    showBooks: false
  }
  render() {    
    return (
      <div className="App">
        <div>
          <form>
            <input type="checkbox" />
            <label>Show Books</label>            
          </form>
        </div>
        <List name={this.state.test} />
        {data.map((d, i) => {
          return (
            <div className="push" key={i}>
              <li>{d.name}</li>
              <li>{d.bio}</li>
              <li>{d.date}</li>
              <li>{d.standard_year}</li>
              <li>{d.type}</li>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
