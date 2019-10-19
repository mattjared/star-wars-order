import React, { Component } from 'react';
import classNames from 'classnames';

class Form extends Component {
	handleToggle = () => {
		this.props.onToggle(this.props.contentType)
	}
	render() {
		const isChecked = this.props.contentShown.includes(this.props.contentType)
		const contentCheckbox = classNames({
      'content-checkbox': true,
      'isChecked': isChecked,
    });
		return (
			<div className={contentCheckbox}>
				<input type="checkbox" onChange={this.handleToggle} checked=
				{isChecked} id={this.props.contentType}/>
				<label htmlFor={this.props.contentType}>Show {this.props.contentType}</label>
			</div>
		)
  }
}

export default Form;
