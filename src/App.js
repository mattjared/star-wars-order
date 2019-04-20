import React, { Component } from 'react';
import {data, content} from './data.js';
import Card from './Card'
import Form from './Form'
import { sortBy } from 'underscore';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleContent = this.toggleContent.bind(this);
    this.toggleOrder = this.toggleOrder.bind(this);
    this.state = {
      content: ['movie'],
      orderByRelease: true,
      data: data,
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
  toggleOrder = (e) => {
    this.setState({
      yearType: !this.state.yearType,
    });
  }
  componentDidMount() {
    // this.toggleYearData();
  }
  render() {    
    const rawData = this.state.data;
    let orderType;
    if (this.state.orderByRelease) {
      const sortedData = sortBy(rawData, 'date');
      orderType = "Order By Release Date"
    } else {
      const sortedData = sortBy(rawData, 'date');
      orderType = "Order By Star Wars Time"
    }
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
            <button onClick={this.toggleOrder}>{orderType}</button>
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