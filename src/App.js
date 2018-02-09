import React, { Component } from 'react';
import './App.css';
import {data, content} from './data.js';
import Card from './Card'
import Form from './Form'

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleContent = this.toggleContent.bind(this);
    this.state = {
      content: ['movie'],
    };
  }
  toggleContent = (e) => {
    if (this.state.content.includes(e)) {
      this.setState({ 
        content: this.state.content.filter(item => item !== e),
      });
    } else {
      this.setState({
        content: this.state.content.concat(e),
      })
    }
  }
  checkChecked = () => {
    if (this.state.content === content) {

    }
  }

  render() {    
    return (
      <div className="App">
        {content.map((c, i) => {
          return (
            <Form onToggle={this.toggleContent} contentType={c} key={i} />
          )
        })}
        {data.map((d, i) => {
          return (
            <Card 
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