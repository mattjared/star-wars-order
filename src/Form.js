import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';

class Form extends Component {
	render() {
		return (
			<div>
				<form>
					<input type="checkbox" onChange={() => this.props.toggleContent(this.props.contentType)} />
					<label>see { this.props.contentType }s</label>
				</form>
			</div>
		)
  }
}

export default Form;