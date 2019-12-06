import React, { Component } from 'react';
import {data, content} from './data.js';
import Card from './Card'
import Toggler from './Toggler'
import { sortBy } from 'underscore';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleContent = this.toggleContent.bind(this);
    this.toggleOrder = this.toggleOrder.bind(this);
    this.updateData = this.updateData.bind(this);
    this.state = {
      content: ['books', 'movies', 'series'],
      orderByRelease: true,
			data: data,
			shownData: sortBy(data, 'date')
    };
	}
	updateData = () => {
		const contentToLoop = this.state.content;
		const newArray = [];
		console.log(contentToLoop);
		this.state.data.filter(function(e) {
			if (contentToLoop.includes(e.type)) {
				newArray.push(e);
			}
		});

		this.setState({
			shownData: newArray
		});
	}
	toggleContent = (e) => {
		if (this.state.content.indexOf(e) !== -1) {
			let remove = this.state.content.indexOf(e);
			this.setState({
				content: this.state.content.filter((_, i) => i !== remove)
			},
			() => {
					this.updateData(e);
				}
			);
		} else {
			this.setState({
				content: [...this.state.content, e],
			}, () => {
					this.updateData(e);
			});
		}
	}
  toggleOrder = () => {
		this.setState(() => ({
			orderByRelease: !this.state.orderByRelease
		}));
		if (this.state.orderByRelease) {
			this.setState({
				shownData: sortBy(this.state.shownData, 'date')
			});
		} else {
			this.setState({
				shownData: sortBy(this.state.shownData, 'formatted_standard_year')
			});
		}
	}
  render() {
		const orderType = this.state.orderByRelease ? "Order By Star Wars Time" : "Order By Release Date";
    return (
      <div className="App">
				<div className="App-wrap">
					<div className="HeadlineWrap">
						<h1>Star Wars <span>Order</span></h1>
						<p>The order of things in the Star Wars universe</p>
					</div>
					<div className="TogglerWrap">
						{content.map((c, i) => {
							return (
								<Toggler
									onChange={this.toggleContent}
									contentType={c}
									key={i}
									contentShown={this.state.content}
								/>
							)
						})}
					</div>
					<button onClick={this.toggleOrder}>{orderType}</button>
					<div className="card-wrap">
						{this.state.shownData.map((d, i) => {
							return (
								<Card
									key={i}
									name={d.name}
									bio={d.bio}
									date={d.date}
									standard_year={d.standard_year}
									formatted_standard_year={d.formatted_standard_year}
									type={d.type}
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
