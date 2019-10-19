import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Card extends Component {
  render() {
		return (
			<div>
				<div className="card">
						<h3>{this.props.name}</h3>
						<p>Released: {this.props.date}</p>
						<p>{this.props.standard_year}</p>
						<p>{this.props.type} &nbsp;</p>
				</div>
			</div>
		);
	}
}

Card.propTypes = {
	name: PropTypes.any,
}

export default Card;
