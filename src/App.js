import React, { Component } from 'react';
import './App.css';
import data from './data.js';

class App extends Component {
  render() {    
    return (
      <div className="App">
          {data.map((d, i) => {
            return (
              <div className="push">
                <li>{d.name}</li>
                <li>{d.bio}</li>
                <li>{d.date}</li>
              </div>
            )
          })}
      </div>
    );
  }
}

export default App;
