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
      orderByRelease: !this.state.orderByRelease,
		});
  }
  render() {
    const rawData = this.state.data;
		let orderType;
		let sortedData;
    if (this.state.orderByRelease) {
      sortedData = sortBy(rawData, 'date');
			orderType = "Order By Star Wars Time";
			console.log(sortedData);
    } else {
      sortedData = sortBy(rawData, Number('formatted_standard_year'));
			orderType = "Order By Release Date";
			console.log(sortedData);
    }
    return (
      <div className="App">
				<div className="App-wrap">
					<div className="HeadlineWrap">
						<h1>Star Wars <span>Order</span></h1>
						<p>The order of things in the Star Wars universe</p>
					</div>
					<div className="FormWrap">
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
					<button onClick={this.toggleOrder}>{orderType}</button>
					<div className="card-wrap">
						{sortedData.map((d, i) => {
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
			</div>
    );
  }
}

export default App;
