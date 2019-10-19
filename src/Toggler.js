import React, { Component } from 'react';
import classNames from 'classnames';

class Toggler extends Component {
	handleToggle = (e) => {
		this.props.onChange(this.props.contentType)
		this.setState(e.target.value)
	}
	render() {
		const isChecked = this.props.contentShown.includes(this.props.contentType)
		const toggler = classNames({
      'Toggler': true,
      'isChecked': isChecked,
    });
		return (
			<div className={toggler} onClick={this.handleToggle} onChange={this.handleToggle} id={this.props.contentType}>
				<span>{this.props.contentType}</span>
			</div>
		)
  }
}

export default Toggler;
