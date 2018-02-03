import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class List extends Component {
	render() {
    if (this.props.content.includes(this.props.type)) {
      return (
        <div className="card">
          <li>{this.props.name}</li>
          <li>{this.props.bio}</li>
          <li>{this.props.date}</li>
          <li>{this.props.standard_year}</li>
          <li>{this.props.type}</li>
        </div>
      )
    } else {
      return (
        null
      )
    }
	}
}

List.propTypes = {
	name: PropTypes.any,
}

export default List;