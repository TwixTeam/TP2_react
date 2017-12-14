import React from 'react';

import TextField from 'material-ui/TextField'

const Choice = (props) => (
  <li>
    {props.name}  <TextField id={props.id} name={props.name} type="number" min="0" value={props.vote}/>
  </li>
);

export default Choice;