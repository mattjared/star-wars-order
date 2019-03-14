import React, { Component } from 'react';
import {data, content} from './data.js';
import Card from './Card'
import Form from './Form'
import { sortBy } from 'underscore';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleContent = this.toggleContent.bind(this);
    this.toggleYearType = this.toggleYearType.bind(this);
    this.state = {
      content: ['movie'],
      release_order: false,
      activeCard: '',
      yearType: true,
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
  toggleYearType = (e) => {
    this.setState({
        yearType: !this.state.yearType,
    });
    this.toggleYearData();
  }
  toggleYearData = () => {
    const sorter = this.state.yearType ? 'raw_standard_year' : 'date';
    this.state.data.sort((dataObj1, dataObj2) => {
      return dataObj1[sorter] - dataObj2[sorter]
    })
  }
  componentDidMount() {
    this.toggleYearData();
  }
  render() {    
    const rawData = data;
    const sortedData = sortBy(rawData, 'date');
    console.log(rawData, sortedData);
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