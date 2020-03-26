import React, { Component } from 'react';

class Card extends Component {
  render() {
		return (
			<div className="card">
					<p><strong>Name:</strong> {this.props.name}</p>
					<p><strong>Date:</strong> {this.props.year}</p>
					<p><strong>Star Wars Date:</strong> {this.props.formatted_year}</p>
			</div>
		);
	}
}

export default Card;
