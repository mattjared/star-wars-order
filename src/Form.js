import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';

class Form extends Component {
	handleToggle = () => {
		this.props.onToggle(this.props.contentType)
	}
	render() {
		console.log(this.props.checkedLogic)
		return (
			<div>
				<form>
					<input type="checkbox" onChange={this.handleToggle} />
					<label>see { this.props.contentType }s</label>
				</form>
			</div>
		)
  }
}

export default Form;