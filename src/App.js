import React, { Component } from 'react';
import './App.css';
import data from './data.js';
import List from './List'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: false,
      content: ['book', 'movie', 'game', 'show'],
    };
  }
  toggleBooks = () => {
    if (this.state.content.includes('book')) {
      this.setState({ 
        content: this.state.content.filter(item => item !== 'book') 
      });
    } else {
      this.setState({
        content: this.state.content.concat('book'),
      })
    }
  }

  render() {    
    return (
      <div className="App">
        <div>
          <form>
            <input type="checkbox" onChange={this.toggleBooks} />
            <label>Show Books</label>            
          </form>
        </div>
        {data.map((d, i) => {
          return (
            <List 
              key={i}
              name={d.name} 
              bio={d.bio} 
              date={d.date} 
              standard_year={d.standard_year}
              type={d.type}
              content={this.state.content}
            />
          )
        })}
      </div>
    );
  }
}

export default App;
