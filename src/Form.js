import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';

class Form extends Component {
	handleToggle = () => {
		this.props.onToggle(this.props.contentType)
	}

	render() {
		const isChecked = this.props.contentShown.includes(this.props.contentType)
		return (
			<div class="content-checkbox">
					<input type="checkbox" onChange={this.handleToggle} checked=
					{isChecked} id={this.props.contentType}/>
					<label for={this.props.contentType}>Show {this.props.contentType}s</label>
			</div>
		)
  }
}

export default Form;
