import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Card extends Component {
	render() {
    if (this.props.content.includes(this.props.type)) {
      return (
        <div className="card">
          <h3>{this.props.name}</h3>
          <span>{this.props.bio} &nbsp;</span>
          <span>{this.props.date} &nbsp;</span>
          <span>{this.props.standard_year} &nbsp;</span>
          <span>{this.props.type} &nbsp;</span>
        </div>
      )
    } else {
      return (
        null
      )
    }
	}
}

Card.propTypes = {
	name: PropTypes.any,
}

export default Card;