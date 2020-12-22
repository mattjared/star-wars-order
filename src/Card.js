import React, { Component } from 'react';

class Card extends Component {
  render() {
		return (
			<div className="card">
				<span>{this.props.position}</span>
				<h2>{this.props.name}</h2>
				<p><strong>Release Date:</strong> {this.props.year}</p>
				<p><strong>Star Wars Date:</strong> {this.props.formatted_year}</p>
			</div>
		);
	}
}

export default Card;
