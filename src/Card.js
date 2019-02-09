import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Card extends Component {
  handleExpand = () => {
    this.props.expandCard(this.props.name)
  }
  render() {
    let expandStyle;
    const distFromTop = this.props.increment + 25;
    console.log(distFromTop);
    if (this.props.isExpanded === this.props.name) {
      expandStyle = {
        backgroundColor: 'orange',
        marginBottom: 0,
        borderRadius: 0, 
      }
    } else {
      expandStyle = {
        backgroundColor: 'purple',
        top: {distFromTop},
      }
    }
    if (this.props.content.includes(this.props.type)) {
      return (
        <div className="card" style={expandStyle} onClick={this.handleExpand}>
          <h4>{this.props.name}</h4>
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