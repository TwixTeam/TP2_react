import React, { Component } from 'react'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class AddChoiceForm extends Component {
  
  constructor() {

    super();

    this.state = {
      newChoiceName: ''
    };
  }

  render() {
    return (
      <div>
        New Choice : <TextField id={"1"} name={"newChoice"} type="text" value={this.state.newChoiceName} onChange={this.changeName} required/>
        <RaisedButton primary={true} label={"Add"} onClick={this.addChoice} />
      </div>
    )
  }

  changeName = (event) => {
    this.setState({newChoiceName: event.target.value.toUpperCase()});
  }

  addChoice = () => {
    this.props.addNewChoice(this.state.newChoiceName);
    this.setState({newChoiceName: ''});
  }
}
