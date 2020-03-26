import React, { Component } from 'react';

class Filter extends Component {
  render() {
		return (
			<div className="filter">
					<p>{this.props.name}</p>
			</div>
		);
	}
}

export default Filter;
