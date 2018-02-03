import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class List extends Component {
	
	render() {
		return (
			<div>
				<h1>{this.props.name}</h1>
			</div>
		)
	}
}

List.propTypes = {
	name: PropTypes.string,
}

export default List;