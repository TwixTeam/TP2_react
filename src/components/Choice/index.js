import React from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';

import './Choice.css';

const Choice = (props) => (
  <li>
    <div className="List-Label" >{props.name}</div>  

    <TextField 
      style ={{width: '70px'}} 
      inputStyle={{width:'70px'}} 
      className="List-Vote" 
      name={props.name} 
      type="number" 
      min="0" 
      value={props.value} 
      onChange={(e) => props.editVote(props.id, e.target.value)} 
    />

    <div className="List-Percent">{props.percent}%</div>
  </li>
);

Choice.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired
}

export default Choice;