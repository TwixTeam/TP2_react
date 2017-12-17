import React from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField'

const Choice = (props) => (
  <li>
    <span>{props.name}</span>  <TextField name={props.name} type="number" min="0" value={props.vote} onChange={(e) => props.editVote(props.id, e.target.value)} />
  </li>
);

Choice.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  vote: PropTypes.string
}

export default Choice;