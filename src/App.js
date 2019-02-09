import React, { Component } from 'react';
import './App.css';
import {data, content} from './data.js';
import Card from './Card'
import Form from './Form'

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleContent = this.toggleContent.bind(this);
    this.expandCard = this.expandCard.bind(this);
    this.state = {
      content: ['movie'],
      release_order: false,
      activeCard: '',
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
  toggleOrder = () => {
    if (this.state.release_order !== true) {
      for (let i = 0; i < data.length; i++) {
          
      }
    }
  }
  expandCard = (e) => {
    this.setState({
      activeCard: e,
    })
  }
  render() {    
    return (
      <div className="App">
        <div className="form-wrap">
          {content.map((c, i) => {
            return (
              <Form 
                onToggle={this.toggleContent} 
                contentType={c} 
                key={i} 
                contentShown={this.state.content}
              />
            )
          })}
        </div>
        <div className="card-wrap">
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
                expandCard={this.expandCard}
                isExpanded={this.state.activeCard}
                increment={i}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;