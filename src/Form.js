import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';

class Form extends Component {
	handleToggle = () => {
		this.props.onToggle(this.props.contentType)
	}
	
	render() {
		const isChecked = this.props.contentShown.includes(this.props.contentType)
		return (
			<div>
				<form>
					<input type="checkbox" onChange={this.handleToggle} checked={isChecked}/>
					<label>see { this.props.contentType }s</label>
				</form>
			</div>
		)
  }
}

export default Form;