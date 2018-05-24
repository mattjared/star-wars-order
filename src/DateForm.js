import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';

const DateForm = (props) => {
  const styleThing = {
    marginBottom: "50px",
    marginTop: "50px",
  }
  return (
    <div style={styleThing}>
      <form>
        <input type="checkbox" onChange={props.onToggle}/>
        <label>sort by standard year?</label>
      </form>
    </div>
  )
}

export default DateForm;